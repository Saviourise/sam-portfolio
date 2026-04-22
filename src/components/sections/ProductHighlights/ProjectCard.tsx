import { Link } from 'react-router-dom'

interface InfoRow {
  label: string
  value: string
}

interface ProjectLink {
  label: string
  href: string
}

interface ProjectCardProps {
  badge?: string
  image: string
  imageAlt: string
  title: string
  summary: string[]
  result: string
  client?: string
  info: InfoRow[]
  links: ProjectLink[]
}

function ArrowUpRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function ProjectCard({
  badge,
  image,
  imageAlt,
  title,
  summary,
  result,
  info,
  links,
}: ProjectCardProps) {
  return (
    <div className="flex gap-8 lg:gap-20 items-start flex-col md:flex-row">

      {/* Left — project image card */}
      <div className="w-full md:w-[45%] shrink-0 bg-bg-secondary rounded-2xl overflow-hidden flex flex-col pb-20">
        {badge && (
          <div className="px-5 pt-5">
            <span className="inline-block font-body text-[11px] font-medium uppercase tracking-widest text-white rounded-full px-3 py-1 bg-bg">
              {badge}
            </span>
          </div>
        )}

        <div className="mx-5 overflow-hidden rounded-xl flex items-center justify-center mt-18">
          <img
            src={image}
            alt={imageAlt}
            className="w-[90%] h-auto block object-cover"
          />
        </div>
      </div>

      {/* Right — project details */}
      <div className="flex-1 flex flex-col gap-6">

        <h3 className="font-manrope font-extrabold text-white text-[clamp(20px,2.4vw,30px)] leading-[1.15] tracking-[-0.02em]">
          {title}
        </h3>

        <div className="flex flex-col gap-3">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
            Project Summary
          </span>
          <div className="flex flex-col gap-10">
            {summary.map((para, i) => (
              <p key={i} className="font-body text-[14px] text-muted leading-[1.75]">
                {para}
              </p>
            ))}
            <p className="font-body text-[14px] text-muted leading-[1.75]">
              <span className="text-white font-medium">Result: </span>
              {result}
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-2">
          <span className="font-body text-base font-medium uppercase tracking-[0.12em] text-white mb-3">
            Project Info
          </span>
          {info.map((row, i) => (
            <div key={i} className="border-t border-border py-3 flex items-center gap-6 justify-between">
              <span className="font-body text-[12px] tracking-[0.08em] text-white w-16">{row.label}</span>
              <span className="font-body text-[14px] text-muted">{row.value}</span>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>

        <div className="flex items-center gap-8 mt-1">
          {links.map((link, i) =>
            link.href.startsWith('/') ? (
              <Link
                key={i}
                to={link.href}
                className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-accent underline underline-offset-[3px] inline-flex items-center gap-1 transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
                <ArrowUpRightIcon />
              </Link>
            ) : (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-accent underline underline-offset-[3px] inline-flex items-center gap-1 transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
                <ArrowUpRightIcon />
              </a>
            )
          )}
        </div>

      </div>
    </div>
  )
}
