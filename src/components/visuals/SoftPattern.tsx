export default function SoftPattern() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />
    <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-rose-100/60 blur-3xl" />
    <svg className="absolute right-8 top-8 h-32 w-32 opacity-30" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="48" stroke="currentColor" strokeDasharray="3 6"/><circle cx="60" cy="60" r="30" stroke="currentColor" strokeDasharray="2 7"/></svg>
  </div>
}
