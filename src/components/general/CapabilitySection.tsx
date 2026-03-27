import Pill from './Pill'

interface CapabilitySectionProps {
  label: string
  items: string[]
}

export default function CapabilitySection({ label, items }: CapabilitySectionProps) {
  return (
    <div className="flex flex-col md:flex-row md:gap-16 gap-6 pt-10">

      {/* Left — section label */}
      <div className="md:w-[38%] shrink-0 pt-1">
        <Pill fill={true}>{label}</Pill>
      </div>

      {/* Right — skill pills */}
      <div className="flex-1 flex flex-wrap gap-3">
        {items.map((item, i) => (
          <Pill key={i}>{item}</Pill>
        ))}
      </div>

    </div>
  )
}
