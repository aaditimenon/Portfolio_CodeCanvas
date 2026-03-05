"use client"

import { useState, useCallback, useEffect } from "react"
import GameHUD from "@/components/game/game-hud"
import MobileControls from "@/components/game/mobile-controls"
import PortfolioPanel from "@/components/game/portfolio-panel"
import GameCanvas from "@/components/game/game-canvas"

type PanelType = "about" | "projects" | "skills" | "contact" | "resume"

export default function CafePortfolio() {
  const [showInstructions, setShowInstructions] = useState(true)
  const [activePanel, setActivePanel] = useState<PanelType | null>(null)
  const [discovered, setDiscovered] = useState<Set<PanelType>>(new Set())

  const handleInteract = useCallback((type: PanelType) => {
    setActivePanel(type)
    setDiscovered((prev) => {
      const next = new Set(prev)
      next.add(type)
      return next
    })
  }, [])

  const handleClosePanel = useCallback(() => {
    setActivePanel(null)
  }, [])

  const handleDismissInstructions = useCallback(() => {
    setShowInstructions(false)
  }, [])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && activePanel) {
        setActivePanel(null)
      }
      if (showInstructions) {
        setShowInstructions(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activePanel, showInstructions])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#1a0f0a] overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div className="relative w-full max-w-[1200px] flex flex-col">
        <GameHUD
          showInstructions={showInstructions}
          onDismissInstructions={handleDismissInstructions}
          discoveredCount={discovered.size}
          totalCount={5}
        />

        <div className="px-2 sm:px-4">
          <GameCanvas onInteract={handleInteract} />
        </div>

        <div className="flex justify-center mt-4 px-4">
          <MobileControls />
        </div>

        <div className="flex items-center justify-between px-4 py-3 mt-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-[#2a1a10] border border-[#4a2e1c] text-[#a68b6b]">
                  W
                </kbd>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-[#2a1a10] border border-[#4a2e1c] text-[#a68b6b]">
                  A
                </kbd>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-[#2a1a10] border border-[#4a2e1c] text-[#a68b6b]">
                  S
                </kbd>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-[#2a1a10] border border-[#4a2e1c] text-[#a68b6b]">
                  D
                </kbd>
              </div>
              <span className="text-[10px] text-[#8b6e50] hidden sm:inline">
                Move
              </span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#2a1a10] border border-[#4a2e1c] text-[#c87941]">
                E
              </kbd>
              <span className="text-[10px] text-[#8b6e50] hidden sm:inline">
                Interact
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#6b4226] hidden sm:inline">
              Built with Next.js + Canvas
            </span>
            <span className="text-[10px] text-[#4a2e1c]">{"///"}</span>
            <span className="text-[10px] text-[#6b4226]">2026</span>
          </div>
        </div>
      </div>

      {activePanel && (
        <PortfolioPanel type={activePanel} onClose={handleClosePanel} />
      )}
    </main>
  )
}
