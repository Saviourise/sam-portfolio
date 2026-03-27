import CapabilitySection from '../general/CapabilitySection'

export default function MyCapabilities() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-20">

      {/* Top — heading + intro text */}
      <div className="flex flex-col md:flex-row md:gap-16 gap-8 mb-16">
        <div className="md:w-[38%] shrink-0">
          <h2 className="font-display uppercase text-white text-[clamp(48px,5.5vw,76px)] leading-none tracking-[0.02em]">
            My Capabilities
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-5 justify-center">
          <p className="font-body text-muted text-[14px] leading-[1.75]">
            I am continuously expanding my skill set to better lead products from idea to execution. I focus on combining product thinking, data analysis, and agile delivery to build solutions that are both user-centric and scalable.
          </p>
          <p className="font-body text-muted text-[14px] leading-[1.75]">
            I actively develop skills that help me make informed product decisions, improve team efficiency, and deliver high-impact results.
          </p>
        </div>
      </div>

      {/* Capability sections */}
      <div className="flex flex-col gap-10">
        <CapabilitySection
          label="Core Competencies"
          items={[
            'Product Strategy & Roadmapping',
            'Data Analysis (Excel, User Behavior Insights, Decision-Making)',
            'Quality Assurance & Product Testing',
            'Test Case Design',
            'Stakeholder & Cross-Functional Team Management',
            'User Experience (UX) Thinking',
            'Bug Tracking',
          ]}
        />
      </div>

    </section>
  )
}
