import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CreditCards from './components/CreditCards';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SpeedDial from './components/SpeedDial';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CreditCards />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <SpeedDial />
      <ScrollToTop />
    </div>
  );
}

export default App;
