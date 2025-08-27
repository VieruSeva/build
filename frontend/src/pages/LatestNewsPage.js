import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaSearch, FaCalendarAlt, FaTag, FaClock,
  FaExternalLinkAlt, FaImage, FaChevronDown, FaChevronUp
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
import uzb from "../images/uzb.jpg";
import pavel from "../images/pavel.jpg";

// Helper function to determine icon based on news type
const getIconForNewsItem = (item) => {
  if (item.hasImages || item.galleryUrl) {
    return <span className="text-primary-500 mr-3 text-2xl">📷</span>; // Gallery icon
  }
  if (item.isExternal || item.url) {
    return <span className="text-primary-500 mr-3 text-2xl">🔗</span>; // External link icon
  }
  if (item.isExpandable) {
    return <span className="text-primary-500 mr-3 text-2xl">📄</span>; // Document icon
  }
  return <span className="text-primary-500 mr-3 text-2xl">📰</span>; // News icon
};

const LatestNewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState({});

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

  // Complete news data from simple news - ALL NEWS INCLUDED!
  const newsData = [
    {
      id: 15,
      title: "Facilitarea tranziției verzi și comerțului transfrontalier.",
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
      fullContent: "Pe 24 iunie, la Maib Park, a avut loc conferința națională \"Tranziția verde a Republicii Moldova: Un motor al integrării europene și al creșterii durabile\". Evenimentul a fost organizat de Uniunea Europeană și Programul Națiunilor Unite pentru Dezvoltare (PNUD). Conferința a abordat subiecte cruciale legate de tranziția către o economie verde și durabilă, inclusiv implementarea tehnologiilor ecologice în agricultură, dezvoltarea energiei regenerabile și promovarea practicilor sustenabile în industrie. Participanții au discutat despre oportunitățile și provocările pe care le aduce procesul de integrare europeană în contextul tranziției verzi, precum și despre importanța colaborării între sectorul public și privat pentru atingerea obiectivelor de dezvoltare durabilă. Evenimentul a reunit experți locali și internaționali, reprezentanți ai guvernului, societății civile și mediului de afaceri, toți fiind uniți în viziunea unei Moldova mai verzi și mai prospere.",
      date: "24 iunie 2025",
      author: "ANIPM",
      category: "sustenabilitate",
      image: trans1Image,
      readTime: "10 min",
      hasImages: true,
      galleryUrl: "/galerie-tranzitie-verde",
      isExpandable: true
    },
    {
      id: 8,
      title: "Ministerul Agriculturii vine cu o reacție în urma demersului scris de ANIPM",
      excerpt: "Ministerul Agriculturii și Industriei Alimentare a transmis un răspuns oficial în urma demersului înaintat de Asociația Națională a Industriei de Panificație și Morărit din Moldova. Documentele oficiale sunt disponibile pentru consultare.",
      fullContent: "Ministerul Agriculturii și Industriei Alimentare a transmis un răspuns oficial în urma demersului înaintat de Asociația Națională a Industriei de Panificație și Morărit din Moldova. Documentele oficiale sunt disponibile pentru consultare și includ poziția oficială a ministerului privind problemele ridicate de asociație, măsurile propuse pentru îmbunătățirea situației din sectorul de panificație și morărit, precum și planul de acțiuni concrete pentru susținerea industriei. Răspunsul oficial conține, de asemenea, clarificări importante cu privire la reglementările în vigoare și propuneri pentru modificări legislative care să sprijine dezvoltarea durabilă a sectorului agroalimentar din Republica Moldova.",
      date: "5 aprilie 2025",
      author: "ANIPM",
      category: "oficial",
      image: ministerImage,
      readTime: "8 min",
      hasDocuments: true,
      isExpandable: true,
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
      id: 35,
      title: "Anunț privind organizarea consultărilor publice pe marginea proiectului hotărârii Guvernului cu privire la aprobarea Cerințelor de calitate pentru produsele de panificație și pastele făinoase și a notei de fundamentare.",
      excerpt: "Afla mai multe pe site-ul original",
      date: "14 iunie 2025-30 iunie 2025",
      author: "Particip.gov.md",
      category: "panificatie si paste",
      image: "https://particip.gov.md/resources/images/cover.jpg",
      readTime: "3 min",
      url: "https://particip.gov.md/ro/document/stages/anunt-privind-organizarea-consultarilor-publice-pe-marginea-proiectului-hotararii-guvernului-cu-privire-la-aprobarea-cerintelor-de-calitate-pentru-produsele-de-panificatie-si-pastele-fainoase-si-a-notei-de-fundamentare/14839",
      isExternal: true
    },
    {
      id: 92,
      title: "Astăzi, 8 august 2025, am avut onoarea de a primi în vizită oficială delegația din Uzbekistan.",
      excerpt: "Astăzi, 8 august 2025, am avut onoarea de a primi în vizită oficială delegația din Uzbekistan. Programul vizitei a inclus o deplasare la TIRHLEB – fabrica de pâine din Tiraspol, unde oaspeții au putut vedea îndeaproape procesele moderne de producere a pâinii și diversitatea sortimentelor realizate aici.",
      fullContent: "Astăzi, 8 august 2025, am avut onoarea de a primi în vizită oficială delegația din Uzbekistan. Programul vizitei a inclus o deplasare la TIRHLEB – fabrica de pâine din Tiraspol, unde oaspeții au putut vedea îndeaproape procesele moderne de producere a pâinii și diversitatea sortimentelor realizate aici. Ne-am exprimat bucuria și deschiderea de a le prezenta partenerilor noștri combinatele dotate cu tehnologii avansate, care oferă oportunități reale pentru dezvoltarea unor colaborări durabile și stabilirea de parteneriate strategice în viitor. Această întâlnire a reprezentat un pas important în consolidarea relațiilor economice și în identificarea unor proiecte comune, menite să aducă beneficii ambelor părți.",
      date: "8 august 2025",
      author: "ANIPM",
      category: "parteneri",
      image: uzb,
      readTime: "1 min",
      isExpandable: true
    },
    {
      id: 33,
      title: "Moldova este cel mai mare cumpărător de făină ucraineană",
      excerpt: "Citește analiza completă pe site-ul original.",
      date: "19 iulie 2025",
      author: "Point.md",
      category: "business",
      image: "https://images.pexels.com/photos/3756050/pexels-photo-3756050.jpeg?_gl=1*6lsf9a*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTU2MTU3MzQkbzE1JGcxJHQxNzU1NjE1NzUyJGo0MiRsMCRoMA..",
      readTime: "3 min",
      url: "https://point.md/ru/novosti/ekonomika/moldova-iavliaetsia-krupneishim-pokupatelem-ukrainskoi-muki/"
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
      image: "https://images.pexels.com/photos/5846174/pexels-photo-5846174.jpeg?_gl=1*1c1dn0v*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQyOTQwJGo1MiRsMCRoMA"
    },
    {
      id: 93,
      title: "Pavel Țelicka, la Chișinău: Sprijin deplin din partea Cehiei pentru integrarea europeană a Moldovei.",
      excerpt: "Pe 13 august 2025, la Casa Guvernului, a avut loc o ședință de lucru cu Pavel Țelicka, deputat în Parlamentul European și fost negociator-șef al Republicii Cehe pentru aderarea la Uniunea Europeană. Întâlnirea, găzduită de Ludmila Catlabuga, ministrul Agriculturii și Industriei Alimentare, a reunit reprezentanți ai asociațiilor de producători locali.",
      fullContent: "Pe 13 august 2025, la Casa Guvernului, a avut loc o ședință de lucru cu Pavel Țelicka, deputat în Parlamentul European și fost negociator-șef al Republicii Cehe pentru aderarea la Uniunea Europeană. Întâlnirea, găzduită de Ludmila Catlabuga, ministrul Agriculturii și Industriei Alimentare, a reunit reprezentanți ai asociațiilor de producători locali. Discuțiile au vizat atât experiența Cehiei în procesul de integrare europeană, cât și direcțiile de dezvoltare a sectorului agricol din Republica Moldova. Oficialul european a vorbit despre modernizarea infrastructurii agricole, creșterea competitivității produselor moldovenești pe piața UE și accesarea fondurilor europene, asigurând că experții cehi sunt gata să ofere sprijin tehnic și consultanță pentru a accelera parcursul european al țării.",
      date: "13 august 2025",
      author: "ANIPM",
      category: "parteneri",
      image: pavel,
      readTime: "3 min",
      isExpandable: true
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
      image: "https://images.pexels.com/photos/9095/pexels-photo.jpg?_gl=1*wo0xda*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQyOTk4JGo1OSRsMCRoMA"
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
      image: "https://images.pexels.com/photos/1571075/pexels-photo-1571075.jpeg?_gl=1*iy4e5w*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMDUyJGo1JGwwJGgw"
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
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?_gl=1*7vb6d0*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMDg5JGo1NSRsMCRoMA"
    },
    {
      id: 3,
      title: "Ion Perju: Prețurile s-au majorat nejustificat, grâu în țară este",
      excerpt: "Află mai multe despre declarațiile oficiale pe site-ul original.",
      date: "10 ianuarie 2025",
      author: "Stiri.md",
      category: "piata",
      readTime: "4 min",
      url: "https://i.simpalsmedia.com/point.md/news/809x456/23dc83357924e8dfe4f72f15d2378c39.jpg"
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
      image: "https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?_gl=1*1gxmua7*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMTc5JGo1NiRsMCRoMA"
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
      image: "https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?_gl=1*6dg9kh*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMjI4JGo3JGwwJGgw"
    }
  ];

  // Get unique categories
  const categories = ['all', ...new Set(newsData.map(item => item.category))];

  // Filter news by category and search term
  const filteredNews = newsData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle news item click
  const handleNewsClick = (item) => {
    if (item.hasImages && item.galleryUrl) {
      // Navigate to gallery
      window.location.href = item.galleryUrl;
    } else if (item.url) {
      // Open external link
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Toggle expand/collapse for expandable items
  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="overflow-hidden"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
      />
      
      <section className="py-12 md:py-20 section-padding">
        <div className="container mx-auto px-4">
          {/* Search and Category filters */}
          <div className="mb-10 space-y-6">
            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Caută știri..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-500">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Category filters */}
            <div className="overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide">
              <div className="inline-flex space-x-2 justify-center">
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
          </div>

          {/* News Grid - Archive Style */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="card-modern bg-white rounded-xl shadow-lg flex flex-col justify-between overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    {item.image && (
                      <div className="w-full h-48 mb-4 overflow-hidden group relative">
                        <img 
                          src={item.image} 
                          alt={`Thumbnail for ${item.title}`} 
                          className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-75" 
                          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/D1D5DB/1F2937?text=Imagine+indisponibilă"; }}
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                            <div className="text-3xl mb-2">
                              {item.hasImages ? '📷' : 
                               item.isExternal || item.url ? '🔗' : 
                               item.isExpandable ? '📄' : '📰'}
                            </div>
                            <p className="text-sm font-semibold">
                              {item.hasImages ? 'Vezi Galeria' :
                               item.isExternal || item.url ? 'Citește Articolul' :
                               item.isExpandable ? (expandedItems[item.id] ? 'Arată Mai Puțin' : 'Citește Mai Mult') : 'Vezi Știrea'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="p-6 pt-0">
                      <div className="flex items-center mb-3">
                        {getIconForNewsItem(item)}
                        <h3 className="text-xl font-bold text-gray-800 font-heading line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                      <div className="text-gray-600 mb-3 text-sm">
                        {item.isExpandable ? (
                          <div>
                            <p className={expandedItems[item.id] ? '' : 'line-clamp-3'}>
                              {expandedItems[item.id] ? item.fullContent : item.excerpt}
                            </p>
                            {expandedItems[item.id] && item.fullContent && item.fullContent !== item.excerpt && (
                              <div className="mt-2 pt-2 border-t border-gray-100">
                                <p className="text-xs text-gray-500 italic">Conținut complet afișat</p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="line-clamp-3">{item.excerpt}</p>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mb-4 space-y-1">
                        <p><strong>Autor:</strong> {item.author}</p>
                        <p><strong>Categorie:</strong> {item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                        <p><strong>Data:</strong> {item.date}</p>
                        {item.readTime && <p><strong>Timp citire:</strong> {item.readTime}</p>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 mt-auto">
                    {item.isExpandable ? (
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="btn-primary w-full inline-flex items-center justify-center text-sm"
                      >
                        <span className="mr-2">
                          {expandedItems[item.id] ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                        {expandedItems[item.id] ? 'Arată Mai Puțin' : 'Citește Mai Mult'}
                      </button>
                    ) : item.hasImages && item.galleryUrl ? (
                      <Link
                        to={item.galleryUrl}
                        className="btn-primary w-full inline-flex items-center justify-center text-sm"
                      >
                        <span className="mr-2">📷</span>
                        Vezi Galeria
                      </Link>
                    ) : item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full inline-flex items-center justify-center text-sm"
                      >
                        <span className="mr-2">🔗</span>
                        Citește Articolul
                      </a>
                    ) : (
                      <button
                        onClick={() => handleNewsClick(item)}
                        className="btn-primary w-full inline-flex items-center justify-center text-sm"
                      >
                        <span className="mr-2">📰</span>
                        Vezi Știrea
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <span className="text-4xl mb-4 block mx-auto text-gray-400">📰</span>
              <p className="text-xl text-gray-500">
                Nu s-au găsit știri pentru criteriile selectate.
              </p>
            </div>
          )}
          
          {/* Back to home button */}
          <div className="mt-16 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Înapoi la pagina principală
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LatestNewsPage;