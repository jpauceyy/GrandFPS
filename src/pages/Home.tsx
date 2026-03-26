import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Zap, Shield, Crosshair, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { DiscordIcon } from '../components/DiscordIcon';
import BackgroundScene from '../components/ui/aurora-section-hero';

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

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[90vh] flex items-center">
        <BackgroundScene beamCount={60} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/50 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              <span>The Ultimate PC Optimization Service</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-glow">
              Unlock Maximum <br className="hidden md:block" />
              <span className="text-brand-accent">FPS & Performance</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience zero input delay, higher framerates, and buttery smooth gameplay.
              Professional PC tuning trusted by top competitive players.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/grandziefps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50 bg-brand-accent text-black hover:bg-brand-light hover:box-glow h-14 px-8 text-lg w-full sm:w-auto"
              >
                Book Optimization <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" href="https://discord.gg/AwJvZREy" target="_blank" rel="noopener noreferrer">
                <DiscordIcon className="mr-2 w-5 h-5" />
                Join Discord Community
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Slider (Simplified for now) */}
      <section className="py-12 border-y border-white/5 bg-bg-surface/50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl mb-8">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest">Trusted by 100+ Gamers</p>
        </div>
        <div className="relative flex overflow-hidden mask-edges w-full">
          <div className="flex animate-marquee w-max hover:[animation-play-state:paused]">
            <div className="flex gap-6 pr-6">
              {[...Array(6)].map((_, i) => (
                <div key={`set1-${i}`} className="glass-panel p-6 rounded-2xl w-[300px] flex-shrink-0 inline-block">
                  <div className="flex items-center gap-1 mb-3 text-brand-accent">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 whitespace-normal">"Insane difference. My 1% lows are so much better and the game feels incredibly responsive now."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-dark border border-brand-accent/30" />
                    <div>
                      <p className="text-white text-sm font-medium">ProPlayer{i + 1}</p>
                      <p className="text-gray-500 text-xs">Valorant Radiant</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-6 pr-6">
              {[...Array(6)].map((_, i) => (
                <div key={`set2-${i}`} className="glass-panel p-6 rounded-2xl w-[300px] flex-shrink-0 inline-block">
                  <div className="flex items-center gap-1 mb-3 text-brand-accent">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 whitespace-normal">"Insane difference. My 1% lows are so much better and the game feels incredibly responsive now."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-dark border border-brand-accent/30" />
                    <div>
                      <p className="text-white text-sm font-medium">ProPlayer{i + 1}</p>
                      <p className="text-gray-500 text-xs">Valorant Radiant</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#00ff7f1a_1px,transparent_1px),linear-gradient(to_bottom,#00ff7f1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-brand-accent">GrandzieFPS?</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-400 text-lg mb-8 leading-relaxed">
                We don't just change a few Windows settings. We perform deep system-level optimizations, custom BIOS tuning, and debloating to ensure your hardware is running at its absolute peak potential.
              </motion.p>

              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'Safe & Reliable', desc: 'No dangerous overclocks. We prioritize system stability.' },
                  { icon: Crosshair, title: 'Lowest Latency', desc: 'Custom network and USB tuning for instant response.' },
                  { icon: Zap, title: 'Maximum FPS', desc: 'Squeeze every drop of performance from your CPU and GPU.' }
                ].map((feature, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-dark/50 border border-brand-accent/20 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-dark to-bg-surface border border-brand-accent/20 p-8 relative overflow-hidden box-glow">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/800/800?blur=2')] opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base to-transparent" />

                {/* Abstract UI Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm">
                  <div className="glass-panel p-6 rounded-2xl mb-4 transform -rotate-6 translate-x-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400 text-sm">System Latency</span>
                      <span className="text-red-400 font-mono">14.2ms</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-red-500" />
                    </div>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl transform rotate-3 -translate-x-4 border-brand-accent/50 box-glow relative z-10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-brand-accent font-medium">Optimized Latency</span>
                      <span className="text-brand-accent font-mono font-bold">2.1ms</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="w-[15%] h-full bg-brand-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After Benchmark Section */}
      <section className="py-24 bg-bg-base relative border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#00ff7f1a_1px,transparent_1px),linear-gradient(to_bottom,#00ff7f1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Real <span className="text-brand-accent">Results</span></h2>
            <p className="text-gray-400 text-lg">See the difference our optimization makes in actual benchmark tests.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-4 rounded-3xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-4 px-4 pt-2">
                <h3 className="text-xl font-bold text-gray-400">Before Optimization</h3>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium border border-red-500/30">Stock Settings</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video">
                {/* Placeholder for Before Benchmark Screenshot */}
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
                  alt="Before Benchmark"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Average FPS</p>
                      <p className="text-4xl font-mono font-bold text-white">142</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">1% Lows</p>
                      <p className="text-3xl font-mono font-bold text-red-400">45</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-4 rounded-3xl flex flex-col border-brand-accent/30 box-glow"
            >
              <div className="flex items-center justify-between mb-4 px-4 pt-2">
                <h3 className="text-xl font-bold text-white">After Optimization</h3>
                <span className="px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-sm font-medium border border-brand-accent/30">Grandzie Tuned</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-brand-accent/30 bg-black aspect-video">
                {/* Placeholder for After Benchmark Screenshot */}
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
                  alt="After Benchmark"
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-brand-accent/80 text-sm mb-1 uppercase tracking-wider">Average FPS</p>
                      <p className="text-4xl font-mono font-bold text-brand-accent">285</p>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-accent/80 text-sm mb-1 uppercase tracking-wider">1% Lows</p>
                      <p className="text-3xl font-mono font-bold text-brand-accent">190</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="services" className="py-24 bg-bg-surface relative">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#00ff7f1a_1px,transparent_1px),linear-gradient(to_bottom,#00ff7f1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Optimization <span className="text-brand-accent">Tiers</span></h2>
            <p className="text-gray-400 text-lg">Choose the perfect optimization package for your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Fresh Windows Setup', price: '£15', desc: 'Package 1', features: ['Fresh Windows installation', 'Fresh Windows Setup', 'Driver setup & latency tweaks', 'Game, audio & network tuning', '(8G USB stick required)'] },
              { name: 'Overclocking & BIOS', price: '£40', desc: 'Package 2', popular: true, features: ['CPU, GPU & RAM overclocking', 'BIOS tuning & firmware updates', 'Stability tests with sensor monitoring', '(USB stick required to update BIOS)'] },
              { name: 'Full System Overhaul', price: '£50', desc: 'Package 3', features: ['Fresh Windows installation', 'Advanced CPU, GPU & RAM overclocking', 'Stability check under heavy load', '(8G USB stick required)'] },
              { name: 'Network Optimisation', price: '£20', desc: 'Package 4', features: ['Lower or stabilise ping', 'Packet loss and burst issues fixed', 'Router and PC network settings tuned', '(Router web interface required)'] }
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-panel rounded-3xl p-8 relative flex flex-col hover:z-10 transition-all duration-300 ${tier.popular ? 'border-brand-accent box-glow-strong transform lg:-translate-y-4' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-6 h-10">{tier.desc}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/grandziefps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center rounded-md font-medium transition-all h-11 px-6 w-full ${tier.popular
                    ? 'bg-brand-accent text-black hover:bg-brand-light hover:box-glow'
                    : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                >
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-bg-surface relative">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#00ff7f1a_1px,transparent_1px),linear-gradient(to_bottom,#00ff7f1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-brand-accent">Questions</span></h2>
            <p className="text-gray-400 text-lg">Everything you need to know about our PC optimization services.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Will overclocking damage my PC?",
                a: "When done correctly within safe voltage and temperature limits, overclocking is perfectly safe. We stress-test every system to ensure 100% stability and longevity."
              },
              {
                q: "How much FPS increase can I expect?",
                a: "It depends heavily on your hardware and current setup, but our clients typically see a 20-50% increase in 1% lows, higher average FPS, and significantly reduced input delay."
              },
              {
                q: "Do I need to reinstall Windows?",
                a: "For our Full System Overhaul, a fresh Windows installation is required to ensure no background bloatware interferes with performance. For basic tuning, it's not strictly necessary but recommended."
              },
              {
                q: "Will this fix my game crashing?",
                a: "Often, yes. Game crashes can be caused by unstable RAM XMP profiles, thermal throttling, or driver conflicts, which our optimization process identifies and resolves."
              },
              {
                q: "How long does the optimization process take?",
                a: "Basic tuning takes about 1-2 hours, while a full system overhaul and stress testing can take 3-4 hours depending on your hardware."
              }
            ].map((faq, i) => (
              <details key={i} className="group glass-panel rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg text-white list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-brand-accent transition-transform group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
