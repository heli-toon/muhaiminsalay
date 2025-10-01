import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

type SalayverseApp = {
  id: string;
  name: string;
  icon: string;
  description: string;
  screenshotLinks: string[];
  availablePlatforms: {
    Web?: { downloadLink: string; size: string };
    Windows?: { downloadLink: string; size: string };
    MacOS?: { downloadLink: string; size: string };
    Linux?: { downloadLink: string; size: string };
    Android?: { downloadLink: string; size: string };
    iOS?: { downloadLink: string; size: string };
  };
  category: string;
  author: string;
  isFeatured?: boolean;
  isSponsored?: boolean;
  status?: string;
};

interface FeaturedAppsProps {
  apps: SalayverseApp[];
  maxItems?: number;
}

function FeaturedApps({ apps, maxItems = 6 }: FeaturedAppsProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  const featuredApps = apps.filter(app => app.isFeatured).slice(0, maxItems);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
      <div className="container mx-auto max-w-7xl">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Apps
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our handpicked collection of innovative applications
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredApps.map((app, index) => (
              <Link
                key={app.id}
                to={`/salayverse/app/${app.id}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-gray-950/95 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 border border-gray-800 hover:border-orange-500"
              >
                {/* App Screenshot */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={app.screenshotLinks[0]}
                    alt={app.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700">
                    {app.category}
                  </span>
                </div>

                {/* App Details */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-lg group-hover:bg-orange-500 transition-all duration-300">
                      <i className={`${app.icon} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">
                      {app.name}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {app.description}
                  </p>

                  {/* Platform Icons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {Object.keys(app.availablePlatforms).map((platform) => (
                      <span
                        key={platform}
                        className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded"
                        title={platform}
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Arrow */}
                  <div className="mt-4 flex items-center text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium mr-2">View Details</span>
                    <i className="bi bi-arrow-right text-sm group-hover:translate-x-2 transition-transform duration-300"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <Link
              to="/salayverse"
              className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <span>View All Apps</span>
              <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedApps;