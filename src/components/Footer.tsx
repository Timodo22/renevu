import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 justify-end text-white pb-12 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl tracking-widest text-white">RENEVU</span>
              <div className="h-px w-full mt-2 mb-1 bg-primary opacity-70"></div>
              <span className="text-xs tracking-[0.2em] font-light text-gray-400">
                BOUW - TECHNIEK - SERVICE
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Uw betrouwbare partner in de regio voor efficiënte en hoogwaardige bouw, allround technische werkzaamheden en een excellente 24/7 service.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-xl tracking-wider text-gray-200">Contact</h3>
            <ul className="space-y-4">
               <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>06 44156362</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:Info@renevu.nl" className="hover:text-primary transition-colors">
                  Info@renevu.nl
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Nederland</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-xl tracking-wider text-gray-200">Diensten</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/bouw" className="text-gray-400 hover:text-primary transition-colors text-sm">Bouw & Renovatie</Link>
              </li>
              <li>
                <Link to="/techniek" className="text-gray-400 hover:text-primary transition-colors text-sm">Techniek & Installatie</Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-400 hover:text-primary transition-colors text-sm">24/7 Service & Beheer</Link>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} RENEVU. Alle rechten voorbehouden.
          </p>
          <p className="text-gray-500 text-xs">
            Website gerealiseerd door{' '}
            <a 
              href="https://spectux.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors font-medium"
            >
              Spectux
            </a>
          </p>
          <div className="flex space-x-4 text-xs text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacybeleid</Link>
            <Link to="#" className="hover:text-white transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
