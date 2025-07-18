import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaSearch, FaCalendarAlt, FaTag, FaClock,
  FaExternalLinkAlt, FaImage
} from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import { PageHero } from '../components/PageHero';
import { FaArrowLeft } from 'react-icons/fa';

// Import local images
import bakeryImage from '../images/bakery.jpg';
import ministerImage from '../images/minister.jpg';
import flourImage from '../images/flour.jpg';
import mainImage from '../images/main.jpg';
import main2Image from '../images/main2.jpg';
import main3Image from '../images/main3.jpg';
import latestNewsImage from '../images/latest-news.jpg';
import forumImage from '../images/forum.jpg';
import trans1Image from '../images/trans1.jpg';
import facility1Image from '../images/facility1.jpg';

const LatestNewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const pageInfo = {
    title: "Ultimele Știri",
    description: "Află cele mai recente noutăți din industria de panificație și morărit",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Ultimele știri", path: "/ultimele-stiri" }
    ]
  };

  // Updated news data with EXACT SAME images as NewsPage - Perfect match!
  const newsData = [
    {
      id: 15,
      title: "Facilitarea tranziției verzi și comerțul transfrontalier.",
      excerpt: "Pe data de 30 iunie 2025, Asociația Națională a Industriilor de Panificație și Morărit (ANIPM) a luat parte la ședința de lucru privind Facilitarea tranziției și comerțului transfrontalier, organizată la Guvernul Republicii Moldova. Evenimentul a adunat reprezentanți ai autorităților, organizațiilor de afaceri și sectorului privat pentru a discuta subiecte relevante pentru dezvoltarea economică a țării.",
      date: "30 iunie 2025",
      author: "ANIPM",
      category: "evenimente",
      readTime: "2 min",
      url: "https://www.facebook.com/photo?fbid=1142994064527705&set=pcb.1142994614527650&locale=ro_RO",
      hasImages: true,
      image: facility1Image,
      galleryUrl: "/galerie-facilitare-tranzitie"
    },
    {
      id: 9,
      title: "Tranziția Verde a Republicii Moldova: Motor al Integrării Europene și Dezvoltării Durabile",
      excerpt: "Pe 24 iunie, la Maib Park, a avut loc conferința națională \"Tranziția verde a Republicii Moldova: Un motor al integrării europene și al creșterii durabile\". Evenimentul a fost organizat de Uniunea Europeană și Programul Națiunilor Unite pentru Dezvoltare (PNUD).",
      date: "24 iunie 2025",
      author: "ANIPM",
      category: "sustenabilitate",
      readTime: "10 min",
      url: "#",
      hasImages: true,
      image: trans1Image // Keep the existing conference image for this one
    },
    {
      id: 7,
      title: "Schema de ajutor de stat regional pentru investiții",
      excerpt: "Citește despre programul de ajutor de stat pentru investiții regionale pe site-ul oficial al MDED.",
      date: "30 martie 2025",
      author: "MDED.gov.md",
      category: "programe",
      readTime: "6 min",
      url: "https://mded.gov.md/domenii/ajutor-de-stat/ajutor-de-stat-regional-pentru-investitii/",
      image: "https://images.pexels.com/photos/5846174/pexels-photo-5846174.jpeg?_gl=1*1c1dn0v*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQyOTQwJGo1MiRsMCRoMA" // Beautiful artisan bread - EXACT MATCH
    },
    {
      id: 6,
      title: "R. Moldova exportă mai multă făină, dar la un preț mult mai mic",
      excerpt: "Citește despre situația exporturilor de făină din Moldova pe site-ul original.",
      date: "29 martie 2025",
      author: "Agroexpert.md",
      category: "piata",
      readTime: "4 min",
      url: "https://agroexpert.md/rom/novosti/r-moldova-exporta-mai-multa-faina-dar-la-un-pret-mult-mai-mic",
      image: "https://images.pexels.com/photos/9095/pexels-photo.jpg?_gl=1*wo0xda*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQyOTk4JGo1OSRsMCRoMA" // Hands holding fresh bread - EXACT MATCH
    },
    {
      id: 1,
      title: "Tot mai mulți pasionați de panificație descoperă farmecul pâinii cu maia",
      excerpt: "Afla mai multe despre trendul pâinii cu maia pe site-ul original.",
      date: "15 ianuarie 2025",
      author: "Stiri.md",
      category: "panificatie",
      readTime: "5 min",
      url: "https://stiri.md/article/social/tot-mai-multi-pasionati-de-panificatie-descopera-farmecul-painii-cu-maia/",
      image: "https://images.pexels.com/photos/1571075/pexels-photo-1571075.jpeg?_gl=1*iy4e5w*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMDUyJGo1JGwwJGgw" // Bakery display case - EXACT MATCH
    },
    {
      id: 2,
      title: "În Transnistria se vor scumpi făina și pâinea",
      excerpt: "Citește despre modificările de prețuri pe site-ul original.",
      date: "12 ianuarie 2025",
      author: "Stiri.md",
      category: "piata",
      readTime: "3 min",
      url: "https://stiri.md/article/economic/in-transnistria-se-vor-scumpi-faina-si-painea/",
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?_gl=1*7vb6d0*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMDg5JGo1NSRsMCRoMA" // Golden croissants - EXACT MATCH
    },
    {
      id: 3,
      title: "Ion Perju: Prețurile s-au majorat nejustificat, grâu în țară este",
      excerpt: "Află mai multe despre declarațiile oficiale pe site-ul original.",
      date: "10 ianuarie 2025",
      author: "Stiri.md",
      category: "piata",
      readTime: "4 min",
      url: "https://i.simpalsmedia.com/point.md/news/809x456/23dc83357924e8dfe4f72f15d2378c39.jpg", // Sourdough loaf - EXACT MATCH
      image: "https://i.simpalsmedia.com/point.md/news/809x456/23dc83357924e8dfe4f72f15d2378c39.jpg"
    },
    {
      id: 4,
      title: "Cel mai mare producător din industria de panificație din Moldova înregistrează un profit record",
      excerpt: "Citește analiza completă pe site-ul original.",
      date: "21 februarie 2025",
      author: "Agora.md",
      category: "business",
      readTime: "6 min",
      url: "https://agora.md/2025/02/21/cel-mai-mare-producator-din-industria-de-panificatie-din-moldova-inregistreaza-un-profit-record",
      image: "https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?_gl=1*1gxmua7*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMTc5JGo1NiRsMCRoMA" // Basket of artisan breads - EXACT MATCH
    },
    {
      id: 5,
      title: "De ce brutarii din Chișinău coc din ce în ce mai puțină pâine",
      excerpt: "Afla mai multe despre această analiză pe site-ul original.",
      date: "15 decembrie 2024",
      author: "Europa Liberă",
      category: "tendinte",
      readTime: "7 min",
      url: "https://moldova.europalibera.org/a/27188328.html",
      image: "https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?_gl=1*6dg9kh*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMjI4JGo3JGwwJGgw" // Beautiful artisan bread - EXACT MATCH
    }
  ];

  // Get unique categories
  const categories = ['all', ...new Set(newsData.map(item => item.category))];

  // Filter news by category
  const filteredNews = activeCategory === 'all' 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="latest-news-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category filters */}
              <div className="mb-10 overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide">
                <div className="inline-flex space-x-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-primary-500 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category === 'all' ? 'Toate știrile' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* News List - With Real Images from News Sites */}
              <div className="space-y-6">
                {filteredNews.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    {/* Check if this is a news item with a gallery (id: 9 or id: 15) */}
                    {news.hasImages ? (
                      <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-primary-300">
                        {/* Image display logic */}
                        <div className="h-48 overflow-hidden relative">
                          <img 
                            src={news.image} 
                            alt={news.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Special indicator for gallery */}
                          <div className="absolute bottom-0 right-0 bg-green-600 bg-opacity-90 text-white text-xs px-2 py-1 rounded-tl-md">
                            <span>Galerie Foto</span>
                          </div>
                        </div>
                        
                        {/* Header with source and link indicator */}
                        <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-4 border-b border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm">
                                {news.author.charAt(0)}
                              </div>
                              <span className="font-semibold text-primary-700">{news.author}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-primary-600">
                              <FaImage className="text-sm" />
                              <span className="text-sm font-medium">Vezi galeria</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Main content */}
                        <div className="p-6">
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium inline-flex items-center">
                              <FaCalendarAlt className="mr-1" /> {news.date}
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium inline-flex items-center">
                              <FaTag className="mr-1" /> {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium inline-flex items-center">
                              <FaClock className="mr-1" /> {news.readTime}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300 line-height-tight">
                            {news.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 text-lg leading-relaxed">{news.excerpt}</p>
                          
                          {/* Call to action - Special handling for id 9 or 15 */}
                          <div className="flex justify-between w-full mt-4">
                            {news.galleryUrl && (
                              <Link 
                                to={news.galleryUrl}
                                className="flex-1 mr-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 text-center text-lg"
                              >
                                Vezi Galerie
                              </Link>
                            )}
                            {news.url && news.url !== '#' && (
                              <a 
                                href={news.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 ml-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 text-center text-lg"
                              >
                                Citește Articolul
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a 
                        href={news.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-primary-300">
                          {/* Image with local source - Always displays */}
                          <div className="h-48 overflow-hidden relative">
                            <img 
                              src={news.image} 
                              alt={news.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Image source overlay */}
                            <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-tl-md">
                              <span>Sursă: {news.author}</span>
                            </div>
                          </div>
                          
                          {/* Header with source and external link indicator */}
                          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-4 border-b border-gray-100">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm">
                                  {news.author.charAt(0)}
                                </div>
                                <span className="font-semibold text-primary-700">{news.author}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-primary-600">
                                <FaExternalLinkAlt className="text-sm" />
                                <span className="text-sm font-medium">Link extern</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Main content */}
                          <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium inline-flex items-center">
                                <FaCalendarAlt className="mr-1" /> {news.date}
                              </span>
                              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium inline-flex items-center">
                                <FaTag className="mr-1" /> {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                              </span>
                              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium inline-flex items-center">
                                <FaClock className="mr-1" /> {news.readTime}
                              </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300 line-height-tight">
                              {news.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 text-lg leading-relaxed">{news.excerpt}</p>
                            
                            {/* Call to action */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="text-sm text-gray-500">
                                Citește articolul complet pe {news.author}
                              </div>
                              <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                                <span className="mr-2">Vizitează site-ul</span>
                                <div className="w-8 h-8 rounded-full bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center transition-colors duration-300">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
                  <button className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    Anterior
                  </button>
                  <button className="px-4 py-2 border-t border-b border-gray-300 bg-primary-50 text-primary-700 font-medium">
                    1
                  </button>
                  <button className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    Următor
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Search */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Caută</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Caută știri..."
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-500">
                    <FaSearch />
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Categorii</h3>
                <ul className="space-y-2">
                  {categories.filter(c => c !== 'all').map((category, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => setActiveCategory(category)}
                        className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-colors duration-300 ${
                          activeCategory === category 
                            ? 'bg-primary-50 text-primary-700 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                        <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                          {newsData.filter(item => item.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts - With Real Images */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Cele mai recente</h3>
                <div className="space-y-4">
                  {newsData.slice(0, 4).map((news, index) => (
                    <div key={index} className="group">
                      {news.hasImages ? (
                        <Link 
                          to={news.galleryUrl || news.url}
                          className="block"
                        >
                          <div className="flex items-start p-3 rounded-lg border border-gray-100 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300">
                            {/* Image display logic */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden mr-3 relative">
                              <img 
                                src={news.image} 
                                alt={news.title} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs">
                                  {news.author.charAt(0)}
                                </div>
                                <span className="text-xs font-medium text-primary-600 truncate">{news.author}</span>
                                <FaImage className="text-xs text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <h4 className="text-sm font-medium hover:text-primary-600 transition-colors duration-300 line-clamp-2 mb-1">
                                {news.title}
                              </h4>
                              <p className="text-xs text-gray-500">{news.date}</p>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <a 
                          href={news.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="flex items-start p-3 rounded-lg border border-gray-100 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300">
                            {/* Image display with local images */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden mr-3 relative">
                              <img 
                                src={news.image} 
                                alt={news.title} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs">
                                  {news.author.charAt(0)}
                                </div>
                                <span className="text-xs font-medium text-primary-600 truncate">{news.author}</span>
                                <FaExternalLinkAlt className="text-xs text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <h4 className="text-sm font-medium hover:text-primary-600 transition-colors duration-300 line-clamp-2 mb-1">
                                {news.title}
                              </h4>
                              <p className="text-xs text-gray-500">{news.date}</p>
                            </div>
                          </div>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter Subscription - HIDDEN */}
              <div className="hidden bg-gradient-to-r from-primary-500 to-primary-600 p-6 rounded-xl shadow-md text-white">
                <h3 className="text-lg font-semibold mb-2">Abonează-te la newsletter</h3>
                <p className="text-white/80 text-sm mb-4">Primește cele mai recente știri direct în inbox-ul tău.</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Adresa ta de email"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full py-2 bg-white text-primary-600 rounded-lg font-medium hover:bg-white/90 transition-colors duration-300">
                    Abonează-te
                  </button>
                </form>
              </div>
            </div>
          </div>
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

export default LatestNewsPage;



