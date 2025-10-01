import { type SalayverseApp } from '../types';

export const salayverseApps: SalayverseApp[] = [
  {
    id: '1',
    name: 'Portfolio Showcase',
    icon: 'bi-laptop',
    description: 'A beautiful, minimal portfolio template for developers and designers.',
    screenshotLinks: [
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg'
    ],
    availablePlatforms: {
      Web: { downloadLink: '#', size: '2.5MB' }
    },
    category: 'Showcases',
    author: 'Salay',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Task Manager Pro',
    icon: 'bi-check2-square',
    description: 'Simple and efficient task management application.',
    screenshotLinks: [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
    ],
    availablePlatforms: {
      Windows: { downloadLink: '#', size: '45MB' },
      MacOS: { downloadLink: '#', size: '38MB' },
      Linux: { downloadLink: '#', size: '42MB' }
    },
    category: 'Apps',
    author: 'Salay',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Puzzle Master',
    icon: 'bi-puzzle',
    description: 'Challenging puzzle game with beautiful graphics.',
    screenshotLinks: [
      'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg',
      'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg'
    ],
    availablePlatforms: {
      Android: { downloadLink: '#', size: '55MB' },
      iOS: { downloadLink: '#', size: '52MB' }
    },
    status: 'Testing',
    category: 'Games',
    author: 'Salay',
    isSponsored: true
  },
  {
    id: '4',
    name: 'Weather Dashboard',
    icon: 'bi-cloud-sun',
    description: 'Real-time weather information with beautiful UI.',
    screenshotLinks: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg'
    ],
    availablePlatforms: {
      Web: { downloadLink: '#', size: '1.8MB' }
    },
    category: 'Apps',
    author: 'Salay'
  },
  {
    id: '5',
    name: 'CRM Suite',
    icon: 'bi-people',
    description: 'Complete customer relationship management tool.',
    screenshotLinks: [
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    ],
    availablePlatforms: {
      Web: { downloadLink: '#', size: '5.2MB' }
    },
    category: 'CRM Tools',
    author: 'Salay',
    isFeatured: true
  },
  {
    id: '6',
    name: 'Retro Arcade',
    icon: 'bi-controller',
    description: 'Classic arcade games collection.',
    screenshotLinks: [
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
    ],
    availablePlatforms: {
      Windows: { downloadLink: '#', size: '120MB' },
      Android: { downloadLink: '#', size: '95MB' }
    },
    category: 'Games',
    author: 'Salay',
    isSponsored: true
  }
];