'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import SectionHeading from '../SectionHeading/SectionHeading'

interface SkillPill {
  name: string
  category: 'Languages' | 'Frontend' | 'Backend' | 'IoT & Hardware' | 'Databases' | 'DevOps & Tools'
  color: string
  icon: string
}

const allSkills: SkillPill[] = [
  // Languages
  { name: 'C Programming', category: 'Languages', color: '#3b82f6', icon: '💻' },
  { name: 'Embedded C', category: 'Languages', color: '#60a5fa', icon: '⚡' },
  { name: 'C++', category: 'Languages', color: '#00599C', icon: '⚙️' },
  { name: 'Python', category: 'Languages', color: '#3776AB', icon: '🐍' },
  { name: 'TypeScript', category: 'Languages', color: '#3178C6', icon: '📘' },
  { name: 'Bash / Linux Shell', category: 'Languages', color: '#4EAA25', icon: '🐧' },

  // IoT & Hardware
  { name: 'ESP32 & ESP32-S3', category: 'IoT & Hardware', color: '#E7352C', icon: '📡' },
  { name: 'Arduino (ATmega328P)', category: 'IoT & Hardware', color: '#00979D', icon: '🔌' },
  { name: 'Raspberry Pi', category: 'IoT & Hardware', color: '#C51A4A', icon: '🍓' },
  { name: 'FreeRTOS', category: 'IoT & Hardware', color: '#45B8AC', icon: '⏱️' },
  { name: 'Arduino Cloud', category: 'IoT & Hardware', color: '#008184', icon: '☁️' },
  { name: 'Blynk IoT', category: 'IoT & Hardware', color: '#24C97E', icon: '📲' },
  { name: 'Cisco Packet Tracer', category: 'IoT & Hardware', color: '#1BA0D7', icon: '🌐' },
  { name: 'SPI / I2C / UART Buses', category: 'IoT & Hardware', color: '#F59E0B', icon: '🔗' },

  // Frontend
  { name: 'HTML5', category: 'Frontend', color: '#E34F26', icon: '📄' },
  { name: 'CSS3', category: 'Frontend', color: '#1572B6', icon: '🎨' },
  { name: 'Bootstrap', category: 'Frontend', color: '#7952B3', icon: '🅱️' },

  // Backend
  { name: 'Python Flask', category: 'Backend', color: '#000000', icon: '🌶️' },
  { name: 'WebSockets', category: 'Backend', color: '#010101', icon: '⚡' },
  { name: 'Firebase', category: 'Backend', color: '#FFCA28', icon: '🔥' },

  // Databases
  { name: 'MySQL', category: 'Databases', color: '#4479A1', icon: '🗄️' },
  { name: 'Supabase', category: 'Databases', color: '#3ECF8E', icon: '⚡' },
  { name: 'Firebase Firestore', category: 'Databases', color: '#FFA000', icon: '🔥' },

  // DevOps & Tools
  { name: 'Git', category: 'DevOps & Tools', color: '#F05032', icon: '🌿' },
  { name: 'GitHub', category: 'DevOps & Tools', color: '#FFFFFF', icon: '🐙' },
  { name: 'Docker', category: 'DevOps & Tools', color: '#2496ED', icon: '🐳' },
  { name: 'Vercel', category: 'DevOps & Tools', color: '#FFFFFF', icon: '▲' },
  { name: 'Render.com', category: 'DevOps & Tools', color: '#46E3B7', icon: '🚀' },
  { name: 'Google Cloud (GCP)', category: 'DevOps & Tools', color: '#4285F4', icon: '☁️' },
  { name: 'VS Code', category: 'DevOps & Tools', color: '#007ACC', icon: '📝' },
  { name: 'Figma', category: 'DevOps & Tools', color: '#F24E1E', icon: '🎨' },
  { name: 'Postman', category: 'DevOps & Tools', color: '#FF6C37', icon: '📬' },
  { name: 'Notion', category: 'DevOps & Tools', color: '#FFFFFF', icon: '📓' },
]

const categories = [
  'All',
  'Frontend',
  'Backend',
  'IoT & Hardware',
  'Databases',
  'DevOps & Tools',
] as const

const languagesList = allSkills.filter((s) => s.category === 'Languages')

const InteractiveSkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All')

  const filteredSkills =
    activeTab === 'All'
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeTab)

  return (
    <section id="skills" className="mb-12 scroll-mt-24">
      <SectionHeading
        title="SKILLS & PROFICIENCY"
        subtitle="Technologies, Hardware Platforms, Frameworks & Development Tools"
      />

      <div className="mt-8 rounded-3xl border border-border/80 bg-secondary/80 p-6 md:p-10 shadow-2xl backdrop-blur-md">
        {/* Top Highlighted Languages Bar */}
        <div className="mb-10 flex flex-col items-center">
          <span className="text-[11px] font-bold font-mono tracking-[0.25em] text-neutral uppercase mb-4 opacity-75">
            CORE LANGUAGES & SCRIPTING
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl">
            {languagesList.map((lang) => (
              <div
                key={lang.name}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-primary/70 hover:border-accent/60 hover:bg-primary transition-all duration-300 shadow-sm cursor-default hover:scale-105">
                <span className="text-xs">{lang.icon}</span>
                <span className="text-xs font-semibold text-neutral group-hover:text-accent transition-colors">
                  {lang.name}
                </span>
                <span
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs matching sample image */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-primary/90 border border-border shadow-inner max-w-full overflow-x-auto">
            {categories.map((cat) => {
              const isActive = activeTab === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-accent text-[#00071E] font-bold shadow-md shadow-accent/20 scale-105'
                      : 'text-neutral hover:text-accent hover:bg-secondary/60'
                  }`}>
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Pill Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-3.5 max-w-4xl mx-auto min-h-[160px] py-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-2.5 px-4 py-2 rounded-xl border border-border/80 bg-primary/60 hover:bg-primary hover:border-accent/70 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-0.5 cursor-default">
              <span className="text-sm">{skill.icon}</span>
              <span className="text-xs md:text-sm font-medium text-primary-content group-hover:text-neutral transition-colors">
                {skill.name}
              </span>
              <span
                className="size-2 rounded-full transition-transform group-hover:scale-125"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          ))}
        </div>

        {/* Direct Link to full Skills & Expertise Breakdown */}
        <div className="mt-8 pt-6 border-t border-border/60 flex justify-center">
          <Link
            href="/skills"
            className="text-xs font-mono font-bold text-accent hover:underline flex items-center gap-1 transition-all">
            View Complete Proficiency & Skill Domains Breakdown →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default InteractiveSkillsSection
