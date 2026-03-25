import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { DiscordIcon } from '../components/DiscordIcon';

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#00ff7f1a_1px,transparent_1px),linear-gradient(to_bottom,#00ff7f1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-12 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          {/* Decorative Top Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
          
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-4 text-glow text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
          >
            404
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6"
          >
            Out of Bounds
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-400 text-lg mb-10 max-w-md mx-auto"
          >
            The page you're looking for has been moved, deleted, or never existed in the first place.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Homepage
              </Button>
            </Link>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto" 
              href="https://discord.gg/AwJvZREy" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <DiscordIcon className="mr-2 w-5 h-5" />
              Join Discord
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
