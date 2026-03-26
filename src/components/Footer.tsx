import { Link } from 'react-router-dom';
import { Twitter } from 'lucide-react';
import { DiscordIcon } from './DiscordIcon';
import { Button } from './Button';

export function Footer() {
  return (
    <>
      <footer 
        className="bg-black relative overflow-hidden flex flex-col justify-between min-h-[500px]"
      >
          {/* Background Elements */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
            <svg 
              className="w-full h-auto translate-y-[20%]" 
              viewBox="0 0 1200 300" 
              preserveAspectRatio="xMidYMax meet"
            >
              <text 
                x="50%" 
                y="90%" 
                textAnchor="middle" 
                className="font-black tracking-tighter text-[240px] footer-text-outline"
              >
                GRANDZIE
              </text>
            </svg>
          </div>

          {/* Main CTA Content */}
          <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-32 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Join the community of performance junkies
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Get direct support, updates, and real-world tuning advice from people actually using Grandzie FPS.
            </p>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" href="https://discord.gg/AwJvZREy" target="_blank" rel="noopener noreferrer">
              <DiscordIcon className="mr-2 w-5 h-5" />
              Join Discord Community
            </Button>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 border-t border-brand-accent bg-black">
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-gray-500 text-sm md:w-1/3 text-center md:text-left">
                © {new Date().getFullYear()} Grandzie FPS. All rights reserved.
              </p>
              
              <div className="flex items-center justify-center gap-6 md:w-1/3">
                <a href="https://discord.gg/AwJvZREy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <DiscordIcon className="w-5 h-5" />
                </a>
                <a href="https://x.com/GrandFPS" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-end gap-6 md:w-1/3">
                <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Pricing</a>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
}
