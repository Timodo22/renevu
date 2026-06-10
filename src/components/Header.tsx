import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';
import Logo from './Logo';
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bouw', path: '/bouw' },
    { name: 'Techniek', path: '/techniek' },
    { name: 'Service', path: '/service' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          
          {/* Desktop Left Nav */}
          <nav className="hidden md:flex flex-1 justify-end space-x-8 pr-12">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm uppercase tracking-widest font-semibold transition-colors',
                    isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200',
                    isActive && 'text-primary'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <Link to="/" className="flex flex-shrink-0 z-10 mr-auto md:mx-4 lg:mx-auto">
            <Logo variant="header" isScrolled={isScrolled} />
          </Link>

          {/* Desktop Right Nav & Hamburger */}
          <div className="flex-1 flex justify-between md:justify-start pl-0 md:pl-12 items-center">
             <nav className="hidden md:flex space-x-8">
              {navLinks.slice(2, 4).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-sm uppercase tracking-widest font-semibold transition-colors',
                      isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200',
                      isActive && 'text-primary'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center absolute right-0">
              <button
                type="button"
                className={cn(
                  "p-2 rounded-md transition-colors",
                  isScrolled ? "text-gray-800" : "text-white"
                )}
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-xl flex flex-col md:hidden"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <Logo variant="mobileMenu" />
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto pt-6 pb-8 px-6">
                <nav className="flex flex-col space-y-6">
                  <NavLink
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn("text-xl font-medium", isActive ? "text-primary" : "text-gray-900")
                    }
                  >
                    Home
                  </NavLink>
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        cn("text-xl font-medium", isActive ? "text-primary" : "text-gray-900")
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
