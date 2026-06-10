import { motion } from 'motion/react';
import HeroSection from '../components/HeroSection';
import { Home as HomeIcon, CheckCircle2, Wrench, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bouw1 from '../../assets/voor de bouw.avif';
import bouw2 from '../../assets/over de bouw 2.webp';
import bouwVoorgrond from '../../assets/bouw voorgrond.jpg';
import ruwbouwImg from '../../assets/Ruwbouw.jpg';
import opgeleverdImg from '../../assets/Opgeleverd.jpg';

export default function Bouw() {
  const services = [
    {
      title: 'Renovatie woning / bedrijfspand',
      description: 'Geef uw bestaande pand een nieuw leven met onze vakkundige renovaties, afgestemd op uw wensen en huidige normen.',
      icon: <HomeIcon className="w-8 h-8 text-primary" />
    },
    {
      title: '"Turn key" verbouwingen',
      description: 'Van schets tot oplevering: wij verzorgen het complete traject, zodat u direct kunt genieten van het eindresultaat zonder zorgen.',
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />
    },
    {
      title: 'Verkoop klaar maken',
      description: 'Optimaliseer de waarde van uw pand. Wij lossen kleine en grote gebreken op zodat het huis verkoopklaar is.',
      icon: <Wrench className="w-8 h-8 text-primary" />
    },
    {
      title: 'Verduurzaming woning / bedrijfspand',
      description: 'Maak uw gebouw klaar voor de toekomst met onze energiebesparende en duurzame oplossingen.',
      icon: <Leaf className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="BOUW"
        subtitle="Uniek samenwerkingsverband met lokale bouwbedrijven en onderaannemers voor een efficiënte en kostenbesparende aanpak."
        image={bouwVoorgrond}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">Uw Partner in de Bouw</h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Door onze krachten te bundelen met lokale vakmensen, creëren wij een uniek samenwerkingsverband.
              Dit stelt ons in staat om snel te schakelen, communicatielijnen kort te houden en aanzienlijk op
              kosten te besparen, zonder in te leveren op kwaliteit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Of het nu gaat om een complexe renovatie, het volledig turn-key opleveren van een verbouwing, of het
              voorbereiden van uw pand voor de verkoop, RENEVU begeleidt u bij elke stap.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            <img src={ruwbouwImg} alt="Ruwbouw" className="w-full aspect-square object-cover rounded-sm shadow-sm hover:shadow-md transition-shadow" />
            <img src={opgeleverdImg} alt="Opgeleverd" className="w-full aspect-square object-cover rounded-sm shadow-sm hover:shadow-md transition-shadow" />
            <img src={bouw2} alt="Voor de bouw 2" className="w-full aspect-square object-cover rounded-sm shadow-sm hover:shadow-md transition-shadow" />
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Architectuur" className="w-full aspect-square object-cover rounded-sm shadow-sm hover:shadow-md transition-shadow" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">Onze Bouwdiensten</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-primary"
              >
                <div className="mb-6 bg-green-50 w-16 h-16 flex items-center justify-center rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <Link to="/contact" className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold uppercase tracking-widest transition-colors group">
              <span>Bespreek uw bouwproject</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>
      </section>
    </div>
  );
}
