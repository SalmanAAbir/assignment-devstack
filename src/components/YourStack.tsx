export default function YourStack() {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-500">No technologies selected yet.</p>

      <div className="mt-5 flex min-h-[140px] items-center justify-center rounded-xl border border-dashed border-slate-300 px-4 py-8">
        <p className="text-sm text-slate-400">Your stack is empty.</p>
      </div>
    </aside>
  )
}
