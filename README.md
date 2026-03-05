# 🎮 Portfolio CodeCanvas

An interactive, pixel-art themed portfolio built with Next.js. Explore a cozy pixel cafe environment to discover professional information, skills, and achievements in a unique, gamified way.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- **🎨 Pixel Art Environment** - Custom pixel-art cafe rendered on Canvas
- **🎮 Interactive Gameplay** - Discover portfolio sections by interacting with objects in the cafe
- **♿ Accessible UI** - Built with Radix UI components for accessibility
- **⚡ Performance** - Server-side rendering and optimizations with Next.js
- **🐱 Easter Eggs** - Hidden cat interactions and achievements

## 📋 Sections

The portfolio includes the following interactive sections:

- **About** - Personal introduction
- **Skills** - Technical competencies
- **Contact** - Get in touch
- **Achievements** - Accomplishments
- **Education** - Academic background
- **Bonus** - Hidden cat interactions

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React meta-framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible component library
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Performant forms
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark/Light mode
- **Animations**: Custom Canvas rendering + CSS transitions
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-codecanvas.git
   cd portfolio-codecanvas
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
.
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Main portfolio page
│   ├── layout.tsx               # Root layout with theme provider
│   └── globals.css              # Global styles
├── components/
│   ├── game/                    # Game-specific components
│   │   ├── game-canvas.tsx      # Canvas rendering component
│   │   ├── game-hud.tsx         # HUD (heads-up display)
│   │   ├── mobile-controls.tsx  # Mobile touch controls
│   │   ├── pixel-cafe-renderer.ts # Pixel art cafe rendering logic
│   │   └── portfolio-panel.tsx  # Portfolio content panels
│   ├── ui/                      # Radix UI component library
│   └── theme-provider.tsx       # Theme configuration
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts           # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
├── lib/
│   └── utils.ts                # Utility functions
├── public/                      # Static assets
├── styles/                      # Global stylesheet
└── config files                 # next.config, tsconfig, etc.
```

## 🎮 How to Use

1. **Explore the Cafe** - Navigate using arrow keys or WASD (desktop) or touch controls (mobile)
2. **Interact with Objects** - Click on cafe items to reveal portfolio information
3. **Discover Sections** - Each interaction reveals a new portfolio section
4. **Collect All** - Try to interact with all items to unlock all content
5. **Pet the Cat** 🐱 - Find and interact with the hidden cat character

## 🎨 Customization

### Update Portfolio Content

Edit `/app/page.tsx` to modify:

- Portfolio sections and their data
- Interaction types
- Achievement system

### Modify Cafe Design

Edit `/components/game/pixel-cafe-renderer.ts` to customize:

- Color palette (color constants at the top)
- Layout and positions
- Interactive objects

### Change Theme Colors

Update Tailwind configuration in `tailwind.config.ts` or modify theme variables in `/components/theme-provider.tsx`

## 📦 Build & Deploy

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

### Deploy to Vercel

The easiest way to deploy is to use [Vercel](https://vercel.com):

```bash
# Using Vercel CLI
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 🧹 Code Quality

### Linting

```bash
pnpm lint
```

Linting is configured with ESLint. Adjust rules in `.eslintrc.json`.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs via issues
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Happy exploring! 🚀**
