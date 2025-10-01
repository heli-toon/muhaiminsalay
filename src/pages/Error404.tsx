import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

function ErrorPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center" data-aos="zoom-out">
          {/* Large 404 Text */}
          <div className="relative mb-8">
            <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>

          {/* Icon and Title */}
          <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/10 rounded-full mb-4">
              <i className="bi bi-exclamation-triangle text-4xl text-orange-500"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Page Not Found
            </h2>
          </div>

          {/* Description */}
          <p 
            className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry though, we'll help you find your way back.
          </p>

          {/* Action Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
            >
              <i className="bi bi-house-door"></i>
              Go Back Home
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-gray-700 hover:border-orange-500"
            >
              <i className="bi bi-journal-text"></i>
              Browse Blog
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center gap-8 text-gray-600">
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-emoji-frown text-3xl mb-2 block"></i>
              <p className="text-sm">Lost?</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-compass text-3xl mb-2 block"></i>
              <p className="text-sm">Navigate</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="600">
              <i className="bi bi-arrow-left-circle text-3xl mb-2 block"></i>
              <p className="text-sm">Go Back</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default ErrorPage;