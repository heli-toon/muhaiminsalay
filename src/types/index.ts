export interface SalayverseApp {
    id: string;
    name: string;
    icon: string;
    description: string;
    screenshotLinks: string[];
    availablePlatforms: {
      [key: string]: {
        downloadLink: string;
        size: string;
      };
    };
    status?: string;
    category: string;
    author: string;
    isFeatured?: boolean;
    isSponsored?: boolean;
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    tags: string[];
    imageUrl?: string;
  }