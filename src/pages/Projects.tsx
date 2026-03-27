import ProjectCard from '../components/sections/ProductHighlights/ProjectCard'
import projects from '../components/sections/ProductHighlights/products'

export default function Projects() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-20">

      {/* Heading */}
      <div className="mb-16">
        <h1 className="font-display uppercase text-white text-[clamp(52px,6vw,82px)] leading-none tracking-[0.02em] mb-4">
          Projects
        </h1>
        <p className="font-body text-muted text-[14px] leading-[1.75] max-w-[520px]">
          A selection of products demonstrating my ability to drive strategy, prioritize effectively, and deliver measurable outcomes with cross-functional teams.
        </p>
      </div>

      {/* All projects */}
      <div className="flex flex-col md:gap-40 gap-24">
        {projects.map((project, i) => (
          <div key={i}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

    </section>
  )
}
