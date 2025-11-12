import Hero from './components/Hero';
import Product from './components/Product';
import Countdown from './components/Countdown';
import WhyMoonlight from './components/WhyMoonlight';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import StickyWarning from './components/StickyWarning';
import AgeGate from './components/AgeGate';

function App() {
  return (
    <div className="min-h-screen w-full" style={{ background: '#0b0d16' }}>
      <StickyWarning />
      <AgeGate />
      <Hero />
      <Product />
      <Countdown />
      <WhyMoonlight />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App