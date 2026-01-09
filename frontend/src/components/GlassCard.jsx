export default function GlassCard({ children, className = '', ...props }) {
  return (
    <div className={` relative overflow-hidden rounded-xl border border-white/20 bg-white/0 backdrop-blur-xl p-6 text-white/90 dark:text-white/80 text-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] ${className} `} {...props}>
      
      {/* Glass sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />

      {/* Top highlight */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-white/40" />

      {/* Content */}
      <div className="relative z-10"> {children} </div>
    </div>
  )
}
