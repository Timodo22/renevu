import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, animate } from 'motion/react';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  beforeImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroSection({ title, subtitle, image, beforeImage, ctaText, ctaLink }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth springs for the flashlight following the cursor
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  
  // Construct the CSS mask-image dynamically for a stronger and clearer flashlight effect
  const maskImage = useMotionTemplate`radial-gradient(450px circle at ${springX}px ${springY}px, black 0%, black 40%, transparent 100%)`;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!beforeImage || !containerRef.current) return;

    if (isMobile) {
      // Mobile: Automated scanning panning animation
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width || window.innerWidth;
      const height = rect.height || window.innerHeight;
      
      mouseX.set(width / 2);
      mouseY.set(height / 2);
      
      const controlsX = animate(mouseX, [width * 0.1, width * 0.9, width * 0.1], {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      });
      const controlsY = animate(mouseY, [height * 0.3, height * 0.7, height * 0.3], {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      });
      
      return () => {
        controlsX.stop();
        controlsY.stop();
      };
    } else {
      // Desktop: Start flashlight off-screen or center initially
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    }
  }, [isMobile, beforeImage, mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovering(true);
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      {/* Background After Image (Base Layer - always visible) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Background Before Image (Flashlight Layer - revealed by mask) */}
      {beforeImage && (
        <motion.div 
          className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${beforeImage})`,
            maskImage,
            WebkitMaskImage: maskImage
          }}
        />
      )}
      
      {/* Dark overlay for contrast (Above both images) */}
      <div className="absolute inset-0 z-20 bg-black/50 pointer-events-none" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      {/* Main Text Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 md:mt-24 pointer-events-none">
        {isMobile ? (
          <motion.div 
            className="flex flex-col items-center justify-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-serif text-5xl sm:text-6xl tracking-widest leading-none text-white">
              RENEVU
            </span>
            <div className="h-px w-3/4 sm:w-1/2 mt-3 mb-2 bg-primary opacity-80"></div>
            <span className="text-xs sm:text-sm tracking-[0.2em] font-light text-gray-200 uppercase">
              Bouw - Techniek - Service
            </span>
          </motion.div>
        ) : (
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-white tracking-wide mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
        )}
        
        {subtitle && (
          <motion.p 
            className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}

        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pointer-events-auto"
          >
            <Link 
              to={ctaLink}
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Desktop Hint Element */}
      {!isMobile && beforeImage && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/60 text-white px-6 py-3 rounded-full backdrop-blur-sm pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <MousePointer2 className="w-5 h-5 animate-pulse" />
          <span className="text-sm font-medium tracking-wide">Beweeg over de foto om het origineel te zien</span>
        </motion.div>
      )}
    </div>
  );
}
