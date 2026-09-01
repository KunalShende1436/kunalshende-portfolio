import {
  JavaScriptIcon,
  TypescriptIcon,
  ReactIcon,
  NextjsIcon,
  NodejsIcon,
  SocketIcon,
  ArduinoIDEIcon,
  PythonIcon,
  TailwindCSS,
} from '@/utils/icons'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import type { Metadata } from 'next'
import InteractiveSkillsSection from '@/components/Skills/InteractiveSkillsSection'

export const metadata: Metadata = {
  title: 'Skills & Proficiency | Kunal M Shende',
  description: 'Comprehensive breakdown of Kunal M Shende\'s technical skills across Embedded Systems, IoT, Cybersecurity, Frontend, Backend, Databases, and DevOps Tools.',
}

interface SkillItem {
  name: string
  level: string
  percentage: number
  category: string
}

interface SkillGroup {
  title: string
  badge: string
  skills: SkillItem[]
}

const detailedSkillGroups: SkillGroup[] = [
  {
    title: 'Programming & Scripting Languages',
    badge: 'Core',
    skills: [
      { name: 'C Programming', level: 'Advanced', percentage: 95, category: 'Low-Level' },
      { name: 'Embedded C', level: 'Advanced', percentage: 94, category: 'Hardware' },
      { name: 'C++', level: 'Advanced', percentage: 92, category: 'OOP & Systems' },
      { name: 'Python', level: 'Advanced', percentage: 90, category: 'General & Scripting' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', percentage: 88, category: 'Web' },
      { name: 'TypeScript', level: 'Advanced', percentage: 85, category: 'Typed Web' },
      { name: 'Bash / Linux Shell Scripting', level: 'Intermediate', percentage: 84, category: 'CLI & Automation' },
    ],
  },
  {
    title: 'IoT & Embedded Hardware',
    badge: 'Electronics & Firmware',
    skills: [
      { name: 'ESP32 & ESP32-S3 Microcontrollers', level: 'Advanced', percentage: 96, category: 'SoC Architecture' },
      { name: 'Arduino (ATmega328P)', level: 'Advanced', percentage: 94, category: 'Microcontrollers' },
      { name: 'Raspberry Pi', level: 'Advanced', percentage: 88, category: 'SBC & Linux' },
      { name: 'FreeRTOS & Multi-Threading', level: 'Advanced', percentage: 90, category: 'RTOS' },
      { name: 'Arduino Cloud & Blynk IoT', level: 'Advanced', percentage: 90, category: 'Cloud Telemetry' },
      { name: 'Cisco Packet Tracer', level: 'Advanced', percentage: 86, category: 'Network Topology' },
      { name: 'SPI, I2C, UART, ADC & Timers (TCCR0B)', level: 'Advanced', percentage: 92, category: 'Bus Protocols' },
    ],
  },
  {
    title: 'Frontend & UI Architecture',
    badge: 'Client Interfaces',
    skills: [
      { name: 'HTML5 & CSS3', level: 'Advanced', percentage: 95, category: 'Web Standards' },
      { name: 'JavaScript (DOM & Async)', level: 'Advanced', percentage: 90, category: 'Client Logic' },
      { name: 'Bootstrap & Tailwind CSS', level: 'Advanced', percentage: 92, category: 'Responsive Styling' },
      { name: 'React.js & Next.js', level: 'Advanced', percentage: 86, category: 'Component Frameworks' },
    ],
  },
  {
    title: 'Backend & Telemetry Services',
    badge: 'Server & Protocols',
    skills: [
      { name: 'Python Flask', level: 'Advanced', percentage: 90, category: 'Microservices' },
      { name: 'Node.js & Express.js', level: 'Advanced', percentage: 86, category: 'Async Runtimes' },
      { name: 'WebSockets & Real-Time Streams', level: 'Advanced', percentage: 90, category: 'Low-Latency IO' },
      { name: 'Firebase Backend Services', level: 'Advanced', percentage: 88, category: 'Cloud Functions' },
      { name: 'RESTful API Architecture', level: 'Advanced', percentage: 92, category: 'API Design' },
    ],
  },
  {
    title: 'Databases & Storage',
    badge: 'Data Layer',
    skills: [
      { name: 'MySQL', level: 'Advanced', percentage: 88, category: 'Relational RDBMS' },
      { name: 'Supabase', level: 'Advanced', percentage: 86, category: 'Postgres BaaS' },
      { name: 'Firebase Firestore & Realtime DB', level: 'Advanced', percentage: 88, category: 'NoSQL Cloud' },
      { name: 'PostgreSQL & SQLite', level: 'Intermediate', percentage: 84, category: 'Embedded & SQL' },
    ],
  },
  {
    title: 'DevOps, Cloud & Engineering Tools',
    badge: 'Workflow & Tooling',
    skills: [
      { name: 'Git & GitHub Version Control', level: 'Advanced', percentage: 95, category: 'VCS' },
      { name: 'Docker Containerization', level: 'Intermediate', percentage: 82, category: 'Containers' },
      { name: 'Vercel & Render.com Deployments', level: 'Advanced', percentage: 90, category: 'CI/CD & PaaS' },
      { name: 'Google Cloud Platform (GCP)', level: 'Intermediate', percentage: 80, category: 'Cloud Infrastructure' },
      { name: 'VS Code, Postman, Figma, Notion', level: 'Advanced', percentage: 94, category: 'Productivity & Prototyping' },
    ],
  },
]

export default function SkillsPage() {
  return (
    <main className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem] min-h-[70vh] space-y-12">
      {/* Interactive Chip/Pill Filter Section */}
      <InteractiveSkillsSection />

      <div className="pt-8 border-t border-border/80">
        <SectionHeading
          title="PROFICIENCY BREAKDOWN"
          subtitle="Detailed competency mapping across core engineering domains"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedSkillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-secondary/70 p-6 shadow-lg backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <h3 className="text-base font-bold text-accent tracking-wide">
                  {group.title}
                </h3>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral/80 bg-primary px-2.5 py-1 rounded-full border border-border">
                  {group.badge}
                </span>
              </div>

              <div className="space-y-3.5 pt-2">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-neutral">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-accent/90 font-medium">
                        {skill.category}
                      </span>
                    </div>

                    <div className="w-full h-2 bg-primary border border-border/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent/70 to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="/"
          className="text-accent hover:text-white transition-colors duration-300 font-semibold text-sm"
        >
          ← Back to Homepage
        </a>
      </div>
    </main>
  )
}
