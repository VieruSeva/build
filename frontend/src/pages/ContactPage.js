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
          
          <div className="flex justify-center items-center space-x-8">
            {[
              { 
                icon: FaFacebookF, 
                url: "https://www.facebook.com/anipmmd", 
                name: "Facebook",
                color: "bg-blue-600 hover:bg-blue-700",
                hoverScale: "hover:scale-110"
              },
              { 
                icon: FaInstagram, 
                url: "https://www.instagram.com/anipmmd", 
                name: "Instagram",
                color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600",
                hoverScale: "hover:scale-110"
              },
              { 
                icon: FaTiktok, 
                url: "https://www.tiktok.com/@anipmmd", 
                name: "TikTok",
                color: "bg-black hover:bg-gray-800",
                hoverScale: "hover:scale-110"
              },
              { 
                icon: FaYoutube, 
                url: "https://www.youtube.com/@anipmmd", 
                name: "YouTube",
                color: "bg-red-600 hover:bg-red-700",
                hoverScale: "hover:scale-110"
              }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-6 rounded-full ${social.color} text-white transition-all duration-300 transform ${social.hoverScale} shadow-lg hover:shadow-xl`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="text-3xl" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                    {social.name}
                  </span>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                </div>
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
      
      <div className="my-16 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Înapoi la pagina principală
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactPage;
