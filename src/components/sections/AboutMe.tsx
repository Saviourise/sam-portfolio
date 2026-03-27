import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function AboutMe() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-20">
      <div className="flex flex-col md:flex-row md:gap-20 gap-8">

        {/* Left — heading */}
        <div className="md:w-[42%] shrink-0">
          <h2 className="font-display uppercase text-white text-[clamp(52px,6vw,80px)] leading-none tracking-[0.02em]">
            About Me
          </h2>
        </div>

        {/* Right — bio + link */}
        <div className="flex-1 flex flex-col gap-8 justify-center">
          <p className="font-body text-white md:text-2xl text-lg leading-[1.65]">
            I am a Product/Project Manager with a background in QA and product delivery. I build and manage digital products by bridging business goals, user needs, and technical execution.
          </p>

          <Link
            to="/about"
            className="font-body font-medium text-[13px] uppercase tracking-widest text-accent underline underline-offset-[3px] inline-flex items-center gap-1 transition-opacity duration-200 hover:opacity-70 w-fit"
          >
            More About Me
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </Link>
        </div>

      </div>
    </section>
  )
}
