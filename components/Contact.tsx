
import React from 'react';

const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-automania-light hexagon-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-automania-dark uppercase">Entre em <span className="text-automania-red">Contato</span></h2>
          <div className="w-24 h-1 bg-automania-red mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Tem alguma dúvida ou quer fazer um orçamento? Fale conosco!
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 animate-slide-in-up hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-50 rounded-full mb-4 text-automania-red">
                    <PhoneIcon />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Telefone</h3>
                <a 
                  href="https://wa.me/553438212580" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors"
                >
                  34 3821-2580
                </a>
                <p className="text-sm text-gray-400 mt-2">Clique para WhatsApp</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 animate-slide-in-up hover:-translate-y-1 transition-transform" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-50 rounded-full mb-4 text-automania-red">
                    <MailIcon />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Email</h3>
                <p className="text-lg text-gray-600 mt-2 hover:text-automania-red transition-colors"><a href="mailto:contato@automania.com">contato@automania.com</a></p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 animate-slide-in-up hover:-translate-y-1 transition-transform" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-50 rounded-full mb-4 text-automania-red">
                    <MapPinIcon />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Endereço</h3>
                <p className="text-lg text-gray-600 mt-2">Av. Piauí, 522<br/>Lagoa Grande, Patos de Minas</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;