import React from 'react';

const WhyMe = () => {
  return (
    <section className="why-me" id="why-me">
      <h2>Why Me?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>🕒 24/7 Support</h3>
          <p>Available round the clock to assist with any development needs. Your project gets the attention it deserves, anytime!</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Fast & Reliable</h3>
          <p>Delivering high-performance web solutions with speed and precision, ensuring efficiency without compromising quality.</p>
        </div>
        <div className="feature-card">
          <h3>🔄 Flexible</h3>
          <p>Adapting to unique project requirements with seamless flexibility. From startups to enterprises, I tailor solutions that fit.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;