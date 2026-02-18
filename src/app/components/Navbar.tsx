import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '/logo.png'; // <--- Add this line (Vite will find it in the public folder)

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            {/* <img
            // src={`${import.meta.env.BASE_URL}logo.png`}
              src="/logo.png"
              alt="ICBE Logo"
              className="h-16 w-auto object-contain drop-shadow-lg hover:drop-shadow-xl transition-all"
            onError={(e) => {
      // Fallback: If relative path fails, try the absolute base path
      const target = e.currentTarget;
      if (target.src.indexOf(window.location.origin + '/logo.png') === -1) {
        target.src = `${import.meta.env.BASE_URL}logo.png`;
      }
    }}
            /> */}
            <img
    // We use the dynamic BASE_URL to ensure it works on GitHub's /ICBE/ subfolder
    // src={`${import.meta.env.BASE_URL}logo.png`}
    src={logoImg}
    alt="ICBE Logo"
    className="h-16 w-auto object-contain drop-shadow-lg hover:drop-shadow-xl transition-all"
    onError={(e) => {
      // Emergency fallback: If the above fails, try a direct relative path
      const target = e.currentTarget;
      if (!target.src.includes('logo.png')) {
         target.src = "logo.png";
      }
    }}
  />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 group overflow-hidden ${
                  link.path === '/contact'
                    ? 'px-6 py-2.5 bg-gradient-to-r from-[#1B7F5B] to-[#0B3D91] text-white rounded-lg shadow-md hover:shadow-lg hover:from-[#166646] hover:to-[#0A2E6F] transform hover:scale-105'
                    : location.pathname === link.path
                    ? 'text-[#0B3D91]'
                    : 'text-gray-600 hover:text-[#0B3D91]'
                }`}
              >
                <span className="relative inline-block">
                  {link.label}
                  {link.path !== '/contact' && (
                    <>
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B7F5B] to-transparent rounded-full"
                        initial={false}
                        animate={{
                          width: location.pathname === link.path ? '100%' : '0%',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                      {location.pathname !== link.path && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B7F5B] to-transparent rounded-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </>
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#0B3D91]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-5 py-3 rounded-xl font-semibold uppercase tracking-wider transition-all duration-300 text-sm ${
                      link.path === '/contact'
                        ? 'bg-gradient-to-r from-[#1B7F5B] to-[#0B3D91] text-white shadow-md hover:shadow-lg hover:from-[#166646] hover:to-[#0A2E6F] transform hover:scale-105'
                        : location.pathname === link.path
                        ? 'bg-gradient-to-r from-[#0B3D91] to-[#1B7F5B] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 hover:text-[#0B3D91]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
