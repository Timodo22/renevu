import { motion } from 'motion/react';
import HeroSection from '../components/HeroSection';
import { AlertTriangle, Clock4, Wrench, ShieldAlert, PhoneCall } from 'lucide-react';
import lekkageImg from '../../assets/Lekkage.jpg';
import storingenImg from '../../assets/Storingen.jpg';
export default function Service() {
  const services = [
    {
      title: 'Storingen',
      description: 'Snelle en adequate oplossing bij technische storingen, zodat uw dagelijkse bezigheden zo min mogelijk hinder ondervinden.',
      icon: <AlertTriangle className="w-8 h-8 text-white" />
    },
    {
      title: 'Calamiteiten',
      description: 'Acute problemen vereisen acute actie. Ons team staat paraat om bij calamiteiten de schade te beperken en te herstellen.',
      icon: <ShieldAlert className="w-8 h-8 text-white" />
    },
    {
      title: 'Onderhoud',
      description: 'Preventief onderhoud voorkomt grote problemen. Wij bieden periodieke checks voor al uw installaties.',
      icon: <Wrench className="w-8 h-8 text-white" />
    },
    {
      title: 'Technisch beheer',
      description: 'Volledige ontzorging van uw vastgoed. Wij nemen het complete technische beheer uit handen.',
      icon: <Clock4 className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="SERVICE & BEHEER"
        subtitle="24/7 service voor uw woningen of bedrijfspanden. Wij staan klaar wanneer u ons het hardst nodig heeft."
        image={lekkageImg}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-8 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
             <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">Altijd Bereikbaar</h2>
             <div className="h-1 w-20 bg-primary mb-8"></div>
             <p className="text-lg text-gray-600 leading-relaxed mb-6">
               Problemen aan uw woning of pand kennen geen kantoortijden. Daarom bieden wij een 24/7 
               service via e-mail en WhatsApp. Bij calamiteiten en storingen is een snelle reactietijd essentieel.
             </p>
             
             <div className="bg-gray-50 p-8 border-l-4 border-primary mt-8">
               <p className="font-serif text-xl mb-4">Direct hulp nodig?</p>
               <div className="space-y-4">
                 <a href="tel:0644156362" className="flex items-center space-x-4 text-gray-900 hover:text-primary transition-colors group">
                    <div className="bg-white p-3 rounded-full group-hover:bg-primary-50 transition-colors">
                      <PhoneCall className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xl font-medium tracking-wide">06 44156362</span>
                 </a>
                 <div className="flex items-center space-x-4 text-gray-900 group cursor-default">
                    <div className="bg-white p-3 rounded-full">
                      <Clock4 className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg">24/7 Bereikbaar via WhatsApp & e-mail</span>
                 </div>
               </div>
             </div>
          </motion.div>

          <div className="flex-1 w-full">
            <div className="relative overflow-hidden sm:overflow-visible">
               <div className="hidden sm:block absolute inset-0 bg-primary translate-x-4 translate-y-4"></div>
               <img 
                 src={storingenImg} 
                 alt="Service Technician" 
                 className="relative z-10 w-full h-auto object-cover shadow-xl"
               />
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Waarvoor kunt u ons bellen?</h2>
            <div className="h-1 w-16 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-6 bg-gray-900 p-8 group hover:bg-primary transition-colors duration-300"
              >
                <div className="shrink-0 bg-gray-800 p-4 rounded-xl group-hover:bg-primary-dark transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 group-hover:text-primary-50 transition-colors text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
