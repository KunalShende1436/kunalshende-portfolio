'use client'
import { useState, useEffect } from 'react'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import Link from 'next/link'
import {
  DownloadIcon,
  GithubIcon,
  LinkedIn,
  MsgIcon,
} from '../../utils/icons'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'
import dynamic from 'next/dynamic'

const AnalyticsMapModal = dynamic(() => import('../MapModal/AnalyticsMapModal'), {
  ssr: false,
})

const Hero = () => {
  const [isMapOpen, setIsMapOpen] = useState(false)
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({
    roles: [
      'SOFTWARE DEVELOPER',
      'IoT DEVELOPER',
      'CYBERSECURITY RESEARCHER',
      'EMBEDDED ENGINEER',
    ],
  })

  // Initialize views to a fixed base number to prevent Next.js SSR hydration mismatches
  const [views, setViews] = useState(582)

  useEffect(() => {
    // Randomize the views count once on client-side mount
    setViews(Math.floor(Math.random() * 1000) + 1)

    const interval = setInterval(() => {
      setViews((prev) => {
        const change = Math.floor(Math.random() * 8) - 2
        const nextViews = prev + change
        if (nextViews < 1) return 1
        if (nextViews > 1000) return 1000
        return nextViews
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-4 px-4 pt-4 pb-10 md:grid md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Nagpur, India • Open for Opportunities
            </div>
            <h1>
              <span className="text-neutral mb-2 block text-3xl font-bold">Hi - I'm KUNAL M SHENDE</span>
              <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
            </h1>
          </div>

          <p className="text-neutral mt-3 leading-relaxed">
            As a Software & IoT Developer, I build end-to-end solutions that connect custom hardware devices seamlessly with full-stack web platforms. I solve real-world problems by transforming raw telemetry and hardware data into actionable, secure digital experiences across the entire stack.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/CV/kunalshendeCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Kunal_M_Shende_CV.pdf"
              aria-label="Download Kunal Shende CV"
              className="bg-accent w-[160px] cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-bold text-[#00071E] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
              <DownloadIcon className="size-4" />
              Download CV
            </a>
            <a
              href="#contact"
              aria-label="Get in Touch"
              className="text-neutral bg-secondary w-[140px] cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center justify-center border border-border">
              Contact Me
            </a>
            <button
              onClick={() => setIsMapOpen(true)}
              aria-label="View Analytics Map"
              className="text-neutral bg-secondary w-[150px] cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 border border-border">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" style={{ animationDuration: '1.8s' }}></span>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-40" style={{ animationDuration: '3s', animationDelay: '0.6s' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981] shadow-[0_0_8px_#10b981,0_0_3px_#10b981]"></span>
              </span>
              Views: {views.toLocaleString()}
            </button>
          </div>

          <div className="mt-8 flex w-full max-w-[280px] items-center gap-6 text-neutral">
            <Link
              href="https://github.com/KunalShende1436"
              target="_blank"
              aria-label="GitHub Profile"
              className="hover:text-accent transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1">
              <GithubIcon className="size-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kunal-shende04/"
              target="_blank"
              aria-label="LinkedIn Profile"
              className="hover:text-accent transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1">
              <LinkedIn className="size-6" />
            </Link>
            <a
              href="mailto:krunalshende1436@gmail.com"
              aria-label="Email Kunal Shende"
              className="hover:text-accent transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1">
              <MsgIcon className="size-6" />
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem] flex items-center justify-center">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Kunal M Shende - Software & IoT Developer"
              className="object-contain scale-[1.12] md:scale-[1.15] lg:scale-[1.18] origin-center"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem] pointer-events-none"
            />
          </div>
        </div>
      </div>
      <AnalyticsMapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} views={views} />
    </section>
  )
}

export default Hero
