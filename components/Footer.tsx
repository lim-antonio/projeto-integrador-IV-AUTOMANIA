
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Automania. Todos os direitos reservados.</p>
        <p className="text-sm">Desenvolvido com paixão por carros.</p>
      </div>
    </footer>
  );
};

export default Footer;
