import React from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ThankYou() {
  return (
    <section className="thank-you-section">
      <div className="thank-you-card">
        <div className="thank-you-icon">
          <CheckCircle2 size={70} />
        </div>

        <span className="section-kicker">Message Sent</span>

        <h1>Thank You!</h1>

        <p>
          Your message has been successfully sent.
          I’ll get back to you as soon as possible.
        </p>

        <a href="/cjae-porfolio/" className="btn btn-primary">
          <ArrowLeft size={18} />
          Back to Portfolio
        </a>
      </div>
    </section>
  );
}