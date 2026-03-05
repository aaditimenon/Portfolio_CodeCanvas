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
  Trophy,
  GraduationCap,
} from "lucide-react"

interface PortfolioPanelProps {
  type:
    | "about"
    | "projects"
    | "skills"
    | "contact"
    | "resume"
    | "achievements"
    | "education"
  onClose: () => void
}

const panelContent = {
  about: {
    title: "Welcome",
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
    title: "Research Projects",
    subtitle: "Signals from the Radio",
    content: (
      <div className="flex flex-col gap-6">
        {[
          {
            name: "1. Comparative Risk Assessment of VRUs and AVs",
            overview: "Research project analyzing the comparative risk assessment of Vulnerable Road Users (VRUs) and Autonomous Vehicles (AVs) across urban intersections using advanced data analytics.",
            desc: "This project focuses on developing a comprehensive framework for assessing and comparing risks between Vulnerable Road Users (VRUs) such as pedestrians and cyclists, and Autonomous Vehicles (AVs) at urban intersections. The study employs data-driven methodologies to analyze traffic patterns, collision scenarios, and safety metrics to improve urban transportation safety.",
            features: [
              "Risk assessment modeling for VRUs and AVs",
              "Urban intersection data analysis",
              "Statistical evaluation of safety metrics",
              "Predicting modeling for accident prevention",
              "Comparative analysis framework"
            ],
            tech: ["Python", "Data Analysis", "Machine Learning", "Statistical Modeling", "Research"],
            github: "https://github.com/aaditimenon"
          },
          {
            name: "2. Context-Aware DDoS Detection for 5G V2X Networks",
            overview: "Intelligent DDoS detection system designed specifically for 5G Vehicle-to-Everything (V2X) networks, leveraging context-aware mechanisms to enhance network security and reliability.",
            desc: "This project presents a novel context-aware DDoS detection system tailored for 5G Vehicle-to-Everything (V2X) networks. As V2X communication becomes critical for autonomous driving and smart transportation, securing these networks against Distributed Denial of Service (DDoS) attacks is paramount.",
            features: [
              "Real-time traffic analysis and anomaly detection",
              "Context-aware filtering mechanisms",
              "Machine learning-based threat classification",
              "5G network optimization for V2X communication",
              "Automated response and mitigation strategies"
            ],
            tech: ["Python", "Machine Learning", "Network Security", "5G Networks", "V2X Communication", "Cybersecurity"],
            github: "https://github.com/aaditimenon"
          }
        ].map((project) => (
          <div
            key={project.name}
            className="p-4 rounded-xl border border-[#4a2e1c] bg-[#2a1a10]/80 hover:border-[#c87941] transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[#e8a857] font-bold text-base">
                {project.name}
              </h3>
            </div>
            
            <p className="text-[#f5e6d3] text-xs font-semibold mb-2">
              {project.overview}
            </p>
            
            <p className="text-[#a68b6b] text-xs leading-relaxed mb-3">
              {project.desc}
            </p>

            <div className="flex flex-col gap-1 mb-4">
              <p className="text-[10px] text-[#e8a857] uppercase font-bold tracking-wider">Key Features:</p>
              {project.features.map(f => (
                <p key={f} className="text-[10px] text-[#d4c0a0] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#c87941]" /> {f}
                </p>
              ))}
            </div>

            <div className="flex gap-2 mb-4 flex-wrap">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[9px] px-2 py-0.5 rounded-md bg-[#4a2e1c] text-[#c87941] border border-[#6b4226]"
                >
                  {t}
                </span>
              ))}
            </div>

            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#c87941] hover:text-[#e8a857] transition-colors font-bold"
            >
              <Github className="w-4 h-4" />
              View on GitHub →
            </a>
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
    title: "About Me",
    subtitle: "The Barista speaks...",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-[#d4c0a0] leading-relaxed">
          I'm a passionate developer focused on bringing ideas to life through creative coding and data science. My work combines curiosity for machine learning and practical software engineering to build innovative solutions and share knowledge with the tech community.
        </p>
        <p className="text-[#d4c0a0] leading-relaxed">
          Actively contributing to open-source, I enjoy collaborating, exploring data, and continually expanding my skillset. Whether it's researching urban mobility or developing intelligent network solutions, I’m driven by the challenge of solving real-world problems and creating something meaningful.
        </p>
      </div>
    ),
  },
  achievements: {
    title: "Achievements",
    subtitle: "Sweet success!",
    content: (
      <div className="flex flex-col gap-5">
        <div className="p-4 rounded-xl border border-[#4a2e1c] bg-[#2a1a10]/60 hover:border-[#c87941] transition-all group">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-[#c87941]/10 text-[#c87941]">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#e8a857] font-bold text-sm leading-tight">
                IEEE SoutheastCon 2026 Research Publication
              </h3>
              <p className="text-[#d4c0a0] text-xs leading-relaxed italic">
                Co-authored and presented "Comparative Risk Assessment of Vulnerable Road Users (VRUs) and Autonomous Vehicles (AVs) at Urban Intersections," contributing to the field of autonomous safety and urban mobility.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#4a2e1c] bg-[#2a1a10]/60 hover:border-[#c87941] transition-all group">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-[#c87941]/10 text-[#c87941]">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#e8a857] font-bold text-sm leading-tight">
                Hacktoberfest 2025 SuperContributor
              </h3>
              <p className="text-[#d4c0a0] text-xs leading-relaxed italic">
                Awarded the official "SuperContributor" designation for successful open-source pull requests across global repositories; recognized for high-quality code contributions with an official community badge and environmental honors.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  education: {
    title: "Education",
    subtitle: "My Academic Journey",
    content: (
      <div className="flex flex-col gap-5">
        <div className="p-4 rounded-xl border border-[#4a2e1c] bg-[#2a1a10]/60 hover:border-[#c87941] transition-all group">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-[#c87941]/10 text-[#c87941]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#e8a857] font-bold text-sm leading-tight">
                Symbiosis Institute of Technology | Nagpur
              </h3>
              <p className="text-[#d4c0a0] text-xs leading-relaxed">
                B.Tech Computer Science and Engineering (2023-27)
              </p>
              <p className="text-[#c87941] text-xs font-bold mt-1">GPA: 8.69</p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#4a2e1c] bg-[#2a1a10]/60 hover:border-[#c87941] transition-all group">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-[#c87941]/10 text-[#c87941]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#e8a857] font-bold text-sm leading-tight">
                Indian Institute of Technology, Madras | Chennai
              </h3>
              <p className="text-[#d4c0a0] text-xs leading-relaxed">
                BS Data Science (Foundation)
              </p>
              <p className="text-[#c87941] text-xs font-bold mt-1">GPA: 7.25</p>
            </div>
          </div>
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
