"use client"

import { ArrowUpDown, Hand, MonitorSmartphone } from "lucide-react"

interface GameHUDProps {
  showInstructions: boolean
  onDismissInstructions: () => void
  discoveredCount: number
  totalCount: number
}

export default function GameHUD({
  showInstructions,
  onDismissInstructions,
  discoveredCount,
  totalCount,
}: GameHUDProps) {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#c87941] animate-pulse" />
            <span className="text-sm font-bold text-[#f5e6d3] tracking-wide">
              CAFE PORTFOLIO
            </span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-[#4a2e1c]" />
          <span className="hidden sm:block text-xs text-[#a68b6b]">
            Explore the cafe to discover my work
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a68b6b]">Discovered:</span>
          <div className="flex gap-1">
            {Array.from({ length: totalCount }).map((_, i) => (
              <div
                key={i}
                className={
                  "w-2 h-2 rounded-full transition-colors " +
                  (i < discoveredCount ? "bg-[#e8a857]" : "bg-[#3d2618]")
                }
              />
            ))}
          </div>
        </div>
      </div>

      {showInstructions && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#1a0f0a]/90 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-6 p-8 max-w-sm text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#c87941]/20 blur-xl rounded-full" />
              <h2 className="relative text-2xl font-bold text-[#f5e6d3] tracking-tight">
                Welcome to My Cafe
              </h2>
            </div>
            <p className="text-sm text-[#d4c0a0] leading-relaxed">
              Walk around and explore this pixel-art cafe to discover different
              sections of my portfolio.
            </p>

            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#2a1a10] border border-[#4a2e1c]">
                <ArrowUpDown className="w-5 h-5 text-[#c87941] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-medium text-[#f5e6d3]">
                    Arrow Keys / WASD
                  </p>
                  <p className="text-[10px] text-[#a68b6b]">
                    Move your character around
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#2a1a10] border border-[#4a2e1c]">
                <Hand className="w-5 h-5 text-[#c87941] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-medium text-[#f5e6d3]">
                    {"Press E / Click"}
                  </p>
                  <p className="text-[10px] text-[#a68b6b]">
                    Interact with objects in the cafe
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#2a1a10] border border-[#4a2e1c] md:hidden">
                <MonitorSmartphone className="w-5 h-5 text-[#c87941] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-medium text-[#f5e6d3]">
                    On-screen D-pad
                  </p>
                  <p className="text-[10px] text-[#a68b6b]">
                    Use the controls below the game
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onDismissInstructions}
              className="mt-2 px-6 py-2.5 rounded-lg bg-[#c87941] text-[#1a0f0a] font-bold text-sm hover:bg-[#e8a857] transition-colors"
            >
              Start Exploring
            </button>

            <p className="text-[10px] text-[#8b6e50] uppercase tracking-widest">
              Press any key to start
            </p>
          </div>
        </div>
      )}
    </>
  )
}
