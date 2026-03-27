import { ArrowUpRight } from 'lucide-react'
import { SocialCircle } from '../components/general'
import MyCapabilities from '../components/sections/MyCapabilities'
import MyExperience from '../components/sections/MyExperience'
import samuelAboutImg from '../assets/samuel-about.png'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function About() {
  return (
    <>
      {/* Hero section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-20">
        <div className="flex flex-col md:flex-row md:gap-16 gap-10">

          {/* Left — heading */}
          <div className="md:w-[38%] shrink-0 flex items-start pt-2">
            <h1 className="font-display uppercase text-white text-[clamp(52px,6vw,82px)] leading-none tracking-[0.02em]">
              About Me
            </h1>
          </div>

          {/* Right — roles, bio, CTAs */}
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <p className="font-body font-semibold text-white text-[clamp(14px,1.2vw,17px)] leading-[1.6]">
              Product Manager | Project Manager | Scrum |<br />
              BA | Master | QA | Business Operations
            </p>

            <p className="font-body text-muted text-[14px] leading-[1.75] max-w-[480px]">
              I build and manage digital products by bridging business goals, user needs, and technical execution.
            </p>
            <p className="font-body text-muted text-[14px] leading-[1.75] max-w-[480px]">
              With experience across startups to fluid ecosystems, I specialise in turning ideas into deliverable products.
            </p>

            <div className="flex items-center gap-3 mt-2 flex-wrap">
              {/* Download Resume button */}
              <a
                href="#"
                className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full whitespace-nowrap cursor-pointer bg-accent text-bg font-body font-semibold uppercase text-[13px] tracking-[0.07em] py-2 pl-5 pr-4 transition-colors duration-200"
              >
                <span className="absolute inset-0 rounded-full bg-bg scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
                <span className="relative z-10 text-bg transition-colors duration-300 group-hover:text-accent">
                  Download Resume
                </span>
                <span className="relative z-10 w-8 h-8 rounded-full bg-bg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent">
                  <ArrowUpRight size={13} strokeWidth={2.5} className="text-accent transition-colors duration-300 group-hover:text-bg" />
                </span>
              </a>

              <SocialCircle href="https://linkedin.com" external>
                <LinkedInIcon />
              </SocialCircle>
              <SocialCircle href="https://x.com" external>
                <XIcon />
              </SocialCircle>
            </div>
          </div>

        </div>

        {/* Full-width photo */}
        <div className="mt-14 rounded-3xl overflow-hidden">
          <img
            src={samuelAboutImg}
            alt="Samuel Aibangbee"
            className="w-full h-auto block"
          />
        </div>
      </section>
      <hr className="border-border" />
      <MyCapabilities />
      <hr className="border-border" />
      <MyExperience />
    </>
  )
}
