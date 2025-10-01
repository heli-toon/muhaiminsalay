import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { salayverseApps } from '../data/salayverseApps';

export default function Salayverse() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const platforms = ['All', 'Web', 'Windows', 'MacOS', 'Linux', 'Android', 'iOS'];
  const categories = ['All', 'Games', 'Apps', 'CRM Tools', 'Showcases'];

  const randomApps = salayverseApps
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const sponsoredApps = salayverseApps.filter(app => app.isSponsored);
  const recentApps = salayverseApps.slice(0, 4);

  const filteredApps = salayverseApps.filter(app => {
    const platformMatch = selectedPlatform === 'All' || Object.keys(app.availablePlatforms).includes(selectedPlatform);
    const categoryMatch = selectedCategory === 'All' || app.category === selectedCategory;
    return platformMatch && categoryMatch;
  });

  const gamesApps = filteredApps.filter(app => app.category === 'Games');
  const otherApps = filteredApps.filter(app => app.category !== 'Games');

  return (
    <section className="bg-black/40 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div data-aos="fade-up" className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Salayverse</h1>
          <p className="text-xl text-gray-400">
            Your digital marketplace for apps and games
          </p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Recommended for you</h2>
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {randomApps.map((app) => (
                <Link
                  key={app.id}
                  to={`/salayverse/app/${app.id}`}
                  className="flex-shrink-0 w-80 bg-gray-950/95 border-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 border hover:border-[#f6700d] snap-start"
                >
                  <img
                    src={app.screenshotLinks[0]}
                    alt={app.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <i className={`${app.icon} text-2xl text-[#f6700d]`}></i>
                      <h3 className="text-lg font-semibold text-white">{app.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{app.description}</p>
                    <span className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {app.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Filter by Platform</h3>
            <Link
              to="/salayverse/search"
              className="text-[#f6700d] hover:text-[#EA3500] text-sm transition-colors duration-300"
            >
              Advanced Search <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedPlatform === platform
                    ? 'bg-[#f6700d] text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-4">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#f6700d] text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {sponsoredApps.length > 0 && (
          <div data-aos="fade-up" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Sponsored Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsoredApps.map((app) => (
                <Link
                  key={app.id}
                  to={`/salayverse/app/${app.id}`}
                  className="bg-gray-950/95 border-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 border hover:border-[#f6700d] group relative"
                >
                  <div className="absolute top-2 right-2 bg-[#f6700d] text-white text-xs px-2 py-1 rounded z-10">
                    Sponsored
                  </div>
                  <img
                    src={app.screenshotLinks[0]}
                    alt={app.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <i className={`${app.icon} text-2xl text-[#f6700d]`}></i>
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#f6700d] transition-colors duration-300">
                        {app.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{app.description}</p>
                    <span className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {app.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {gamesApps.length > 0 && (
          <div data-aos="fade-up" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gamesApps.map((app) => (
                <Link
                  key={app.id}
                  to={`/salayverse/app/${app.id}`}
                  className="bg-gray-950/95 border-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 border hover:border-[#f6700d] group"
                >
                  <img
                    src={app.screenshotLinks[0]}
                    alt={app.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <i className={`${app.icon} text-2xl text-[#f6700d]`}></i>
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#f6700d] transition-colors duration-300">
                        {app.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm">{app.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {otherApps.length > 0 && (
          <div data-aos="fade-up" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherApps.map((app) => (
                <Link
                  key={app.id}
                  to={`/salayverse/app/${app.id}`}
                  className="bg-gray-950/95 border-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 border hover:border-[#f6700d] group"
                >
                  <img
                    src={app.screenshotLinks[0]}
                    alt={app.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <i className={`${app.icon} text-2xl text-[#f6700d]`}></i>
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#f6700d] transition-colors duration-300">
                        {app.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{app.description}</p>
                    <span className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {app.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentApps.map((app) => (
              <Link
                key={app.id}
                to={`/salayverse/app/${app.id}`}
                className="bg-gray-950/95 border-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 border hover:border-[#f6700d] group"
              >
                <img
                  src={app.screenshotLinks[0]}
                  alt={app.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <i className={`${app.icon} text-xl text-[#f6700d]`}></i>
                    <h3 className="text-base font-semibold text-white group-hover:text-[#f6700d] transition-colors duration-300">
                      {app.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-40">
          <div className="flex justify-around py-3">
            <Link to="/salayverse" className="flex flex-col items-center text-[#f6700d]">
              <i className="bi bi-house text-xl"></i>
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link to="/salayverse/search" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300">
              <i className="bi bi-search text-xl"></i>
              <span className="text-xs mt-1">Search</span>
            </Link>
            <Link to="/" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300">
              <i className="bi bi-person text-xl"></i>
              <span className="text-xs mt-1">Profile</span>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}