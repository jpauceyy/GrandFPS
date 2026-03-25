import { Link } from 'react-router-dom';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-bg-base text-gray-300 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="text-brand-accent hover:text-white text-sm transition-colors mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">Last updated: March 2026</p>
        </div>

        <div className="space-y-10 text-gray-400 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Grandzie FPS ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service. Grandzie FPS reserves the right to update these terms at any time, and continued use of the Service constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
            <p>
              Grandzie FPS is a PC performance optimization tool designed to help users improve frame rates, reduce input lag, and enhance system performance for gaming. The Service includes downloadable software, optimization guides, community resources, and related support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. User Responsibilities</h2>
            <p>By using Grandzie FPS, you agree to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Use the software only on hardware you own or have permission to modify.</li>
              <li>Not reverse-engineer, decompile, or redistribute the software without written permission.</li>
              <li>Not use the Service for any unlawful purpose or in violation of any regulations.</li>
              <li>Take responsibility for any system changes made using the optimization tools provided.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Disclaimer of Warranties</h2>
            <p>
              Grandzie FPS is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the software will improve performance on every system, or that it will be free from bugs or errors. Use the software at your own risk. We are not liable for any system instability, data loss, or hardware damage that may result from using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h2>
            <p>
              All content, branding, software code, and materials associated with Grandzie FPS are the intellectual property of Grandzie FPS and its creators. You may not copy, reproduce, or distribute any part of the Service without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Third-Party Services</h2>
            <p>
              The Service may link to or integrate with third-party platforms such as Discord. We are not responsible for the content or practices of any third-party services. Use of those services is subject to their respective terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to the Service at any time, for any reason, including violations of these Terms of Service. Upon termination, your right to use the software will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
            <p>
              If you have any questions about these Terms of Service, please reach out to us through our{' '}
              <a href="https://discord.gg/AwJvZREy" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-white transition-colors">
                Discord community
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
