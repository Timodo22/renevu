import { cn } from '../utils/cn';

interface LogoProps {
  variant?: 'header' | 'welcome' | 'mobileMenu';
  isScrolled?: boolean;
  className?: string;
}

export default function Logo({ variant = 'header', isScrolled = false, className }: LogoProps) {
  const isHeader = variant === 'header';
  const isWelcome = variant === 'welcome';
  const isMobileMenu = variant === 'mobileMenu';

  const isDarkText = isScrolled || isWelcome || isMobileMenu;

  return (
    <div className={cn("flex flex-col relative", 
      isHeader ? "items-start md:items-center mt-2 md:mt-0" : "items-center", 
      className
    )}>
      <span className={cn(
        "font-serif tracking-widest leading-none transition-colors duration-500 relative z-10 px-2",
        isHeader ? "text-2xl md:text-5xl" : "text-4xl md:text-5xl",
        isWelcome ? "text-gray-900 bg-gray-50" : (isDarkText ? "text-gray-900 bg-white" : "text-white bg-transparent")
      )}>
        RENEVU
      </span>
      
      {/* The line */}
      <div className={cn(
        "h-px mt-1 md:mt-2 mb-1 transition-all duration-500",
        isHeader 
          ? "w-full md:absolute md:w-[100vw] md:left-1/2 md:-translate-x-1/2 md:top-[55%] md:-z-10" 
          : "w-full relative",
        isDarkText ? "bg-primary" : "bg-white opacity-50"
      )}></div>

      <span className={cn(
        "tracking-[0.2em] font-light transition-colors duration-500 relative z-10 px-2",
        isHeader ? "text-[0.5rem] md:text-sm mt-0 md:mt-3" : "text-xs md:text-sm mt-2 md:mt-3",
        isWelcome ? "text-black bg-gray-50" : (isDarkText ? "text-black bg-white" : "text-white bg-transparent")
      )}>
        BOUW - TECHNIEK - SERVICE
      </span>
    </div>
  );
}
