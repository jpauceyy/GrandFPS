import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg-base text-gray-300 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="text-brand-accent hover:text-white text-sm transition-colors mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">Last updated: March 2026</p>
        </div>

        <div className="space-y-10 text-gray-400 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Overview</h2>
            <p>
              At Grandzie FPS, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect any information you provide when using our website and software. By using Grandzie FPS, you consent to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li><span className="text-gray-300 font-medium">Contact Information:</span> If you submit a contact form or reach out via Discord, we may collect your username or email address.</li>
              <li><span className="text-gray-300 font-medium">Usage Data:</span> Anonymous data about how the website is used (pages visited, time spent) via standard web analytics.</li>
              <li><span className="text-gray-300 font-medium">Performance Results:</span> If you submit your FPS benchmark results through our tools, those results may be stored to improve the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Respond to support requests and inquiries.</li>
              <li>Improve the website and optimization software.</li>
              <li>Understand how users interact with our Service.</li>
              <li>Send important updates about the software (only if you've opted in).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share anonymous, aggregated data for analytical purposes. If we use third-party tools (e.g., analytics providers), those services have their own privacy policies governing data use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand site usage. You can disable cookies in your browser settings, though some features of the site may not function correctly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Data Security</h2>
            <p>
              We take reasonable steps to protect any information collected. However, no method of transmission or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Children's Privacy</h2>
            <p>
              Grandzie FPS is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will remove it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the Service after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us via our{' '}
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
