import Hero from '../components/sections/Hero'
import ProductHighlights from '../components/sections/ProductHighlights/index'
import AboutMe from '../components/sections/AboutMe'

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="border-border" />
      <ProductHighlights />
      <hr className="border-border" />
      <AboutMe />
      <hr className="border-border" />
    </>
  )
}
