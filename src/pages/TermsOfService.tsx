import { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | Salay Kanton";
  }, []);

  return (
    <section className="bg-gray-900/40 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Terms of Service</h1>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Effective date: 2026-06-09
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p>
            Welcome to muhaiminsalay.me (“Site”). By accessing or using the Site, you agree to these Terms of Service
            (“Terms”). If you do not agree, do not use the Site.
          </p>

          <h2>1. Use of the Site</h2>
          <ul>
            <li>You agree to use the Site only for lawful purposes.</li>
            <li>You must not interfere with or disrupt the Site’s operation.</li>
            <li>You are responsible for your activity on the Site.</li>
          </ul>

          <h2>2. Content</h2>
          <p>
            The Site may include text, images, and other materials. We may update or remove content at any time.
            Unless otherwise stated, the Site’s content is owned by us or used under license.
          </p>

          <h2>3. Third-party links and services</h2>
          <p>
            The Site may contain links to third-party websites or services. We do not control those third parties and are
            not responsible for their content or practices.
          </p>

          <h2>4. Disclaimer</h2>
          <p>
            The Site and its content are provided “as is” and “as available”. We make no warranties of any kind, express or
            implied, regarding the Site.
          </p>

          <h2>5. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or
            consequential damages arising from your use of the Site.
          </p>

          <h2>6. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. The updated Terms will be posted on this page with a new
            effective date.
          </p>

          <h2>7. Contact</h2>
          <p>
            If you have questions about these Terms, contact us at{' '}
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

