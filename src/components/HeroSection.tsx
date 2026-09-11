import heroImage from '../../public/Container.png'

export default function HeroSection() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:gap-10 md:px-6 md:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base md:mt-5 md:text-lg">
            Explore frontend, backend, database, and tooling options, compare them
            side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:justify-start">
            <a
              href="#technologies"
              className="brand-gradient inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white sm:px-6 sm:py-3 sm:text-[15px]"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 sm:px-6 sm:py-3 sm:text-[15px]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Technology stack illustration"
            className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}
