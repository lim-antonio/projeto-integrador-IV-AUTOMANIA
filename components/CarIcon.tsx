
import React from 'react';

interface CarIconProps {
  onHotspotClick: (hotspotId: string) => void;
  activeServiceId: string | null;
  hotspotServiceMap: Record<string, string[]>;
}

const CarIcon: React.FC<CarIconProps> = ({ onHotspotClick, activeServiceId, hotspotServiceMap }) => {
    
    const isHotspotActive = (hotspotId: string) => {
        return hotspotServiceMap[hotspotId]?.includes(activeServiceId || '');
    };

    const getHotspotClass = (id: string) => 
        `cursor-pointer transition-all duration-300 ${isHotspotActive(id) ? 'fill-automania-red opacity-60' : 'fill-transparent hover:fill-automania-red/20'}`;

    return (
        <svg
            viewBox="0 0 600 250"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-xl"
        >
            <defs>
                <linearGradient id="carGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#e5e7eb" />
                </linearGradient>
            </defs>

            {/* Car Body - VW Gol Quadrado Silhouette */}
            {/* Outline: Front Bumper -> Grill -> Hood -> Windshield -> Roof -> C-Pillar -> Hatch -> Rear Bumper -> Underbody */}
            <path 
                d="M45,155 
                   L45,130 L50,130 
                   L50,115 L140,110 
                   L200,60 
                   L420,60 
                   L490,110 
                   L495,130 
                   L500,155
                   L500,175 L490,185 
                   L460,185 
                   Q460,155 410,155 Q360,155 360,185 
                   L170,185 
                   Q170,155 120,155 Q70,155 70,185 
                   L55,185 L45,175 Z"
                fill="url(#carGradient)" 
                stroke="#374151" 
                strokeWidth="2"
            />

            {/* Side Protective Strip (Friso Lateral) */}
            <rect x="50" y="135" width="445" height="10" fill="#111827" rx="1" />

            {/* Windows - Angular/Boxy Style */}
            {/* Windshield -> Roof -> C-Pillar -> Beltline */}
            <path 
                d="M205,65 L415,65 L460,110 L430,110 L430,70 L300,70 L300,110 L155,110 Z" 
                fill="#1f2937" 
            />
            
            {/* Windows Glass Separation */}
            {/* Front Side Window */}
            <path d="M160,108 L210,68 L295,68 L295,108 Z" fill="#374151" stroke="#1f2937" strokeWidth="2"/>
            {/* Rear Side Window */}
            <path d="M305,68 L410,68 L450,108 L305,108 Z" fill="#374151" stroke="#1f2937" strokeWidth="2"/>

            {/* Bumpers - Thick Black Plastic */}
            {/* Front Bumper */}
            <path d="M35,155 L70,155 L70,185 L55,185 L45,175 L35,175 Z" fill="#111827" />
            {/* Rear Bumper */}
            <path d="M490,155 L515,155 L515,175 L500,185 L490,185 Z" fill="#111827" />

            {/* Headlights and Grill */}
            <rect x="50" y="115" width="10" height="15" fill="#fcd34d" stroke="#374151" /> {/* Indicator */}
            <rect x="60" y="115" width="20" height="15" fill="#e5e7eb" stroke="#374151" /> {/* Light */}
            
            {/* Tail Lights */}
            <rect x="490" y="115" width="10" height="15" fill="#ef4444" stroke="#374151" />

            {/* Door Outline */}
            <path d="M298,68 L298,135" stroke="#9ca3af" strokeWidth="1" />
            <path d="M298,145 L298,185" stroke="#9ca3af" strokeWidth="1" />
            
            <path d="M158,110 L158,135" stroke="#9ca3af" strokeWidth="1" />
            <path d="M158,145 L158,185" stroke="#9ca3af" strokeWidth="1" />

            {/* Wheels */}
            <circle cx="120" cy="185" r="32" fill="#1f2937" stroke="#000" strokeWidth="2" />
            <circle cx="120" cy="185" r="18" fill="#d1d5db" stroke="#9ca3af" strokeWidth="5" /> {/* Silver Rim */}
            
            <circle cx="410" cy="185" r="32" fill="#1f2937" stroke="#000" strokeWidth="2" />
            <circle cx="410" cy="185" r="18" fill="#d1d5db" stroke="#9ca3af" strokeWidth="5" /> {/* Silver Rim */}

            {/* --- INTERACTIVE HOTSPOTS --- */}

            {/* Window Hotspot */}
            <path 
                d="M160,108 L210,68 L410,68 L450,108 L160,108 Z" 
                className={getHotspotClass('window')}
                onClick={() => onHotspotClick('window')}
            />

            {/* Door/Alarm Hotspot (Main Side Panel) */}
            <path 
                d="M160,110 L295,110 L295,180 L160,180 Z" 
                className={getHotspotClass('door')}
                onClick={() => onHotspotClick('door')}
            />
             {/* Extended Door Area for ease of click */}
             <path 
                d="M295,110 L430,110 L410,180 L295,180 Z" 
                className={getHotspotClass('door')}
                onClick={() => onHotspotClick('door')}
            />


            {/* Wheels Hotspot */}
            <circle cx="120" cy="185" r="35" className={getHotspotClass('wheel')} onClick={() => onHotspotClick('wheel')} />
            <circle cx="410" cy="185" r="35" className={getHotspotClass('wheel')} onClick={() => onHotspotClick('wheel')} />

            {/* Trunk/Sound Hotspot (Hatch Area) */}
            <path 
                d="M410,68 L460,110 L490,110 L500,155 L410,155 Z" 
                className={getHotspotClass('trunk')}
                onClick={() => onHotspotClick('trunk')}
            />

            {/* Exhaust Hotspot (Below Rear Bumper) */}
            <path 
                d="M480,185 L510,185 L510,200 L480,200 Z" 
                className={getHotspotClass('exhaust')}
                onClick={() => onHotspotClick('exhaust')}
            />
            
            {/* Hitch Hotspot (Rear Bumper Center) */}
             <rect x="515" y="175" width="20" height="15" className={getHotspotClass('hitch')} onClick={() => onHotspotClick('hitch')} />

        </svg>
    );
};

export default CarIcon;
