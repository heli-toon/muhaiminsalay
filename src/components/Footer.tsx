import { Link } from 'react-router-dom';

export default function Footer() {
  // Hardcode year for consistency
  const currentYear = 2025;

  const socialLinks = [
    { icon: 'bi-twitter-x', href: 'https://x.com/SalayAbdul', label: 'Twitter' },
    { icon: 'bi-facebook', href: 'https://www.facebook.com/muhaiminsalay', label: 'Facebook' },
    { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/muhaimin-salay-a653b6299/', label: 'LinkedIn' },
    { icon: 'bi-instagram', href: 'https://www.instagram.com/muhaiminsalay/', label: 'Instagram' },
    { icon: 'bi-github', href: 'https://www.github.com/heli-toon/', label: 'GitHub' },
    { icon: 'bi-whatsapp', href: 'https://wa.me/233535760503/', label: 'WhatsApp' },
    { icon: 'bi-envelope', href: 'mailto:abdulkanton2005@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-950/95 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.webp"
                alt="Muhaimin Salay Logo"
                width="52"
                height="52"
                className="rounded"
              />
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              Ideas brought to life, with every line of code, every collaboration,
              every decision to create something truly remarkable.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  title={link.label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <i className={`${link.icon} text-xl`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/salayverse/#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Apps
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Desktop Apps</li>
              <li className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Web Apps</li>
              <li className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Websites</li>
              <li className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">APIs</li>
            </ul>
          </div>

          {/* Contact */}
          <div className='w-full'>
            <h3 className="text-white font-bold text-lg mb-4">Contact Me</h3>
            <p className="text-gray-400 text-sm">
              Accra, Ghana <br />
              <br />
              <p className='flex items-center space-x-1'>
                <strong>Phone: </strong>
                <a href="tel:+233535760503" className="text-orange-500 hover:text-orange-600 block">
                  +233 53 576 0503
                </a>
              </p>
              <p className='flex items-center space-x-1'>
                <strong>Email: </strong>
                <a href="mailto:abdulkanton2005@gmail.com" className="text-orange-500 hover:text-orange-600 block">
                  abdulkanton2005@gmail.com
                </a>
              </p>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} <span className="text-orange-500 font-semibold">Salay Kanton</span>. All Rights Reserved.
          </p>
          <p className="mt-2">
            Designed by{' '}
            <a href="/" className="text-orange-500 hover:text-orange-600 font-semibold">
              SALAY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}