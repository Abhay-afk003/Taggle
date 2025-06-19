import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Particles from './backgrounds/Particles/Particles';
import Aurora from './backgrounds/Aurora/Aurora';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full">
      <Aurora className="absolute top-0 left-0 w-full h-[100vh] -z-10" colorStops={["#6366F1", "#8B5CF6", "#6366F1"]} />
      <Header />
      <Hero>
        <Particles className="absolute top-0 left-0 w-full h-[100vh] -z-[9]" particleColors={["#A78BFA", "#8B5CF6"]} />
      </Hero>
      <main>
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;