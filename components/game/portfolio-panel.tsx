"use client"

import { useState } from "react"
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
    title: "Skills & Experience",
    subtitle: "Harmony of Code and Research",
    content: (
      <div className="flex flex-col gap-6">
        {/* Experience Section */}
        <div>
          <h3 className="text-[#e8a857] font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <Trophy className="w-4 h-4" /> Professional Experience
          </h3>
          <div className="p-4 rounded-xl border border-[#4a2e1c] bg-[#2a1a10]/60 hover:border-[#c87941] transition-all group">
            <h4 className="text-[#f5e6d3] font-bold text-sm">Undergraduate Student Researcher</h4>
            <p className="text-[#c87941] text-xs font-semibold leading-tight mt-1">
              Kennesaw State University - Southern Polytechnic College of Engineering and Engineering Technology
            </p>
            <p className="text-[#a68b6b] text-[10px] uppercase font-bold tracking-tighter mt-1 mb-3 opacity-80">
              Internship | Feb 2025 - Jul 2025
            </p>
            <p className="text-[#d4c0a0] text-xs leading-relaxed italic border-l-2 border-[#c87941]/30 pl-3">
              "Worked under Dr. Sumit Chakravarty Sir, on comparative risk assessment of VRUs and AVs across urban intersections."
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#e8a857] font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-2">
            <Zap className="w-4 h-4" /> Technical Arsenal
          </h3>
          {[
            { category: "Languages", skills: ["Python", "SQL", "C"] },
            { category: "Frameworks", skills: ["Pandas", "Numpy", "Matplotlib"] },
            { category: "Tools", skills: ["Power BI", "Power Point", "Excel", "SQLPlus"] },
            { category: "Platforms", skills: ["Jupyter Notebook", "Visual Studio Code"] },
            { category: "Soft Skills", skills: ["Problem Solving", "Attention to details", "Analytical Thinking", "Time Management", "Team Collaboration"] },
          ].map((group) => (
            <div key={group.category} className="flex flex-col gap-2">
              <span className="text-[10px] text-[#a68b6b] font-bold uppercase tracking-tight">{group.category}</span>
              <div className="flex gap-2 flex-wrap">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#3d2618] text-[#d4c0a0] border border-[#4a2e1c] hover:border-[#c87941] hover:text-[#f5e6d3] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  contact: {
    title: "Order Me",
    subtitle: "Ring the bell for a conversation",
    content: (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-[#e8a857] font-bold text-xs uppercase tracking-wider">
            Connected Lines
          </p>
          {[
            {
              icon: Mail,
              label: "Email Me",
              value: "saaditimenon@gmail.com",
              href: "mailto:saaditimenon@gmail.com",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "github.com/aaditimenon",
              href: "https://github.com/aaditimenon",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "linkedin.com/in/aaditimenon",
              href: "https://www.linkedin.com/in/aaditimenon/",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl border border-[#4a2e1c] bg-[#2a1a10]/60 hover:border-[#c87941] transition-all group"
            >
              <div className="p-2 rounded-lg bg-[#c87941]/10 text-[#c87941] group-hover:bg-[#c87941]/20 transition-colors">
                <link.icon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#a68b6b] uppercase font-bold tracking-tight">
                  {link.label}
                </span>
                <span className="text-sm text-[#d4c0a0] group-hover:text-[#f5e6d3] transition-colors">
                  {link.value}
                </span>
              </div>
              <ExternalLink className="w-3 h-3 text-[#a68b6b] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[#e8a857] font-bold text-xs uppercase tracking-wider">
            Leave a Message
          </p>
          <form 
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message feature would be connected to a backend here!");
            }}
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-[#a68b6b] uppercase font-bold px-1">Your Name</label>
              <input 
                type="text" 
                placeholder="What should I call you?"
                className="w-full bg-[#1a0f0a] border border-[#4a2e1c] rounded-lg p-3 text-sm text-[#f5e6d3] focus:outline-none focus:border-[#c87941] placeholder:text-[#4a2e1c]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-[#a68b6b] uppercase font-bold px-1">Message</label>
              <textarea 
                placeholder="How can I help you today?"
                rows={3}
                className="w-full bg-[#1a0f0a] border border-[#4a2e1c] rounded-lg p-3 text-sm text-[#f5e6d3] focus:outline-none focus:border-[#c87941] placeholder:text-[#4a2e1c] resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#c87941] text-[#1a0f0a] font-bold py-3 rounded-lg hover:bg-[#e8a857] transition-all shadow-lg active:scale-[0.98]"
            >
              Place Order (Send Message)
            </button>
          </form>
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
          I'm Aaditi Menon, a passionate developer focused on bringing ideas to life through creative coding and data science. My work combines curiosity for machine learning and practical software engineering to build innovative solutions and share knowledge with the tech community.
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
  cat: {
    title: "Mochi the Cat",
    subtitle: "The cafe's quietest resident",
    content: null, // Handled by custom logic in the component
  }
}

const catReactions = [
  { text: "Mochi purrs loudly as you pat her head.", icon: "🐱" },
  { text: "Mochi stretches her paws and looks at you with half-closed eyes.", icon: "🐾" },
  { text: "Mochi gives you a gentle headbutt. She seems to like you!", icon: "✨" },
  { text: "Mochi rolls over, showing her belly. A sign of true trust.", icon: "🧡" },
  { text: "Mochi lets out a tiny, soft 'mew' and goes back to sleep.", icon: "💤" },
];

export default function PortfolioPanel({ type, onClose }: PortfolioPanelProps) {
  const panel = panelContent[type]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [catReactionIdx, setCatReactionIdx] = useState(0)
  const [isPatting, setIsPatting] = useState(false)

  const handlePatCat = () => {
    setIsPatting(true);
    setTimeout(() => {
      setIsPatting(false);
      setCatReactionIdx((prev) => (prev + 1) % catReactions.length);
    }, 600);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate backend API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Close panel after showing success message
    setTimeout(() => {
      onClose()
    }, 2500)
  }

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
          {type === 'cat' ? (
            <div className="flex flex-col items-center gap-6 py-4">
              <div className="relative group cursor-pointer" onClick={handlePatCat}>
                <div className={`text-6xl transition-all duration-300 ${isPatting ? 'scale-110 -translate-y-2' : 'group-hover:scale-105'}`}>
                  🐱
                </div>
                {isPatting && (
                  <div className="absolute -top-4 -right-2 text-2xl animate-bounce">
                    ✨
                  </div>
                )}
              </div>
              
              <div className="bg-[#2a1a10]/60 p-6 rounded-2xl border border-[#4a2e1c] text-center w-full min-h-[140px] flex flex-col items-center justify-center gap-4 transition-all duration-500">
                <span className="text-3xl animate-pulse">
                  {catReactions[catReactionIdx].icon}
                </span>
                <p className="text-[#f5e6d3] italic leading-relaxed">
                  "{catReactions[catReactionIdx].text}"
                </p>
              </div>

              <button
                onClick={handlePatCat}
                disabled={isPatting}
                className="w-full bg-[#c87941] text-[#1a0f0a] font-bold py-4 rounded-xl hover:bg-[#e8a857] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                <Palette className={`w-5 h-5 transition-transform ${isPatting ? 'rotate-12' : 'group-hover:-rotate-12'}`} />
                Pat Mochi the Cat
              </button>
              
              <p className="text-[10px] text-[#a68b6b] uppercase font-bold tracking-widest opacity-60">
                Interactions: {catReactionIdx + 1} / {catReactions.length}
              </p>
            </div>
          ) : type === 'contact' && isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-[#c87941]/20 rounded-full flex items-center justify-center mb-4 text-[#c87941]">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#f5e6d3] mb-2">Order Placed!</h3>
              <p className="text-[#a68b6b] italic text-lg">"Visit Again!"</p>
              <p className="text-[#d4c0a0] text-sm mt-4 opacity-60">Closing phone line...</p>
            </div>
          ) : (
            type === 'contact' ? (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <p className="text-[#e8a857] font-bold text-xs uppercase tracking-wider">
                    Connected Lines
                  </p>
                  {[
                    {
                      icon: Mail,
                      label: "Email Me",
                      value: "saaditimenon@gmail.com",
                      href: "mailto:saaditimenon@gmail.com",
                    },
                    {
                      icon: Github,
                      label: "GitHub",
                      value: "github.com/aaditimenon",
                      href: "https://github.com/aaditimenon",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "linkedin.com/in/aaditimenon",
                      href: "https://www.linkedin.com/in/aaditimenon/",
                    },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-[#4a2e1c] bg-[#2a1a10]/60 hover:border-[#c87941] transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-[#c87941]/10 text-[#c87941] group-hover:bg-[#c87941]/20 transition-colors">
                        <link.icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#a68b6b] uppercase font-bold tracking-tight">
                          {link.label}
                        </span>
                        <span className="text-sm text-[#d4c0a0] group-hover:text-[#f5e6d3] transition-colors">
                          {link.value}
                        </span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-[#a68b6b] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-[#e8a857] font-bold text-xs uppercase tracking-wider">
                    Leave a Message
                  </p>
                  <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-[#a68b6b] uppercase font-bold px-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="What should I call you?"
                        className="w-full bg-[#1a0f0a] border border-[#4a2e1c] rounded-lg p-3 text-sm text-[#f5e6d3] focus:outline-none focus:border-[#c87941] placeholder:text-[#4a2e1c]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-[#a68b6b] uppercase font-bold px-1">Message</label>
                      <textarea 
                        required
                        placeholder="How can I help you today?"
                        rows={3}
                        className="w-full bg-[#1a0f0a] border border-[#4a2e1c] rounded-lg p-3 text-sm text-[#f5e6d3] focus:outline-none focus:border-[#c87941] placeholder:text-[#4a2e1c] resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#c87941] text-[#1a0f0a] font-bold py-3 rounded-lg hover:bg-[#e8a857] transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#1a0f0a]/30 border-t-[#1a0f0a] rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Place Order (Send Message)"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            ) : panel.content
          )}
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
