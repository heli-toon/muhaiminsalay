import { type SalayverseApp } from '../types';

export const salayverseApps: SalayverseApp[] = [
  // 1. PLAYROOM GAMES (Featured #1) - Unaltered
  {
    id: 'playroom',
    name: 'Playroom Games',
    icon: 'bi-controller',
    actualIcon: '/icons/playroom.svg',
    description: 'A playful browser game catalogue for instant screen action. Play retro classics, puzzles, and arcade games directly in your browser.',
    screenshotLinks: [
      '/screenshots/playroom.svg'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://games.muhaiminsalay.tech/', size: '' }
    },
    category: 'Games',
    author: 'Salay Abdul Muhaimin Kanton',
    isFeatured: true
  },

  // 2. VECTIS (Featured #2) - Multi-Agent AI Orchestrator
  {
    id: 'vectis',
    name: 'Vectis',
    icon: 'bi-cpu',
    description: 'Ultra-lightweight multi-agent orchestration system with hierarchical delegation, budget controls, tool execution, and crash-resilient state management.',
    screenshotLinks: [
      '/screenshots/vectis.svg'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://github.com/heli-toon/vectis', size: '' },
      Linux: { downloadLink: 'https://github.com/heli-toon/vectis', size: '' }
    },
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton',
    isFeatured: true
  },

  // 3. DOCSCULPTOR (Featured #3) - Web Markdown & HTML to PDF Studio
  {
    id: 'docsculptor',
    name: 'DocSculptor',
    icon: 'bi-file-earmark-pdf',
    actualIcon: 'https://docsculptor.netlify.app/logo.png',
    description: 'A modern, powerful Markdown and HTML to PDF converter studio with real-time preview and export.',
    screenshotLinks: [
      '/screenshots/docsculptor.jpg'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://docsculptor.netlify.app/', size: '' }
    },
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton',
    isFeatured: true
  },

  // 4. LBSHS LMS (Featured #4) - Educational Management System
  {
    id: 'lbshs-lms',
    name: 'LBSHS LMS',
    icon: 'bi-mortarboard',
    actualIcon: '/icons/LBSHSLMS.ico',
    description: 'Learning Management System for LBSHS - Complete educational platform for managing courses, students, and academic resources.',
    screenshotLinks: [
      '/screenshots/lbshslms.png',
      '/screenshots/lbshslms2.png'
    ],
    availablePlatforms: {
      Windows: { downloadLink: 'https://github.com/heli-toon/LBSHS-LMS/releases/download/LBSHSLMS_Setup_v.1.3.0-x64.exe/LBSHSLMS_Setup_v.1.3.0-x64.exe', size: '22.7MB' }
    },
    category: 'CRM Tools',
    author: 'Salay Abdul Muhaimin Kanton',
    isFeatured: true
  },

  // 5. DCSDSAGCTU (Featured #5) - Academic Class Resource Hub
  {
    id: 'dcsdsagctu',
    name: 'DCSDSAGCTU',
    icon: 'bi-folder2-open',
    actualIcon: 'https://dcsdsagctu.netlify.app/logo.png',
    description: 'DCS & DSA Class Resource Hub - Access all course materials, assignments, and announcements in one place.',
    screenshotLinks: [
      '/screenshots/dcsdsagctu.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://dcsdsagctu.netlify.app/', size: '' }
    },
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton',
    isFeatured: true
  },

  // 6. ADAI (Featured #6) - AI Design Aesthetic Inspiration Hub
  {
    id: 'adai',
    name: 'ADAI',
    icon: 'bi-magic',
    description: 'AI Design Aesthetic Inspiration — a searchable visual collection of 13 design aesthetic references and reusable AI UI prompts.',
    screenshotLinks: [
      '/screenshots/adai.svg'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://adailanding.netlify.app/', size: '' }
    },
    category: 'Showcases',
    author: 'Salay Abdul Muhaimin Kanton',
    isFeatured: true
  },

  // 7. SIKA SCAN - Offline Multimodal AI Bookkeeping
  {
    id: 'sikanscan',
    name: 'Sika Scan',
    icon: 'bi-receipt',
    description: 'Offline AI bookkeeping assistant for market traders using Gemma Vision to extract transaction data from physical receipts and ledgers.',
    screenshotLinks: [
      '/screenshots/sikanscan.svg'
    ],
    availablePlatforms: {
      Linux: { downloadLink: 'https://github.com/heli-toon/SikaScan', size: '' },
      Windows: { downloadLink: 'https://github.com/heli-toon/SikaScan', size: '' }
    },
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 8. TRACKOPS - Mobile Personal Finance & Expense Tracker
  {
    id: 'trackops',
    name: 'TrackOps',
    icon: 'bi-wallet2',
    description: 'Cross-platform mobile expense tracker built with React Native, Expo, and Firebase Auth for tracking balances and spending trends.',
    screenshotLinks: [
      '/screenshots/trackops.svg'
    ],
    availablePlatforms: {
      Android: { downloadLink: 'https://github.com/heli-toon/trackops', size: '' },
      iOS: { downloadLink: 'https://github.com/heli-toon/trackops', size: '' }
    },
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 9. E-CLUB GCTU - Innovation & Entrepreneurship Club Hub
  {
    id: 'eclubgctu',
    name: 'E-Club GCTU',
    actualIcon: 'https://eclubgctu.online/ehub.png',
    icon: 'bi-star',
    description: 'The Entrepreneurship and Innovation Club of GCTU is dedicated to fostering innovation and entrepreneurial spirit among students.',
    screenshotLinks: [
      '/screenshots/eclubgctu.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://eclubgctu.online/', size: '' }
    },
    category: 'Showcases',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 10. OMNICHAT - Automata Theory AI Assistant
  {
    id: 'omnichat',
    name: 'OmniChat',
    icon: 'bi-chat-dots',
    description: 'Automata Theory AI Chatbot web app for learning formal languages, DFAs, NFAs, and solving computational theory problems.',
    screenshotLinks: [
      '/screenshots/omnichat.svg'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://omnichat-red.vercel.app', size: '' }
    },
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 11. JAY'S SHOECARE - Sneaker Care & Restoration Showcase
  {
    id: 'jayshoecare',
    name: 'Jayshoecare',
    actualIcon: '/icons/jayshoecare.png',
    icon: 'bi-bootstrap',
    description: "Jay's Shoecare Website Showcase - sneakers just like new. Sneaker restoration and maintenance services.",
    screenshotLinks: [
      '/screenshots/jayshoecare.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://jayshoecare.netlify.app/', size: '' }
    },
    category: 'Showcases',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 12. SPACE NEON PLASMA - High-Contrast Linux KDE Theme
  {
    id: 'space-neon-plasma',
    name: 'Space Neon Plasma',
    icon: 'bi-palette',
    description: 'An ultra-minimal, high-contrast dark theme for KDE Plasma designed for performance and aesthetic clarity with neon orange accents.',
    screenshotLinks: [
      '/screenshots/space-neon-plasma.png'
    ],
    availablePlatforms: {
      Linux: { downloadLink: 'https://github.com/heli-toon/space-neon-plasma', size: '' }
    },
    category: 'Showcases',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 13. VERBA - Modern Lexical Dictionary
  {
    id: 'verba',
    name: 'Verba',
    actualIcon: '/icons/verbaicon.png',
    icon: 'bi-book',
    description: 'Depth and authenticity in your searches — a modern dictionary web app with full phonetic breakdowns and synonyms.',
    screenshotLinks: [
      '/screenshots/verba.svg'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://verba.netlify.app/', size: '' }
    },
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 14. PDF-OPS - Desktop PDF Operations Suite (Windows)
  {
    id: 'pdf-ops',
    name: 'PDF-Ops',
    icon: 'bi-file-earmark-text',
    description: 'Desktop PDF operations suite for Windows. Edit, convert, merge, split, and secure PDF documents locally.',
    screenshotLinks: [
      '/screenshots/pdf-ops.svg'
    ],
    availablePlatforms: {
      Windows: { downloadLink: 'https://github.com/heli-toon/pdf-ops/', size: '40MB' }
    },
    status: 'In Progress',
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 15. DOWNLOADS SORTER - Automated File Organization CLI
  {
    id: 'downloadsorter',
    name: 'Downloads Sorter',
    icon: 'bi-folder-symlink',
    description: 'Automated Python script that organizes cluttered download directories into tidy categories based on file extensions.',
    screenshotLinks: [
      '/screenshots/downloadsorter.svg'
    ],
    availablePlatforms: {
      Linux: { downloadLink: 'https://github.com/heli-toon/downloadsorter', size: '' },
      Windows: { downloadLink: 'https://github.com/heli-toon/downloadsorter', size: '' },
      MacOS: { downloadLink: 'https://github.com/heli-toon/downloadsorter', size: '' }
    },
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 16. PULSENETIO - Lightweight Social Platform
  {
    id: 'pulsenetio',
    name: 'Pulsenetio',
    icon: 'bi-heart-pulse',
    actualIcon: '/icons/pulsenetio.png',
    description: 'Reflecting the heartbeat of social interactions. A lightweight social media web platform built with Django.',
    screenshotLinks: [
      '/screenshots/pulsenetio.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://pulsenetio.vercel.app', size: '' }
    },
    status: 'In Progress',
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 17. DRIPSTAR - E-Commerce Sneaker Showcase
  {
    id: 'dripstar',
    name: 'DripStar',
    actualIcon: 'https://dripstar.netlify.app/images/neonshoeonly.png',
    icon: 'bi-star',
    description: "Drip Star - It's time to ignite your sole. Online store showcase for premium shoes and apparel.",
    screenshotLinks: [
      '/screenshots/dripstar.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://dripstar.netlify.app/', size: '' }
    },
    category: 'Showcases',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 18. VOXQUI - Text to Speech Engine
  {
    id: 'voxqui',
    name: 'Voxqui',
    icon: 'bi-volume-up',
    description: 'TTS App - Convert text to natural-sounding speech across multiple language voices.',
    screenshotLinks: [
      '/screenshots/voxqui.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: '#', size: '' }
    },
    status: 'In Progress',
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 19. TYPERUSH - Desktop Speed Typing Game
  {
    id: 'typerush',
    name: 'TypeRush',
    icon: 'bi-keyboard',
    actualIcon: '/icons/typerush.ico',
    description: 'Fast-paced desktop typing game to improve your typing speed, rhythm, and accuracy with custom levels.',
    screenshotLinks: [
      '/screenshots/typerush.png'
    ],
    availablePlatforms: {
      Windows: { downloadLink: 'https://github.com/heli-toon/typerush/releases/download/TypeRush-v.0.0.2/TypeRush_Setup-v.0.0.2.exe', size: '13MB' }
    },
    category: 'Games',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 20. BALLANCE - Physics Ball Balancing Web Game
  {
    id: 'ballance',
    name: 'Ballance',
    icon: 'bi-circle',
    actualIcon: 'https://heli-toon.github.io/kantonminiprojects/ballance/favicon.png',
    description: 'Fun physics-based ball balancing web game with challenging levels and obstacles.',
    screenshotLinks: [
      '/screenshots/ballance.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://heli-toon.github.io/kantonminiprojects/ballance/', size: '' }
    },
    category: 'Games',
    author: 'Salay Abdul Muhaimin Kanton'
  },

  // 21. BALL BLASTER 2 - Arcade Shooter Web Game
  {
    id: 'ball-blaster-2',
    name: 'Ball Blaster 2',
    icon: 'bi-bullseye',
    actualIcon: 'https://heli-toon.github.io/kantonminiprojects/BallBlaster2/js/favicon.png',
    description: 'Action-packed ball shooting arcade game with power-ups and progressive difficulty.',
    screenshotLinks: [
      '/screenshots/ballblaster2.jpg'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://heli-toon.github.io/kantonminiprojects/BallBlaster2/', size: '' }
    },
    category: 'Games',
    author: 'Salay Abdul Muhaimin Kanton'
  }
];
