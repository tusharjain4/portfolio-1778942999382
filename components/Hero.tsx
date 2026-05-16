'use client';

import React from 'react';

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, tagline }) => {
  const roleParts = role.split(' ');
  const firstName = name.split(' ')[0]; // Assuming first name for "Nikita" equivalent

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text-container">
            <h2 className="hero-hello">Hello</h2>
            <p className="hero-im">I&apos;m</p>
          </div>
          <p className="scroll-text">Scroll to explore</p>
          <img src="/assets/images/img_rectangle_1.png" alt="Developer portfolio showcase" className="hero-image" />
        </div>
        
        <div className="hero-right">
          <div className="title-stack">
            <div className="title-role-row">
              {roleParts[0] && <span className="role-pill role-pill-top title-product">{roleParts[0]}</span>}
              {roleParts[1] && <span className="role-pill role-pill-bottom title-designer">{roleParts[1]}</span>}
            </div>
            <p className="title-nikita">{firstName}</p>
          </div>
          
          <p className="hero-description">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;