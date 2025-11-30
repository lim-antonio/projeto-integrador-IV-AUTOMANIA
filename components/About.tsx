
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-automania-dark uppercase">Quem <span className="text-automania-red">Somos</span></h2>
          <div className="w-24 h-1 bg-automania-red mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-up">
            <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop" alt="Oficina Automania" className="rounded-lg shadow-2xl w-full object-cover h-[400px]"/>
          </div>
          <div className="text-lg text-gray-700 space-y-4 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <p>
              Na <span className="font-bold text-automania-red">AutoMania</span>, somos especialistas em soluções automotivas que unem qualidade, confiança e inovação. Atuamos com foco no conforto, segurança e estilo do seu veículo, oferecendo uma ampla variedade de serviços.
            </p>
            <p>
              Com uma equipe experiente e um atendimento diferenciado, buscamos sempre a satisfação dos nossos clientes. Se você procura eficiência, honestidade e resultados impecáveis, a AutoMania é o seu lugar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
