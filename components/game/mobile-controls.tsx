"use client"

import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useEffect, useRef, useCallback } from "react"

export default function MobileControls() {
  const keysRef = useRef<Set<string>>(new Set())

  const simulateKey = useCallback((key: string, type: "down" | "up") => {
    const event = new KeyboardEvent(
      type === "down" ? "keydown" : "keyup",
      { key, bubbles: true }
    )
    window.dispatchEvent(event)
  }, [])

  const handlePressStart = useCallback(
    (key: string) => {
      if (!keysRef.current.has(key)) {
        keysRef.current.add(key)
        simulateKey(key, "down")
      }
    },
    [simulateKey]
  )

  const handlePressEnd = useCallback(
    (key: string) => {
      keysRef.current.delete(key)
      simulateKey(key, "up")
    },
    [simulateKey]
  )

  useEffect(() => {
    return () => {
      keysRef.current.forEach((key) => {
        simulateKey(key, "up")
      })
    }
  }, [simulateKey])

  const btnCls =
    "flex items-center justify-center w-12 h-12 rounded-lg bg-[#2a1a10]/80 border border-[#4a2e1c] text-[#c87941] active:bg-[#4a2e1c] active:border-[#c87941] transition-colors touch-none select-none"

  return (
    <div className="flex items-center gap-6 md:hidden">
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        <div />
        <button
          className={btnCls}
          onTouchStart={() => handlePressStart("ArrowUp")}
          onTouchEnd={() => handlePressEnd("ArrowUp")}
          onMouseDown={() => handlePressStart("ArrowUp")}
          onMouseUp={() => handlePressEnd("ArrowUp")}
          onMouseLeave={() => handlePressEnd("ArrowUp")}
          aria-label="Move up"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <div />
        <button
          className={btnCls}
          onTouchStart={() => handlePressStart("ArrowLeft")}
          onTouchEnd={() => handlePressEnd("ArrowLeft")}
          onMouseDown={() => handlePressStart("ArrowLeft")}
          onMouseUp={() => handlePressEnd("ArrowLeft")}
          onMouseLeave={() => handlePressEnd("ArrowLeft")}
          aria-label="Move left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1a0f0a]/60 border border-[#3d2618]">
          <div className="w-2 h-2 rounded-full bg-[#4a2e1c]" />
        </div>
        <button
          className={btnCls}
          onTouchStart={() => handlePressStart("ArrowRight")}
          onTouchEnd={() => handlePressEnd("ArrowRight")}
          onMouseDown={() => handlePressStart("ArrowRight")}
          onMouseUp={() => handlePressEnd("ArrowRight")}
          onMouseLeave={() => handlePressEnd("ArrowRight")}
          aria-label="Move right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <div />
        <button
          className={btnCls}
          onTouchStart={() => handlePressStart("ArrowDown")}
          onTouchEnd={() => handlePressEnd("ArrowDown")}
          onMouseDown={() => handlePressStart("ArrowDown")}
          onMouseUp={() => handlePressEnd("ArrowDown")}
          onMouseLeave={() => handlePressEnd("ArrowDown")}
          aria-label="Move down"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
        <div />
      </div>

      <button
        className="w-14 h-14 rounded-full bg-[#c87941]/20 border-2 border-[#c87941] text-[#e8a857] font-bold text-lg active:bg-[#c87941]/40 transition-colors touch-none select-none"
        onTouchStart={() => handlePressStart("e")}
        onTouchEnd={() => handlePressEnd("e")}
        onMouseDown={() => handlePressStart("e")}
        onMouseUp={() => handlePressEnd("e")}
        aria-label="Interact"
      >
        E
      </button>
    </div>
  )
}
