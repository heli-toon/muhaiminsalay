import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const formApiKey = process.env.REACT_APP_FORMSPREE_API_KEY;
  const [state, handleSubmit] = useForm(formApiKey);
  if (state.succeeded) {
    return <p>Thanks for sending us a message! We'll get back to you as fast as we can.</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="email-form bg-dg bg-dg-card">
      <div className="row gy-4">
        <div className="col-md-6">
            <input id="name" type="text" name="name" className="form-control" placeholder="Your Name" autoComplete="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="col-md-6">
            <input id="email" type="email" name="email" className="form-control" placeholder="Your Email" autoComplete="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="col-md-12">
            <input id="subject" type="text" name="subject" className="form-control" placeholder="Subject" />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
        </div>
        <div className="col-md-12">
            <textarea id="message" name="message" className="form-control" rows="6" placeholder="Message" required spellCheck />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <div className="col-md-12">
            <button type="submit" disabled={state.submitting}>
                Send Message
            </button>
        </div>
      </div>
    </form>
  );
}
export default ContactForm;