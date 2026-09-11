import type { Technology } from '../types/technology'

type YourStackProps = {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  const isEmpty = stack.length === 0

  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-500">
        {isEmpty
          ? 'No technologies selected yet.'
          : `${stack.length} Technology Selected`}
      </p>

      {isEmpty ? (
        <div className="mt-5 flex min-h-[140px] items-center justify-center rounded-xl border border-dashed border-slate-300 px-4 py-8">
          <p className="text-sm text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-8 w-8 object-contain"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {tech.name}
                  </p>
                  <p className="text-xs text-slate-500">{tech.category}</p>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${tech.name}`}
                  onClick={() => onRemove(tech.id)}
                  className="cursor-pointer text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full cursor-pointer rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}
