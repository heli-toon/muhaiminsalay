import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { salayverseApps } from '../data/salayverseApps';
import ScreenshotImage from '../components/ScreenshotImage';

export default function SalayverseSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const categories = ['All', 'Games', 'Apps', 'CRM Tools', 'Showcases'];
  const platforms = ['All', 'Web', 'Windows', 'MacOS', 'Linux', 'Android', 'iOS'];

  const isGitHubLink = (url: string) => {
    return url.includes('github.com');
  };

  const getFirstPlatformInfo = (platforms: any) => {
    const firstPlatform = Object.keys(platforms)[0];
    const platformInfo = platforms[firstPlatform];
    return { platform: firstPlatform, info: platformInfo };
  };

  const filteredApps = salayverseApps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
    const matchesPlatform = selectedPlatform === 'All' || Object.keys(app.availablePlatforms).includes(selectedPlatform);

    return matchesSearch && matchesCategory && matchesPlatform;
  });

  return (
    <div className=" min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div data-aos="fade-up" className="mb-8">
          <Link
            to="/salayverse"
            className="inline-flex items-center text-[#f6700d] hover:text-[#EA3500] mb-6 transition-colors duration-300"
          >
            <i className="bi bi-arrow-left mr-2"></i>
            Back to Salayverse
          </Link>

          <h1 className="text-4xl font-bold text-white mb-6">Search Apps</h1>

          <div className="relative mb-6">
            <i className="bi bi-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
            <input
              type="text"
              placeholder="Search apps and games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-950/95 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#f6700d] transition-colors duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-400 mb-2 text-sm">Category</label>
              <select title='Category'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-gray-950/95 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f6700d] transition-colors duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">Platform</label>
              <select title='Platform'
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="w-full bg-gray-950/95 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f6700d] transition-colors duration-300"
              >
                {platforms.map((platform) => (
                  <option key={platform} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400">
              {filteredApps.length} {filteredApps.length === 1 ? 'result' : 'results'} found
            </p>
          </div>

          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map((app, index) => {
                const { info } = getFirstPlatformInfo(app.availablePlatforms);
                const isGitHub = info ? isGitHubLink(info.downloadLink) : false;
                
                return (
                  <Link
                    key={app.id}
                    to={`/salayverse/app/${app.id}`}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="bg-gray-950/95 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-gray-900 hover:border-[#f6700d] group relative"
                  >
                    {/* GitHub Badge */}
                    {isGitHub && (
                      <div className="absolute top-2 left-2 bg-gray-800/90 backdrop-blur-sm text-gray-300 text-xs px-2 py-1 rounded z-10 flex items-center gap-1">
                        <i className="bi bi-github text-xs"></i>
                        GitHub
                      </div>
                    )}
                    
                    <ScreenshotImage
                      src={app.screenshotLinks[0]}
                      alt={app.name}
                      className="w-full h-48 object-contain object-center bg-gray-800"
                    />
                    <div className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <i className={`${app.icon} text-2xl text-[#f6700d]`}></i>
                        <h3 className="text-lg font-semibold text-white group-hover:text-[#f6700d] transition-colors duration-300">
                          {app.name}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{app.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                          {app.category}
                        </span>
                        <div className="flex space-x-1">
                          {Object.keys(app.availablePlatforms).slice(0, 3).map((platformName) => (
                            <span
                              key={platformName}
                              className="text-gray-500 text-xs"
                              title={platformName}
                            >
                              <i className={`bi bi-${platformName.toLowerCase() === 'web' ? 'globe' : platformName.toLowerCase() === 'windows' ? 'windows' : platformName.toLowerCase() === 'macos' ? 'apple' : platformName.toLowerCase() === 'linux' ? 'ubuntu' : platformName.toLowerCase() === 'android' ? 'android2' : 'phone'}`}></i>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <i className="bi bi-search text-6xl text-gray-600 mb-4 block"></i>
              <p className="text-gray-400 text-lg mb-2">No apps found</p>
              <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}