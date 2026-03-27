import ProjectCard from './ProjectCard'
import projects from './products'

export default function ProductHighlights() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-20">
      <h2 className="font-display uppercase text-white text-[clamp(48px,5vw,72px)] leading-none tracking-[0.02em] mb-16">
        Product Highlights
      </h2>

      <div className="flex flex-col gap-20">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  )
}
