import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  // const formApiKey = process.env.REACT_APP_FORMSPREE_API_KEY;
  const [state, handleSubmit] = useForm("mjkbrjeq");

  if (state.succeeded) {
    return (
      <div className="bg-gray-950/95 rounded-lg p-8 border border-green-500/50">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
            <i className="bi bi-check-circle text-3xl text-green-500"></i>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">
            Thanks for sending us a message! We'll get back to you as fast as we can.
          </p> 
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-gray-950/95 rounded-lg p-8 border border-gray-800"
      data-aos="fade-up" 
      data-aos-delay="100"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="John Doe"
              autoComplete="name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="john@example.com"
              autoComplete="email"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
            placeholder="How can I help you?"
          />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            placeholder="Your message here..."
            required
            spellCheck
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer"
        >
          {state.submitting ? (
            <span className="flex items-center justify-center gap-2">
              <i className="bi bi-arrow-repeat animate-spin"></i>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <i className="bi bi-send"></i>
              Send Message
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
