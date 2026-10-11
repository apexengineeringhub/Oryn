import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import SolutionsSection from './components/SolutionsSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import TechSection from './components/TechSection'
import HowWeWork from './components/HowWeWork'
import IndustrySection from './components/IndustrySection'
import ImpactSection from './components/ImpactSection'
import AboutSection from './components/AboutSection'
import CareersSection from './components/CareersSection'
import VisionSection from './components/VisionSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <SolutionsSection />
        <CapabilitiesSection />
        <TechSection />
        <HowWeWork />
        <IndustrySection />
        <ImpactSection />
        <AboutSection />
        <CareersSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
