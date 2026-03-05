// Pixel Art Cafe Renderer - draws the cafe environment on canvas

export const PIXEL = 4

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
  floorLight: "#d0d8e0",
  floorDark: "#b0c0d0",
  floorAccent: "#90a0b0",
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
  pastryCaseFrame: "#5a6a6a",
  pastryCaseGlass: "rgba(180, 230, 255, 0.15)",
  cashRegisterBody: "#2a2a2a",
  cashRegisterScreen: "#32ff32",
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

function drawPastry(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  type: "croissant" | "cupcake_white" | "muffin_choco" | "muffin_gold" | "cookie"
) {
  // Plate from the image: elliptical white ceramic
  px(ctx, x - 4, y + 3, 12, 1, "rgba(0,0,0,0.15)") // shadow
  px(ctx, x - 4, y + 2, 12, 2, "#ffffff") // plate top
  px(ctx, x - 3, y + 4, 10, 1, "#e0e0e0") // plate edge

  if (type === "croissant") {
    // Exact colors from image
    px(ctx, x, y, 5, 3, "#d4a060") // Body
    px(ctx, x + 1, y - 1, 3, 1, "#f5d5a5") // Top ridge
    px(ctx, x - 1, y + 1, 1, 2, "#8b5e3c") // Left curve
    px(ctx, x + 5, y + 1, 1, 2, "#8b5e3c") // Right curve
    px(ctx, x + 1, y + 1, 1, 2, "#8b5e3c") // Depth line
    px(ctx, x + 3, y + 1, 1, 2, "#8b5e3c") // Depth line
  } else if (type === "cupcake_white") {
    // White frosting cupcake with cherry
    px(ctx, x + 1, y, 3, 3, "#3e2723") // Dark chocolate base
    px(ctx, x, y - 2, 5, 3, "#ffffff") // Tall white frosting
    px(ctx, x + 1, y - 3, 3, 1, "#ffffff") // Frosting peak
    px(ctx, x + 2, y - 4, 1, 1, "#d32f2f") // Bright red cherry
  } else if (type === "muffin_choco") {
    // Dark chocolate muffin
    px(ctx, x + 1, y + 1, 3, 2, "#211007") // Dark base
    px(ctx, x - 1, y - 1, 7, 3, "#3e2723") // Dark top
    px(ctx, x, y, 1, 1, "#000000") // Chip
    px(ctx, x + 4, y + 1, 1, 1, "#000000") // Chip
  } else if (type === "muffin_gold") {
    // Golden muffin
    px(ctx, x + 1, y + 1, 3, 2, "#8b5e3c") // Brown base
    px(ctx, x - 1, y - 1, 7, 3, "#d4a060") // Golden top
    px(ctx, x + 1, y - 1, 3, 1, "#f5d5a5") // Highlight
  } else if (type === "cookie") {
    // Flat golden cookie with chips
    px(ctx, x, y + 1, 5, 2, "#d4a060") 
    px(ctx, x + 1, y, 3, 1, "#d4a060")
    px(ctx, x + 1, y + 1, 1, 1, "#331a00") // Chip
    px(ctx, x + 3, y + 1, 1, 1, "#331a00") // Chip
  }
}

function drawPastryCounter(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number
) {
  // High-detail glass case
  px(ctx, x, y, w, 26, "#5a6a6a") 
  px(ctx, x + 1, y + 1, w - 2, 24, "rgba(180, 230, 255, 0.15)") 

  // Shelves
  px(ctx, x + 1, y + 13, w - 2, 1, "#5a6a6a") 
  px(ctx, x + Math.floor(w / 2), y + 1, 1, 24, "#5a6a6a")

  // Exact distribution from the image
  const leftX = x + 8
  const midX = x + Math.floor(w / 4) + 2
  const rightX = x + Math.floor(w / 2) + 8
  const farRightX = x + Math.floor(w * 0.75) + 2

  // Top Shelf
  drawPastry(ctx, leftX, y + 9, "croissant")
  drawPastry(ctx, midX, y + 9, "cupcake_white")
  if (w > 50) {
    drawPastry(ctx, rightX, y + 9, "croissant")
    drawPastry(ctx, farRightX, y + 9, "muffin_gold")
  }

  // Bottom Shelf
  drawPastry(ctx, leftX, y + 21, "muffin_choco")
  drawPastry(ctx, midX, y + 21, "muffin_gold")
  if (w > 50) {
    drawPastry(ctx, rightX, y + 21, "muffin_choco")
    drawPastry(ctx, farRightX, y + 21, "cookie")
  }

  // Glass glints
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
  ctx.lineWidth = PIXEL
  ctx.beginPath()
  ctx.moveTo((x + 5) * PIXEL, (y + 5) * PIXEL)
  ctx.lineTo((x + 20) * PIXEL, (y + 20) * PIXEL)
  ctx.stroke()
}

function drawCashRegister(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) {
  // Professional cash register with monitor
  px(ctx, x, y, 14, 10, "#2a2a2a") // base
  px(ctx, x + 5, y - 5, 4, 5, "#2a2a2a") // stand
  px(ctx, x + 1, y - 10, 12, 7, "#111") // monitor frame
  px(ctx, x + 3, y - 8, 8, 3, "#32ff32") // screen
  
  // Decorative plant next to it
  px(ctx, x + 16, y + 4, 6, 6, "#8b4513") // pot
  px(ctx, x + 16, y, 6, 4, "#4a8a4a") // plant
}

function drawCounter(ctx: CanvasRenderingContext2D, x: number, w: number) {
  const y = 58
  // Counter Top
  px(ctx, x, y, w, 3, C.counterTop)
  px(ctx, x, y + 2, w, 1, C.counterShadow)

  // Counter Front
  px(ctx, x, y + 3, w, 15, C.counterFront)

  // Elegant Panels
  for (let i = x + 10; i < x + w - 20; i += 25) {
    px(ctx, i, y + 6, 15, 10, C.counterShadow)
    px(ctx, i + 1, y + 7, 13, 8, C.counterFront)
    px(ctx, i + 1, y + 7, 13, 1, "rgba(255,255,255,0.05)")
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
  const tileSize = 10
  for (let row = 0; row < h - startY; row += tileSize) {
    for (let col = 0; col < w; col += tileSize) {
      const isAlt = (Math.floor(col / tileSize) + Math.floor(row / tileSize)) % 2 === 0
      px(
        ctx,
        col,
        startY + row,
        tileSize,
        tileSize,
        isAlt ? C.floorDark : C.floorAccent
      )
      // Tiling detail - light highlights
      px(ctx, col, startY + row, tileSize, 1, "rgba(255,255,255,0.03)")
      px(ctx, col, startY + row, 1, tileSize, "rgba(255,255,255,0.03)")
    }
  }
}

export interface InteractiveZone {
  x: number
  y: number
  width: number
  height: number
  label: string
  type: "about" | "projects" | "skills" | "contact" | "resume" | "achievements"
}

export function getInteractiveZones(canvasW: number): InteractiveZone[] {
  const pw = Math.floor(canvasW / PIXEL)
  const bcW = Math.floor(pw * 0.45)
  const pcW = Math.floor(pw * 0.30)
  
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
      x: 5 + Math.floor(bcW * 0.5),
      y: 46,
      width: 8,
      height: 14,
      label: "Barista - Resume",
      type: "resume",
    },
    {
      x: pw - pcW - 5,
      y: 42,
      width: pcW,
      height: 35,
      label: "Pastry Case - Achievements",
      type: "achievements",
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
  const legOffset = (walkFrame % 2) * 1.5
  const bob = Math.sin(time * 0.01) * 1

  // Shadow (Wide for chubby sprite)
  ctx.fillStyle = "rgba(0,0,0,0.1)"
  ctx.beginPath()
  ctx.ellipse(
    (x + 4) * PIXEL,
    (y + 15) * PIXEL,
    7 * PIXEL,
    2.5 * PIXEL,
    0,
    0,
    Math.PI * 2
  )
  ctx.fill()

  // Long Flowy Brown Hair (Back Layer)
  px(ctx, x + 0.5, y + 2 + bob, 8, 11, "#5d4037")
  px(ctx, x - 0.5, y + 5 + bob, 1.5, 6, "#5d4037") // Extra flowy bits
  px(ctx, x + 8, y + 5 + bob, 1.5, 6, "#5d4037")

  // Bare Legs (Skin tone, slightly wider)
  px(ctx, x + 2.5, y + 10 + legOffset, 2.5, 5, "#e0b090") // Left
  px(ctx, x + 4.5, y + 10 - legOffset + 1.5, 2.5, 5, "#e0b090") // Right
  
  // Cute Red Shoes
  px(ctx, x + 2.5, y + 14.5 + legOffset, 2.5, 1, "#d32f2f")
  px(ctx, x + 4.5, y + 14.5 - legOffset + 1.5, 2.5, 1, "#d32f2f")

  // Red Dress (Chubby/Rounded silhouette)
  px(ctx, x + 1, y + 4 + bob, 7, 7, "#d32f2f") // Dress body
  px(ctx, x + 0.5, y + 6 + bob, 8, 5, "#b71c1c") // Bottom flare/shading
  px(ctx, x + 2.5, y + 3.5 + bob, 4, 1, "#ff8a80") // Ribbon/detail

  // Arms (Bare skin)
  px(ctx, x - 0.5, y + 5 + bob, 1.5, 5, "#e0b090") // Left
  px(ctx, x + 8, y + 5 + bob, 1.5, 5, "#e0b090") // Right

  // Head
  px(ctx, x + 2.5, y - 1 + bob, 4.5, 5, "#e0b090") // Face
  
  // Face Details
  px(ctx, x + 3, y + 2 + bob, 1, 1, "#111") // Left Eye
  px(ctx, x + 5.5, y + 2 + bob, 1, 1, "#111") // Right Eye
  px(ctx, x + 2.5, y + 3 + bob, 1, 0.8, "#ff8a80") // Left Blush
  px(ctx, x + 6, y + 3 + bob, 1, 0.8, "#ff8a80") // Right Blush
  px(ctx, x + 4, y + 3.5 + bob, 2, 0.5, "#8b5e3c") // Smile

  // Cute Hat (Straw/Summer style with red band)
  px(ctx, x + 1.5, y - 3 + bob, 6, 2, "#f5d5a5") // Hat top
  px(ctx, x + 0.5, y - 1.5 + bob, 8, 1.5, "#f5d5a5") // Hat brim
  px(ctx, x + 1.5, y - 1.5 + bob, 6, 0.8, "#d32f2f") // Hat band
  
  // Hair (Front bangs/framing)
  px(ctx, x + 2, y - 1 + bob, 5, 2, "#5d4037")
  px(ctx, x + 1.5, y + 1 + bob, 1, 5, "#5d4037")
  px(ctx, x + 7, y + 1 + bob, 1, 5, "#5d4037")
}

function drawFloralPlatform(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number
) {
  // Neutral Taupe Platform Base (Asset pack style)
  px(ctx, x, y, w, h, "#bda27e") 
  px(ctx, x, y, w, 1, "#d4bc9c") // top highlight
  px(ctx, x, y + h - 1, w, 1, "#8b7355") // bottom shadow
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
  const bcW = Math.floor(pw * 0.45)
  const pcW = Math.floor(pw * 0.30)
  
  // Billing Counter (Left, 45%)
  drawCounter(ctx, 5, bcW)
  drawEspressoMachine(ctx, 15, 46)
  drawCashRegister(ctx, 15 + Math.floor(bcW * 0.3), 49)
  drawBarista(ctx, 5 + Math.floor(bcW * 0.5), 46, time)
  drawCoffeeGrinder(ctx, 5 + Math.floor(bcW * 0.8), 48)

  // Pastry Counter (Right, 30%)
  const pcX = pw - pcW - 5
  drawFloralPlatform(ctx, pcX, 60, pcW, 22) // Green floral base
  drawPastryCounter(ctx, pcX, 34, pcW)

  // Bar stools (Only under billing counter)
  const stoolCount = Math.floor(bcW / 25)
  for (let i = 0; i < stoolCount; i++) {
    drawBarStool(ctx, 10 + i * 25, 73)
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
