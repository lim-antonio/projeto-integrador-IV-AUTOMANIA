
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
       {/* Light gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-t from-automania-light via-white/70 to-transparent z-10"></div>
      <div className="absolute inset-0">
        <img 
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop" 
            alt="Mecânico sorrindo com ferramenta" 
            className="w-full h-full object-cover opacity-50 object-top"
        />
      </div>
      <div className="relative z-20 container mx-auto px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-automania-dark uppercase mb-4 drop-shadow-sm">
          AUTO<span className="text-automania-red">MANIA</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto font-medium">
          Sua paixão, nosso compromisso. Acessórios e serviços que transformam seu carro.
        </p>
        <div className="mt-8">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-automania-red text-white font-bold py-3 px-8 rounded-lg text-lg uppercase hover:bg-red-700 transition-all duration-300 shadow-lg shadow-automania-red/30"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
