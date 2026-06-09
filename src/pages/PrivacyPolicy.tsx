import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Salay Kanton";
  }, []);

  return (
    <section className="bg-gray-900/40 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Effective date: 2026-06-09
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p>
            This Privacy Policy explains how muhaiminsalay.me (“we”, “us”, or “our”) collects, uses, and shares information
            when you use our website.
          </p>

          <h2>1. Information we collect</h2>
          <ul>
            <li>
              <strong>Information you provide directly:</strong> such as messages you send through the contact features.
            </li>
            <li>
              <strong>Usage information:</strong> technical data such as your IP address, browser type, pages viewed, and
              timestamps.
            </li>
          </ul>

          <h2>2. How we use information</h2>
          <ul>
            <li>To operate, maintain, and improve the website.</li>
            <li>To respond to inquiries and provide requested information.</li>
            <li>To monitor and prevent fraud, abuse, and security issues.</li>
          </ul>

          <h2>3. Cookies and similar technologies</h2>
          <p>
            We may use cookies or similar technologies to improve user experience and analyze site performance.
            You can manage cookies through your browser settings.
          </p>

          <h2>4. Third-party services</h2>
          <p>
            We may use third-party services (for example, analytics or hosting providers). These providers may collect
            information as part of providing their services.
          </p>

          <h2>5. Data retention</h2>
          <p>
            We retain information only as long as necessary for the purposes described in this policy, unless a longer retention
            period is required or permitted by law.
          </p>

          <h2>6. Security</h2>
          <p>
            We use reasonable administrative, technical, and organizational measures designed to protect information.
            However, no method of transmission or storage is 100% secure.
          </p>

          <h2>7. Your rights</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data (such as access, correction, or
            deletion). For questions or requests, contact us using the information on our site.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new
            effective date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{' '}
            <a className="text-orange-500 hover:text-orange-600" href="mailto:abdulkanton2005@gmail.com">
              abdulkanton2005@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

