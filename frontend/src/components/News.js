import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaTag, FaClock, FaChevronRight, FaImages, FaLink, FaFileAlt } from 'react-icons/fa';
import main3 from "../images/main3.jpg";
import ok3 from "../images/ok3.jpg";
import ok5 from "../images/ok5.jpg";
import ok7 from "../images/ok7.jpg";
import ministerImage from "../images/minister.jpg";
import facility1Image from "../images/facility1.jpg";
import trans1 from "../images/trans1.jpg";
import trans2 from "../images/trans2.jpg";
import trans3 from "../images/trans3.jpg";
import trans4 from "../images/trans4.jpg";
import trans5 from "../images/trans5.jpg";
import trans6 from "../images/trans6.jpg";
import trans7 from "../images/trans7.jpg";

const News = ({ isFullPage = false }) => {
  const [newsImages, setNewsImages] = useState({});
  const [loadingImages, setLoadingImages] = useState(true);

  const latestNewsData = [
    {
      id: 15,
      title: "Facilitarea tranziției verzi și comerțului transfrontalier.",
      excerpt: "Pe data de 30 iunie 2025, Asociația Națională a Industriilor de Panificație și Morărit (ANIPM) a luat parte la ședința de lucru privind Facilitarea tranziției și comerțului transfrontalier, organizată la Guvernul Republicii Moldova. Evenimentul a adunat reprezentanți ai autorităților, organizațiilor de afaceri și sectorului privat pentru a discuta subiecte relevante pentru dezvoltarea economică a țării.",
      date: "30 iunie 2025",
      author: "ANIPM",
      category: "evenimente",
      image: facility1Image,
      readTime: "2 min",
      url: "https://www.facebook.com/photo?fbid=1142994064527705&set=pcb.1142994614527650&locale=ro_RO",
      hasImages: true,
      galleryUrl: "/galerie-facilitare-tranzitie",
      hasExternalLink: true,
      externalLink: "https://www.facebook.com/photo?fbid=1142994064527705&set=pcb.1142994614527650&locale=ro_RO"
    },
    {
      id: 9,
      title: "Tranziția Verde a Republicii Moldova: Motor al Integrării Europene și Dezvoltării Durabile",
      excerpt: "Pe 24 iunie, la Maib Park, a avut loc conferința națională \"Tranziția verde a Republicii Moldova: Un motor al integrării europene și al creșterii durabile\". Evenimentul a fost organizat de Uniunea Europeană și Programul Națiunilor Unite pentru Dezvoltare (PNUD).",
      date: "24 iunie 2025",
      author: "ANIMP",
      category: "sustenabilitate",
      image: trans1,
      readTime: "10 min",
      url: "#",
      hasImages: true,
      images: [trans1, trans2, trans3, trans4, trans5, trans6, trans7],
      galleryUrl: "/galerie-tranzitie-verde"
    },
    {
      id: 8,
      title: "Ministerul Agriculturii vine cu o reacție în urma demersului scris de ANIPM",
      excerpt: "Ministerul Agriculturii și Industriei Alimentare a transmis un răspuns oficial în urma demersului înaintat de Asociația Națională a Industriei de Panificație și Morărit din Moldova. Documentele oficiale sunt disponibile pentru consultare.",
      date: "5 aprilie 2025",
      author: "ANIMP",
      category: "oficial",
      image: ministerImage,
      readTime: "8 min",
      url: "#",
      hasDocuments: true,
      documents: [
        {
          id: 1,
          title: "Răspuns oficial - Partea 1",
          filename: "minist1.pdf",
          url: `${window.location.origin}/documents/minist1.pdf`
        },
        {
          id: 2,
          title: "Răspuns oficial - Partea 2", 
          filename: "minist2.pdf",
          url: `${window.location.origin}/documents/minist2.pdf`
        },
        {
          id: 3,
          title: "Anexă - Document de poziție",
          filename: "minist3.docx",
          url: `${window.location.origin}/documents/minist3.docx`
        },
        {
          id: 4,
          title: "Răspuns oficial - Partea 3",
          filename: "minist4.pdf", 
          url: `${window.location.origin}/documents/minist4.pdf`
        }
      ]
    },
    {
      id: 7,
      title: "Schema de ajutor de stat regional pentru investiții",
      excerpt: "Citește despre programul de ajutor de stat pentru investiții regionale pe site-ul oficial al MDED.",
      date: "30 martie 2025",
      author: "MDED.gov.md",
      category: "programe",
      image: "https://images.pexels.com/photos/5846174/pexels-photo-5846174.jpeg?_gl=1*1c1dn0v*_ga*MjAzNDIxNTg43.1747470437*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQyOTQwJGo1MiRsMCRoMA..",
      readTime: "6 min",
      url: "https://mded.gov.md/domenii/ajutor-de-stat/ajutor-de-stat-regional-pentru-investitii/",
      isExternal: true
    },
    {
      id: 6,
      title: "R. Moldova exportă mai multă făină, dar la un preț mult mai mic",
      excerpt: "Citește despre situația exporturilor de făină din Moldova pe site-ul original.",
      date: "29 martie 2025",
      author: "Agroexpert.md",
      category: "piata",
      image: "https://images.pexels.com/photos/9095/pexels-photo.jpg?_gl=1*wo0xda*_ga*MjAzNDIxNTg43.1747470437*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQyOTk4JGo1OSRsMCRoMA..",
      readTime: "4 min",
      url: "https://agroexpert.md/rom/novosti/r-moldova-exporta-mai-multa-faina-dar-la-un-pret-mult-mai-mic",
      isExternal: true
    },
    {
      id: 1,
      title: "Tot mai mulți pasionați de panificație descoperă farmecul pâinii cu maia",
      excerpt: "Afla mai multe despre trendul pâinii cu maia pe site-ul original.",
      date: "15 ianuarie 2025",
      author: "Stiri.md",
      category: "panificatie",
      image: "https://images.pexels.com/photos/1571075/pexels-photo-1571075.jpeg?_gl=1*iy4e5w*_ga*MjAzNDIxNTg43.1747470437*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMDUyJGo1JGwwJGgw",
      readTime: "5 min",
      url: "https://stiri.md/article/social/tot-mai-multi-pasionati-de-panificatie-descopera-farmecul-painii-cu-maia/",
      isExternal: true
    }
  ];

  useEffect(() => {
    const fetchNewsImages = async () => {
      try {
        const urls = latestNewsData
          .filter(news => news.url && news.url !== '#')
          .map(news => news.url);
        
        if (urls.length === 0) {
          setLoadingImages(false);
          return;
        }

        const backendUrl = process.env.REACT_APP_BACKEND_URL || window.location.origin;
        const apiUrl = `${backendUrl}/api/fetch-multiple-news-images`;
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(urls)
        });

        if (response.ok) {
          const results = await response.json();
          
          const imageMap = {};
          results.forEach(result => {
            if (result.image_url) {
              imageMap[result.url] = {
                image_url: result.image_url,
                title: result.title,
                description: result.description
              };
            }
          });
          
          setNewsImages(imageMap);
        }
      } catch (error) {
        console.error('Error fetching news images:', error);
      } finally {
        setLoadingImages(false);
      }
    };

    fetchNewsImages();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const handleScrollToUltimeleStiri = () => {
    // Navigate to news page and scroll to ultimele-stiri section
    window.location.href = '/noutati#ultimele-stiri';
  };

  return (
    <section id="noutati" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-heading">
              Ultimele <span className="text-primary-600">Știri</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cele mai recente știri și actualizări din industria de panificație și morărit, cu imagini și informații de la sursele originale
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {latestNewsData.slice(0, isFullPage ? latestNewsData.length : 6).map((news, index) => (
            <motion.div
              key={news.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-primary-200 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  {news.image ? (
                    <>
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute top-4 right-4 text-white text-xs font-bold py-2 px-3 rounded-full shadow-lg border border-white/20 uppercase tracking-wide ${news.hasDocuments ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : news.hasImages ? 'bg-gradient-to-r from-green-600 to-emerald-600' : news.isExternal ? 'bg-gradient-to-r from-orange-500 to-yellow-500' : 'bg-primary-500'}`}>
                        <div className="flex items-center space-x-1">
                          <span>{news.hasDocuments ? '📄' : news.hasImages ? '🖼️' : news.isExternal ? '🔗' : ''}</span>
                          <span>{news.hasDocuments ? 'DOCUMENTE' : news.hasImages ? 'IMAGINE' : news.isExternal ? 'EXTERN' : news.category.toUpperCase()}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="h-full bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-blue-400 text-4xl mx-auto mb-2">🖼️</div>
                        <div className="text-blue-600 text-sm font-medium">Imagine indisponibilă</div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary-100 to-blue-100 text-primary-700 rounded-full text-xs font-semibold inline-flex items-center border border-primary-200">
                      <FaCalendarAlt className="mr-1" /> {news.date}
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-semibold inline-flex items-center border border-blue-200">
                      <FaTag className="mr-1" /> {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                    </span>
                    {news.readTime && (
                      <span className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-semibold inline-flex items-center border border-gray-200">
                        <FaClock className="mr-1" /> {news.readTime}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {news.isExternal ? (
                      <a href={news.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
                        {news.title}
                      </a>
                    ) : (
                      news.title
                    )}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3 leading-relaxed text-sm">
                    {news.excerpt}
                  </p>
                  
                  {news.hasDocuments && news.documents && news.documents.length > 0 && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-blue-800 mb-2 flex items-center">
                        <FaFileAlt className="mr-2" />
                        Documente disponibile ({news.documents.length})
                      </h4>
                      <div className="space-y-2">
                        {news.documents.map((doc, docIndex) => (
                          <div key={docIndex} className="flex items-center text-xs text-blue-600">
                            <span className="mr-2">📄</span>
                            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {doc.title}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-gray-600 font-bold text-lg">
                      {news.author ? news.author.charAt(0).toUpperCase() : '?'}
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold text-gray-800">{news.author}</p>
                      <p className="text-xs text-gray-500">Sursă externă</p>
                    </div>
                    {news.hasImages && news.galleryUrl && (
                      <Link 
                        to={news.galleryUrl} 
                        className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-300 mr-2"
                      >
                        Vezi galeria
                        <FaImages className="ml-2 text-xs" />
                      </Link>
                    )}
                    {news.hasExternalLink && news.externalLink && (
                      <a 
                        href={news.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-300 mr-2"
                      >
                        Vezi link
                        <FaLink className="ml-2 text-xs" />
                      </a>
                    )}
                    {!news.hasImages && !news.hasExternalLink && (
                      <a 
                        href={news.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300"
                      >
                        Citește
                        <FaChevronRight className="ml-2 text-xs" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!isFullPage && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={handleScrollToUltimeleStiri}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-full font-semibold hover:from-primary-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="mr-3">Vezi toate știrile</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default News;

