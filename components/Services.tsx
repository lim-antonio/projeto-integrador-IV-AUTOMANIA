
import React, { useState, useMemo } from 'react';
import { SERVICES } from '../constants';
import { type Service } from '../types';

const ServiceInfo: React.FC<{ service: Service | null }> = ({ service }) => {
    if (!service) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-8 h-full bg-white border border-gray-100 rounded-xl shadow-lg min-h-[300px]">
                <div className="text-gray-300 mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-500 uppercase">Selecione um serviço</h3>
                <p className="text-gray-400 mt-2">Clique nos ícones ao lado para ver detalhes</p>
            </div>
        );
    }

    return (
        <div className="p-8 bg-white border-l-8 border-automania-red rounded-r-xl shadow-xl animate-fade-in h-full flex flex-col justify-center min-h-[300px] transition-all duration-300">
            <div className="flex items-center space-x-5 mb-6">
                <div className="p-4 bg-red-50 text-automania-red rounded-full w-16 h-16 flex items-center justify-center shadow-inner">
                    <div className="w-8 h-8">
                        {service.icon}
                    </div>
                </div>
                <h3 className="text-3xl font-black text-automania-dark uppercase tracking-tight">{service.name}</h3>
            </div>
            
            <p className="text-gray-600 text-xl leading-relaxed">
                {service.description}
            </p>
        </div>
    );
};


const Services: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>("acessorios");

  const activeService = useMemo(() => {
    if (!activeServiceId) return null;
    return SERVICES.find(s => s.id === activeServiceId) || null;
  }, [activeServiceId]);
  
  return (
    <section id="services" className="py-24 bg-automania-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-automania-dark uppercase">Nossos <span className="text-automania-red">Serviços</span></h2>
          <div className="w-24 h-1 bg-automania-red mx-auto mt-6"></div>
          <p className="text-gray-500 mt-4 text-lg">Selecione um item abaixo para saber mais</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Grid of Icons */}
            <div className="lg:col-span-7 w-full">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {SERVICES.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => setActiveServiceId(service.id)}
                        className={`
                            group relative p-6 rounded-xl transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 shadow-md border-2
                            ${activeServiceId === service.id 
                                ? 'bg-automania-red border-automania-red text-white scale-105 shadow-automania-red/30' 
                                : 'bg-white border-transparent text-gray-500 hover:border-automania-red/30 hover:shadow-lg hover:-translate-y-1'
                            }
                        `}
                    >
                        <div className={`w-10 h-10 transition-colors duration-300 ${activeServiceId === service.id ? 'text-white' : 'text-automania-red group-hover:text-red-600'}`}>
                            {service.icon}
                        </div>
                        <span className={`font-bold uppercase text-sm tracking-wide ${activeServiceId === service.id ? 'text-white' : 'text-gray-700'}`}>
                            {service.name}
                        </span>
                    </button>
                  ))}
               </div>
            </div>
            
            {/* Info Card - Sticky on Desktop */}
            <div className="lg:col-span-5 h-full relative">
                <div className="sticky top-24">
                    <ServiceInfo service={activeService} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
