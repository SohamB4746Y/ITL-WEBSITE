import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import NorthStarSection from './components/NorthStarSection'
import FounderSection from './components/FounderSection'
import WhyWeExistSection from './components/WhyWeExistSection'
import TransformSection from './components/TransformSection'
import PathwaysSection from './components/PathwaysSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <NorthStarSection />
      <FounderSection />
      <WhyWeExistSection />
      <TransformSection />
      <PathwaysSection />
      <Footer />
    </main>
  )
}
