import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)

  const closeMenu = () => {
    setMenuClosing(true)
    setTimeout(() => {
      setMenuOpen(false)
      setMenuClosing(false)
    }, 280)
  }

  const toggleMenu = () => {
    if (menuOpen) closeMenu()
    else setMenuOpen(true)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 bg-bg">
        {/* Constrained inner row */}
        <div className="w-full max-w-[1400px] mx-auto md:px-10 px-4 h-16 flex items-center justify-between relative">

          {/* Logo */}
          <Link
            to="/"
            className="font-heading font-bold text-[15px] tracking-[0.14em] uppercase text-white whitespace-nowrap"
          >
            Samuel Aibangbee
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
            {['Work', 'About', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `font-body text-[15px] transition-colors duration-200 ${isActive ? 'text-white' : 'text-muted hover:text-accent'}`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Download */}
          <a
            href="#"
            className="hidden md:flex items-center gap-1 font-body font-medium text-[13px] text-accent uppercase tracking-[0.06em] underline underline-offset-[3px] transition-opacity duration-200 hover:opacity-70"
          >
            Download
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMenu}
            className="flex md:hidden items-center text-white cursor-pointer bg-transparent border-0 p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className={`fixed top-16 left-0 right-0 bottom-0 bg-bg z-99 flex flex-col px-6 pt-8 gap-0 ${menuClosing ? 'menu-exit' : 'menu-enter'
              }`}
          >
            {['Work', 'About', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-heading font-black text-[42px] uppercase tracking-wide py-3 border-b border-border block transition-colors duration-200 ${isActive ? 'text-accent' : 'text-white'
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
            <a
              href="#"
              className="mt-7 inline-flex items-center gap-1.5 font-body font-medium text-[14px] text-accent uppercase tracking-[0.08em] underline underline-offset-[3px]"
            >
              Download CV <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </header>
    </>
  )
}
