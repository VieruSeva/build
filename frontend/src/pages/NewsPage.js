import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { openDocumentPreview, downloadDocument, getDocumentUrl } from '../utils/documentPreview';
import { FaArrowLeft, FaCalendarAlt, FaTag, FaUser, FaSearch, FaClock, FaExternalLinkAlt, FaChevronRight, FaMapMarkerAlt, FaHistory, FaFlask, FaFileAlt, FaLandmark, FaImage, FaImages, FaLink } from 'react-icons/fa';
import main3 from "../images/main3.jpg";
import ok3 from "../images/ok3.jpg";
import ok5 from "../images/ok5.jpg";
import ok7 from "../images/ok7.jpg";
import expo1 from "../images/Expozitie-targ internationala specializata de produse, utilaje, tehnologii agricole si mestesuguri, editia a XXVII-a.png";
import expo2 from "../images/Expozitie-targ internationala specializata de produse, utilaje, tehnologii agricole si mestesuguri, editia a XXVII-a_2.png";
import expo3 from "../images/Expoziţie internaţională specializată de maşini, echipamente şi tehnologii pentru complexul agroindustrial, ediţia a XXXXVI-a.png";
import antreprenorExpo from "../images/ANTREPRENOR EXPO.png";
import ebaImage from "../images/eba.jpg";
import ipackImage from "../images/ipack.jpg";
import eta2025Image from "../images/eta2025.jpg";
import ministerImage from "../images/minister.jpg";
import facility1Image from "../images/facility1.jpg";
import trans1 from "../images/trans1.jpg";
import trans2 from "../images/trans2.jpg";
import trans3 from "../images/trans3.jpg";
import trans4 from "../images/trans4.jpg";
import trans5 from "../images/trans5.jpg";
import trans6 from "../images/trans6.jpg";
import trans7 from "../images/trans7.jpg";

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("toate");
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [expandedEventId, setExpandedEventId] = useState(null);
  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    url: "",
    title: ""
  });
  const location = useLocation();
  const [newsImages, setNewsImages] = useState({});
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
    
    window.scrollTo(0, 0);
    
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      setActiveCategory(category);
    }
  }, [location]);

  const toggleReadMore = (id) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  const toggleEventReadMore = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  const handlePreview = (filename, title) => {
    const url = getDocumentUrl(filename);
    openDocumentPreview(url, title);
  };

  const handleDownload = (filename, title) => {
    const url = getDocumentUrl(filename);
    downloadDocument(url, filename);
  };

  const events = [
    {
      id: 6,
      title: "ENERGY TRANSITION AGENDA - 4th edition / AGENDA TRANZIȚIEI ENERGETICE - ediția a 4-a",
      description: "Asociația Businessului European (EBA Moldova) are deosebita onoare și plăcere să Vă lanseze invitația la evenimentul Energy Transition Agenda 2025.",
      startDate: "15 Iunie 2025",
      endDate: "15 Iunie 2025",
      location: "Chișinău, Republica Moldova",
      image: eta2025Image,
      url: "https://eba-md.translate.goog/eng/news/energy-transition-agenda---4th-edition?_x_tr_sl=en&_x_tr_tl=ro&_x_tr_hl=ro&_x_tr_pto=sc",
      fullContent: "Asociația Businessului European (EBA Moldova) are deosebita onoare și plăcere să Vă lanseze invitația la evenimentul Energy Transition Agenda 2025. Evenimentul va avea loc în cea de-a 4-a ediție, fiind unul dintre cele mai mari și mai interesante evenimente din industria energetică din Republica Moldova, organizat de EBA Moldova. În fiecare an, acest eveniment reunește reprezentanți ai mediului de afaceri, instituții publice din domeniu, investitori interesați și experți pentru a împărtăși cele mai recente informații din sectorul energetic și al energiei regenerabile. În lumina ultimelor evenimente legate de sectorul energetic, precum și a necesității de a dezvolta industria energiei regenerabile în Republica Moldova, EBA Moldova susține și prioritizează în agenda sa politică subiectul securității energetice ca fiind unul de importanță majoră. Scopul evenimentului se focusează pe industria energetică și regenerabile, să prezinte status quo-ul, provocările actuale și acțiunile întreprinse, perspectivele regionale și oportunitățile de investiții. Subiectele abordate variază de la prezentarea evoluțiilor sectorului energetic în RM - până la identificarea necesităților și carențelor ce țin de implementarea și utilizarea resurselor regenerabile în Republica Moldova, precum și organizarea licitațiilor pentru construcția capacităților mari de energie regenerabilă, reducerea dependenței de importul de energie, decarbonizarea economiei și crearea de noi locuri de muncă și realizarea angajamentelor asumate ale Republicii Moldova în domeniul energetic astfel încât să asigurăm un dialog activ cu toți actorii implicați în proces: Securitatea energetică/piața energetică, Tranziția la sursele de energie regenerabile/licitațiile pentru sursele de energie regenerabile, Infrastructura de rețea/echilibrare/stocare. Audiența: mediul de afaceri, instituțiile publice din domeniu, investitori interesați, experți din sectorul energetic și regenerabile, partenerii de dezvoltare și instituțiile internaționale, corpul diplomatic și mass media."
    },
    {
      id: 7,
      title: "Expoziția IPAC IMA – 27-30 mai 2025, Milano, Italia",
      description: "În perioada 27-30 mai 2025, Milano, Italia, devine epicentrul industriei globale de procesare și ambalare, găzduind expoziția internațională IPAC IMA.",
      startDate: "27 Mai 2025",
      endDate: "30 Mai 2025",
      location: "Milano, Italia",
      image: ipackImage,
      url: "https://www.ipackima.com/about/la-fiera.html",
      fullContent: "În perioada 27-30 mai 2025, Milano, Italia, devine epicentrul industriei globale de procesare și ambalare, găzduind expoziția internațională IPAC IMA. Acest eveniment de renume reunește cele mai mari și inovatoare companii din întreaga lume, specializate în tehnologiile de procesare și ambalare de ultimă generație. IPAC IMA oferă o platformă unică pentru profesioniști, inovatori și investitori din industrie, facilitând schimbul de idei, prezentarea de produse noi și explorarea tendințelor viitorului. Participanții vor avea ocazia să descopere soluții avansate pentru eficientizarea proceselor, reducerea impactului asupra mediului și optimizarea ambalajelor pentru diverse sectoare, de la alimentație și farmaceutice până la bunuri de larg consum. Pe lângă expoziție, evenimentul include o serie de conferințe, ateliere și demonstrații practice susținute de lideri ai industriei. Aceste activități sunt concepute să inspire și să ofere perspective valoroase despre inovațiile tehnologice și strategiile de dezvoltare sustenabilă. IPAC IMA 2025 este mai mult decât o simplă expoziție – este un punct de întâlnire pentru cei care definesc și modelează viitorul procesării și ambalării."
    },
    {
      id: 1,
      title: "UNIDO și UE lansează un program de consolidare a capacităților pentru întreprinderile mici și mijlocii, operatori din sectorul alimentar și fermieri",
      description: "Un program complet de sprijin pentru dezvoltarea întreprinderilor mici și mijlocii din sectorul alimentar, oferind consultanță, training și acces la fonduri pentru modernizare.",
      startDate: "20 Mai 2025",
      endDate: "20 Mai 2026",
      location: "Chișinău, Republica Moldova",
      image: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?_gl=1*5o8go*_ga*MjAzNDIxNTg43.1747470437*_ga_8JE65Q40S6*czE3NTIwNDI4MjckbzEyJGcxJHQxNzUyMDQyODI3JGo2MCRsMCRoMA..",
      url: "https://euneighbourseast.eu/ro/opportunities/unido-si-ue-lanseaza-un-program-de-consolidare-a-capacitatilor-pentru-imm-uri-operatori-din-sectorul-alimentar-si-fermieri/",
      fullContent: "UNIDO și UE lansează un program amplu de consolidare a capacităților pentru întreprinderile mici și mijlocii, operatori din sectorul alimentar și fermieri. Acest program strategic se va desfășura pe parcursul unui an și va oferi sprijin tehnic, financiar și consultanță specializată pentru afacerile din domeniul agroalimentar. Participanții vor beneficia de acces la cele mai noi tehnologii și metode de producție, sesiuni de instruire pentru îmbunătățirea calității produselor și dezvoltarea de noi piețe de desfacere. De asemenea, programul include componente legate de sustenabilitate, reducerea amprentei de carbon și adaptarea la standardelor europene de siguranță alimentară. Înscrierile pentru primele sesiuni de training încep de pe 1 aprilie 2025."
    },
    {
      id: 2,
      title: "Expoziţie-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a",
      description: "Cel mai important eveniment anual dedicat industriei agricole și alimentare din Republica Moldova, reunind producători, furnizori de echipamente și experți din domeniu.",
      startDate: "16 Octombrie 2025",
      endDate: "19 Octombrie 2025",
      location: "Chișinău, Republica Moldova",
      image: expo1,
      additionalImages: [expo2],
      url: "http://www.farmer.moldexpo.md/",
      fullContent: "Expoziţia-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a, reprezintă cel mai important eveniment anual dedicat industriei agricole și alimentare din Republica Moldova. Cu o tradiție de peste două decenii, evenimentul reunește peste 300 de expozanți din 15 țări și atrage aproximativ 20.000 de vizitatori profesioniști. Participanții vor avea oportunitatea de a descoperi cele mai noi echipamente, tehnologii și inovații în domeniul agriculturii, de a participa la demonstrații practice, seminarii și conferințe de specialitate. Secțiunile speciale includ: utilaje agricole, sisteme de irigații, soiuri de semințe, produse de protecție a plantelor, tehnologii de procesare a alimentelor, soluții de ambalare, precum și o zonă dedicată meșteșugurilor tradiționale. Înscrierile pentru expozanți sunt deschise până pe 1 septembrie 2025."
    },
    {
      id: 3,
      title: "ANTREPRENOR EXPO",
      description: "Expoziţie de dezvoltare și promovare a businessului mic și mijlociu din Republica Moldova, ediția III-a",
      startDate: "20 Noiembrie 2025",
      endDate: "23 Noiembrie 2025",
      location: "Chișinău, Republica Moldova",
      image: antreprenorExpo,
      url: "http://www.antreprenorexpo.moldexpo.md/",
      fullContent: "Expoziţie de dezvoltare și promovare a businessului mic și mijlociu din Republica Moldova, ediția III-a. Acest eveniment oferă o platformă unică pentru antreprenorii locali de a-și prezenta produsele și serviciile, de a stabili contacte de afaceri și de a accesa noi piețe. Pe durata evenimentului vor fi organizate workshop-uri practice, sesiuni de networking și conferințe tematice pe subiecte de interes pentru sectorul IMM-urilor. Participanții vor avea, de asemenea, oportunitatea de a interacționa cu reprezentanți ai instituțiilor financiare și ai programelor de finanțare disponibile pentru dezvoltarea afacerilor."
    }
  ];

  const additionalResources = [
    {
      id: 1,
      title: "Laboratoare de Testare",
      description: "Descoperiți laboratoarele acreditate pentru testarea produselor alimentare din Moldova.",
      icon: <FaFlask className="text-4xl text-primary-500" />,
      path: "/laboratoare",
      buttonText: "Vezi laboratoarele"
    },
    {
      id: 2,
      title: "Legislație",
      description: "Accesați documentele legislative importante pentru industria de panificație și morărit.",
      icon: <FaFileAlt className="text-4xl text-primary-500" />,
      path: "/legislatie",
      buttonText: "Consultă legislația"
    },
    {
      id: 3,
      title: "Finanțări și Granturi",
      description: "Aflați despre oportunitățile de finanțare disponibile pentru dezvoltarea afacerii dvs.",
      icon: <FaLandmark className="text-4xl text-primary-500" />,
      path: "/finantari-si-granturi",
      buttonText: "Explorează oportunitățile"
    }
  ];

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
    },
    {
      id: 2,
      title: "În Transnistria se vor scumpi făina și pâinea",
      excerpt: "Citește despre modificările de prețuri pe site-ul original.",
      date: "12 ianuarie 2025",
      author: "Stiri.md",
      category: "piata",
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?_gl=1*7vb6d0*_ga*MjAzNDIxNTg43.1747470437*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMDg5JGo1NSRsMCRoMA..",
      readTime: "3 min",
      url: "https://stiri.md/article/economic/in-transnistria-se-vor-scumpi-faina-si-painea/",
      isExternal: true
    },
    {
      id: 3,
      title: "Ion Perju: Prețurile s-au majorat nejustificat, grâu în țară este",
      excerpt: "Află mai multe despre declarațiile oficiale pe site-ul original.",
      date: "10 ianuarie 2025",
      author: "Stiri.md",
      category: "piata",
      image: "https://i.simpalsmedia.com/point.md/news/809x456/23dc83357924e8dfe4f72f15d2378c39.jpg",
      readTime: "4 min",
      url: "https://stiri.md/article/economic/ion-perju-preturile-s-au-majorat-nejustificat-grau-in-tara-este/",
      isExternal: true
    },
    {
      id: 4,
      title: "Cel mai mare producător din industria de panificație din Moldova înregistrează un profit record",
      excerpt: "Citește analiza completă pe site-ul original.",
      date: "21 februarie 2025",
      author: "Agora.md",
      category: "business",
      image: "https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?_gl=1*1gxmua7*_ga*MjAzNDIxNTg43.1747470437*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMTc5JGo1NiRsMCRoMA..",
      readTime: "6 min",
      url: "https://agora.md/2025/02/21/cel-mai-mare-producator-din-industria-de-panificatie-din-moldova-inregistreaza-un-profit-record",
      isExternal: true
    },
    {
      id: 5,
      title: "De ce brutarii din Chișinău coc din ce în ce mai puțină pâine",
      excerpt: "Afla mai multe despre această analiză pe site-ul original.",
      date: "15 decembrie 2024",
      author: "Europa Liberă",
      category: "tendinte",
      image: "https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?_gl=1*6dg9kh*_ga*MjAzNDIxNTg43.1747470437*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQzMjI4JGo3JGwwJGgw",
      readTime: "7 min",
      url: "https://moldova.europalibera.org/a/27188328.html",
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

  const getDisplayContent = (item) => {
    if (expandedItemId === item.id) {
      return item.fullContent || item.excerpt;
    }
    return item.summary || item.excerpt;
  };

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

  const pageInfo = {
    title: "Noutăți și Evenimente",
    description: "Toate știrile și evenimentele din industria agroalimentară din România",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Noutăți", path: "/noutati" }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="news-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
        bgImage={main3}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center font-heading">Evenimente Viitoare</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Participă la cele mai importante evenimente din industrie și rămâi conectat cu noutățile și tendințele
          </p>
          
          <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-60 md:h-full relative overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold py-2 px-4 uppercase tracking-wide">
                        Eveniment
                      </div>
                    </div>
                    
                    {expandedEventId === event.id && event.additionalImages && event.additionalImages.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 gap-2 px-2">
                        {event.additionalImages.map((img, imgIndex) => (
                          <div key={imgIndex} className="h-24 overflow-hidden rounded-lg">
                            <img 
                              src={img} 
                              alt={`${event.title} - ${imgIndex + 1}`} 
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="mb-3">
                      <span className="inline-flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        <FaCalendarAlt className="mr-2" /> 
                        {event.startDate} - {event.endDate}
                      </span>
                      <span className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                        <FaMapMarkerAlt className="mr-2" /> 
                        {event.location}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 hover:text-primary-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {expandedEventId === event.id && event.hasVideo ? (
                        <div className="space-y-4">
                          <div>{event.fullContent}</div>
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold mb-3 text-gray-800">Video Prezentare</h4>
                            <video 
                              controls 
                              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                              poster={event.image}
                            >
                              <source src={event.video} type="video/mp4" />
                              Browser-ul dvs. nu suportă video HTML5.
                            </video>
                          </div>
                        </div>
                      ) : (
                        expandedEventId === event.id ? event.fullContent : event.description
                      )}
                    </p>
                    
                    <div className="flex flex-wrap justify-end mt-auto">
                      <button
                        onClick={() => toggleEventReadMore(event.id)}
                        className="inline-flex items-center mr-2 px-4 py-2 bg-white border border-primary-500 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-50 transition-colors duration-300"
                      >
                        {expandedEventId === event.id ? 'Citește mai puțin' : 'Citește mai mult'}
                        <FaChevronRight className="ml-2 text-xs" />
                      </button>
                      
                      <a 
                        href={event.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium hover:bg-primary-600 transition-colors duration-300"
                      >
                        Detalii
                        <FaExternalLinkAlt className="ml-2 text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center font-heading">Resurse Adiționale</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explorați resursele suplimentare oferite de asociația noastră pentru a sprijini activitatea dumneavoastră în sectorul agro-alimentar
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4 text-primary-500">{resource.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-heading">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Link
                  to={resource.path}
                  className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-md font-medium hover:bg-primary-600 transition-colors duration-300"
                >
                  {resource.buttonText}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
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
            {latestNewsData.map((news, index) => (
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
                          <FaImage className="text-blue-400 text-4xl mx-auto mb-2" />
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
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/ultimele-stiri"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-full font-semibold hover:from-primary-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="mr-3">Vezi toate știrile</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
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

export default NewsPage;










