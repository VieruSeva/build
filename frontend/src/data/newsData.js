// Static news data for the ANIPM website
// This file replaces the previous API calls to the backend

import facility1Image from "../images/facility1.jpg";
import facility2Image from "../images/facility2.jpg";
import facility3Image from "../images/facility3.jpg";
import facility4Image from "../images/facility4.jpg";
import trans1Image from "../images/trans1.jpg";
import flourImage from "../images/flour.jpg";
import bakeryImage from "../images/bakery.jpg";
import ministerImage from "../images/minister.jpg";

export const newsTickerData = {
  success: true,
  items: [
    {
      id: 15,
      title: "Facilitarea tranziției verzi și comerțul transfrontalier.",
      type: "news",
      url: "https://www.facebook.com/photo?fbid=1142994064527705&set=pcb.1142994614527650&locale=ro_RO"
    },
    {
      id: 1,
      title: "R. Moldova exportă mai multă făină, dar la un preț mult mai mic",
      type: "news",
      url: "https://agroexpert.md/rom/novosti/r-moldova-exporta-mai-multa-faina-dar-la-un-pret-mult-mai-mic"
    },
    {
      id: 2,
      title: "Tot mai mulți pasionați de panificație descoperă farmecul pâinii cu maia",
      type: "news",
      url: "https://stiri.md/article/social/tot-mai-multi-pasionati-de-panificatie-descopera-farmecul-painii-cu-maia/"
    },
    {
      id: 3,
      title: "AGENDA TRANZIȚIEI ENERGETICE - ediția a 4-a",
      type: "event",
      url: "/noutati"
    },
    {
      id: 4,
      title: "Expoziția IPAC IMA – 27-30 mai 2025, Milano, Italia",
      type: "event",
      url: "/noutati"
    },
    {
      id: 5,
      title: "Conferința Internațională de Panificație - București 2025",
      date: "15 septembrie 2025",
      type: "event",
      url: "/noutati"
    },
    {
      id: 6,
      title: "Noi reglementări pentru etichetarea produselor de panificație",
      type: "news",
      url: "/noutati"
    },
    {
      id: 7,
      title: "Târgul de produse tradiționale - Chișinău 2025",
      date: "10 august 2025",
      type: "event",
      url: "/noutati"
    },
    {
      id: 8,
      title: "Inovații în industria de morărit prezentate la expoziția IBA",
      type: "news",
      url: "/noutati"
    },
    {
      id: 10,
      title: "Creșterea prețurilor la făină afectează industria de panificație",
      type: "news",
      url: "/noutati"
    },
    {
      id: 11,
      title: "Noi oportunități de finanțare pentru brutăriile artizanale",
      type: "news",
      url: "/noutati"
    },
    {
      id: 12,
      title: "Workshop: Tehnici moderne de panificație - Bălți",
      date: "5 iulie 2025",
      type: "event",
      url: "/noutati"
    },
    {
      id: 13,
      title: "Studiu: Consumul de pâine integrală în creștere în Republica Moldova",
      type: "news",
      url: "/noutati"
    },
    {
      id: 14,
      title: "Forum al Brutarilor din Republica Moldova - ediția a VII-a",
      date: "20 octombrie 2025",
      type: "event",
      url: "/noutati"
    }
  ],
  total: 15
};

// News data for the TransitionGalleryPage
export const transitionNewsData = {
  id: 9,
  title: "Tranziția Verde a Republicii Moldova: Motor al Integrării Europene și Dezvoltării Durabile",
  date: "24 iunie 2025",
  author: "Asociația Națională a Industriei de Panificație și Morărit",
  readTime: "5 minute de citire",
  summary: "Conferința Națională dedicată tranziției verzi în industria alimentară a reunit experți, producători și autorități pentru a discuta despre viitorul sustenabil al sectorului.",
  fullContent: "Asociația Națională a Industriei de Panificație și Morărit din Republica Moldova a organizat Conferința Națională cu tema \"Tranziția Verde: Oportunități și Provocări pentru Industria Alimentară\", un eveniment care a reunit peste 150 de participanți din întreaga țară.\n\nConferința a abordat subiecte esențiale precum:\n\n• Implementarea tehnologiilor eco-eficiente în procesele de producție\n• Reducerea amprentei de carbon în lanțul valoric alimentar\n• Oportunități de finanțare pentru proiecte verzi\n• Adaptarea la noile cerințe legislative europene în contextul integrării\n• Certificarea produselor ecologice și accesul la piețele internaționale\n\nMinistrul Agriculturii și Industriei Alimentare, prezent la eveniment, a subliniat importanța tranziției verzi: \"Sectorul alimentar trebuie să fie în prima linie a transformării economiei naționale spre sustenabilitate. Avem resurse, avem expertiză și, cel mai important, avem determinarea de a face această tranziție.\"\n\nReprezentanții asociației au prezentat un plan de acțiune pe 5 ani care include măsuri concrete pentru reducerea consumului de energie, implementarea tehnologiilor de producție curate și minimizarea deșeurilor alimentare.\n\nEvenimentul s-a încheiat cu semnarea unui memorandum de colaborare între asociațiile din industria alimentară, autoritățile publice și instituțiile academice pentru accelerarea tranziției verzi în sectorul agroalimentar din Republica Moldova.",
  images: [
    trans1Image,
    "/images/trans2.jpg",
    "/images/trans3.jpg",
    "/images/trans4.jpg",
    "/images/trans5.jpg",
    "/images/trans6.jpg",
    "/images/trans7.jpg"
  ],
  category: "evenimente",
  tags: ["tranziție verde", "sustenabilitate", "industrie alimentară", "conferință"]
};

export const newNewsData = {
  id: 15,
  title: "Facilitarea tranziției verzi și comerțului transfrontalier.",
  date: "30 iunie 2025",
  author: "Asociația Națională a Industriilor de Panificație și Morărit (ANIPM)",
  readTime: "aproximativ 2 minute de citire",
  summary: "Pe data de 30 iunie 2025, Asociația Națională a Industriilor de Panificație și Morărit (ANIPM) a luat parte la ședința de lucru privind Facilitarea tranziției și comerțului transfrontalier, organizată la Guvernul Republicii Moldova. Evenimentul a adunat reprezentanți ai autorităților, organizațiilor de afaceri și sectorului privat pentru a discuta subiecte relevante pentru dezvoltarea economică a țării.",
  fullContent: "Pe data de 30 iunie 2025, Asociația Națională a Industriilor de Panificație și Morărit (ANIPM) a luat parte la ședința de lucru privind Facilitarea tranziției și comerțului transfrontalier, organizată la Guvernul Republicii Moldova. Evenimentul a adunat reprezentanți ai autorităților, organizațiilor de afaceri și sectorului privat pentru a discuta subiecte relevante pentru dezvoltarea economică a țării.\n\nDiscuțiile au abordat mai multe capitole importante:\n\nLibera circulație a bunurilor (Capitolul 1) – s-a analizat progresul în eliminarea barierelor comerciale și armonizarea legislației cu standardele europene.\n\nProtecția consumatorilor (Capitolul 28) – au fost prezentate măsuri implementate pentru siguranța și protecția consumatorilor.\n\nRelații externe (Capitolul 30) – au fost discutate oportunități de extindere a cooperării comerciale și consolidarea relațiilor cu partenerii internaționali.\n\nÎn cadrul ședinței, dna Cristina Cebanu, Secretar de Stat în cadrul Ministerului Dezvoltării Economice și Digitalizării, a oferit o prezentare detaliată privind situația actuală, bazată pe rezultatele screening-ului bilateral. Subiectele au fost dezbătute pe platforma Grupului de Lucru nr. 2 al Consiliului Economic pe lângă Prim-ministrul Republicii Moldova, cu accent pe Facilitarea Comerțului și Tranziția Verde.\n\nȘedința a fost moderată de Mariana Rufa, Director Executiv al Asociației Businessului European (EBA), care a facilitat schimbul de idei și propuneri între participanți.\n\nPrin participarea la această ședință, ANIPM subliniază angajamentul său față de susținerea inițiativelor care sprijină integrarea economică a Republicii Moldova și dezvoltarea unui mediu favorabil comerțului transfrontalier. Asociația continuă să contribuie activ la identificarea soluțiilor sustenabile pentru o economie competitivă și verde.",
  images: [
    facility1Image,
    facility2Image,
    facility3Image,
    facility4Image
  ],
  category: "evenimente",
  tags: ["tranziție verde", "comerț transfrontalier", "ANIPM", "Republica Moldova", "Guvernul Republicii Moldova", "integrare economică"]
};

// News data for the LatestNewsPage
export const allNewsData = [
  {
    id: 15,
    title: "Facilitarea tranziției verzi și comerțului transfrontalier.",
    date: "30 iunie 2025",
    summary: "Pe data de 30 iunie 2025, Asociația Națională a Industriilor de Panificație și Morărit (ANIPM) a luat parte la ședința de lucru privind Facilitarea tranziției și comerțului transfrontalier, organizată la Guvernul Republicii Moldova. Evenimentul a adunat reprezentanți ai autorităților, organizațiilor de afaceri și sectorului privat pentru a discuta subiecte relevante pentru dezvoltarea economică a țării.",
    image: facility1Image,
    category: "evenimente",
    featured: true,
    url: "https://www.facebook.com/photo?fbid=1142994064527705&set=pcb.1142994614527650&locale=ro_RO",
    galleryUrl: "/galerie-facilitare-tranzitie"
  },
  {
    id: 9,
    title: "Tranziția Verde a Republicii Moldova: Motor al Integrării Europene și Dezvoltării Durabile",
    date: "24 iunie 2025",
    summary: "Conferința Națională dedicată tranziției verzi în industria alimentară a reunit experți, producători și autorități pentru a discuta despre viitorul sustenabil al sectorului.",
    image: trans1Image,
    category: "evenimente",
    featured: true,
    url: "/galerie-tranzitie",
    galleryUrl: "/galerie-tranzitie-verde"
  },
  {
    id: 1,
    title: "R. Moldova exportă mai multă făină, dar la un preț mult mai mic",
    date: "20 iunie 2025",
    summary: "În primele cinci luni ale anului 2025, Republica Moldova a exportat cu 15% mai multă făină decât în aceeași perioadă a anului trecut, însă prețul mediu a scăzut cu aproximativ 8%.",
    image: flourImage,
    category: "industrie",
    featured: true,
    url: "https://agroexpert.md/rom/novosti/r-moldova-exporta-mai-multa-faina-dar-la-un-pret-mult-mai-mic"
  },
  {
    id: 2,
    title: "Tot mai mulți pasionați de panificație descoperă farmecul pâinii cu maia",
    date: "15 iunie 2025",
    summary: "Trendul global al pâinii cu maia a ajuns și în Republica Moldova, tot mai mulți pasionați de panificație descoperind beneficiile și gustul deosebit al acestui tip de pâine.",
    image: bakeryImage,
    category: "tendințe",
    featured: false,
    url: "https://stiri.md/article/social/tot-mai-multi-pasionati-de-panificatie-descopera-farmecul-painii-cu-maia/"
  },
  {
    id: 3,
    title: "AGENDA TRANZIȚIEI ENERGETICE - ediția a 4-a",
    date: "10 iulie 2025",
    summary: "Cea de-a patra ediție a conferinței dedicate tranziției energetice va avea loc la Chișinău, cu focus pe soluții pentru industria alimentară.",
    image: "/images/energy2025.mp4",
    category: "evenimente",
    featured: false,
    url: "/noutati"
  },
  {
    id: 8,
    title: "Ministerul Agriculturii vine cu o reacție în urma demersului scris de ANIPM",
    excerpt: "Ministerul Agriculturii și Industriei Alimentare a transmis un răspuns oficial în urma demersului înaintat de Asociația Națională a Industriei de Panificație și Morărit din Moldova. Documentele oficiale sunt disponibile pentru consultare.",
    date: "5 aprilie 2025",
    author: "ANIPM",
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
    readTime: "6 min",
    url: "https://mded.gov.md/domenii/ajutor-de-stat/ajutor-de-stat-regional-pentru-investitii/",
    image: "https://images.pexels.com/photos/5846174/pexels-photo-5846174.jpeg?_gl=1*1c1dn0v*_ga*MjAzNDIxNTg4My4xNzQ3NDcwNDM3*_ga_8JE65Q40S6*czE3NTIwNDEzODgkbzEyJGcxJHQxNzUyMDQyOTQwJGo1MiRsMCRoMA"
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
    url: "https://i.simpalsmedia.com/point.md/news/809x456/23dc83357924e8dfe4f72f15d2378c39.jpg",
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
]










