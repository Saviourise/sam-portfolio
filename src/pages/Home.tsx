import Hero from '../components/sections/Hero'
import ProductHighlights from '../components/sections/ProductHighlights/index'

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="border-border" />
      <ProductHighlights />
    </>
  )
}
