import { FaStar } from 'react-icons/fa'
import type { Technology } from '../types/technology'

type TechnologyCardProps = {
  tech: Technology
  added: boolean
  onAdd: (tech: Technology) => void
}

export default function TechnologyCard({ tech, added, onAdd }: TechnologyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {tech.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-xs">{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-xs font-medium">
          <FaStar className="text-amber-400" size={12} />
          {tech.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={added}
        onClick={() => onAdd(tech)}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold text-white transition ${
          added
            ? 'cursor-not-allowed bg-slate-400'
            : 'stack-btn cursor-pointer bg-slate-900'
        }`}
      >
        {added ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}
