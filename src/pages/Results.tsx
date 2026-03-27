import { motion } from 'motion/react';
import { ArrowRight, MonitorPlay } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const benchmarkResults = [
  {
    game: "Valorant",
    specs: "Ryzen 7 5800X3D | RTX 3080 | 32GB RAM",
    before: {
      fps: "342",
      lows: "115",
      image: "before.jpg"
    },
    after: {
      fps: "585",
      lows: "290",
      image: "after.jpg"
    }
  },
  {
    game: "Call of Duty: Warzone",
    specs: "Intel i9-13900K | RTX 4090 | 32GB RAM",
    before: {
      fps: "185",
      lows: "85",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop"
    },
    after: {
      fps: "295",
      lows: "180",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop"
    }
  },
  {
    game: "Counter-Strike 2",
    specs: "Ryzen 5 5600X | RTX 3060 Ti | 16GB RAM",
    before: {
      fps: "220",
      lows: "90",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
    },
    after: {
      fps: "380",
      lows: "210",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
    }
  }
];

export function Results() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold mb-6">
            Real <span className="text-brand-accent">Results</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-gray-400 text-lg">
            See the massive performance gains our clients experience across different hardware configurations and games.
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {benchmarkResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Game Title & Specs */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center border border-brand-accent/30 box-glow">
                    <MonitorPlay className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{result.game}</h2>
                    <p className="text-brand-accent text-sm font-mono">{result.specs}</p>
                  </div>
                </div>
              </div>

              {/* Before & After Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Before */}
                <div className="glass-panel p-4 rounded-3xl flex flex-col">
                  <div className="flex items-center justify-between mb-4 px-4 pt-2">
                    <h3 className="text-xl font-bold text-gray-400">Before Optimization</h3>
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium border border-red-500/30">Stock Settings</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video">
                    <img
                      src={result.before.image}
                      alt={`${result.game} Before Benchmark`}
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Average FPS</p>
                          <p className="text-4xl font-mono font-bold text-white">{result.before.fps}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">1% Lows</p>
                          <p className="text-3xl font-mono font-bold text-red-400">{result.before.lows}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="glass-panel p-4 rounded-3xl flex flex-col border-brand-accent/30 box-glow relative">
                  {/* Decorative Arrow for Desktop */}
                  <div className="hidden lg:flex absolute top-1/2 -left-8 -translate-y-1/2 w-8 h-8 items-center justify-center z-10 text-brand-accent">
                    <ArrowRight className="w-8 h-8" />
                  </div>

                  <div className="flex items-center justify-between mb-4 px-4 pt-2">
                    <h3 className="text-xl font-bold text-white">After Optimization</h3>
                    <span className="px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-sm font-medium border border-brand-accent/30">Grandzie Tuned</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-brand-accent/30 bg-black aspect-video">
                    <img
                      src={result.after.image}
                      alt={`${result.game} After Benchmark`}
                      className="w-full h-full object-cover opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-brand-accent/80 text-sm mb-1 uppercase tracking-wider">Average FPS</p>
                          <p className="text-4xl font-mono font-bold text-brand-accent">{result.after.fps}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-brand-accent/80 text-sm mb-1 uppercase tracking-wider">1% Lows</p>
                          <p className="text-3xl font-mono font-bold text-brand-accent">{result.after.lows}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center glass-panel p-12 rounded-3xl border-brand-accent/30 box-glow relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-dark)_0%,transparent_100%)] opacity-50 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for these results?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Stop playing at a disadvantage. Get your PC professionally tuned and experience the game the way it was meant to be played.
            </p>
            <a
              href="https://calendly.com/grandziefps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50 bg-brand-accent text-white hover:bg-brand-light hover:box-glow h-14 px-8 text-lg"
            >
              Book Your Optimization <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
