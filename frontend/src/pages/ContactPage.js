import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { Contact } from '../components/Contact';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaQuestion, FaStar, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const pageInfo = {
    title: "Contactează-ne",
    description: "Suntem aici pentru a răspunde întrebărilor și solicitărilor dumneavoastră",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Contact", path: "/contact" }
    ]
  };

  // FAQ data
  const faqs = [
    {
      question: "Cum pot deveni membru al asociației?",
      answer: "Pentru a deveni membru al asociației, completați formularul de contact de pe această pagină sau trimiteți un email la contact@agroromania.ro. Echipa noastră vă va contacta cu informații despre procesul de aderare și taxele asociate."
    },
    {
      question: "Care sunt beneficiile de a fi membru?",
      answer: "Membrii asociației beneficiază de reprezentare în relația cu autoritățile, acces la studii și rapoarte de piață, participare la evenimente și târguri, oportunități de networking și acces la programe de formare profesională."
    },
    {
      question: "Organizați evenimente sau conferințe?",
      answer: "Da, organizăm regular evenimente, conferințe și workshop-uri pentru membri și parteneri. Consultați secțiunea de Noutăți pentru informații despre evenimentele viitoare sau contactați-ne pentru detalii."
    },
    {
      question: "Oferiți consultanță pentru proiecte europene?",
      answer: "Asociația noastră oferă membrilor consultanță pentru accesarea fondurilor europene și implementarea proiectelor. Contactați-ne pentru a discuta despre nevoile specifice ale afacerii dumneavoastră."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="contact-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
      />
      
      <Contact isFullPage={true} />
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 font-heading">Întrebări Frecvente</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Răspunsuri la cele mai comune întrebări despre asociația noastră
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full mr-4">
                      <FaQuestion className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-heading">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 font-heading">Urmărește-ne pe Social Media</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rămâi conectat cu noi și află ultimele noutăți din industria agricolă
              </p>
            </motion.div>
          </div>
          
          <div className="flex justify-center items-center space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 flex-wrap gap-y-8">
            {[
              { 
                icon: FaFacebookF, 
                url: "https://www.facebook.com/anipmmd", 
                name: "Facebook",
                color: "bg-blue-600",
                hoverColor: "hover:bg-blue-700",
                shadowColor: "shadow-blue-500/25 hover:shadow-blue-500/50"
              },
              { 
                icon: FaInstagram, 
                url: "https://www.instagram.com/anipmmd", 
                name: "Instagram",
                color: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
                hoverColor: "hover:from-pink-600 hover:via-red-600 hover:to-yellow-600",
                shadowColor: "shadow-pink-500/25 hover:shadow-pink-500/60",
                special: true
              },
              { 
                icon: FaTiktok, 
                url: "https://www.tiktok.com/@anipmmd", 
                name: "TikTok",
                color: "bg-gray-900",
                hoverColor: "hover:bg-black",
                shadowColor: "shadow-gray-500/25 hover:shadow-gray-500/50"
              },
              { 
                icon: FaYoutube, 
                url: "https://www.youtube.com/@anipmmd", 
                name: "YouTube",
                color: "bg-red-600",
                hoverColor: "hover:bg-red-700",
                shadowColor: "shadow-red-500/25 hover:shadow-red-500/50"
              }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className={`group relative p-6 sm:p-8 rounded-2xl ${social.color} ${social.hoverColor} text-white transition-all duration-500 transform hover:scale-110 sm:hover:scale-125 hover:-translate-y-2 sm:hover:-translate-y-3 shadow-2xl ${social.shadowColor} hover:rotate-1 sm:hover:rotate-3 ${social.special ? 'ring-2 ring-pink-400/30 hover:ring-pink-400/60' : ''}`}
                whileHover={{ 
                  y: -8, 
                  rotate: social.special ? [0, -2, 2, 0] : 0,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.9, rotate: 0 }}
              >
                <social.icon className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110" />
                
                {/* Enhanced glow effect for Instagram */}
                {social.special && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400/20 via-red-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                )}
                
                {/* Improved tooltip */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 z-10">
                  <div className="relative">
                    <span className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap shadow-lg">
                      {social.name}
                    </span>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300"></div>
                
                {/* Pulse effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping bg-white"></div>
              </motion.a>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg">
              Alătură-te comunității noastre și fii la curent cu toate evenimentele și oportunitățile din agricultură!
            </p>
          </motion.div>
        </div>
      </section>
      
      <div className="my-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            <FaArrowLeft className="mr-3 text-lg" />
            Înapoi la pagina principală
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
