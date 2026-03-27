interface PillProps {
  children: React.ReactNode
  size?: 'sm' | 'md'
  fill?: boolean
}

export default function Pill({ children, size = 'md', fill = false }: PillProps) {
  const padding = size === 'sm'
    ? 'px-4 py-1.5 text-[11px]'
    : 'px-5 py-2.5 text-[12px]'

  return (
    <span
      className={`group relative overflow-hidden inline-flex items-center rounded-full font-body font-medium uppercase tracking-[0.08em] whitespace-nowrap cursor-pointer ${padding} ${fill ? 'bg-white text-bg' : 'border border-border-light text-white'}`}
    >
      {/* Sweep overlay */}
      <span
        className={`absolute inset-0 rounded-full scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${fill ? 'bg-bg' : 'bg-white'}`}
      />
      {/* Text */}
      <span className={`relative z-10 transition-colors duration-300 ${fill ? 'group-hover:text-white' : 'group-hover:text-bg'}`}>
        {children}
      </span>
    </span>
  )
}
