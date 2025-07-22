import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CreditCards from './components/CreditCards';
import About from './components/About';
import LocalAreas from './components/LocalAreas';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SpeedDial from './components/SpeedDial';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CreditCards />
        <About />
        <LocalAreas />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
      <SpeedDial />
    </div>
  );
}

export default App;
