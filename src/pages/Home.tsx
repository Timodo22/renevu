import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Hammer, Wrench, Clock, ArrowRight, ShieldCheck, Home as HomeIcon, Zap, Phone } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import beforeImg from '../../assets/vila before.webp';
import afterImg from '../../assets/nep renovatie.jpg';
import bouwVoorgrond from '../../assets/bouw voorgrond.jpg';
import techniekVoorgrond from '../../assets/techniek voorgrond.avif';

export default function Home() {
  const features = [
    {
      title: 'Bouw',
      description: 'Uw partner in renovatie, verduurzaming en turnkey verbouwingen via een uniek samenwerkingsverband met lokale specialisten.',
      icon: <Hammer className="w-8 h-8 text-white" />,
      link: '/bouw',
      image: bouwVoorgrond,
    },
    {
      title: 'Techniek',
      description: 'Dé schakel in totaaltechniek met 23 jaar ervaring. Van elektrotechniek tot klimaatbeheersing en SCOPE keuringen.',
      icon: <Zap className="w-8 h-8 text-white" />,
      link: '/techniek',
      image: techniekVoorgrond,
    },
    {
      title: 'Service',
      description: 'Professioneel onderhoud en beheer. Wij staan 24/7 voor u klaar bij storingen en calamiteiten.',
      icon: <Clock className="w-8 h-8 text-white" />,
      link: '/service',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="BOUW, TECHNIEK EN SERVICE"
        subtitle="Uniek samenwerkingsverband voor een efficiënte, duurzame en kostenbesparende aanpak voor uw woning of bedrijfspand."
        image={afterImg}
        beforeImage={beforeImg}
        ctaText="Neem Contact Op"
        ctaLink="/contact"
      />

      {/* Intro Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Texts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Kwaliteit & Vakmanschap</span>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              Welkom bij RENEVU
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              RENEVU staat voor kwaliteit, betrouwbaarheid en totaalontzorging. Door ons unieke 
              samenwerkingsverband met lokale bouwbedrijven en onderaannemers kunnen we efficiënt en 
              kostenbesparend werken.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Met 23 jaar ervaring in de techniek zijn we de ideale schakel voor uw totaalproject. 
              Of het nu gaat om bouw, techniek of service: wij coördineren, controleren en ontzorgen u volledig van A tot Z.
            </p>
          </motion.div>
          
          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background decorative box */}
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-2 z-0" />
            <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Vakmanschap en bouwprojecten" 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">Onze Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ontdek onze drie kernpijlers waarmee we u volledig ontzorgen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-500" />
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-[-20%] h-32 bg-gradient-to-t from-white to-transparent z-10" />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-primary z-20 flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative z-20 bg-white">
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-8 flex-1">{feature.description}</p>
                  <Link 
                    to={feature.link}
                    className="inline-flex items-center text-primary font-semibold uppercase tracking-wider text-sm hover:text-primary-dark transition-colors group/link"
                  >
                    <span>Lees meer</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="text-4xl md:text-6xl font-serif mb-8">Klaar om uw project te starten?</h2>
             <p className="text-xl text-primary-100 mb-10 font-light">
               Wij bespreken graag de mogelijkheden met u. Neem contact op voor een vrijblijvend advies.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link 
                 to="/contact"
                 className="bg-white text-primary px-8 py-4 uppercase tracking-widest font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto"
               >
                 Offerte Aanvragen
               </Link>
               <a 
                 href="tel:0644156362"
                 className="border border-white text-white px-8 py-4 uppercase tracking-widest font-semibold hover:bg-white hover:text-primary transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
               >
                 <Phone className="w-5 h-5" />
                 <span>Bel Direct</span>
               </a>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
