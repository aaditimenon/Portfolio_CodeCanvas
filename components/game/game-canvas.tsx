"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import {
  renderCafe,
  getInteractiveZones,
  PIXEL,
} from "./pixel-cafe-renderer"
import type { InteractiveZone } from "./pixel-cafe-renderer"

interface GameCanvasProps {
  onInteract: (type: InteractiveZone["type"]) => void
  catInteractionTime: number
}

export default function GameCanvas({ onInteract, catInteractionTime }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)
  const keysRef = useRef<Set<string>>(new Set())
  const playerRef = useRef({ x: 80, y: 90 })
  const catIntRef = useRef(catInteractionTime)
  const [nearZone, setNearZone] = useState<InteractiveZone | null>(null)
  const [canvasSize, setCanvasSize] = useState({ w: 960, h: 420 })

  // Keep ref in sync with prop
  useEffect(() => {
    catIntRef.current = catInteractionTime
  }, [catInteractionTime])

  // Handle resize
  useEffect(() => {
    function handleResize() {
      setCanvasSize({ w: window.innerWidth, h: window.innerHeight })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    console.log("[v0] Game canvas initialized", canvasSize.w, canvasSize.h)

    const pw = Math.floor(canvasSize.w / PIXEL)
    const ph = Math.floor(canvasSize.h / PIXEL)
    const zones = getInteractiveZones(canvasSize.w)

    const minX = 3
    const maxX = pw - 8
    const minY = 72
    const maxY = Math.max(ph - 14, 150) // Allow walking further down even on smaller screens

    let running = true

    function gameLoop(time: number) {
      if (!running) return
      const player = playerRef.current
      const keys = keysRef.current
      const speed = 0.8

      if (keys.has("arrowleft") || keys.has("a")) {
        player.x = Math.max(minX, player.x - speed)
      }
      if (keys.has("arrowright") || keys.has("d")) {
        player.x = Math.min(maxX, player.x + speed)
      }
      if (keys.has("arrowup") || keys.has("w")) {
        player.y = Math.max(minY, player.y - speed)
      }
      if (keys.has("arrowdown") || keys.has("s")) {
        player.y = Math.min(maxY, player.y + speed)
      }

      let closestZone: InteractiveZone | null = null
      let closestDist = Infinity
      for (const zone of zones) {
        const zoneCX = zone.x + zone.width / 2
        const zoneCY = zone.y + zone.height / 2
        const dx = player.x - zoneCX
        const dy = player.y - zoneCY
        const dist = Math.sqrt(dx * dx + dy * dy)
        // Slightly larger interaction distance for easier access
        if (dist < 30 && dist < closestDist) {
          closestDist = dist
          closestZone = zone
        }
      }
      setNearZone(closestZone)

      renderCafe(
        ctx,
        canvasSize.w,
        canvasSize.h,
        time,
        Math.round(player.x),
        Math.round(player.y),
        closestZone,
        catIntRef.current
      )

      animFrameRef.current = requestAnimationFrame(gameLoop)
    }

    animFrameRef.current = requestAnimationFrame(gameLoop)

    return () => {
      running = false
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [canvasSize])

  // Keyboard input
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const key = e.key.toLowerCase()
      keysRef.current.add(key)

      if (key === "e" && nearZone) {
        onInteract(nearZone.type)
      }
    }
    function handleKeyUp(e: KeyboardEvent) {
      keysRef.current.delete(e.key.toLowerCase())
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [nearZone, onInteract])

  // Touch / mobile controls
  const handleCanvasTouch = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      let clientX: number
      let clientY: number
      if ("touches" in e) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else {
        clientX = e.clientX
        clientY = e.clientY
      }
      const x = (clientX - rect.left) / PIXEL
      const y = (clientY - rect.top) / PIXEL
      playerRef.current.x = Math.max(
        3,
        Math.min(Math.floor(canvasSize.w / PIXEL) - 8, x)
      )
      playerRef.current.y = Math.max(
        72,
        Math.min(Math.floor(canvasSize.h / PIXEL) - 14, y)
      )
    },
    [canvasSize]
  )

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.w}
      height={canvasSize.h}
      className="fixed inset-0 w-full h-full cursor-crosshair outline-none"
      style={{
        imageRendering: "pixelated",
        boxShadow: "inset 0 0 100px rgba(0,0,0,0.5)",
      }}
      onClick={handleCanvasTouch}
      onTouchStart={handleCanvasTouch}
      tabIndex={0}
      role="application"
      aria-label="Pixel art cafe portfolio game. Use arrow keys or WASD to move, E to interact."
    />
  )
}
