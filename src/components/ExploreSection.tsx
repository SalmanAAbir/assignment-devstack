import { useEffect, useState } from 'react'
import type { Technology } from '../types/technology'
import TechnologyCard from './TechnologyCard'
import YourStack from './YourStack'

export default function ExploreSection() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section
        id="technologies"
        className="flex min-h-[200px] items-center justify-center bg-slate-50 py-16"
      >
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <span className="loading loading-spinner loading-lg text-secondary"></span>
          <p className="text-sm font-medium">Loading technologies...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="technologies" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore the <span className="tech-gradient-text">Technologies</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard key={tech.id} tech={tech} />
            ))}
          </div>

          <YourStack />
        </div>
      </div>
    </section>
  )
}
