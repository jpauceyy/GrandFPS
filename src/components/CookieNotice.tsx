import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing the notice for a better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="glass-panel p-6 rounded-2xl border-brand-accent/20 box-glow shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Animated accent gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-transparent pointer-events-none group-hover:from-brand-accent/20 transition-all duration-500" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-1"
              aria-label="Dismiss notice"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex gap-4 items-start relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center border border-brand-accent/30 shrink-0 box-glow">
                <ShieldCheck className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-bold text-lg tracking-tight mb-1">Cookie Policy</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    We use cookies to improve your experience and analyze our traffic. By clicking "Accept", you agree to our use of cookies.
                  </p>
                </div>
                
                <div className="flex items-center gap-6 pt-1">
                  <Button size="sm" onClick={acceptCookies} className="px-8 shadow-[0_0_20px_rgba(0,255,127,0.3)]">
                    Accept All
                  </Button>
                  <Link 
                    to="/privacy" 
                    className="text-xs font-semibold text-brand-accent hover:text-white transition-colors underline underline-offset-4 decoration-brand-accent/30"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
