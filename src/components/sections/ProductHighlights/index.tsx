import stylemeupImg from '../../../assets/stylemeup.png'
import ProjectCard from './ProjectCard'

const projects = [
  {
    badge: 'contract',
    image: stylemeupImg,
    imageAlt: 'StyleMeUp app screenshot',
    title: 'StyleMeUp — Fashion Platform',
    summary: [
      'StyleMeUp is a fashion discovery platform that connects users with curated outfit inspiration, personal styling recommendations, and seamless shopping experiences across multiple brands.',
      'Led cross-functional product discovery sessions, defined user personas, mapped end-to-end user journeys, and prioritised the feature backlog through MoSCoW analysis in collaboration with the design and engineering teams.',
    ],
    result: 'Shipped v1 on schedule across iOS and Android with a 4.6-star launch rating and 12k downloads within the first 30 days.',
    info: [
      { label: 'Year', value: '2023' },
      { label: 'Role', value: 'Product Manager / QA' },
    ],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'Case Study', href: '#' },
    ],
  },
]

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
