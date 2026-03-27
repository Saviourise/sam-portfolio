import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Footer() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      form.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="w-full border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:gap-20 gap-14">

          {/* Left */}
          <div className="md:w-[42%] shrink-0 flex flex-col gap-6">
            <h2 className="font-display uppercase text-white text-[clamp(48px,5.5vw,76px)] leading-none tracking-[0.02em]">
              Let's Connect
            </h2>

            <div className="flex flex-col gap-1">
              <p className="font-body text-[14px] text-white leading-[1.7]">
                Say hello at{' '}
                <a
                  href="mailto:aibsammy05@gmail.com"
                  className="text-accent underline underline-offset-[3px] hover:opacity-70 transition-opacity duration-200"
                >
                  aibsammy05@gmail.com
                </a>
              </p>
              <p className="font-body text-[14px] text-white leading-[1.7]">
                For more info, here's my{' '}
                <a
                  href="#"
                  className="text-accent underline underline-offset-[3px] hover:opacity-70 transition-opacity duration-200"
                >
                  resume
                </a>
              </p>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-70 transition-opacity duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-70 transition-opacity duration-200"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Right — contact form */}
          <form ref={form} onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-body text-[13px] text-white">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="w-full bg-bg-secondary rounded-lg px-4 py-3 font-body text-[14px] text-white placeholder-muted border border-transparent focus:border-border-light focus:outline-none transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-body text-[13px] text-white">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-bg-secondary rounded-lg px-4 py-3 font-body text-[14px] text-white placeholder-muted border border-transparent focus:border-border-light focus:outline-none transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="font-body text-[13px] text-white">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full bg-bg-secondary rounded-lg px-4 py-3 font-body text-[14px] text-white placeholder-muted border border-transparent focus:border-border-light focus:outline-none transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-body text-[13px] text-white">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-bg-secondary rounded-lg px-4 py-3 font-body text-[14px] text-white placeholder-muted border border-transparent focus:border-border-light focus:outline-none transition-colors duration-200 resize-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-accent text-bg font-body font-bold text-[13px] uppercase tracking-widest px-8 py-3 rounded-full hover:bg-accent-hover transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
              {status === 'success' && (
                <span className="font-body text-[13px] text-accent">Message sent successfully!</span>
              )}
              {status === 'error' && (
                <span className="font-body text-[13px] text-red-400">Something went wrong. Please try again.</span>
              )}
            </div>
          </form>

        </div>

        {/* Bottom bar */}
        <p className="font-body text-[13px] text-muted mt-16">
          © 2024 Samuel Aibangbee
        </p>
      </div>
    </footer>
  )
}
