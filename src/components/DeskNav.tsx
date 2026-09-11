function DeskNav() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src="/favicon.png" alt="DevStack mark" className="h-9 w-9" />
          <span className="text-xl font-extrabold tracking-tight">
            Dev<span className="brand-gradient-text">Stack</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[15px] font-medium text-slate-500 md:flex">
          <a href="#home" className="hover:text-slate-800">
            Home
          </a>
          <a href="#technologies" className="hover:text-slate-800">
            Technologies
          </a>
          <a href="#projects" className="hover:text-slate-800">
            Projects
          </a>
          <a href="#about" className="hover:text-slate-800">
            About
          </a>
          <a href="#contact" className="hover:text-slate-800">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <button type="button" className="text-[15px] font-semibold text-slate-600">
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
    </header>
  )
}

export default DeskNav
