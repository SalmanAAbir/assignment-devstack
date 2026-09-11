import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import logo from '../../public/logo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white">
      {/* desktop bar */}
      <div className="mx-auto hidden h-20 max-w-7xl items-center justify-between px-6 md:flex lg:px-10">
        <a href="#home" className="shrink-0">
          <img src={logo} alt="DevStack" className="h-9 w-auto" />
        </a>

        <nav className="flex items-center gap-8 text-[15px] font-medium text-slate-500">
          <a href="#home" className="route-chip">
            Home
          </a>
          <a href="#technologies" className="route-chip">
            Technologies
          </a>
          <a href="#projects" className="route-chip">
            Projects
          </a>
          <a href="#about" className="route-chip">
            About
          </a>
          <a href="#contact" className="route-chip">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <button type="button" className="route-chip text-[15px] font-semibold text-slate-600">
            Sign In
          </button>
          <button
            type="button"
            className="brand-gradient rounded-full px-5 py-2 text-[15px] font-semibold text-white"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* phone bar: burger | logo | auth */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:hidden">
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700"
        >
          {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>

        <a href="#home" className="shrink-0" onClick={closeMenu}>
          <img src={logo} alt="DevStack" className="h-8 w-auto" />
        </a>

        <div className="flex items-center gap-3">
          <button type="button" className="route-chip text-sm font-semibold text-slate-600">
            Sign In
          </button>
          <button
            type="button"
            className="brand-gradient rounded-full px-3.5 py-1.5 text-sm font-semibold text-white"
          >
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          <a
            href="#home"
            onClick={closeMenu}
            className="route-chip rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-600"
          >
            Home
          </a>
          <a
            href="#technologies"
            onClick={closeMenu}
            className="route-chip rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-600"
          >
            Technologies
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="route-chip rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-600"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="route-chip rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-600"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="route-chip rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-600"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
