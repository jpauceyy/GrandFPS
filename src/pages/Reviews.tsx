import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/reviews';

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

export function Reviews() {
  return (
    <div className="flex flex-col min-h-screen pt-32 md:pt-48 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-32"
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
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              className="glass-panel p-8 rounded-3xl flex flex-col h-full hover:border-brand-accent/50 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4 text-brand-accent">
                {[...Array(review.rating || 5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-base mb-8 flex-1 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-accent/30 flex items-center justify-center shrink-0">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">{review.name}</p>
                    <p className="text-brand-accent text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

