import { motion } from 'motion/react';
import HeroSection from '../components/HeroSection';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import contactImg from '../../assets/contact.jpg';

export default function Contact() {
  return (
    <div className="bg-white">
      <HeroSection 
        title="CONTACT"
        subtitle="Wij staan klaar om uw vragen te beantwoorden of uw project te bespreken."
        image={contactImg}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">Neem Contact Op</h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Heeft u een vraag over onze diensten, wilt u een offerte aanvragen of heeft u met spoed hulp nodig? 
              Vul het onderstaande formulier in of neem direct contact met ons op via e-mail of telefoon. We 
              reageren zo snel mogelijk.
            </p>

            <div className="space-y-8 bg-gray-50 p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-primary shrink-0 transition-transform hover:scale-110">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-900 mb-1">Telefoon / WhatsApp (24/7)</h3>
                  <p className="text-gray-600 font-medium font-mono text-lg">06 44156362</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-primary shrink-0 transition-transform hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-900 mb-1">E-mail</h3>
                  <a href="mailto:Info@renevu.nl" className="text-gray-600 font-medium hover:text-primary transition-colors">
                    Info@renevu.nl
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-primary shrink-0 transition-transform hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-900 mb-1">Locatie</h3>
                  <p className="text-gray-600">Nederland</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-gray-100 shadow-xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-serif text-gray-900 mb-8">Stuur een bericht</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Naam</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mailadres</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="uw@email.nl"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Onderwerp</label>
                <select 
                  id="subject"
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option>Offerte aanvraag</option>
                  <option>Vraag over verbouwing / renovatie</option>
                  <option>Technische storing / calamiteit</option>
                  <option>Onderhoud & beheer</option>
                  <option>Anders</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Bericht</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Typ hier uw bericht..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center space-x-2"
              >
                <span>Verstuur Bericht</span>
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
