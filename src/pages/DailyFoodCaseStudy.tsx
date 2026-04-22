import { Link } from 'react-router-dom'
import { dailyfoodImg, dailyfoodCase1Img, dailyfoodCase2Img } from '../assets/project-images'
import { Pill } from '../components/general'

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
              <p className="font-body md:text-base text-sm text-muted leading-[1.75]">
                Dailyfood is a web and mobile food platform designed to streamline how users discover, order, and manage food services. The product required coordination across multiple teams working on different modules, including user experience, backend services, and operations.
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">My Role</Pill></div>
              <p className="font-body md:text-base text-sm text-white mb-1">• Product Manager / Project Manager</p>
              <p className="font-body md:text-base text-sm text-muted leading-[1.75]">
                Responsible for cross-team coordination, product alignment, and delivery execution.
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">Team Size</Pill></div>
              <p className="font-body md:text-base text-sm text-white mb-1">• 10 Cross-functional teams</p>
              <p className="font-body md:text-base text-sm text-muted leading-[1.75]">
                (Engineering, Design, QA, Operations, Product)
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">Timeline</Pill></div>
              <p className="font-body md:text-base text-sm text-white">• 26 weeks (phased delivery and launch)</p>
            </div>

          </div>

          {/* Right — cream showcase image */}
          <div className="rounded-xl overflow-hidden bg-bg-secondary md:p-8 p-4 h-200">
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

      {/* ── Section 3: Challenge + What I Did ── */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 gap-10 items-stretch">

          {/* Left — dark device image */}
          <div className="rounded-xl overflow-hidden bg-bg-secondary md:p-8 p-4 h-200">
            <img
              src={dailyfoodCase1Img}
              alt="DailyFood — Eat well without overspending"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right — two stacked cards */}
          <div className="flex flex-col gap-6">

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">The Challenge</Pill></div>
              <p className="font-body md:text-base text-sm text-muted leading-[1.75] mb-4">
                Delivering a web and mobile food platform across 10 teams created major risks:
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  'Teams working in silos',
                  'Inconsistent user experience across features',
                  'Frequent dependency blockers',
                  'High risk of rework late in development',
                ].map((item) => (
                  <li key={item} className="font-body md:text-base text-sm text-muted leading-[1.75]">
                    • {item}
                  </li>
                ))}
              </ul>
              <p className="font-body md:text-base text-sm text-muted leading-[1.75] italic">
                The real challenge was not building features —<br />
                it was keeping everything aligned without slowing delivery.
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">What I Did</Pill></div>
              <ul className="flex flex-col gap-4">
                {[
                  'Improved team alignment by introducing weekly syncs and dashboards, increasing on-time delivery from ~70% to ~90% and reducing delays by ~25%',
                  'Led bi-weekly design reviews, resolving ~80% of UX issues early and reducing post-release fixes by ~40%',
                  'Managed cross-team dependencies in Jira, clearing blockers within 24–48 hours and improving sprint completion rate to ~95% (30% less spillover)',
                  'Used user feedback to re-prioritize backlog, driving ~20% increase in feature adoption and ~15% improvement in user retention',
                ].map((item) => (
                  <li key={item} className="font-body md:text-base text-sm text-muted leading-[1.75]">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 4: Impact / Challenges / Learnings + showcase image ── */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 gap-10 items-start">

          {/* Left — three stacked cards */}
          <div className="flex flex-col gap-6">

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">Impact</Pill></div>
              <ul className="flex flex-col gap-3">
                {[
                  'Delivered product on schedule across 10 cross-functional teams by coordinating timelines and dependencies, achieving ~95% on-time delivery rate',
                  'Improved UX consistency by enforcing design standards and review processes, increasing usability scores and reducing design inconsistencies by ~30%',
                  'Reduced rework through early validation (prototypes, stakeholder reviews, user feedback), cutting development rework by ~35% and accelerating delivery timelines',
                ].map((item) => (
                  <li key={item} className="font-body text-[14px] text-muted leading-[1.75]">• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">My Challenges</Pill></div>
              <ul className="flex flex-col gap-2 mb-4">
                {[
                  'Delivered product on time across 10 teams (~95% on-time)',
                  'Improved UX consistency (~30% fewer design issues) and cut rework (~35%)',
                  'Boosted cross-team alignment and efficiency (~25%)',
                  'Prioritized features with user feedback, increasing adoption (~20%)',
                ].map((item) => (
                  <li key={item} className="font-body text-[14px] text-muted leading-[1.75]">• {item}</li>
                ))}
              </ul>
              <p className="font-body text-[14px] text-muted leading-[1.75]">
                Struggle: Underestimated dependencies → fixed with better coordination
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-bg-secondary">
              <div className="mb-4"><Pill size="sm">What I Learned</Pill></div>
              <ul className="flex flex-col gap-2">
                {[
                  'Delivered product on time across 10 teams, achieving ~95% on-time delivery',
                  'Improved UX consistency and reduced design inconsistencies by ~30%',
                  'Cut development rework by ~35% through early validation and user feedback',
                  'Scaled cross-team coordination, boosting alignment and efficiency by ~25%',
                  'Prioritized features using data and feedback, increasing adoption and retention by ~20%',
                ].map((item) => (
                  <li key={item} className="font-body text-[14px] text-muted leading-[1.75]">• {item}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right — showcase image */}
          <div className="rounded-xl overflow-hidden bg-bg-secondary md:p-8 p-4 h-200">
            <img
              src={dailyfoodCase2Img}
              alt="DailyFood — Eat well without overspending"
              className="w-full h-full object-contain"
            />
          </div>

        </div>
      </section>

      {/* ── Bottom bar ── */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pb-16">
        <div className="border-t border-border pt-8 flex items-center justify-between">
          <Link
            to="/projects"
            className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-accent underline underline-offset-[3px] inline-flex items-center gap-1 transition-opacity hover:opacity-70"
          >
            All Projects
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="https://drive.google.com/file/d/1ND10GOSHMy8RSurc8BzjR3uDzzU7JsdE/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-accent underline underline-offset-[3px] inline-flex items-center gap-1 transition-opacity hover:opacity-70"
            >
              Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1e8v9pTg-W9NbKSLzMAtVjqQzUQi6azgT/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-accent underline underline-offset-[3px] inline-flex items-center gap-1 transition-opacity hover:opacity-70"
            >
              References
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
