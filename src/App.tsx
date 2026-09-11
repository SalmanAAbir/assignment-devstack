import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ExploreSection from './components/ExploreSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <Footer />
    </div>
  )
}
