import { Project } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { Earning, Likes, Star, Timer } from '../../utils/icons'

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    siteAge,
    type,
    cover,
    slug,
  } = data

  return (
    <div className="group bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          {slug ? (
            <Link href={`/projects/${slug}`} className="block group">
              <div className="flex flex-col gap-2">
                <h3 className="text-secondary-content group-hover:text-accent text-lg font-medium transition-colors md:font-semibold leading-snug">
                  {title}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  {type && (
                    <span
                      className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] px-2 py-0.5 text-xs font-semibold ${
                        type === 'New 🔥' ? 'animate-blink text-tag' : 'text-accent'
                      } backdrop-blur-[80px]`}>
                      {type}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex flex-col gap-2">
              <h3 className="text-secondary-content group-hover:text-accent text-lg font-medium transition-colors duration-300 md:font-semibold leading-snug">
                {title}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                {type && (
                  <span
                    className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] px-2 py-0.5 text-xs font-semibold ${
                      type === 'New 🔥' ? 'animate-blink text-tag' : 'text-accent'
                    } backdrop-blur-[80px]`}>
                    {type}
                  </span>
                )}
              </div>
            </div>
          )}

          <ul className="mt-3 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
            {(visitors || numberOfSales) && (
              <IconText text={(visitors || numberOfSales)?.toString() || ''} icon={Likes} />
            )}
            {siteAge && <IconText text={siteAge} icon={Timer} />}
            {earned && <IconText text={earned} icon={Earning} />}
            {(ratings || githubStars) && (
              <IconText text={(ratings || githubStars)?.toString() || ''} icon={Star} />
            )}
          </ul>
        </div>

        <figure className="flex justify-end overflow-hidden rounded-md shrink-0">
          {slug ? (
            <Link href={`/projects/${slug}`}>
              <Image
                src={cover}
                width={150}
                height={85}
                loading="lazy"
                alt={`${title} project cover`}
                className="h-[85px] w-[140px] md:w-[150px] cursor-pointer object-cover rounded-md shadow-md transition-all duration-300 hover:scale-105"
              />
            </Link>
          ) : (
            <Image
              src={cover}
              width={150}
              height={85}
              loading="lazy"
              alt={`${title} project cover`}
              className="h-[85px] w-[140px] md:w-[150px] object-cover shadow-md rounded-md"
            />
          )}
        </figure>
      </div>

      <div className="mt-4 flex flex-col justify-between flex-1">
        <div className="bg-primary text-primary-content h-[95px] overflow-y-auto rounded-2xl px-4 py-2.5">
          <p className="text-[13px] md:text-[14px] font-normal leading-relaxed">{shortDescription}</p>
        </div>

        {slug && (
          <div className="mt-4 flex justify-end">
            <Link
              href={`/projects/${slug}`}
              className="text-xs font-mono text-accent hover:text-white transition-colors duration-300 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              View Project Details →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
