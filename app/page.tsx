"use client"

import { useState, useCallback, useEffect } from "react"
import GameHUD from "@/components/game/game-hud"
import MobileControls from "@/components/game/mobile-controls"
import PortfolioPanel from "@/components/game/portfolio-panel"
import GameCanvas from "@/components/game/game-canvas"

type PanelType =
  | "about"
  | "skills"
  | "contact"
  | "resume"
  | "achievements"
  | "education"

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
    <main className="fixed inset-0 bg-[#1a0f0a] overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <GameCanvas onInteract={handleInteract} />

      <div className="relative z-10 w-full h-full pointer-events-none flex flex-col justify-between p-4">
        <GameHUD
          showInstructions={showInstructions}
          onDismissInstructions={handleDismissInstructions}
          discoveredCount={discovered.size}
          totalCount={6}
        />

        <div className="flex flex-col gap-4">
          <div className="flex justify-center pointer-events-auto">
            <MobileControls />
          </div>

          <div className="flex items-center justify-between pointer-events-auto bg-[#1a0f0a]/60 backdrop-blur-sm p-3 rounded-lg border border-[#4a2e1c]/50">
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
      </div>

      {activePanel && (
        <PortfolioPanel type={activePanel} onClose={handleClosePanel} />
      )}
    </main>
  )
}
