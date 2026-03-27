import { ArrowUpRight } from 'lucide-react'
import samuelImg from '../../assets/samuel.png'
import { ContactBtn, SocialCircle } from '../general';

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <>
      {/* ── Desktop ── */}
      <section className="hidden md:flex justify-center w-full my-10">
        <div className="flex w-full max-w-[1400px]">

          {/* Left */}
          <div className="flex-1 flex flex-col justify-center min-h-[calc(100vh-64px)] pt-20 pb-20 px-10">
            <h1 className="font-heading font-black uppercase text-white m-0 text-[clamp(60px,6vw,82px)] leading-none tracking-[-0.01em]">
              Hi, I am<br />
              Samuel<br />
              Aibangbee.
            </h1>

            <p className="font-body text-muted mt-8 text-[15px] leading-[1.7] max-w-[360px]">
              Product Manager | Project Manager | Scrum Master | QA | Operations
            </p>

            <div className="flex items-center flex-wrap mt-10 gap-[14px]">
              <ContactBtn />
              <SocialCircle href="#work">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </SocialCircle>
              <SocialCircle href="https://linkedin.com" external>
                <LinkedInIcon />
              </SocialCircle>
              <SocialCircle href="https://x.com" external>
                <XIcon />
              </SocialCircle>
            </div>
          </div>

          {/* Right — natural portrait proportions, pins to top */}
          <div className="shrink-0 self-start w-[48%] max-w-[600px] min-w-[360px] h-full flex items-center justify-center px-10">
            <img src={samuelImg} alt="Samuel Aibangbee" className="w-full h-auto block" />
          </div>

        </div>
      </section>

      {/* ── Mobile ── */}
      <section className="flex flex-col md:hidden">
        <div className="pt-10 pb-8 px-4">
          <h1 className="font-heading font-black uppercase text-white m-0 text-[clamp(52px,13vw,72px)] leading-[0.95] tracking-[-0.01em]">
            Hi, I am<br />
            Samuel<br />
            Aibangbee.
          </h1>

          <p className="font-body text-muted mt-6 text-[14px] leading-[1.65]">
            Product Manager | Project Manager | Scrum Master | QA | Operations
          </p>

          <div className="flex items-center flex-wrap mt-9 gap-3">
            <ContactBtn />
            <SocialCircle href="https://linkedin.com" external>
              <LinkedInIcon />
            </SocialCircle>
            <SocialCircle href="https://x.com" external>
              <XIcon />
            </SocialCircle>
          </div>
        </div>

        <div className="h-full flex items-center justify-center px-4">
          <img src={samuelImg} alt="Samuel Aibangbee" className="w-full h-auto block" /></div>
      </section>
    </>
  )
}




