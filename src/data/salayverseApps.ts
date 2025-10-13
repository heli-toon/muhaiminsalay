import { type SalayverseApp } from '../types';

export const salayverseApps: SalayverseApp[] = [
  // TEMPLATE - COPY AND MODIFY FOR NEW PROJECTS
  /*
  {
    id: 'unique-id',
    name: 'Project Name',
    icon: 'bi-icon-name', // Bootstrap icon class (fallback)
    actualIcon: 'https://example.com/icon.png', // optional - actual app icon
    description: 'Brief description of the project.',
    screenshotLinks: [
      '/screenshots/project-screenshot.jpg'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://example.com', size: '' }, // Web has no size
      Windows: { downloadLink: 'https://example.com/setup.exe', size: '45MB' },
      MacOS: { downloadLink: 'https://example.com/app.dmg', size: '38MB' },
      Linux: { downloadLink: 'https://example.com/app.deb', size: '42MB' },
      Android: { downloadLink: 'https://play.google.com/store/apps/details?id=com.example.app', size: '55MB' },
      iOS: { downloadLink: 'https://apps.apple.com/app/example/id123456789', size: '52MB' }
    },
    status: 'Testing', // 'Testing' or 'In Progress' - omit for completed projects
    category: 'Apps', // 'Apps', 'Games', 'Showcases', 'CRM Tools', etc.
    author: 'Salay Abdul Muhaimin Kanton',
    isFeatured: true, // optional - for featured projects
    isSponsored: false // optional - for sponsored projects
  },
  */

  {
    id: 'docsculptor',
    name: 'DocSculptor',
    icon: 'bi-file-earmark-pdf',
    actualIcon: 'https://docsculptor.netlify.app/logo.png',
    description: 'A modern, powerful Markdown and HTML to PDF converter.',
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
  {
    id: 'dcsdsagctu',
    name: 'DCSDSAGCTU',
    icon: 'bi-folder2-open',
    actualIcon: 'https://dcsdsagctu.netlify.app/logo.png',
    description: 'DCS & DSA Class Resource Hub - Access all your course materials, assignments, and announcements in one place. Navigate through folders!',
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
  {
    id: 'lbshs-lms',
    name: 'LBSHS LMS',
    icon: 'bi-mortarboard',
    actualIcon: '/icons/LBSHSLMS.ico',
    description: 'Learning Management System for LBSHS - Complete educational platform for managing courses, students, and academic resources.',
    screenshotLinks: [
      '/screenshots/lbshslms.png',
      '/screenshots/lbshslms2.png',
    ],
    availablePlatforms: {
      Windows: { downloadLink: 'https://github.com/heli-toon/LBSHS-LMS/releases/download/LBSHSLMS_Setup_v.1.3.0-x64.exe/LBSHSLMS_Setup_v.1.3.0-x64.exe', size: '22.7MB' }
    },
    category: 'CRM Tools',
    author: 'Salay Abdul Muhaimin Kanton',
    isFeatured: true
  },
  {
    id: 'typerush',
    name: 'TypeRush',
    icon: 'bi-keyboard',
    actualIcon: '/icons/typerush.ico',
    description: 'Fast-paced typing game to improve your typing speed and accuracy.',
    screenshotLinks: [
      '/screenshots/typerush.png'
    ],
    availablePlatforms: {
      Windows: { downloadLink: 'https://github.com/heli-toon/typerush/releases/download/TypeRush-v.0.0.2/TypeRush_Setup-v.0.0.2.exe', size: '13MB' }
    },
    category: 'Games',
    author: 'Salay Abdul Muhaimin Kanton'
  },
  {
    id: 'pdf-ops',
    name: 'PDF-Ops',
    icon: 'bi-file-earmark-text',
    description: 'PDF Operations. Edit, Convert, Merge & Secure your PDFs',
    screenshotLinks: [
      '/screenshots/pdf-ops.png'
    ],
    availablePlatforms: {
      Windows: { downloadLink: 'https://github.com/heli-toon/pdf-ops/', size: '40MB' }
    },
    status: 'In Progress',
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton'
  },
  {
    id: 'ballance',
    name: 'Ballance',
    icon: 'bi-circle',
    actualIcon: 'https://heli-toon.github.io/kantonminiprojects/ballance/favicon.png',
    description: 'Fun physics-based ball balancing game with challenging levels.',
    screenshotLinks: [
      '/screenshots/ballance.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://heli-toon.github.io/kantonminiprojects/ballance/', size: '' }
    },
    category: 'Games',
    author: 'Salay Abdul Muhaimin Kanton'
  },
  {
    id: 'ball-blaster-2',
    name: 'Ball Blaster 2',
    icon: 'bi-bullseye',
    actualIcon: 'https://heli-toon.github.io/kantonminiprojects/BallBlaster2/js/favicon.png',
    description: 'Action-packed ball shooting game with power-ups.',
    screenshotLinks: [
      '/screenshots/ballblaster2.jpg'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://heli-toon.github.io/kantonminiprojects/BallBlaster2/', size: '' }
    },
    category: 'Games',
    author: 'Salay Abdul Muhaimin Kanton'
  },
  {
    id: 'pulsenetio',
    name: 'Pulsenetio',
    icon: 'bi-heart-pulse',
    actualIcon: '/icons/pulsenetio.png',
    description: 'Reflecting heartbeat of social interactions. A basic social media platform.',
    screenshotLinks: [
      '/screenshots/pulsenetio.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://github.com/heli-toon/pulsenetio/', size: '' }
    },
    status: 'In Progress',
    category: 'Apps',
    author: 'Salay Abdul Muhaimin Kanton'
  },
  {
    id: 'voxqui',
    name: 'Voxqui',
    icon: 'bi-volume-up',
    description: 'TTS App - Convert text to speech with natural-sounding voices.',
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
  {
    id: 'jayshoecare',
    name: 'Jayshoecare',
    actualIcon: '/icons/jayshoecare.png',
    icon: 'bi-bootstrap',
    description: "Jay's Shoecare Website Showcase - sneakers just like new.... Sneaker restoration and Maintenance services",
    screenshotLinks: [
      '/screenshots/jayshoecare.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://jayshoecare.netlify.app/', size: '' }
    },
    category: 'Showcases',
    author: 'Salay Abdul Muhaimin Kanton',
    isFeatured: true
  },
  {
    id: 'dripstar',
    name: 'DripStar',
    actualIcon: 'https://dripstar.netlify.app/images/neonshoeonly.png',
    icon: 'bi-star',
    description: "Drip Star - It's time to ignite your sole. Online Store for Shoes and Clothes",
    screenshotLinks: [
      '/screenshots/dripstar.png'
    ],
    availablePlatforms: {
      Web: { downloadLink: 'https://dripstar.netlify.app/', size: '' }
    },
    category: 'Showcases',
    author: 'Salay Abdul Muhaimin Kanton'
  }
];