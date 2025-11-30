
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="relative h-[500px]">
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.802194931327!2d-46.52048592502809!3d-18.90858168226065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ae8ac3b3417757%3A0x6e2691b0f0b4b2c1!2sAv.%20Piau%C3%AD%2C%20522%20-%20Lagoa%20Grande%2C%20Patos%20de%20Minas%20-%20MG%2C%2038700-180!5e0!3m2!1spt-BR!2sbr!4v1689123456789!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Automania em Patos de Minas"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black/30 pointer-events-none flex items-center justify-center">
         <div className="text-center p-8 bg-white/90 rounded-lg backdrop-blur-sm shadow-2xl pointer-events-auto">
             <h2 className="text-4xl font-black text-automania-dark uppercase">Onde <span className="text-automania-red">Estamos</span></h2>
             <p className="text-lg text-gray-700 mt-2">Venha nos visitar e conhecer nosso espaço!</p>
             <p className="text-automania-red font-bold mt-1 text-xl">Av. Piauí, 522 - Lagoa Grande</p>
             <p className="text-gray-600 font-medium">Patos de Minas, MG</p>
         </div>
      </div>
    </section>
  );
};

export default Location;