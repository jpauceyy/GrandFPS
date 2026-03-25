import { motion } from 'motion/react';
import { Star, MonitorPlay } from 'lucide-react';

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

const reviews = [
  {
    name: "Alex 'Viper' Chen",
    game: "Valorant Radiant",
    rating: 5,
    text: "Before the tune, my 1% lows were terrible and I had micro-stutters. Now the game feels incredibly responsive. Hitreg feels better because of the reduced input delay. Worth every penny.",
    date: "2 weeks ago"
  },
  {
    name: "Sarah Jenkins",
    game: "Apex Legends Predator",
    rating: 5,
    text: "I was skeptical at first, but the difference is night and day. My frametime graph is a completely flat line now. The custom BIOS tuning really unlocked my RAM's potential.",
    date: "1 month ago"
  },
  {
    name: "Marcus T.",
    game: "CS2 Faceit Lvl 10",
    rating: 5,
    text: "Grandzie knows exactly what they're doing. They walked me through the entire process and explained what every tweak did. My mouse feels lighter, if that makes sense.",
    date: "2 months ago"
  },
  {
    name: "David R.",
    game: "Warzone 3",
    rating: 5,
    text: "Warzone is notoriously unoptimized, but after the Elite Tune, I gained about 40 FPS on average and the game doesn't hitch during gunfights anymore.",
    date: "3 months ago"
  },
  {
    name: "Elena K.",
    game: "Fortnite Unreal",
    rating: 5,
    text: "Endgames used to drop my frames to 60-70. Now I'm holding a steady 144+ even with 40 people in a moving zone. Incredible service.",
    date: "3 months ago"
  },
  {
    name: "James L.",
    game: "Overwatch 2 GM",
    rating: 5,
    text: "The input lag reduction is the real deal. Tracking fast-moving targets feels so much more natural now. Highly recommend the Pro Tune.",
    date: "4 months ago"
  }
];

export function Reviews() {
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
            Client <span className="text-brand-accent">Testimonials</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-gray-400 text-lg">
            Don't just take our word for it. See what top competitive players have to say about our optimization services.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              className="glass-panel p-8 rounded-3xl flex flex-col h-full hover:border-brand-accent/50 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4 text-brand-accent">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-base mb-8 flex-1 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-dark border border-brand-accent/30 flex items-center justify-center">
                    <MonitorPlay className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{review.name}</p>
                    <p className="text-brand-accent text-xs">{review.game}</p>
                  </div>
                </div>
                <span className="text-gray-500 text-xs">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
