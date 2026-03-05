// Pixel Art Cafe Renderer - draws the cafe environment on canvas

export const PIXEL = 3

const C = {
  ceiling: "#5a3520",
  ceilingBeam: "#4a2815",
  wallLight: "#e8d5b8",
  wallDark: "#d4c0a0",
  shelfWood: "#8b5e3c",
  shelfWoodDark: "#6b4226",
  counterTop: "#c89660",
  counterFront: "#a0724a",
  counterShadow: "#7a5430",
  floorLight: "#c8a882",
  floorDark: "#a08060",
  floorAccent: "#8b6e50",
  tableTop: "#d4a878",
  tableLeg: "#6b4226",
  chairSeat: "#c87941",
  chairLeg: "#5a3520",
  stoolSeat: "#c87941",
  stoolLeg: "#5a3520",
  lightGlow: "#fff4d6",
  lightBulb: "#ffe8a0",
  lightWire: "#3a2010",
  boardBg: "#2a3a2a",
  boardFrame: "#5a3520",
  boardText: "#e8d5b8",
  bottleGreen: "#3a6a3a",
  bottleAmber: "#c8a040",
  bottleBrown: "#6b4226",
  jarLight: "#e8d0b0",
  espressoMachine: "#808080",
  windowLight: "#f5eedd",
  windowFrame: "#8b5e3c",
  plantGreen: "#4a8a4a",
  plantDark: "#2a5a2a",
  baristaHair: "#8b4020",
  baristaApron: "#2a2a2a",
  baristaSkin: "#e0b090",
  interactGlow: "#ffe066",
}

function px(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  color: string
) {
  ctx.fillStyle = color
  ctx.fillRect(x * PIXEL, y * PIXEL, w * PIXEL, h * PIXEL)
}

function drawCeiling(ctx: CanvasRenderingContext2D, w: number) {
  px(ctx, 0, 0, w, 12, C.ceiling)
  for (let i = 0; i < w; i += 20) {
    px(ctx, i, 10, 2, 3, C.ceilingBeam)
  }
  px(ctx, 0, 12, w, 1, C.ceilingBeam)
}

function drawPendantLight(
  ctx: CanvasRenderingContext2D,
  x: number,
  time: number
) {
  ctx.strokeStyle = C.lightWire
  ctx.lineWidth = PIXEL
  ctx.beginPath()
  ctx.moveTo((x + 3) * PIXEL + PIXEL / 2, 12 * PIXEL + PIXEL / 2)
  ctx.lineTo((x + 3) * PIXEL + PIXEL / 2, 20 * PIXEL + PIXEL / 2)
  ctx.stroke()
  px(ctx, x, 20, 7, 3, "#d4a060")
  px(ctx, x + 1, 23, 5, 2, "#c89050")
  const glowAlpha = 0.3 + Math.sin(time * 0.002) * 0.1
  ctx.fillStyle = `rgba(255, 244, 214, ${glowAlpha})`
  ctx.beginPath()
  ctx.arc((x + 3) * PIXEL, 25 * PIXEL, 12 * PIXEL, 0, Math.PI * 2)
  ctx.fill()
  px(ctx, x + 2, 23, 3, 2, C.lightBulb)
}

function drawBackWall(ctx: CanvasRenderingContext2D, w: number) {
  px(ctx, 0, 13, w, 45, C.wallLight)
  for (let i = 0; i < w; i += 30) {
    px(ctx, i, 13, 1, 45, C.wallDark)
  }
}

function drawBottle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  h: number
) {
  px(ctx, x, y + 1, 3, h - 1, color)
  px(ctx, x + 1, y, 1, 1, color)
}

function drawJar(ctx: CanvasRenderingContext2D, x: number, y: number) {
  px(ctx, x, y, 4, 6, C.jarLight)
  px(ctx, x, y, 4, 1, "#b89070")
  px(ctx, x + 1, y + 2, 2, 3, "#d4b48a")
}

function drawShelfUnit(ctx: CanvasRenderingContext2D, x: number, y: number) {
  px(ctx, x, y, 40, 30, C.shelfWoodDark)
  px(ctx, x + 1, y + 1, 38, 28, C.shelfWood)
  px(ctx, x + 1, y + 10, 38, 1, C.shelfWoodDark)
  px(ctx, x + 1, y + 20, 38, 1, C.shelfWoodDark)
  px(ctx, x + 20, y + 1, 1, 28, C.shelfWoodDark)

  drawBottle(ctx, x + 3, y + 2, C.bottleGreen, 7)
  drawBottle(ctx, x + 7, y + 3, C.bottleAmber, 6)
  drawBottle(ctx, x + 11, y + 2, C.bottleBrown, 7)
  drawBottle(ctx, x + 15, y + 3, C.bottleGreen, 6)
  drawBottle(ctx, x + 23, y + 2, C.bottleAmber, 7)
  drawBottle(ctx, x + 27, y + 3, C.bottleBrown, 6)
  drawBottle(ctx, x + 31, y + 2, C.bottleGreen, 7)
  drawBottle(ctx, x + 35, y + 3, C.bottleAmber, 6)

  const rows = [12, 22]
  for (const ry of rows) {
    drawJar(ctx, x + 3, y + ry)
    drawJar(ctx, x + 8, y + ry)
    drawJar(ctx, x + 13, y + ry)
    drawJar(ctx, x + 23, y + ry)
    drawJar(ctx, x + 28, y + ry)
    drawJar(ctx, x + 33, y + ry)
  }
}

function drawChalkboard(ctx: CanvasRenderingContext2D, x: number, y: number) {
  px(ctx, x - 1, y - 1, 36, 22, C.boardFrame)
  px(ctx, x, y, 34, 20, C.boardBg)
  // Coffee cup icon
  px(ctx, x + 13, y + 2, 8, 6, "#e0d0b0")
  px(ctx, x + 14, y + 3, 6, 4, C.boardBg)
  px(ctx, x + 21, y + 3, 2, 3, "#e0d0b0")
  // Steam
  px(ctx, x + 15, y + 1, 1, 1, "#a0a080")
  px(ctx, x + 17, y + 0, 1, 1, "#a0a080")
  px(ctx, x + 19, y + 1, 1, 1, "#a0a080")
  // "COFFEE" text
  for (let i = 0; i < 6; i++) {
    px(ctx, x + 8 + i * 3, y + 10, 2, 3, C.boardText)
  }
  // Menu lines
  for (let i = 0; i < 3; i++) {
    px(ctx, x + 4, y + 15 + i * 2, 12, 1, "#7a8a70")
    px(ctx, x + 20, y + 15 + i * 2, 6, 1, "#7a8a70")
  }
}

function drawEspressoMachine(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) {
  px(ctx, x, y, 16, 12, C.espressoMachine)
  px(ctx, x + 1, y + 1, 14, 10, "#909090")
  px(ctx, x + 2, y - 2, 12, 2, "#707070")
  px(ctx, x + 3, y + 3, 3, 3, "#606060")
  px(ctx, x + 4, y + 4, 1, 1, "#ff4040")
  px(ctx, x + 7, y + 3, 3, 3, "#606060")
  px(ctx, x + 8, y + 4, 1, 1, "#40ff40")
  px(ctx, x + 5, y + 8, 6, 2, "#505050")
  px(ctx, x + 7, y + 10, 2, 2, "#404040")
  px(ctx, x + 2, y + 11, 12, 1, "#505050")
}

function drawCoffeeGrinder(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) {
  px(ctx, x + 1, y - 4, 6, 4, "#505050")
  px(ctx, x + 2, y - 5, 4, 1, "#606060")
  px(ctx, x, y, 8, 8, "#606060")
  px(ctx, x + 1, y + 1, 6, 6, "#707070")
  px(ctx, x + 3, y + 3, 2, 2, "#909090")
  px(ctx, x + 2, y + 8, 4, 2, "#505050")
}

function drawCounter(ctx: CanvasRenderingContext2D, w: number) {
  const y = 58
  px(ctx, 5, y, w - 10, 3, C.counterTop)
  px(ctx, 5, y + 3, w - 10, 12, C.counterFront)
  px(ctx, 5, y + 2, w - 10, 1, C.counterShadow)
  for (let i = 8; i < w - 10; i += 12) {
    px(ctx, i, y + 5, 8, 1, C.counterShadow)
    px(ctx, i + 2, y + 8, 6, 1, C.counterShadow)
  }
}

function drawBarStool(ctx: CanvasRenderingContext2D, x: number, y: number) {
  px(ctx, x, y, 6, 2, C.stoolSeat)
  px(ctx, x + 1, y - 1, 4, 1, "#d08850")
  px(ctx, x + 1, y + 2, 1, 6, C.stoolLeg)
  px(ctx, x + 4, y + 2, 1, 6, C.stoolLeg)
  px(ctx, x + 1, y + 5, 4, 1, C.stoolLeg)
}

function drawTable(ctx: CanvasRenderingContext2D, x: number, y: number) {
  px(ctx, x, y, 14, 2, C.tableTop)
  px(ctx, x + 1, y - 1, 12, 1, "#dab888")
  px(ctx, x + 1, y + 2, 2, 8, C.tableLeg)
  px(ctx, x + 11, y + 2, 2, 8, C.tableLeg)
}

function drawChair(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  facing: "left" | "right"
) {
  px(ctx, x, y, 5, 2, C.chairSeat)
  if (facing === "left") {
    px(ctx, x, y - 4, 1, 4, C.chairLeg)
    px(ctx, x, y - 5, 3, 1, C.chairLeg)
  } else {
    px(ctx, x + 4, y - 4, 1, 4, C.chairLeg)
    px(ctx, x + 2, y - 5, 3, 1, C.chairLeg)
  }
  px(ctx, x, y + 2, 1, 5, C.chairLeg)
  px(ctx, x + 4, y + 2, 1, 5, C.chairLeg)
}

function drawBarista(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  time: number
) {
  const bob = Math.floor(Math.sin(time * 0.003) * 0.5)
  const by = y + bob
  px(ctx, x + 1, by + 4, 6, 8, "#e8d5b8")
  px(ctx, x + 1, by + 6, 6, 6, C.baristaApron)
  px(ctx, x + 2, by + 5, 4, 1, C.baristaApron)
  px(ctx, x + 2, by, 4, 4, C.baristaSkin)
  px(ctx, x + 2, by - 1, 4, 2, C.baristaHair)
  px(ctx, x + 5, by, 2, 2, C.baristaHair)
  px(ctx, x + 3, by + 1, 1, 1, "#2a1a10")
  px(ctx, x + 5, by + 1, 1, 1, "#2a1a10")
  px(ctx, x - 1, by + 5, 2, 5, C.baristaSkin)
  px(ctx, x + 7, by + 5, 2, 5, C.baristaSkin)
}

function drawWindow(ctx: CanvasRenderingContext2D, x: number, y: number) {
  px(ctx, x, y, 16, 24, C.windowFrame)
  px(ctx, x + 1, y + 1, 14, 22, C.windowLight)
  px(ctx, x + 7, y + 1, 1, 22, C.windowFrame)
  px(ctx, x + 1, y + 11, 14, 1, C.windowFrame)
  ctx.fillStyle = "rgba(255, 248, 220, 0.3)"
  ctx.fillRect((x + 2) * PIXEL, (y + 2) * PIXEL, 5 * PIXEL, 9 * PIXEL)
}

function drawWallShelf(ctx: CanvasRenderingContext2D, x: number, y: number) {
  px(ctx, x, y, 12, 1, C.shelfWood)
  px(ctx, x + 1, y + 1, 1, 3, C.shelfWoodDark)
  px(ctx, x + 10, y + 1, 1, 3, C.shelfWoodDark)
  drawBottle(ctx, x + 2, y - 6, C.bottleAmber, 5)
  drawBottle(ctx, x + 5, y - 5, C.bottleBrown, 4)
  drawBottle(ctx, x + 8, y - 6, C.bottleGreen, 5)
}

function drawPlant(ctx: CanvasRenderingContext2D, x: number, y: number) {
  px(ctx, x, y, 4, 3, "#a06030")
  px(ctx, x - 1, y, 6, 1, "#b07040")
  px(ctx, x, y - 3, 4, 3, C.plantGreen)
  px(ctx, x - 1, y - 4, 2, 2, C.plantDark)
  px(ctx, x + 3, y - 4, 2, 2, C.plantDark)
  px(ctx, x + 1, y - 5, 2, 1, C.plantGreen)
}

function drawFloor(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  startY: number
) {
  px(ctx, 0, startY, w, h - startY, C.floorLight)
  for (let row = 0; row < h - startY; row += 4) {
    const offset = (Math.floor(row / 4) % 2) * 4
    for (let col = 0; col < w; col += 8) {
      px(
        ctx,
        col + offset,
        startY + row,
        7,
        3,
        (col + row) % 16 < 8 ? C.floorDark : C.floorAccent
      )
      px(ctx, col + offset + 7, startY + row, 1, 3, C.floorLight)
    }
    px(ctx, 0, startY + row + 3, w, 1, C.floorLight)
  }
}

export interface InteractiveZone {
  x: number
  y: number
  width: number
  height: number
  label: string
  type: "about" | "projects" | "skills" | "contact" | "resume"
}

export function getInteractiveZones(canvasW: number): InteractiveZone[] {
  const pw = Math.floor(canvasW / PIXEL)
  return [
    {
      x: 24,
      y: 16,
      width: 40,
      height: 30,
      label: "Bookshelf - Skills",
      type: "skills",
    },
    {
      x: Math.floor(pw / 2) - 17,
      y: 18,
      width: 34,
      height: 20,
      label: "Menu Board - Projects",
      type: "projects",
    },
    {
      x: 5,
      y: 18,
      width: 16,
      height: 24,
      label: "Window - Contact",
      type: "contact",
    },
    {
      x: pw - 22,
      y: 18,
      width: 16,
      height: 24,
      label: "Window - About Me",
      type: "about",
    },
    {
      x: Math.floor(pw / 2) - 4,
      y: 46,
      width: 8,
      height: 14,
      label: "Barista - Resume",
      type: "resume",
    },
  ]
}

function drawInteractPrompt(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  label: string,
  time: number
) {
  const bob = Math.sin(time * 0.005) * 2
  const pxX = x * PIXEL
  const pxY = (y - 8) * PIXEL + bob

  const textWidth = label.length * 6.5 + 50
  const pillX = pxX - textWidth / 2

  ctx.fillStyle = "rgba(26, 15, 10, 0.9)"
  ctx.beginPath()
  ctx.moveTo(pillX + 8, pxY - 12)
  ctx.lineTo(pillX + textWidth - 8, pxY - 12)
  ctx.quadraticCurveTo(pillX + textWidth, pxY - 12, pillX + textWidth, pxY - 4)
  ctx.lineTo(pillX + textWidth, pxY + 6)
  ctx.quadraticCurveTo(pillX + textWidth, pxY + 14, pillX + textWidth - 8, pxY + 14)
  ctx.lineTo(pillX + 8, pxY + 14)
  ctx.quadraticCurveTo(pillX, pxY + 14, pillX, pxY + 6)
  ctx.lineTo(pillX, pxY - 4)
  ctx.quadraticCurveTo(pillX, pxY - 12, pillX + 8, pxY - 12)
  ctx.closePath()
  ctx.fill()

  ctx.strokeStyle = C.interactGlow
  ctx.lineWidth = 2
  ctx.stroke()

  ctx.fillStyle = C.lightGlow
  ctx.font = 'bold 12px "Geist", sans-serif'
  ctx.textAlign = "center"
  ctx.fillText("[E] " + label, pxX, pxY + 4)
}

function drawPlayer(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  time: number
) {
  const walkFrame = Math.floor(time / 150) % 4
  const legOffset = walkFrame % 2

  // Shadow
  ctx.fillStyle = "rgba(0,0,0,0.2)"
  ctx.beginPath()
  ctx.ellipse(
    x * PIXEL + 3 * PIXEL,
    (y + 12) * PIXEL,
    4 * PIXEL,
    1.5 * PIXEL,
    0,
    0,
    Math.PI * 2
  )
  ctx.fill()

  // Legs
  px(ctx, x + 1, y + 8 + legOffset, 2, 4 - legOffset, "#3a5070")
  px(ctx, x + 3, y + 8 + (1 - legOffset), 2, 4 - (1 - legOffset), "#3a5070")
  px(ctx, x + 1, y + 11, 2, 1, "#2a1a10")
  px(ctx, x + 3, y + 11, 2, 1, "#2a1a10")

  // Body
  px(ctx, x, y + 3, 6, 5, "#4a8ab0")
  px(ctx, x + 2, y + 4, 2, 3, "#5a9ac0")

  // Arms
  px(ctx, x - 1, y + 4, 1, 4, "#e0b090")
  px(ctx, x + 6, y + 4, 1, 4, "#e0b090")

  // Head
  px(ctx, x + 1, y, 4, 3, "#e0b090")
  px(ctx, x + 1, y - 1, 4, 2, "#3a2010")
  px(ctx, x + 2, y + 1, 1, 1, "#1a0f0a")
  px(ctx, x + 4, y + 1, 1, 1, "#1a0f0a")

  // Glow
  const glowAlpha = 0.5 + Math.sin(time * 0.003) * 0.2
  ctx.fillStyle = "rgba(200, 121, 65, " + glowAlpha + ")"
  ctx.beginPath()
  ctx.arc((x + 3) * PIXEL, (y + 6) * PIXEL, 1.5 * PIXEL, 0, Math.PI * 2)
  ctx.fill()
}

export function renderCafe(
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  time: number,
  playerX: number,
  playerY: number,
  nearZone: InteractiveZone | null
) {
  const pw = Math.floor(canvasWidth / PIXEL)
  const ph = Math.floor(canvasHeight / PIXEL)

  ctx.imageSmoothingEnabled = false
  ctx.fillStyle = "#000"
  ctx.fillRect(0, 0, canvasWidth, canvasHeight)

  // Background layers
  drawCeiling(ctx, pw)
  drawBackWall(ctx, pw)
  drawWindow(ctx, 5, 18)
  drawWindow(ctx, pw - 22, 18)
  drawShelfUnit(ctx, 24, 16)
  drawWallShelf(ctx, pw - 40, 26)
  drawPlant(ctx, 22, 38)
  drawPlant(ctx, pw - 26, 30)

  const boardX = Math.floor(pw / 2) - 17
  drawChalkboard(ctx, boardX, 18)

  // Counter area
  drawEspressoMachine(ctx, Math.floor(pw / 2) - 25, 46)
  drawCoffeeGrinder(ctx, Math.floor(pw / 2) + 15, 48)
  drawBarista(ctx, Math.floor(pw / 2) - 4, 46, time)
  drawCounter(ctx, pw)

  // Bar stools
  for (let i = 0; i < 6; i++) {
    drawBarStool(ctx, 18 + i * Math.floor((pw - 40) / 6), 73)
  }

  // Pendant lights
  const lightSpacing = Math.floor(pw / 5)
  for (let i = 1; i < 5; i++) {
    drawPendantLight(ctx, i * lightSpacing - 3, time + i * 500)
  }

  // Floor
  drawFloor(ctx, pw, ph, 82)

  // Tables row 1
  for (let i = 0; i < 4; i++) {
    const tx = 15 + i * Math.floor((pw - 35) / 4)
    drawTable(ctx, tx, 88)
    drawChair(ctx, tx - 3, 90, "right")
    drawChair(ctx, tx + 14, 90, "left")
  }

  // Tables row 2
  for (let i = 0; i < 3; i++) {
    const tx = 25 + i * Math.floor((pw - 55) / 3)
    drawTable(ctx, tx, 103)
    drawChair(ctx, tx - 3, 105, "right")
    drawChair(ctx, tx + 14, 105, "left")
  }

  // Tables row 3
  for (let i = 0; i < 4; i++) {
    const tx = 10 + i * Math.floor((pw - 25) / 4)
    drawTable(ctx, tx, 118)
    drawChair(ctx, tx - 3, 120, "right")
    drawChair(ctx, tx + 14, 120, "left")
  }

  // Player
  drawPlayer(ctx, playerX, playerY, time)

  // Interact prompt
  if (nearZone) {
    drawInteractPrompt(
      ctx,
      nearZone.x + nearZone.width / 2,
      nearZone.y,
      nearZone.label,
      time
    )
  }

  // Ambient light overlay
  const gradient = ctx.createRadialGradient(
    canvasWidth / 2,
    25 * PIXEL,
    0,
    canvasWidth / 2,
    25 * PIXEL,
    canvasWidth * 0.7
  )
  gradient.addColorStop(0, "rgba(255, 220, 150, 0.08)")
  gradient.addColorStop(1, "rgba(0, 0, 0, 0.15)")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}
