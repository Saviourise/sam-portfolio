import { Link } from 'react-router-dom'
import { dailyfoodImg, dailyfoodCase1Img, dailyfoodCase2Img } from '../assets/project-images'
import { Pill } from '../components/general'

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M5 12l7 7M5 12l7-7" />
    </svg>
  )
}

export default function DailyFoodCaseStudy() {
  return (
    <div className="min-h-screen bg-bg text-white">

      {/* ── Section 1: Hero + Two-column cards / image ── */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pt-12 pb-20">

        <span className="font-body text-[11px] font-bold uppercase tracking-[0.12em] text-muted">case study</span>

        <h1 className="font-display uppercase text-white text-[clamp(52px,6vw,82px)] leading-none tracking-[0.02em] mt-4 mb-10">
          Dailyfood.app —<br />Web & Mobile Food Platform
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 gap-10 items-stretch">

          {/* Left — stacked info cards */}
          <div className="flex flex-col gap-6">

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">Overview</Pill></div>
              <p className="font-body md:text-lg text-sm text-muted leading-[1.75]">
                Dailyfood is a web and mobile food platform designed to streamline how users discover, order, and manage food services. The product required coordination across multiple teams working on different modules, including user experience, backend services, and operations.
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">My Role</Pill></div>
              <p className="font-body md:text-lg text-sm text-white mb-1">• Product Manager / Project Manager</p>
              <p className="font-body md:text-lg text-sm text-muted leading-[1.75]">
                Responsible for cross-team coordination, product alignment, and delivery execution.
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">Team Size</Pill></div>
              <p className="font-body md:text-lg text-sm text-white mb-1">• 10 Cross-functional teams</p>
              <p className="font-body md:text-lg text-sm text-muted leading-[1.75]">
                (Engineering, Design, QA, Operations, Product)
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">Timeline</Pill></div>
              <p className="font-body md:text-lg text-sm text-white">• 26 weeks (phased delivery and launch)</p>
            </div>

          </div>

          {/* Right — cream showcase image */}
          <div className="rounded-xl overflow-hidden bg-bg-secondary md:p-8 p-4 max-h-200">
            <img
              src={dailyfoodCase1Img}
              alt="DailyFood — Eat well without overspending"
              className="w-full h-full object-contain"
            />
          </div>

        </div>
      </section>

      {/* ── Section 2: Tools Used + project image ── */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pb-20">

        {/* Tools Used header pill */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <Pill fill={true}>Tools Used</Pill>

          {/* Tool pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Figma — Design reviews & UX alignment',
              'Jira — Sprint planning & task tracking',
              'Slack — Team communication',
              'Notion — Documentation & product planning',
              'Google Sheets — Tracking dependencies & progress',
            ].map((tool) => (
              <Pill key={tool}>
                {tool}
              </Pill>
            ))}
          </div>
        </div>

        {/* DailyFood app image (same as projects list) */}
        <div className="rounded-2xl overflow-hidden bg-bg-secondary md:p-8 p-4 max-h-full">
          <img
            src={dailyfoodImg}
            alt="DailyFood app"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── Section 3: Second showcase image ── */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pb-20">
        <div className="rounded-xl overflow-hidden">
          <img
            src={dailyfoodCase2Img}
            alt="DailyFood — Sell to a huge customer base"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ── Section 4: Result ── */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pb-24">
        <div className="border-t border-border pt-16 flex flex-col gap-6">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.12em] text-muted">Result</span>
          <p className="font-manrope font-extrabold text-white text-[clamp(20px,2.4vw,30px)] leading-[1.15] tracking-[-0.02em]">
            Successfully launched a multi-team product on time while maintaining quality and user experience consistency.
          </p>
          <p className="font-body md:text-lg text-sm text-muted leading-[1.75] max-w-[640px]">
            The platform launched across web and mobile, enabling consumers to browse restaurants, subscribe to meal plans, and track deliveries — while giving vendors tools to manage listings and reach a broader customer base.
          </p>
        </div>
      </section>

      {/* ── Bottom nav ── */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pb-20">
        <div className="border-t border-border pt-10 flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-body text-[13px] text-muted tracking-[0.06em] uppercase transition-opacity hover:opacity-70"
          >
            <ArrowLeftIcon />
            All Projects
          </Link>
          <a
            href="https://dailyfood.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-accent underline underline-offset-[3px] inline-flex items-center gap-1 transition-opacity hover:opacity-70"
          >
            View Live Project
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </section>

    </div>
  )
}
