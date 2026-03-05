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

function drawChalkboard(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  title: string,
  items: string[]
) {
  // Enhanced frame with ornate corners
  px(ctx, x - 1, y - 1, 36, 22, C.boardFrame)
  px(ctx, x, y, 34, 20, C.boardBg)

  // Chalk dust effect on bottom
  ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
  ctx.fillRect(x * PIXEL, (y + 18) * PIXEL, 34 * PIXEL, 2 * PIXEL)

  // Title
  ctx.fillStyle = C.boardText
  ctx.font = `bold ${2.5 * PIXEL}px sans-serif`
  ctx.textAlign = "center"
  ctx.fillText(title, (x + 17) * PIXEL, (y + 5) * PIXEL)

  px(ctx, x + 10, y + 6, 14, 1, "#7a8a70") // Underline

  // Menu items
  items.forEach((item, i) => {
    const iy = y + 10 + i * 4
    const isHeader = i === 0 && item.includes("Special")
    
    if (!isHeader) {
      px(ctx, x + 4, iy, 1, 1, "#e8d5b8") // Bullet
    }
    
    ctx.fillStyle = isHeader ? "#e8d5b8" : "#a0a080"
    ctx.font = `${(isHeader ? 2.2 : 2) * PIXEL}px sans-serif`
    ctx.textAlign = "left"
    ctx.fillText(item, (isHeader ? x + 4 : x + 7) * PIXEL, (iy + 1) * PIXEL)
  })
}

function drawStandingChalkboard(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  title: string
) {
  // A-frame legs
  px(ctx, x + 2, y + 15, 2, 5, C.boardFrame) // Left leg
  px(ctx, x + 16, y + 15, 2, 5, C.boardFrame) // Right leg

  // Main board frame
  px(ctx, x, y, 20, 16, C.boardFrame)
  px(ctx, x + 1, y + 1, 18, 14, C.boardBg)

  // Title
  ctx.fillStyle = C.boardText
  ctx.font = `bold ${1.8 * PIXEL}px sans-serif`
  ctx.textAlign = "center"
  ctx.fillText(title, (x + 10) * PIXEL, (y + 6) * PIXEL)

  // Scribbles
  px(ctx, x + 4, y + 9, 12, 0.5, "rgba(255,255,255,0.2)")
  px(ctx, x + 4, y + 11, 10, 0.5, "rgba(255,255,255,0.2)")
  px(ctx, x + 4, y + 13, 8, 0.5, "rgba(255,255,255,0.2)")
}

function drawBookstand(ctx: CanvasRenderingContext2D, x: number, y: number) {
  // Ornate Wooden Base
  px(ctx, x + 2, y + 12, 12, 4, "#5a3520") // bottom base
  px(ctx, x + 4, y + 4, 8, 8, "#6b4226") // central pillar
  px(ctx, x + 1, y + 2, 14, 2, "#8b5e3c") // slanted top plate
  
  // Shading/Detail
  px(ctx, x + 5, y + 5, 1, 6, "rgba(0,0,0,0.2)") // pillar shadow

  // The Open Book
  px(ctx, x + 2, y, 6, 4, "#ffffff") // Left page
  px(ctx, x + 8, y, 6, 4, "#f5f5f5") // Right page
  px(ctx, x + 7, y, 1, 4, "#d4c0a0") // Book spine/binding
  
  // Animated "Text" lines in book
  px(ctx, x + 3, y + 1, 4, 0.5, "rgba(0,0,0,0.1)")
  px(ctx, x + 3, y + 2.5, 3, 0.5, "rgba(0,0,0,0.1)")
  px(ctx, x + 9, y + 1, 4, 0.5, "rgba(0,0,0,0.1)")
  px(ctx, x + 9, y + 2.5, 4, 0.5, "rgba(0,0,0,0.1)")
  
  // Decorative Bookmark
  px(ctx, x + 11, y - 1, 1, 3, "#d32f2f") 
}

function drawGrandBookshelf(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const shelfW = 24
  const shelfH = 30
  
  // Ornate Warm Wood Frame
  px(ctx, x, y, shelfW, shelfH, "#3a1a05") // Outer frame
  px(ctx, x + 1, y + 1, shelfW - 2, shelfH - 2, "#4a2815") // Interior
  
  // Shelves
  for (let i = 1; i < 3; i++) {
    px(ctx, x + 1, y + i * 10, shelfW - 2, 1, "#2a1005")
  }

  // Warm Colored Books - Static pattern to avoid flickering
  const warmColors = [
    "#8b0000", // Deep Red
    "#b22222", // Firebrick
    "#a0522d", // Sienna
    "#d2691e", // Chocolate
    "#cd853f", // Peru
    "#deb887", // BurlyWood
    "#f5deb3", // Wheat
  ]
  
  const shelfPatterns = [
    [3, 2, 4, 2, 3, 2], // shelf 1 book widths
    [2, 3, 2, 4, 2, 3], // shelf 2 book widths
    [4, 2, 3, 2, 4, 1], // shelf 3 book widths
  ]
  
  for (let shelf = 0; shelf < 3; shelf++) {
    const sy = y + 1 + shelf * 10
    let curX = x + 2
    const pattern = shelfPatterns[shelf]
    
    pattern.forEach((bW, i) => {
      const bH = 6 + (i % 3) // Varied but static height
      const color = warmColors[(shelf * 3 + i) % warmColors.length]
      
      // Draw book spine
      px(ctx, curX, sy + (9 - bH), bW, bH, color)
      // Spine detail
      px(ctx, curX, sy + (9 - bH) + 1, bW, 0.5, "rgba(255,255,255,0.1)")
      
      curX += bW + 1
    })
  }

  // Decorative topper
  px(ctx, x - 1, y - 1, shelfW + 2, 2, "#3a1a05")
}

function drawRusticStool(ctx: CanvasRenderingContext2D, x: number, y: number) {
  // Rustic tripod-style stool
  const legColor = "#3a1a05"
  const seatColor = "#5a3520"
  
  // Legs
  px(ctx, x + 1, y + 4, 1, 6, legColor) // back
  px(ctx, x - 1, y + 5, 1, 6, legColor) // front left
  px(ctx, x + 3, y + 5, 1, 6, legColor) // front right
  px(ctx, x, y + 8, 3, 1, legColor) // crossbar
  
  // Thick wooden seat
  px(ctx, x - 2, y + 2, 7, 2, seatColor)
  px(ctx, x - 1, y + 1, 5, 1, "#6b4226") // top highlight
}

function drawVintageRadio(ctx: CanvasRenderingContext2D, x: number, y: number) {
  // Detailed 1950s style Table Radio
  const bodyColor = "#8b4513"
  const dialColor = "#ffe066"
  const meshColor = "#d4c0a0"
  
  // Wood Body
  px(ctx, x, y, 10, 7, bodyColor)
  px(ctx, x + 1, y + 1, 8, 5, "#a0522d") // faceplate area
  
  // Speaker Mesh (left side)
  px(ctx, x + 2, y + 2, 3, 3, meshColor)
  for(let i=0; i<3; i++) px(ctx, x + 2 + i, y + 2, 0.5, 3, "rgba(0,0,0,0.2)") // mesh lines
  
  // Tuning Dials (right side)
  px(ctx, x + 6, y + 2, 2, 2, dialColor) // large dial
  px(ctx, x + 6.5, y + 2.5, 1, 1, "#1a0f0a") // dial center
  px(ctx, x + 6, y + 4.5, 1, 1, "#111") // small knob 1
  px(ctx, x + 7.5, y + 4.5, 1, 1, "#111") // small knob 2
  
  // Antenna
  ctx.strokeStyle = "#555"
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo((x + 8) * PIXEL, y * PIXEL)
  ctx.lineTo((x + 12) * PIXEL, (y - 5) * PIXEL)
  ctx.stroke()
}

function drawMonstera(ctx: CanvasRenderingContext2D, x: number, y: number) {
  // 1. Soil (Dark rich brown)
  px(ctx, x + 3, y + 13, 4, 1, "#3d2b1f")

  // 2. Terracotta Pot (Improved with shading and rim depth)
  const potBase = "#cd5c5c" 
  const potRim = "#e9967a"
  const potShadow = "#8b3a3a"
  const potHighlight = "#f08080"

  // Pot body with depth
  px(ctx, x + 2, y + 14, 6, 4, potBase) 
  px(ctx, x + 7, y + 14, 1, 4, potShadow) // Right side shadow
  px(ctx, x + 2, y + 14, 1, 4, potHighlight) // Left side highlight
  px(ctx, x + 2, y + 17, 6, 1, potShadow) // Bottom shadow

  // Rim with overhang
  px(ctx, x + 1, y + 12, 8, 2, potRim)
  px(ctx, x + 1, y + 13, 8, 1, potShadow) // Under-rim shadow

  // 3. Monstera Leaves (Deeper, holey, more aesthetic)
  const darkG = "#0f2e0f"     // Deepest shadow
  const midG = "#1a3c1a"      // Base green
  const lightG = "#2d5a27"    // Highlighted green
  const accentG = "#4a7c44"   // Bright edge

  // Stem structure (Improved)
  px(ctx, x + 4, y + 8, 1, 5, midG)
  px(ctx, x + 5, y + 6, 1, 7, midG)
  px(ctx, x + 3, y + 9, 1, 4, midG)

  // Top-Right Leaf (Large, overlaps bookshelf slightly)
  px(ctx, x + 6, y - 2, 7, 8, darkG)
  px(ctx, x + 7, y - 1, 5, 6, midG)
  px(ctx, x + 9, y + 1, 1, 1, "rgba(0,0,0,0.2)") // Hole shadow
  px(ctx, x + 11, y + 3, 1, 1, "rgba(0,0,0,0.2)") // Hole shadow

  // Top-Left Leaf
  px(ctx, x - 3, y + 1, 6, 7, midG)
  px(ctx, x - 2, y + 2, 4, 5, lightG)
  px(ctx, x - 1, y + 4, 1, 1, "rgba(0,0,0,0.2)")

  // Lower-Left Leaf
  px(ctx, x - 5, y + 8, 7, 6, midG)
  px(ctx, x - 4, y + 9, 5, 4, lightG)
  px(ctx, x - 2, y + 10, 1, 1, "rgba(0,0,0,0.2)")

  // Lower-Right Leaf
  px(ctx, x + 8, y + 6, 6, 7, darkG)
  px(ctx, x + 9, y + 7, 4, 5, midG)

  // Center Small Leaf (Foreground)
  px(ctx, x + 1, y + 6, 4, 5, accentG)
  px(ctx, x + 2, y + 7, 2, 3, lightG)
}

function drawGrandPiano(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const ebony = "#0a0a0a"
  const highlight = "#2a2a2a"
  const gold = "#d4af37" // For strings/interior
  const keys = "#ffffff"

  // 1. Piano Body - Curved "Harpsichord" shape
  // Main rectangular section
  px(ctx, x + 4, y, 22, 8, ebony)
  px(ctx, x + 4, y, 22, 1, highlight) // Top edge highlight
  
  // The iconic curve (Right side)
  px(ctx, x + 26, y + 1, 4, 6, ebony)
  px(ctx, x + 30, y + 2, 3, 4, ebony)
  px(ctx, x + 33, y + 3, 2, 2, ebony)

  // 2. Keyboard (Left side, facing the radio)
  // Keybed block
  px(ctx, x, y + 1, 4, 6, ebony)
  px(ctx, x, y + 1, 1, 6, highlight) // Left edge highlight
  
  // The Keys (Side profile)
  px(ctx, x - 2, y + 2, 3, 4, keys)
  for (let i = 0; i < 3; i++) {
    px(ctx, x - 1, y + 2.5 + i * 1.5, 2, 0.5, "#000") // Black keys
  }

  // 3. Propped Lid & Interior
  // Golden interior (strings) visible under the propped lid
  px(ctx, x + 6, y + 1, 18, 5, "#3a2510") // Dark interior
  for (let i = 0; i < 15; i += 2) {
    px(ctx, x + 7 + i, y + 2, 1, 3, gold) // Suggestion of strings
  }

  // The Lid (Propped up high)
  for (let i = 0; i < 12; i++) {
    const lx = x + 5 + i * 1.8
    const ly = y - 2 - i * 1.2
    px(ctx, lx, ly, 4, 1.5, ebony)
    px(ctx, lx, ly, 4, 0.5, highlight)
  }
  
  // Support stick
  px(ctx, x + 20, y - 10, 0.5, 12, gold)

  // 4. Legs (Three points of contact)
  px(ctx, x + 4, y + 8, 1.5, 8, ebony)    // Front left
  px(ctx, x + 22, y + 8, 1.5, 8, ebony)   // Front right
  px(ctx, x + 32, y + 5, 1, 6, ebony)     // Tail leg

  // 5. Piano Bench
  const bx = x - 9
  const by = y + 2
  px(ctx, bx, by, 4, 4, "#3d2b1f") // Cushion
  px(ctx, bx, by + 4, 1, 3, ebony) // Leg
  px(ctx, bx + 3, by + 4, 1, 3, ebony) // Leg
}

function drawRugWithSleepingCat(ctx: CanvasRenderingContext2D, x: number, y: number, time: number, catInteractionTime: number) {
  // Deep Teal Aesthetic Rug
  const rugColor = "#1a3a3a"
  const patternColor = "#2a5a5a"
  
  px(ctx, x, y, 28, 16, rugColor)
  px(ctx, x + 2, y + 2, 24, 12, patternColor)

  const catBody = "#f5d5a5"
  const isInteracting = time - catInteractionTime < 2000
  // Each time the user interacts, a different reaction (0-4) is selected
  const reaction = Math.floor(catInteractionTime % 5)

  // 1. Cat Body (Default position)
  px(ctx, x + 10, y + 6, 8, 5, catBody)
  px(ctx, x + 11, y + 6, 3, 3, "#d32f2f") // Orange spot
  px(ctx, x + 15, y + 7, 2, 2, "#2a2a2a") // Black spot
  
  // 2. Head & Features
  const hx = x + 8
  // Reaction 0: Head Lift
  const hy = (isInteracting && reaction === 0) ? y + 4 : y + 6 
  px(ctx, hx, hy, 5, 4, catBody)
  
  // Reaction 1: Ear Twitching
  const earOffset = (isInteracting && reaction === 1) ? Math.sin(time * 0.03) * 1.5 : 0
  px(ctx, hx, hy, 1, 1 + earOffset, "#3a1a05") 
  px(ctx, hx + 4, hy, 1, 1 + earOffset, "#3a1a05") 
  
  // Reaction 3: Animated Eyes (Squint/Open)
  if (isInteracting && reaction === 3) {
    const blink = Math.floor(time / 200) % 2 === 0
    if (blink) {
      px(ctx, hx + 1, hy + 2, 1, 1, "#000") // Eyes open
      px(ctx, hx + 3, hy + 2, 1, 1, "#000")
    } else {
      px(ctx, hx + 1, hy + 2, 1, 0.5, "#000") // Squint
      px(ctx, hx + 3, hy + 2, 1, 0.5, "#000")
    }
  } else {
    // Normal sleeping eyes
    px(ctx, hx + 1, hy + 2, 1, 0.5, "#000")
    px(ctx, hx + 3, hy + 2, 1, 0.5, "#000")
  }
  
  px(ctx, hx + 2, hy + 3, 1, 0.5, "#ff8080") // Nose

  // Reaction 2: Tail Wagging
  const tailWag = (isInteracting && reaction === 2) ? Math.sin(time * 0.02) * 4 : 0
  px(ctx, x + 18, y + 8 + tailWag, 2, 4, catBody)
  px(ctx, x + 14 + tailWag, y + 11, 5, 1, catBody)

  // Heart FX (Always show when interacting - Enlarged for visibility)
  if (isInteracting) {
    const fxY = y - 12 - Math.abs(Math.sin(time * 0.006) * 10)
    const fxX = x + 10
    
    // Vibrant Red Hearts with "shimmer"
    const heartColor = (Math.floor(time / 100) % 2 === 0) ? "#ff4040" : "#ff0000"
    
    // Main Heart
    px(ctx, fxX - 2, fxY, 2, 2, heartColor)
    px(ctx, fxX + 2, fxY, 2, 2, heartColor)
    px(ctx, fxX, fxY + 2, 2, 2, heartColor)
    px(ctx, fxX - 1, fxY + 1, 4, 2, heartColor)
    
    // Side Heart 1 (Mini)
    px(ctx, fxX - 8, fxY + 4 + Math.sin(time * 0.01) * 2, 2, 2, "#ff8080")
    
    // Side Heart 2 (Mini)
    px(ctx, fxX + 10, fxY + 2 + Math.cos(time * 0.01) * 2, 2, 2, "#ffb3b3")
  }
}

function drawPlayingPup(ctx: CanvasRenderingContext2D, baseX: number, baseY: number, time: number, variant: "golden" | "spotty") {
  // Roaming logic: Move in a small figure-eight or oval
  const offsetX = Math.sin(time * 0.001) * 15
  const offsetY = Math.cos(time * 0.0015) * 5
  const x = baseX + offsetX
  const y = baseY + offsetY

  const jump = Math.abs(Math.sin(time * 0.005)) * 3
  const wag = Math.sin(time * 0.02) * 2
  
  const bodyColor = variant === "golden" ? "#e8a857" : "#ffffff"
  const spotColor = "#3d2b1f"

  // Body
  px(ctx, x, y - jump, 6, 4, bodyColor)
  if (variant === "spotty") {
    px(ctx, x + 1, y + 1 - jump, 2, 2, spotColor)
    px(ctx, x + 4, y + 2 - jump, 1, 1, spotColor)
  }

  // Head with features
  px(ctx, x + 4, y - 3 - jump, 5, 5, bodyColor)
  px(ctx, x + 8, y - 1 - jump, 1, 1, "#000") // Nose
  px(ctx, x + 5, y - 1 - jump, 0.5, 0.5, "#000") // Eye 1
  px(ctx, x + 7, y - 1 - jump, 0.5, 0.5, "#000") // Eye 2
  
  // Ears
  const earColor = variant === "golden" ? "#c87941" : "#5a3520"
  px(ctx, x + 4, y - 4 - jump, 1.5, 2, earColor) // Flappy ear 1
  px(ctx, x + 7.5, y - 4 - jump, 1.5, 2, earColor) // Flappy ear 2

  // Tail (Wagging)
  px(ctx, x - 2, y + 1 - jump + (wag > 0 ? 0 : 1), 2, 1, bodyColor)

  // Legs
  px(ctx, x, y + 4 - (jump > 1 ? 1 : 0), 1, 2, bodyColor)
  px(ctx, x + 5, y + 4 - (jump > 1 ? 1 : 0), 1, 2, bodyColor)
}

function drawPetBowl(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const bowlColor = "#5a6a6a" // Steel blue/grey
  const foodColor = "#8b5e3c" // Kibble brown
  const waterColor = "#4facfe" // Bright water blue

  // Food Bowl
  px(ctx, x, y, 6, 3, bowlColor)
  px(ctx, x + 1, y + 1, 4, 1, foodColor)
  px(ctx, x, y, 6, 0.5, "rgba(255,255,255,0.2)") // Shine

  // Water Bowl
  px(ctx, x + 8, y, 6, 3, bowlColor)
  px(ctx, x + 9, y + 1, 4, 1, waterColor)
  px(ctx, x + 8, y, 6, 0.5, "rgba(255,255,255,0.2)") // Shine
}

function drawWallPhone(ctx: CanvasRenderingContext2D, x: number, y: number) {
  // Vintage Wall-mounted Rotary Phone
  const bodyColor = "#2a2a2a"
  const handsetColor = "#1a1a1a"
  const dialColor = "#e8d5b8"

  // Main Body (Backbox)
  px(ctx, x, y, 6, 8, bodyColor)
  px(ctx, x + 1, y + 1, 4, 6, "#333") // inner face

  // The Rotary Dial
  px(ctx, x + 2, y + 3, 2, 2, dialColor)
  px(ctx, x + 2.5, y + 3.5, 1, 1, bodyColor) // center of dial

  // The Handset (Cradle + Phone)
  px(ctx, x - 1, y, 1, 2, handsetColor) // cradle left
  px(ctx, x + 6, y, 1, 2, handsetColor) // cradle right
  
  // Handset itself (hanging on the left)
  px(ctx, x - 2, y + 1, 2, 8, handsetColor)
  px(ctx, x - 2, y + 1, 2, 2, "#000") // earpiece
  px(ctx, x - 2, y + 7, 2, 2, "#000") // mouthpiece
  
  // Coiled Cord (Simplified pixel dots)
  px(ctx, x - 1, y + 9, 1, 1, "#444")
  px(ctx, x, y + 10, 1, 1, "#444")
  px(ctx, x + 1, y + 9, 1, 1, "#444")
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
  // Exquisite Table legs with shading
  px(ctx, x + 2, y + 2, 1, 8, C.tableLeg)
  px(ctx, x + 11, y + 2, 1, 8, C.tableLeg)
  px(ctx, x + 3, y + 2, 1, 6, "rgba(0,0,0,0.1)")

  // Table top base
  px(ctx, x, y, 14, 2, C.tableTop)

  // Aesthetic Tablecloth
  px(ctx, x - 1, y - 1, 16, 1, "#ffffff") // Main top
  px(ctx, x, y, 14, 1, "#f5f5f5") // Edge
  px(ctx, x - 1, y, 1, 4, "#ffffff") // Left hang
  px(ctx, x + 14, y, 1, 4, "#ffffff") // Right hang
  px(ctx, x + 2, y + 1, 10, 3, "rgba(255,255,255,0.8)") // Center hang
  
  // Table decoration (small flower/candle)
  px(ctx, x + 6, y - 3, 2, 2, "#e8d5b8") // base
  px(ctx, x + 6, y - 4, 2, 1, "#ff4040") // flower
}

function drawChair(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  facing: "left" | "right"
) {
  // Exquisite frame with gold trim
  const frameColor = "#d4af37" // Gold
  const cushionColor = "#8b0000" // Deep red velvet

  // Cushion
  px(ctx, x, y, 5, 2, cushionColor)
  px(ctx, x + 1, y + 1, 3, 1, "rgba(255,255,255,0.1)") // highlight

  if (facing === "left") {
    px(ctx, x, y - 6, 1, 6, frameColor) // Back post
    px(ctx, x, y - 7, 4, 1, frameColor) // Top rail
    px(ctx, x + 1, y - 4, 2, 1, "#a0724a") // Wood slat
  } else {
    px(ctx, x + 4, y - 6, 1, 6, frameColor) // Back post
    px(ctx, x + 1, y - 7, 4, 1, frameColor) // Top rail
    px(ctx, x + 2, y - 4, 2, 1, "#a0724a") // Wood slat
  }

  // Legs
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
  
  // Standardized Barista (9x16 units)
  px(ctx, x + 1, by + 4, 7, 12, "#e8d5b8") // shirt
  px(ctx, x + 1, by + 6, 7, 10, C.baristaApron) // apron
  px(ctx, x + 2, by + 5, 5, 1, C.baristaApron) // strap
  
  px(ctx, x + 2.5, by, 4, 4, C.baristaSkin) // face
  px(ctx, x + 2, by - 1, 5, 2, C.baristaHair) // hair top
  px(ctx, x + 6, by, 2, 3, C.baristaHair) // hair side
  
  px(ctx, x + 3.5, by + 1.5, 1, 1, "#2a1a10") // eye
  px(ctx, x + 5.5, by + 1.5, 1, 1, "#2a1a10") // eye
  
  px(ctx, x - 0.5, by + 6, 2, 6, C.baristaSkin) // arm left
  px(ctx, x + 7.5, by + 6, 2, 6, C.baristaSkin) // arm right
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
  type:
    | "about"
    | "projects"
    | "skills"
    | "contact"
    | "resume"
    | "achievements"
    | "education"
    | "cat"
}

export function getInteractiveZones(canvasW: number): InteractiveZone[] {
  const pw = Math.floor(canvasW / PIXEL)
  const bcW = Math.floor(pw * 0.45)
  const pcW = Math.floor(pw * 0.30)
  const pcX = pw - pcW - 5

  // Layout calculations matching renderCafe
  const gapStart = 5 + bcW
  const totalGapWidth = pcX - gapStart
  const plantWidth = 14
  const shelfWidth = 24
  const spacing = Math.max(2, Math.floor((totalGapWidth - (plantWidth + shelfWidth)) / 3))
  const shelfX = gapStart + spacing + plantWidth + spacing
  const gapMid = gapStart + Math.floor(totalGapWidth / 2)

  return [
    {
      x: 12,
      y: 100,
      width: 14,
      height: 25,
      label: "Radio - Projects",
      type: "projects",
    },
    {
      x: Math.floor(pw * 0.88),
      y: 105,
      width: 24,
      height: 20,
      label: "Piano - Skills & Experience",
      type: "skills",
    },
    {
      x: shelfX - 12,
      y: 18,
      width: 34,
      height: 80,
      label: "Chalkboard - Education",
      type: "education",
    },
    {
      x: 5 + Math.floor(bcW * 0.5),
      y: 46,
      width: 8,
      height: 14,
      label: "Barista - About Me",
      type: "resume",
    },
    {
      x: 5 + Math.floor(bcW * 0.5) + 35,
      y: 34,
      width: 6,
      height: 40, // Increased height to bring interaction center closer to player path
      label: "Phone - Contact Me",
      type: "contact",
    },
    {
      x: gapMid - 10,
      y: 135,
      width: 28,
      height: 16,
      label: "Cat - Pat Me!",
      type: "cat",
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

  // Shadow
  ctx.fillStyle = "rgba(0,0,0,0.1)"
  ctx.beginPath()
  ctx.ellipse(
    (x + 4.5) * PIXEL,
    (y + 15) * PIXEL,
    6 * PIXEL,
    2 * PIXEL,
    0,
    0,
    Math.PI * 2
  )
  ctx.fill()

  // Standardized Player (9x16 units)
  // Hair (Back)
  px(ctx, x + 0.5, y + 2 + bob, 8, 10, "#5d4037")
  
  // Legs
  px(ctx, x + 2.5, y + 10 + legOffset, 2, 5, "#e0b090") 
  px(ctx, x + 5, y + 10 - legOffset, 2, 5, "#e0b090") 
  
  // Shoes
  px(ctx, x + 2.5, y + 14.5 + legOffset, 2, 1, "#d32f2f")
  px(ctx, x + 5, y + 14.5 - legOffset, 2, 1, "#d32f2f")

  // Dress
  px(ctx, x + 1, y + 4 + bob, 7, 7, "#d32f2f") 
  px(ctx, x + 0.5, y + 6 + bob, 8, 5, "#b71c1c") 

  // Arms
  px(ctx, x - 0.5, y + 5 + bob, 1.5, 5, "#e0b090") 
  px(ctx, x + 8, y + 5 + bob, 1.5, 5, "#e0b090") 

  // Head
  px(ctx, x + 2.5, y - 1 + bob, 4.5, 5, "#e0b090") 
  
  // Face
  px(ctx, x + 3.5, y + 1.5 + bob, 1, 1, "#111") 
  px(ctx, x + 5.5, y + 1.5 + bob, 1, 1, "#111") 
  px(ctx, x + 3, y + 3 + bob, 1, 1, "#ff8a80") 
  px(ctx, x + 6, y + 3 + bob, 1, 1, "#ff8a80") 

  // Hat
  px(ctx, x + 1.5, y - 3 + bob, 6, 2, "#f5d5a5") 
  px(ctx, x + 0.5, y - 1.5 + bob, 8, 1.5, "#f5d5a5") 
  px(ctx, x + 1.5, y - 1.5 + bob, 6, 0.8, "#d32f2f") 
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
  nearZone: InteractiveZone | null,
  catInteractionTime: number = 0
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

  const bcW = Math.floor(pw * 0.45)
  const pcW = Math.floor(pw * 0.30)
  const pcX = pw - pcW - 5
  
  // New Uniform Layout Logic:
  // Objects to place in gap: [Billing Counter] |Space| [Monstera] |Space| [Bookshelf] |Space| [Pastry Counter]
  const gapStart = 5 + bcW
  const gapEnd = pcX
  const totalGapWidth = gapEnd - gapStart
  
  const plantWidth = 14 // Monstera width is roughly 14 units (-5 to +9)
  const shelfWidth = 24 // GrandBookshelf width
  
  // We need 3 uniform spaces
  const totalObjectWidth = plantWidth + shelfWidth
  const spacing = Math.max(2, Math.floor((totalGapWidth - totalObjectWidth) / 3))
  
  const plantX = gapStart + spacing + 5 // +5 because drawMonstera uses x as a center-ish point
  const shelfX = gapStart + spacing + plantWidth + spacing
  const gapMid = gapStart + Math.floor(totalGapWidth / 2)
  
  // Menu Board (Shifted left for better visibility and access)
  drawChalkboard(ctx, shelfX - 12, 18, "MENU", ["Today's Special", "Latte", "Donut"])

  // Grand Bookshelf (Projects)
  drawGrandBookshelf(ctx, shelfX, 44)
  
  // Large Floor Monstera - Positioned uniformly and aligned with bookshelf base
  drawMonstera(ctx, plantX, 57)

  // Billing Counter (Left, 45%)
  drawCounter(ctx, 5, bcW)
  drawEspressoMachine(ctx, 15, 46)
  drawCashRegister(ctx, 15 + Math.floor(bcW * 0.3), 49)
  
  const baristaX = 5 + Math.floor(bcW * 0.5)
  drawBarista(ctx, baristaX, 46, time)
  
  // Wall Phone shifted further right of Barista (to ensure E prompt is accessible)
  drawWallPhone(ctx, baristaX + 35, 34)

  drawCoffeeGrinder(ctx, 5 + Math.floor(bcW * 0.8), 48)

  // Pastry Counter (Right, 30%)
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

  // Vintage Radio on Stool (Projects Station) - Moved right and down for visibility
  drawRusticStool(ctx, 16, 100)
  drawVintageRadio(ctx, 14, 93)

  // Vintage Grand Piano (Skills/Experience) - Shifted further right and flipped perspective
  drawGrandPiano(ctx, Math.floor(pw * 0.88), 105)

  // Aesthetic Rug with Sleeping Cat (Positioned further down past the tables)
  drawRugWithSleepingCat(ctx, gapMid - 10, 135, time, catInteractionTime)

  // Scattered Aesthetic Tables (7 tables scattered uniformly)
  const tablePositions = [
    // Top Row
    { x: Math.floor(pw * 0.1), y: 92 },
    { x: Math.floor(pw * 0.3), y: 90 },
    { x: Math.floor(pw * 0.5), y: 92 },
    { x: Math.floor(pw * 0.7), y: 90 },
    // Bottom Row
    { x: Math.floor(pw * 0.2), y: 120 },
    { x: Math.floor(pw * 0.45), y: 124 },
    { x: Math.floor(pw * 0.75), y: 120 },
  ]

  tablePositions.forEach((pos) => {
    drawTable(ctx, pos.x, pos.y)
    drawChair(ctx, pos.x - 4, pos.y + 2, "right")
    drawChair(ctx, pos.x + 13, pos.y + 2, "left")
  })

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
