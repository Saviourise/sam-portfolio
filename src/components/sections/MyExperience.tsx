import { ArrowUpRight } from 'lucide-react'

interface ExperienceEntryProps {
  title: string
  dateRange: string
  company: string
  companyHref?: string
  bullets: string[]
}

function ExperienceEntry({ title, dateRange, company, companyHref = '#', bullets }: ExperienceEntryProps) {
  return (
    <div className="flex flex-col gap-3 pb-10 border-b border-border last:border-0 last:pb-0">
      <div className="flex items-start justify-between gap-6">
        <h3 className="font-manrope font-bold text-white text-[clamp(15px,1.4vw,18px)] leading-[1.3]">
          {title}
        </h3>
        <span className="font-body text-[13px] text-white whitespace-nowrap shrink-0 pt-0.5">
          {dateRange}
        </span>
      </div>

      <a
        href={companyHref}
        className="font-body text-[13px] text-accent underline underline-offset-[3px] w-fit hover:opacity-70 transition-opacity duration-200"
      >
        {company}
      </a>

      <ul className="flex flex-col gap-1.5 mt-1">
        {bullets.map((b, i) => (
          <li key={i} className="font-body text-[13px] text-muted leading-[1.7] flex gap-2">
            <span className="shrink-0 mt-px">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const experiences: ExperienceEntryProps[] = [
  {
    title: 'Product Manager | Project Manager',
    dateRange: 'Jan 2024 — Present',
    company: 'Teknesis Branding Agency',
    bullets: [
      'Manage end-to-end delivery of digital and web projects across multiple clients.',
      'Coordinate designers, developers, and QA teams to meet project milestones.',
      'Track risks, dependencies, and progress while maintaining stakeholder communication.',
      'Maintain project documentation, schedules, and delivery reports.',
    ],
  },
  {
    title: 'Project Coordinator / Scrum Master',
    dateRange: 'Jan 2022 — Nov 2023',
    company: 'Kulipal (Hospitality Platform)',
    bullets: [
      'Coordinated sprint activities and supported Agile delivery processes.',
      'Tracked project progress, risks, and action items across teams.',
      'Supported QA testing and release readiness activities.',
    ],
  },
]

export default function MyExperience() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-20">
      <div className="flex flex-col md:flex-row md:gap-16 gap-10">

        {/* Left — heading */}
        <div className="md:w-[38%] shrink-0">
          <h2 className="font-display uppercase text-white text-[clamp(48px,5.5vw,76px)] leading-none tracking-[0.02em]">
            My Experience
          </h2>
        </div>

        {/* Right — entries + footer */}
        <div className="flex-1 flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <ExperienceEntry key={i} {...exp} />
          ))}

          {/* Footer row */}
          <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
            <span className="font-body text-[13px] text-accent italic">
              To see more click to download
            </span>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-body font-medium text-[13px] text-white uppercase tracking-[0.08em] inline-flex items-center gap-1 hover:text-accent transition-colors duration-200"
              >
                Resume <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
              <a
                href="#"
                className="font-body font-medium text-[13px] text-white uppercase tracking-[0.08em] inline-flex items-center gap-1 hover:text-accent transition-colors duration-200"
              >
                Reference <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
