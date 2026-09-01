'use client'

import { Achievement } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import Image from 'next/image'
import { useState } from 'react'
import Modal from '../UI/Modal'
import { ChevronDownIcon, DownloadIcon } from '@/utils/icons'
import Link from 'next/link'

interface AchievementsSectionProps {
  achievements: Achievement[]
  showSeeMore?: boolean
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements, showSeeMore = false }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [activeTechtantraImg, setActiveTechtantraImg] = useState(0)

    // Separate featured TechTantra award from general certificates
    const featuredAward = achievements.find((a) => a.id === 'award-techtantra-2k26')
    const generalCertificates = achievements.filter((a) => a.id !== 'award-techtantra-2k26')

    const techtantraImages = [
      '/images/projects/techtantra/TECHTANTRA_2K26-img1.jpg',
      '/images/projects/techtantra/TECHTANTRA_2K26-img2.jpg',
      '/images/projects/techtantra/TECHTANTRA_2K26-img3.jpg'
    ]

    return (
        <section id="achievements" className="mb-12 scroll-mt-24">
            <SectionHeading title="ACHIEVEMENTS" subtitle="Awards, Competition Honors & Professional Credentials" />

            {/* 1. Highlighted Major Award: TECHTANTRA 2K26 */}
            <div className="mt-8 mb-12 rounded-3xl border border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-secondary to-secondary/80 p-6 md:p-8 shadow-2xl backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Interactive Multi-Image Showcase for TechTantra */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-3">
                        <div 
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-amber-500/30 bg-black cursor-pointer group"
                            onClick={() => setSelectedImage(techtantraImages[activeTechtantraImg])}>
                            <Image
                                src={techtantraImages[activeTechtantraImg]}
                                alt="TECHTANTRA 2K26 Award Trophy & Certificate"
                                fill
                                priority
                                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-xs font-bold text-white px-3 py-1.5 rounded-full border border-white/50 bg-black/60 backdrop-blur-sm">
                                    🔍 Click to Enlarge
                                </span>
                            </div>
                        </div>

                        {/* Thumbnail selector */}
                        <div className="grid grid-cols-3 gap-3">
                            {techtantraImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setActiveTechtantraImg(idx)}
                                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                                        activeTechtantraImg === idx 
                                            ? 'border-amber-400 scale-95 shadow-md shadow-amber-500/20' 
                                            : 'border-border/60 hover:border-amber-500/50 opacity-70 hover:opacity-100'
                                    }`}>
                                    <Image src={img} alt={`Techtantra photo ${idx + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Award Details */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider w-fit">
                            🏆 Major Award & Recognition
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                            🥈 2nd Prize Winner — TECHTANTRA 2K26
                        </h3>

                        <p className="text-accent font-semibold text-base">
                            National Level Technical Project Competition
                        </p>

                        <p className="text-neutral text-sm leading-relaxed">
                            Awarded <strong>2nd Prize</strong> among nationwide competitors for engineered innovations in <strong>ZeroTrace</strong> — the ESP32-S3 CyberSecurity Audit & Multipurpose Hardware Companion. Recognized by industry evaluators for advanced hardware security architecture, RF spectrum scanning, and native USB-HID automation.
                        </p>

                        <div className="pt-4 border-t border-border flex flex-wrap items-center gap-4 text-xs font-mono text-neutral">
                            <span>📅 Event Date: March 2026</span>
                            <span>•</span>
                            <span>📍 National Level Event</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Certificate Gallery Section */}
            <div className="mt-12">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-neutral">Certificate Gallery</h3>
                        <p className="text-xs text-tertiary-content mt-0.5">Verified credentials in Cybersecurity, Cloud, Android, Java & Languages</p>
                    </div>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                        {generalCertificates.length} Certificates
                    </span>
                </div>

                <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {generalCertificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/5 flex flex-col justify-between"
                            onClick={() => cert.image && setSelectedImage(cert.image)}>
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary/40 flex items-center justify-center">
                                {cert.image ? (
                                    <>
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            loading="lazy"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                            <span className="text-white font-medium text-xs px-3 py-1.5 border border-white/50 rounded-full backdrop-blur-sm select-none">
                                                View Credential
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center p-4 text-center">
                                        <span className="text-3xl mb-1">📜</span>
                                        <span className="text-xs font-mono text-accent">Verified Credential</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 flex flex-col gap-1 flex-1 justify-between">
                                <div>
                                    <h4 className="text-sm font-semibold text-primary-content line-clamp-2" title={cert.title}>
                                        {cert.title}
                                    </h4>
                                    <p className="text-xs text-accent mt-1 line-clamp-1">{cert.issuer}</p>
                                </div>
                                <div className="flex justify-between items-center mt-3 pt-2 border-t border-border/50">
                                    <p className="text-xs text-neutral">{cert.date}</p>
                                    {cert.image && (
                                        <a
                                            href={cert.image}
                                            download
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-1.5 text-neutral hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                                            title="Download Certificate">
                                            <DownloadIcon className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showSeeMore && (
                <div className="flex justify-center mt-8">
                    <Link
                        href="/achievements"
                        className="flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 border rounded-full text-secondary-content border-secondary-content/20 hover:border-accent hover:text-accent group">
                        See All Achievements & Certificates
                        <ChevronDownIcon
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            )}

            <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
                {selectedImage && (
                    <div className="relative h-[85vh] w-[92vw] md:w-[80vw] lg:w-[65vw]">
                        <Image src={selectedImage} alt="Certificate view" fill className="object-contain" />
                    </div>
                )}
            </Modal>
        </section>
    )
}

export default AchievementsSection
