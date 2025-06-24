import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Particles from './backgrounds/Particles/Particles';
import Aurora from './backgrounds/Aurora/Aurora';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './global.css';

function App() {
  return (
    <div className="relative w-full">
      {/* Background Aurora */}
      <Aurora
        className="absolute top-0 left-0 w-full h-[100vh] -z-10"
        colorStops={["#6366F1", "#8B5CF6", "#6366F1"]}
      />

      {/* Header */}
      <Header />

      {/* Hero Section with Background Particles */}
      <Hero>

      </Hero>

      <main>
        <Features />
        <Pricing />
        <Testimonials />
      </main>

      <div className="flex flex-col gap-10">
        {/* CTA Section (Optional: move it above or below depending on flow) */}
        <CtaSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;