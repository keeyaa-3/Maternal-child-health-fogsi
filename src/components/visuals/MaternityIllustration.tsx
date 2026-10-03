import { Heart, Sparkles } from 'lucide-react'

export default function MaternityIllustration({ compact=false }: { compact?: boolean }) {
  return <div className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br from-rose-50 via-white to-brand-50 ${compact ? 'min-h-44' : 'min-h-64'} p-5`}>
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-100/60 blur-2xl" />
    <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-brand-100/70 blur-2xl" />
    <div className="relative flex h-full min-h-inherit items-center justify-center">
      <div className="relative mt-4 h-44 w-52">
        <div className="absolute left-16 top-0 h-24 w-24 rounded-full bg-[#f2c8b5] shadow-sm" />
        <div className="absolute left-10 top-20 h-28 w-32 rounded-[48%_48%_34%_34%] bg-brand-500/90" />
        <div className="absolute left-[76px] top-[86px] h-24 w-24 rounded-full border-[10px] border-white/80 bg-rose-200" />
        <div className="absolute left-[96px] top-[111px] h-12 w-12 rounded-full bg-[#f2c8b5]" />
        <Heart className="absolute right-0 top-10 text-rose-400" size={24} fill="currentColor" />
        <Sparkles className="absolute left-3 top-14 text-brand-400" size={18} />
      </div>
    </div>
    <div className="absolute bottom-4 left-4 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">Care, connected</div>
    <div className="absolute right-4 bottom-4 rounded-full bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">Personalized maternity care</div>
  </div>
}
