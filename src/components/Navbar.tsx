import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

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
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Results', path: '/results' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'pt-4 px-4' : 'pt-6 px-6'
        }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 w-full ${isScrolled
            ? 'max-w-5xl bg-bg-surface/80 backdrop-blur-lg border border-white/10 rounded-full py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'max-w-7xl bg-transparent py-2 px-0 border-transparent'
          }`}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'w-8 h-8' : 'w-12 h-12'}`}>
            <Logo className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,127,0.5)]" />
          </div>
          <span className={`font-heading font-bold tracking-tight text-white group-hover:text-glow transition-all duration-500 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
            Grandzie<span className="text-brand-accent">FPS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-gray-400 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://calendly.com/grandziefps"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50 bg-brand-accent text-white hover:bg-brand-light hover:box-glow ${isScrolled ? 'h-9 px-5 text-sm' : 'h-10 px-6 text-sm'}`}
          >
            Book Optimization
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-4 right-4 bg-bg-surface/95 backdrop-blur-xl border border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl rounded-2xl ${isScrolled ? 'top-[80px]' : 'top-[100px]'}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-gray-300 hover:text-brand-accent transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://calendly.com/grandziefps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50 bg-brand-accent text-black hover:bg-brand-light hover:box-glow h-12 px-6 text-base w-full mt-2"
            >
              Book Optimization
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
