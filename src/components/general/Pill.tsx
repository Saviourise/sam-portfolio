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
      className={`inline-flex items-center rounded-full ${fill ? 'bg-white text-bg' : 'border border-border-light text-white'} font-body font-medium uppercase tracking-[0.08em] whitespace-nowrap ${padding} cursor-pointer`}
    >
      {children}
    </span>
  )
}
