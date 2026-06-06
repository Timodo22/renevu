import { motion } from 'motion/react';
import HeroSection from '../components/HeroSection';
import { Zap, Droplets, Wind, Settings, Droplet, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import techniekVoorgrond from '../../assets/techniek voorgrond.avif';

export default function Techniek() {
  const services = [
    { name: 'Elektrotechniek', icon: <Zap className="w-8 h-8" /> },
    { name: 'Installatie techniek (gas - water - sanitair)', icon: <Droplets className="w-8 h-8" /> },
    { name: 'Klimaat techniek', icon: <Settings className="w-8 h-8" /> },
    { name: 'Ventilatie techniek', icon: <Wind className="w-8 h-8" /> },
    { name: 'Water onthardings installatie', icon: <Droplet className="w-8 h-8" /> },
    { name: 'SCOPE keuring van woning en bedrijfslocaties', icon: <FileCheck className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="TECHNIEK"
        subtitle="23 jaar werkzaam in allround technische werkzaamheden. De juiste schakel in totaaltechniek."
        image={techniekVoorgrond}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">Ervaring in Allround Techniek</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Met meer dan twee decennia aan praktijkervaring begrijpen wij hoe installaties zich verhouden
              tot het totale bouwproces. Wij verzorgen niet zomaar installaties; wij leveren maatwerk dat
              naadloos integreert in uw woning of bedrijfspand. Daarmee zijn wij de vertrouwde schakel in 
              totaaltechniek.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-8 flex flex-col items-center text-center hover:bg-primary hover:text-white transition-colors duration-300 group"
            >
              <div className="mb-6 p-4 rounded-full bg-white text-primary group-hover:bg-primary-dark group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl">{service.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'overlay' }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
             <h2 className="text-3xl font-serif mb-6">Heeft u een technische uitdaging?</h2>
             <Link to="/contact" className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 uppercase tracking-widest font-semibold hover:bg-primary hover:text-white transition-colors transition-transform transform hover:-translate-y-1">
                <span>Neem direct contact op</span>
                <ArrowRight className="w-5 h-5" />
             </Link>
        </div>
      </section>

    </div>
  );
}
