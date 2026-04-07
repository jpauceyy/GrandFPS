import { motion } from 'motion/react';
import { Twitter, Mail, ExternalLink, ChevronDown, Zap, Shield, MessageSquare, Clock, CreditCard, Laptop, Lock, CheckCircle2 } from 'lucide-react';
import { DiscordIcon } from '../components/DiscordIcon';
import { Button } from '../components/Button';
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

const FAQS = [
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
  },
  {
    q: "Do I need to be at my PC during the service?",
    a: "Yes, you'll need to be available to enter BIOS settings or confirm certain steps, although most of the optimization is done remotely via screen sharing."
  },
  {
    q: "What payment methods do you accept?",
    a: "We primarily accept payments through Discord via various trusted methods. Join our Discord server to see the full list of supported payment options."
  },
  {
    q: "Do you optimize gaming laptops?",
    a: "Absolutely! We can optimize laptops for better thermals, reduced noise, and improved gaming performance, though overclocking overhead is usually lower than desktops."
  },
  {
    q: "Is my personal data safe?",
    a: "Yes. We only access system-level settings and never touch your personal files. We recommend staying at your PC to watch the entire process for full peace of mind."
  },
  {
    q: "Can I get a refund if I'm not satisfied?",
    a: "We strive for 100% satisfaction. If we cannot improve your performance or if there's an issue we can't resolve, we'll discuss a fair resolution or refund on a case-by-case basis."
  }
];

export function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Wrapper for Hero and Social Sections */}
      <div className="relative overflow-hidden">
        <BackgroundScene beamCount={60} />

        {/* Hero Section */}
        <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-base/10 to-transparent z-0" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-glow">
                Get in <span className="text-brand-accent">Touch</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Have questions? Need a custom quote? The fastest way to reach us is through our Discord community.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Social & CTA Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-10 rounded-3xl text-center flex flex-col items-center group hover:border-brand-accent/50 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DiscordIcon className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Discord</h3>
                <p className="text-gray-400 mb-8 flex-1">
                  Join our server for instant support, booking, and to chat with other optimized gamers.
                </p>
                <Button href="https://discord.gg/DedaKmct" target="_blank" className="w-full bg-brand-accent text-black hover:bg-brand-light">
                  Join Discord
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-10 rounded-3xl text-center flex flex-col items-center group hover:border-brand-accent/50 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Twitter className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Twitter / X</h3>
                <p className="text-gray-400 mb-8 flex-1">
                  Follow us for the latest performance tips, results, and service updates.
                </p>
                <Button variant="secondary" href="https://x.com/GrandFPS" target="_blank" className="w-full">
                  Follow @GrandFPS
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-10 rounded-3xl text-center flex flex-col items-center group hover:border-brand-accent/50 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
                <p className="text-gray-400 mb-8 flex-1">
                  For business inquiries and partnerships, feel free to drop us an email.
                </p>
                <Button variant="secondary" href="mailto:contact@grandfps.com" className="w-full">
                  Email Us
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom Fade to blend into FAQ */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-surface to-transparent z-0" />
      </div>

      {/* Expanded FAQ Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#00ff7f0a_1px,transparent_1px),linear-gradient(to_bottom,#00ff7f0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-brand-accent">Questions</span></h2>
            <p className="text-gray-400 text-lg">Everything you need to know about our services and process.</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {FAQS.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group glass-panel rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden border-white/5"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg text-white list-none hover:bg-white/5 transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-brand-accent/50 font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
                    {faq.q}
                  </span>
                  <ChevronDown className="w-5 h-5 text-brand-accent transition-transform group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  <div className="pl-8">
                    {faq.a}
                  </div>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden bg-[#00ff7f]">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="glass-panel p-12 md:p-20 rounded-[3rem] border-brand-accent/30 box-glow text-center relative overflow-hidden !bg-black">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Ready to unlock your <br /> <span className="text-brand-accent">hardware's full potential?</span></h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Button size="lg" href="https://discord.gg/DedaKmct" target="_blank" className="w-full sm:w-auto px-12 h-16 text-lg bg-brand-accent text-black hover:bg-brand-light hover:box-glow">
                Book Your Session Now
              </Button>
              <a href="https://x.com/GrandFPS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium">
                View Latest Results <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
