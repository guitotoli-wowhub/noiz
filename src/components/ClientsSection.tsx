import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

// Import logo SVG paths from Figma
import svgPaths from '../imports/svg-ozt4ipq5b3';
// Import PNG logos
import avonLogo from '@/assets/logo-avon.png';
import rakutenLogo from '@/assets/logo-rakuten.png';
import naturaLogo from '@/assets/logo-natura.png';

const logos = [
  { id: 'netflix', name: 'Netflix', path: svgPaths.p1e09d8a8, viewBox: '0 0 1024 277', width: 180, type: 'svg' },
  { id: 'avon', name: 'Avon', image: avonLogo, width: 160, type: 'image' },
  { id: 'g8', name: 'G8', path: svgPaths.p374e5a10, viewBox: '0 0 239 42', width: 140, type: 'svg' },
  { id: 'rakuten', name: 'Rakuten Viki', image: rakutenLogo, width: 180, type: 'image' },
  { id: 'petz', name: 'Petz', path: svgPaths.p2f9d5880, viewBox: '0 0 700 700', width: 120, type: 'svg' },
  { id: 'natura', name: 'Natura', image: naturaLogo, width: 140, type: 'image' },
  { id: 'hellmanns', name: 'Hellmanns', path: svgPaths.pb6f1e70, viewBox: '0 0 2500 1253', width: 180, type: 'svg' },
];

// Duplicate logos for infinite scroll effect
const duplicatedLogos = [...logos, ...logos, ...logos];

export default function ClientsSection() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev - 1;
        // Reset when we've scrolled through one full set of logos
        const totalWidth = logos.reduce((sum, logo) => sum + logo.width + 96, 0); // 96px = gap-24
        if (Math.abs(newPosition) >= totalWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="py-20 px-4 bg-black relative">
      {/* SVG Filters for glitch effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="logo-glitch">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.4"
              numOctaves="4"
              result="turbulence"
              seed="5"
            >
              <animate
                attributeName="baseFrequency"
                dur="2s"
                values="0.01 0.4;0.02 0.5;0.01 0.3;0.01 0.4"
                repeatCount="indefinite"
              />
            </feTurbulence>

            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="12"
              xChannelSelector="R"
              yChannelSelector="B"
              result="displaced"
            />

            <feColorMatrix
              in="displaced"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feOffset in="red" dx="-2" dy="0" result="redOffset" />

            <feColorMatrix
              in="displaced"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="cyan"
            />

            <feOffset in="cyan" dx="2" dy="0" result="cyanOffset" />

            <feBlend mode="screen" in="redOffset" in2="cyanOffset" result="glitch" />

            <feGaussianBlur in="glitch" stdDeviation="0.5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="glitch" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Section title - Same style as MethodologySection */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-white mb-16 text-center section-title"
        >
          empresas que confiam na gente
        </motion.h2>

        {/* Horizontal scrolling carousel */}
        <div className="relative overflow-hidden -mx-4 px-4">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-24"
            style={{
              x: scrollPosition,
            }}
            onMouseEnter={() => setScrollPosition(scrollPosition)}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * (index % logos.length),
                  type: 'spring',
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredLogo(`${logo.id}-${index}`)}
                onMouseLeave={() => setHoveredLogo(null)}
                className="relative group cursor-pointer flex-shrink-0"
              >
                {logo.type === 'svg' ? (
                  <svg
                    className="block transition-all duration-300"
                    style={{
                      width: `${logo.width}px`,
                      height: 'auto',
                      filter: hoveredLogo === `${logo.id}-${index}` ? 'url(#logo-glitch)' : 'none',
                      opacity: hoveredLogo === `${logo.id}-${index}` ? 0.9 : 0.7,
                    }}
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox={logo.viewBox}
                  >
                    <g>
                      <path
                        d={logo.path}
                        fill="#FFFFFF"
                        style={{
                          transition: 'fill 0.3s ease',
                        }}
                      />
                    </g>
                  </svg>
                ) : (
                  <img
                    src={logo.image!.src}
                    alt={logo.name}
                    className="block transition-all duration-300"
                    style={{
                      width: `${logo.width}px`,
                      height: 'auto',
                      filter: hoveredLogo === `${logo.id}-${index}`
                        ? 'grayscale(1) brightness(2) url(#logo-glitch)'
                        : 'grayscale(1) brightness(2)',
                      opacity: hoveredLogo === `${logo.id}-${index}` ? 0.9 : 0.7,
                    }}
                  />
                )}

                {/* Hover glow effect */}
                {hoveredLogo === `${logo.id}-${index}` && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 blur-xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 0, 255, 0.3) 0%, transparent 70%)',
                      zIndex: -1,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
