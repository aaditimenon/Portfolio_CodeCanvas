"use client"

import {
  X,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  FileText,
  Code,
  Palette,
  Zap,
} from "lucide-react"

interface PortfolioPanelProps {
  type: "about" | "projects" | "skills" | "contact" | "resume"
  onClose: () => void
}

const panelContent = {
  about: {
    title: "About Me",
    subtitle: "Welcome to my cafe!",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-[#d4c0a0] leading-relaxed">
          Hey there! I am a passionate developer who loves crafting beautiful,
          functional web experiences. Think of this cafe as my creative space
          where code meets design.
        </p>
        <p className="text-[#d4c0a0] leading-relaxed">
          When I am not coding, you will find me exploring new technologies,
          contributing to open source, and brewing the perfect cup of coffee.
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-3 text-[#e8a857]">
            <Code className="w-4 h-4" />
            <span className="text-sm text-[#d4c0a0]">
              Full-Stack Developer
            </span>
          </div>
          <div className="flex items-center gap-3 text-[#e8a857]">
            <Palette className="w-4 h-4" />
            <span className="text-sm text-[#d4c0a0]">UI/UX Enthusiast</span>
          </div>
          <div className="flex items-center gap-3 text-[#e8a857]">
            <Zap className="w-4 h-4" />
            <span className="text-sm text-[#d4c0a0]">Performance Focused</span>
          </div>
        </div>
      </div>
    ),
  },
  projects: {
    title: "My Projects",
    subtitle: "Today's Specials",
    content: (
      <div className="flex flex-col gap-4">
        {[
          {
            name: "Project Espresso",
            desc: "A full-stack e-commerce platform built with Next.js and Stripe",
            tech: ["Next.js", "TypeScript", "Stripe"],
          },
          {
            name: "Project Latte",
            desc: "Real-time collaboration tool with WebSocket communication",
            tech: ["React", "Node.js", "Socket.io"],
          },
          {
            name: "Project Mocha",
            desc: "AI-powered content management system with smart categorization",
            tech: ["Python", "TensorFlow", "React"],
          },
          {
            name: "Project Cappuccino",
            desc: "Mobile-first social platform with geolocation features",
            tech: ["React Native", "Firebase", "Maps API"],
          },
        ].map((project) => (
          <div
            key={project.name}
            className="p-3 rounded-lg border border-[#4a2e1c] bg-[#2a1a10]/80 hover:border-[#c87941] transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[#e8a857] font-bold text-sm">
                {project.name}
              </h3>
              <ExternalLink className="w-3.5 h-3.5 text-[#a68b6b] group-hover:text-[#c87941] transition-colors" />
            </div>
            <p className="text-[#a68b6b] text-xs mt-1 leading-relaxed">
              {project.desc}
            </p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-[#4a2e1c] text-[#c87941] border border-[#6b4226]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  skills: {
    title: "Skills & Tools",
    subtitle: "My Toolkit",
    content: (
      <div className="flex flex-col gap-4">
        {[
          {
            category: "Frontend",
            skills: [
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Three.js",
            ],
          },
          {
            category: "Backend",
            skills: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
          },
          {
            category: "DevOps",
            skills: [
              "Docker",
              "AWS",
              "Vercel",
              "GitHub Actions",
              "Terraform",
            ],
          },
          {
            category: "Design",
            skills: ["Figma", "Framer", "Pixel Art", "UI/UX", "Motion"],
          },
        ].map((group) => (
          <div key={group.category}>
            <h3 className="text-[#e8a857] font-bold text-xs uppercase tracking-wider mb-2">
              {group.category}
            </h3>
            <div className="flex gap-2 flex-wrap">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-md bg-[#3d2618] text-[#d4c0a0] border border-[#4a2e1c] hover:border-[#c87941] hover:text-[#e8a857] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Looking outside the window",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-[#d4c0a0] leading-relaxed text-sm">
          I am always open to new opportunities, collaborations, or just a
          friendly chat about tech and coffee.
        </p>
        <div className="flex flex-col gap-3 mt-2">
          {[
            {
              icon: Mail,
              label: "hello@example.com",
              href: "mailto:hello@example.com",
            },
            {
              icon: Github,
              label: "github.com/yourname",
              href: "https://github.com",
            },
            {
              icon: Linkedin,
              label: "linkedin.com/in/yourname",
              href: "https://linkedin.com",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-[#4a2e1c] bg-[#2a1a10]/60 hover:border-[#c87941] transition-all group"
            >
              <link.icon className="w-4 h-4 text-[#c87941]" />
              <span className="text-sm text-[#d4c0a0] group-hover:text-[#e8a857] transition-colors">
                {link.label}
              </span>
              <ExternalLink className="w-3 h-3 text-[#a68b6b] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    ),
  },
  resume: {
    title: "Resume",
    subtitle: "The Barista speaks...",
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-3 rounded-lg border border-[#4a2e1c] bg-[#2a1a10]/60">
          <FileText className="w-5 h-5 text-[#c87941]" />
          <div>
            <p className="text-sm text-[#d4c0a0] font-medium">
              Download Resume
            </p>
            <p className="text-xs text-[#a68b6b]">
              PDF format, last updated 2026
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <h3 className="text-[#e8a857] font-bold text-xs uppercase tracking-wider">
            Experience
          </h3>
          {[
            {
              role: "Senior Developer",
              company: "TechCafe Inc.",
              period: "2024 - Present",
            },
            {
              role: "Full-Stack Developer",
              company: "BrewCode Studio",
              period: "2022 - 2024",
            },
            {
              role: "Frontend Developer",
              company: "PixelBean Labs",
              period: "2020 - 2022",
            },
          ].map((exp) => (
            <div key={exp.role} className="pl-3 border-l-2 border-[#4a2e1c]">
              <p className="text-sm text-[#d4c0a0] font-medium">{exp.role}</p>
              <p className="text-xs text-[#a68b6b]">{exp.company}</p>
              <p className="text-xs text-[#8b6e50]">{exp.period}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
}

export default function PortfolioPanel({ type, onClose }: PortfolioPanelProps) {
  const panel = panelContent[type]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#1a0f0a]/80 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md max-h-[80vh] overflow-hidden rounded-xl border-2 border-[#4a2e1c] bg-[#1a0f0a]/95 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow:
            "0 0 60px rgba(200, 121, 65, 0.15), 0 0 120px rgba(232, 168, 87, 0.05)",
        }}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#4a2e1c]">
          <div>
            <h2 className="text-lg font-bold text-[#f5e6d3]">
              {panel.title}
            </h2>
            <p className="text-xs text-[#a68b6b]">{panel.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-[#4a2e1c] hover:border-[#c87941] hover:bg-[#2a1a10] transition-all"
            aria-label="Close panel"
          >
            <X className="w-4 h-4 text-[#a68b6b]" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
          {panel.content}
        </div>

        <div className="px-4 py-3 border-t border-[#4a2e1c] flex items-center justify-between">
          <p className="text-[10px] text-[#8b6e50] uppercase tracking-widest">
            Press ESC to close
          </p>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#c87941]"
                style={{ opacity: 0.3 + i * 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
