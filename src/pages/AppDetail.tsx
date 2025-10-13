import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import { salayverseApps } from '../data/salayverseApps';
import { type SalayverseApp } from '../types';
import AppIcon from '../components/AppIcon';
import ScreenshotImage from '../components/ScreenshotImage';

export default function AppDetail() {
  const { id } = useParams();
  const [app, setApp] = useState<SalayverseApp | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [showIssueForm, setShowIssueForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });

    const foundApp = salayverseApps.find(a => a.id === id);
    if (foundApp) {
      setApp(foundApp);
      const detectedPlatform = detectOS();
      if (detectedPlatform && foundApp.availablePlatforms[detectedPlatform]) {
        setSelectedPlatform(detectedPlatform);
      } else {
        setSelectedPlatform(Object.keys(foundApp.availablePlatforms)[0]);
      }
    }
  }, [id]);

  const detectOS = (): string | null => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) return 'Windows';
    if (userAgent.includes('mac')) return 'MacOS';
    if (userAgent.includes('linux')) return 'Linux';
    if (userAgent.includes('android')) return 'Android';
    if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'iOS';
    return null;
  };

  const handleDownload = () => {
    if (app && selectedPlatform && app.availablePlatforms[selectedPlatform]) {
      window.open(app.availablePlatforms[selectedPlatform].downloadLink, '_blank');
    }
  };

  const isWebPlatform = selectedPlatform === 'Web';
  const buttonText = isWebPlatform ? `Visit ${app?.name}` : `Download for ${selectedPlatform}`;

  const nextScreenshot = () => {
    if (app) {
      setCurrentScreenshot((prev) => (prev + 1) % app.screenshotLinks.length);
    }
  };

  const prevScreenshot = () => {
    if (app) {
      setCurrentScreenshot((prev) => (prev - 1 + app.screenshotLinks.length) % app.screenshotLinks.length);
    }
  };

  if (!app) {
    return (
      <div className="bg-black/40 min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">App not found</p>
          <Link to="/salayverse" className="text-[#f6700d] hover:text-[#EA3500]">
            Back to Salayverse
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <Link
          to="/salayverse"
          className="inline-flex items-center text-[#f6700d] hover:text-[#EA3500] mb-8 transition-colors duration-300"
        >
          <i className="bi bi-arrow-left mr-2"></i>
          Back to Salayverse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="relative bg-gray-950/95 border-gray-900 border rounded-lg overflow-hidden mb-4">
              <ScreenshotImage
                src={app.screenshotLinks[currentScreenshot]}
                alt={`${app.name} screenshot ${currentScreenshot + 1}`}
                className="w-full h-96 object-contain object-center bg-gray-800"
              />

              {app.screenshotLinks.length > 1 && (
                <>
                  <button title='Previous Screenshot'
                    onClick={prevScreenshot}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                  >
                    <i className="bi bi-chevron-left text-xl"></i>
                  </button>
                  <button title='Next Screenshot'
                    onClick={nextScreenshot}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                  >
                    <i className="bi bi-chevron-right text-xl"></i>
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {app.screenshotLinks.map((_, index) => (
                  <button title='Select Screenshot'
                    key={index}
                    onClick={() => setCurrentScreenshot(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentScreenshot ? 'bg-[#f6700d] w-6' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {app.screenshotLinks.slice(0, 4).map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreenshot(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentScreenshot ? 'border-[#f6700d]' : 'border-transparent hover:border-gray-600'
                  }`}
                >
                  <ScreenshotImage
                    src={screenshot}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-contain object-center bg-gray-800"
                  />
                </button>
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gray-950/95 border-gray-900 border p-4 rounded-lg">
                <AppIcon 
                  actualIcon={app.actualIcon}
                  fallbackIcon={app.icon}
                  alt={`${app.name} icon`}
                  size="xl"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{app.name}</h1>
                <p className="text-gray-400">{app.author}</p>
              </div>
            </div>

            {app.status === 'Testing' && (
              <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <i className="bi bi-exclamation-triangle text-yellow-500 text-xl"></i>
                  <div>
                    <p className="text-yellow-500 font-semibold mb-1">Testing Phase</p>
                    <p className="text-gray-400 text-sm mb-2">
                      This app is currently in testing. You may encounter issues.
                    </p>
                    <button
                      onClick={() => setShowIssueForm(true)}
                      className="text-[#f6700d] hover:text-[#EA3500] text-sm font-semibold transition-colors duration-300"
                    >
                      Report an Issue →
                    </button>
                  </div>
                </div>
              </div>
            )}

            <p className="text-gray-300 mb-6 leading-relaxed">{app.description}</p>

            <div className="bg-gray-950/95 border-gray-900 border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {isWebPlatform ? 'Access' : 'Download'}
              </h3>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2 text-sm">Select Platform</label>
                <select title='Select Platform'
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="w-full bg-gray-950/95 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f6700d] transition-colors duration-300"
                >
                  {Object.entries(app.availablePlatforms).map(([platform, info]) => (
                    <option key={platform} value={platform}>
                      {platform}{info.size ? ` (${info.size})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleDownload}
                className="w-full bg-[#f6700d] hover:bg-[#EA3500] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <i className={`bi ${isWebPlatform ? 'bi-box-arrow-up-right' : 'bi-download'}`}></i>
                <span>{buttonText}</span>
              </button>

              {selectedPlatform && app.availablePlatforms[selectedPlatform]?.size && (
                <p className="text-gray-500 text-xs mt-2 text-center">
                  Size: {app.availablePlatforms[selectedPlatform].size}
                </p>
              )}
            </div>

            <div className="bg-gray-950/95 border-gray-900 border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Category</span>
                  <span className="text-white text-sm font-semibold">{app.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Available On</span>
                  <div className="flex space-x-2">
                    {Object.keys(app.availablePlatforms).map((platform) => (
                      <span
                        key={platform}
                        className="bg-gray-950/95 border-gray-700 border text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Developer</span>
                  <span className="text-white text-sm font-semibold">{app.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showIssueForm && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setShowIssueForm(false)}
          >
            <div
              data-aos="zoom-in"
              className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Report an Issue</h2>
                <button title='Close Form'
                  onClick={() => setShowIssueForm(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i className="bi bi-x-lg text-2xl"></i>
                </button>
              </div>

              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="app" value={app.name} />
                <input title='Gotcha' type="text" name="_gotcha" className="hidden" />

                <div>
                  <label htmlFor="issue-email" className="block text-gray-400 mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="issue-email"
                    name="email"
                    required
                    className="w-full bg-gray-950/95 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f6700d] transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="issue-description" className="block text-gray-400 mb-2 text-sm">
                    Describe the issue
                  </label>
                  <textarea
                    id="issue-description"
                    name="issue"
                    required
                    rows={6}
                    className="w-full bg-gray-950/95 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f6700d] transition-colors duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f6700d] hover:bg-[#EA3500] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Submit Report
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}