import logo from '../../public/logo.png'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-10">
        {/* mobile: brand only | desktop: brand + columns */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-sm lg:text-left">
            <a href="#home" className="inline-block">
              <img
                src={logo}
                alt="DevStack"
                className="mx-auto h-9 w-auto lg:mx-0"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-slate-600 lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="route-chip"
              >
                GitHub
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="route-chip"
              >
                Twitter
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="route-chip"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden grid-cols-3 gap-10 lg:grid lg:gap-16">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Product
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#home" className="route-chip">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="route-chip">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#projects" className="route-chip">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Company
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#about" className="route-chip">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="route-chip">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="route-chip">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Legal
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#privacy" className="route-chip">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="route-chip">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="route-chip">
              Privacy
            </a>
            <a href="#terms" className="route-chip">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
