
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-automania-light hexagon-bg text-automania-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;