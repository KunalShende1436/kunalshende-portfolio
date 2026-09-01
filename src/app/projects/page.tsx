import { getAllProjects } from '@/services'
import ProjectsListClient from '@/components/Projects/ProjectsListClient'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Kunal M Shende',
  description: 'A collection of my embedded systems, IoT architecture, cybersecurity frameworks, and full-stack software developments.',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <main className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem] min-h-[60vh]">
      <div className="mb-10">
        <SectionHeading
          title="All Projects"
          subtitle="Explore my embedded hardware, RF systems, cybersecurity tools, and software solutions."
        />
      </div>

      <ProjectsListClient projects={projects} />

      <div className="mt-16 text-center">
        <a
          href="/"
          className="text-accent hover:text-white transition-colors duration-300 font-semibold"
        >
          ← Back to Homepage
        </a>
      </div>
    </main>
  )
}
