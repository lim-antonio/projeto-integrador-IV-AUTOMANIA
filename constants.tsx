
import React from 'react';
import { type Service } from './types';

// Lucide-React inspired SVG Icons - Raw components without hardcoded colors so they inherit from parent
const SteeringWheelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 15.5V22"/><path d="M18.36 18.36l-3.54-3.54"/><path d="M6.14 18.36l3.54-3.54"/><path d="M12 8.5V2"/><path d="M18.36 5.64l-3.54 3.54"/><path d="M6.14 5.64l3.54 3.54"/></svg>;
const AlarmClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/></svg>;
const Volume2Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>;
const LayersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const LockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const ExhaustIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 18H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6"/><path d="M14 12h-4"/><path d="M18.8 14.2c.4-.3.8-.8.8-1.4 0-.8-.9-1.6-2-1.6H14v2h3.6c.4 0 .7.2.9.4.2.2.3.5.3.8s-.1.6-.3.8c-.2.2-.5.4-.9.4H14v2h3.6c1.1 0 2-.8 2-1.8 0-.6-.2-1.1-.8-1.4z"/></svg>;
const HitchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.27 6.96 8.73 5.05 8.73-5.05"/><path d="M12 22.08V12"/></svg>;

export const SERVICES: Service[] = [
  {
    id: "acessorios",
    name: "Acessórios",
    description: "Instalação de acessórios automotivos personalizados para deixar seu veículo único.",
    icon: <SteeringWheelIcon/>
  },
  {
    id: "alarmes",
    name: "Alarmes",
    description: "Sistemas de alarmes e travas elétricas para maior segurança do seu patrimônio.",
    icon: <AlarmClockIcon/>
  },
  {
    id: "escapamentos",
    name: "Escapamentos",
    description: "Montagem e manutenção de escapamentos, garantindo performance e qualidade.",
    icon: <ExhaustIcon/>
  },
  {
    id: "som",
    name: "Som Automotivo",
    description: "Projetos de som automotivo sob medida para uma experiência sonora incrível.",
    icon: <Volume2Icon/>
  },
  {
    id: "engates",
    name: "Engates",
    description: "Engates com instalação certificada, garantindo segurança no transporte.",
    icon: <HitchIcon/>
  },
  {
    id: "peliculas",
    name: "Películas",
    description: "Aplicação de películas com qualidade e garantia para proteção e estilo.",
    icon: <LayersIcon/>
  },
  {
    id: "vidros",
    name: "Vidros Elétricos",
    description: "Instalação de vidros elétricos com acabamento profissional e durabilidade.",
    icon: <ZapIcon/>
  },
  {
    id: "travas",
    name: "Travas Elétricas",
    description: "Sistemas de travas elétricas para maior segurança e comodidade no seu dia a dia.",
    icon: <LockIcon/>
  }
];
