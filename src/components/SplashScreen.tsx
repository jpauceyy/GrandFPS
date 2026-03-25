import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg-base overflow-hidden"
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff7f1a_1px,transparent_1px),linear-gradient(to_bottom,#00ff7f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center scale-75 md:scale-100">
            {/* SVG Traces */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
              <defs>
                <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-brand-accent)" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="var(--color-brand-accent)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--color-brand-accent)" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Paths */}
              <g stroke="url(#trace-gradient)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* Diagonal paths */}
                <path d="M 500 500 L 300 300 L 150 300" />
                <path d="M 500 500 L 700 300 L 850 300" />
                <path d="M 500 500 L 300 700 L 150 700" />
                <path d="M 500 500 L 700 700 L 850 700" />
                
                {/* Orthogonal paths */}
                <path d="M 500 500 L 500 150" />
                <path d="M 500 500 L 500 850" />
                <path d="M 500 500 L 150 500" />
                <path d="M 500 500 L 850 500" />

                {/* Secondary traces */}
                <path d="M 450 450 L 350 250 L 250 250" strokeOpacity="0.5" strokeDasharray="4 4" />
                <path d="M 550 450 L 650 250 L 750 250" strokeOpacity="0.5" strokeDasharray="4 4" />
                <path d="M 450 550 L 350 750 L 250 750" strokeOpacity="0.5" strokeDasharray="4 4" />
                <path d="M 550 550 L 650 750 L 750 750" strokeOpacity="0.5" strokeDasharray="4 4" />
              </g>

              {/* Animated Packets */}
              {[
                { path: "M 500 500 L 300 300 L 150 300", dur: "1.5s", delay: "0s" },
                { path: "M 500 500 L 700 300 L 850 300", dur: "1.8s", delay: "0.2s" },
                { path: "M 500 500 L 300 700 L 150 700", dur: "1.6s", delay: "0.4s" },
                { path: "M 500 500 L 700 700 L 850 700", dur: "1.7s", delay: "0.1s" },
                { path: "M 500 500 L 500 150", dur: "1.4s", delay: "0.5s" },
                { path: "M 500 500 L 500 850", dur: "1.9s", delay: "0.3s" },
                { path: "M 500 500 L 150 500", dur: "1.5s", delay: "0.6s" },
                { path: "M 500 500 L 850 500", dur: "1.6s", delay: "0.2s" },
                // Reverse packets
                { path: "M 150 300 L 300 300 L 500 500", dur: "1.7s", delay: "0.8s" },
                { path: "M 850 700 L 700 700 L 500 500", dur: "1.5s", delay: "0.4s" },
              ].map((p, i) => (
                <circle key={i} r="4" fill="var(--color-brand-light)" filter="url(#glow)">
                  <animateMotion
                    dur={p.dur}
                    begin={p.delay}
                    repeatCount="Infinity"
                    path={p.path}
                  />
                </circle>
              ))}
            </svg>

            {/* Central CPU Node */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex items-center justify-center w-40 h-40 bg-bg-base border-2 border-brand-accent/50 rounded-2xl shadow-[0_0_50px_rgba(0,255,127,0.3)] overflow-hidden"
            >
              {/* CPU Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff7f33_1px,transparent_1px),linear-gradient(to_bottom,#00ff7f33_1px,transparent_1px)] bg-[size:0.5rem_0.5rem]" />
              
              <Logo className="w-20 h-20 text-brand-accent drop-shadow-[0_0_15px_rgba(0,255,127,0.8)] relative z-10" />
              
              {/* Pulsing ring */}
              <motion.div 
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 border-2 border-brand-accent rounded-2xl"
              />
            </motion.div>

            {/* Peripheral Nodes (RAM, GPU, Network, Storage) */}
            {/* Top (RAM) */}
            <div className="absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex gap-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-4 h-16 bg-bg-surface border border-brand-accent/40 rounded-sm" />
              ))}
            </div>
            {/* Bottom (GPU) */}
            <div className="absolute bottom-[15%] left-[50%] -translate-x-1/2 translate-y-1/2 w-32 h-16 bg-bg-surface border border-brand-accent/40 rounded-md flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-brand-accent/30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-brand-accent/50" />
              </div>
            </div>
            {/* Left (Storage) */}
            <div className="absolute left-[15%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-16 h-6 bg-bg-surface border border-brand-accent/40 rounded-sm" />
              ))}
            </div>
            {/* Right (Network) */}
            <div className="absolute right-[15%] top-[50%] translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-bg-surface border border-brand-accent/40 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-brand-accent/50" />
            </div>

            {/* Corner Nodes */}
            <div className="absolute top-[30%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-bg-surface border border-brand-accent/30 rounded-lg rotate-45" />
            <div className="absolute top-[30%] right-[15%] translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-bg-surface border border-brand-accent/30 rounded-lg rotate-45" />
            <div className="absolute bottom-[30%] left-[15%] -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-bg-surface border border-brand-accent/30 rounded-lg rotate-45" />
            <div className="absolute bottom-[30%] right-[15%] translate-x-1/2 translate-y-1/2 w-12 h-12 bg-bg-surface border border-brand-accent/30 rounded-lg rotate-45" />
          </div>

          {/* Loading Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <div className="text-brand-accent font-mono text-sm tracking-widest uppercase">
              Initializing System
            </div>
            <div className="flex gap-1">
              {[1,2,3].map(i => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-brand-accent"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
