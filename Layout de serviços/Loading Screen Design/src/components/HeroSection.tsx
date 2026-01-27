import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Motion values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animation for smooth mouse tracking
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Transform values for distortion effect
  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const x = e.clientX - centerX;
        const y = e.clientY - centerY;
        
        mouseX.set(x);
        mouseY.set(y);
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black"
      style={{ perspective: '1000px' }}
    >
      {/* SVG Filters for liquid glitch distortion effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          {/* Main liquid distortion */}
          <filter id="liquid-glitch">
            {/* Turbulence for liquid effect */}
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01 0.4" 
              numOctaves="4" 
              result="turbulence"
              seed="5"
            >
              <animate
                attributeName="baseFrequency"
                dur="3s"
                values="0.01 0.4;0.02 0.5;0.01 0.3;0.01 0.4"
                repeatCount="indefinite"
              />
            </feTurbulence>
            
            {/* Displacement for liquid warping */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="15"
              xChannelSelector="R"
              yChannelSelector="B"
              result="displaced"
            />
            
            {/* RGB split for glitch effect */}
            <feColorMatrix
              in="displaced"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />
            
            <feOffset in="red" dx="-3" dy="0" result="redOffset"/>
            
            <feColorMatrix
              in="displaced"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="cyan"
            />
            
            <feOffset in="cyan" dx="3" dy="0" result="cyanOffset"/>
            
            {/* Merge all channels */}
            <feBlend mode="screen" in="redOffset" in2="cyanOffset" result="glitch"/>
            
            {/* Add subtle glow */}
            <feGaussianBlur in="glitch" stdDeviation="0.5" result="blur"/>
            
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="glitch"/>
            </feMerge>
          </filter>
          
          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x / 30}% ${50 + mousePosition.y / 30}%, rgba(255, 0, 255, 0.15) 0%, transparent 50%),
                       radial-gradient(circle at ${50 - mousePosition.x / 30}% ${50 - mousePosition.y / 30}%, rgba(157, 0, 255, 0.15) 0%, transparent 50%),
                       #000000`
        }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full border border-accent-pink/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          x: useTransform(smoothMouseX, [-300, 300], [-20, 20]),
          y: useTransform(smoothMouseY, [-300, 300], [-20, 20]),
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full border border-accent-violet/20"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          x: useTransform(smoothMouseX, [-300, 300], [20, -20]),
          y: useTransform(smoothMouseY, [-300, 300], [20, -20]),
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 0, 255, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 0, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main Title with distortion effect on hover */}
          <div className="mb-12 pb-8">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-3 tracking-tight leading-tight relative"
              style={{
                textShadow: '0 0 40px rgba(255, 0, 255, 0.3)',
              }}
            >
              <motion.div
                whileHover={{ 
                  filter: 'url(#liquid-glitch)',
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-block will-change-transform cursor-default"
              >
                marketing
              </motion.div>
            </motion.h1>
            
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-3 tracking-tight leading-tight"
              style={{
                textShadow: '0 0 40px rgba(255, 0, 255, 0.3)',
              }}
            >
              <motion.div
                whileHover={{ 
                  filter: 'url(#liquid-glitch)',
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-block will-change-transform cursor-default"
              >
                de influência
              </motion.div>
            </motion.h1>
            
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-subtitle text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight mt-4"
            >
              <motion.div
                whileHover={{ 
                  filter: 'url(#liquid-glitch)',
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-block will-change-transform cursor-default"
                style={{
                  background: 'linear-gradient(90deg, #FF00FF, #9D00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: '#FF00FF',
                }}
              >
                com inteligência cultural
              </motion.div>
            </motion.h2>
          </div>
          
          {/* Subtitle */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
          >
            Lemos o jogo e conectamos marcas e influenciadores com autenticidade, estratégia e propósito.
          </motion.p>
          
          {/* CTA Button with magnetic effect */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="group relative glass-pink px-10 py-5 text-white text-lg overflow-hidden"
              style={{
                x: useTransform(smoothMouseX, [-300, 300], [-5, 5]),
                y: useTransform(smoothMouseY, [-300, 300], [-5, 5]),
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, rgba(255, 0, 255, 0.3), rgba(157, 0, 255, 0.3))',
                }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                vamos conversar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - Clean & Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-50"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          
          {/* Mouse icon */}
          <div className="relative w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center pt-2 transition-colors hover:border-accent-pink">
            <motion.div
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.8, 0.2, 0.8]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-1 h-2 bg-accent-pink rounded-full"
            />
          </div>
          
          {/* Arrow down */}
          <motion.svg
            animate={{ 
              y: [0, 4, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
            className="text-gray-500"
          >
            <path 
              d="M8 3L8 13M8 13L4 9M8 13L12 9" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
