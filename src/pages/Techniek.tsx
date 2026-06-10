import { motion } from 'motion/react';
import HeroSection from '../components/HeroSection';
import { Zap, Droplets, Wind, Settings, Droplet, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import groepenkastImg from '../../assets/Groepenkast.jpeg';
import gasWaterImg from '../../assets/gas_water.jpg';
import aircoImg from '../../assets/Airco.png';
import ventilatieImg from '../../assets/Ventilatie.jpeg';
import waterOnthardenImg from '../../assets/Water_ontharden.jpeg';
import scopeGoedkeuringImg from '../../assets/SCOPE_goedkeuring.jpg';

export default function Techniek() {
  const services = [
    { 
      name: 'Elektrotechniek', 
      icon: <Zap className="w-8 h-8" />,
      image: groepenkastImg,
      description: 'Aanleg, onderhoud en renovatie van veilige en moderne elektrische installaties.'
    },
    { 
      name: 'Installatietechniek', 
      subtitle: '(Gas, Water & Sanitair)',
      icon: <Droplets className="w-8 h-8" />,
      image: gasWaterImg,
      description: 'Vakkundige installatie van leidingwerk, sanitair en complete gas- en waterinstallaties.'
    },
    { 
      name: 'Klimaattechniek', 
      icon: <Settings className="w-8 h-8" />,
      image: aircoImg,
      description: 'Optimale temperatuur en luchtvochtigheid in uw pand met energiezuinige airco\'s en klimaatoplossingen.'
    },
    { 
      name: 'Ventilatietechniek', 
      icon: <Wind className="w-8 h-8" />,
      image: ventilatieImg,
      description: 'Zorg voor een gezond binnenklimaat met hoogwaardige ventilatie en luchtbehandelingssystemen.'
    },
    { 
      name: 'Waterontharders', 
      icon: <Droplet className="w-8 h-8" />,
      image: waterOnthardenImg,
      description: 'Bescherm uw apparatuur en leidingen met een professionele wateronthardingsinstallatie.'
    },
    { 
      name: 'SCOPE Keuring', 
      subtitle: 'Voor woning en bedrijf',
      icon: <FileCheck className="w-8 h-8" />,
      image: scopeGoedkeuringImg,
      description: 'Gecertificeerde veiligheidsinspecties om te voldoen aan alle wettelijke normen en eisen.'
    },
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="TECHNIEK"
        subtitle="23 jaar werkzaam in allround technische werkzaamheden. De juiste schakel in totaaltechniek."
        image={groepenkastImg}
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
              className="group relative h-80 overflow-hidden shadow-lg flex flex-col justify-end"
            >
              <img src={service.image} alt={service.name} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-primary/90 group-hover:via-primary/50 transition-colors duration-500" />
              
              <Link to="/contact" className="absolute inset-0 z-20" aria-label={`Neem contact op over ${service.name}`}></Link>
              
              <div className="relative z-10 p-6 text-left flex flex-col h-full justify-end">
                <div className="mb-auto">
                  <div className="inline-block p-3 rounded-full bg-primary/80 text-white mb-4 backdrop-blur-sm group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl text-white mb-1">{service.name}</h3>
                {service.subtitle && <p className="text-gray-300 text-xs mb-3 font-semibold tracking-widest uppercase group-hover:text-white transition-colors">{service.subtitle}</p>}
                
                <p className="text-gray-300 text-sm mb-6 line-clamp-2 group-hover:text-white transition-colors">{service.description}</p>
                
                <div className="inline-flex items-center space-x-2 text-white font-semibold uppercase tracking-widest text-xs group/cta">
                   <span>Neem contact op</span>
                   <ArrowRight className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform" />
                </div>
              </div>
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
