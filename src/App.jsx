/**
 * Root application shell.
 * Composes all major landing-page sections in display order.
 */
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import NorthStarSection from './components/NorthStarSection'
import FounderSection from './components/FounderSection'
import WhyWeExistSection from './components/WhyWeExistSection'
import TransformSection from './components/TransformSection'
import PathwaysSection from './components/PathwaysSection'
import Footer from './components/Footer'

/**
 * Main app component for the ITL website.
 * @returns {JSX.Element} Full single-page website layout.
 */
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
