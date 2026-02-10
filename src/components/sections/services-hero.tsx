import React from 'react';

/**
 * ServicesHero Component
 * 
 * This component represents the hero banner section of the Services page.
 * It features a soft gradient background (lavender to white), a large centered title,
 * and a descriptive paragraph about structural engineering outsourcing services.
 */
const ServicesHero: React.FC = () => {
  return (
    <section 
      className="hero-gradient relative flex items-center justify-center overflow-hidden"
      style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        minHeight: '450px',
        background: 'linear-gradient(90deg, #F3F1FF 0%, #FFFFFF 100%)',
      }}
    >
      <div className="container relative z-10 px-6 mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Title - H1 */}
          <h1 
            className="mb-6 font-display font-bold text-[#021D39]"
            style={{ 
              fontSize: '48px', 
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            Our Services
          </h1>

          {/* Introductory Paragraph */}
          <div className="max-w-[800px]">
            <p 
              className="font-sans text-[#666666]"
              style={{ 
                fontSize: '16px', 
                lineHeight: '1.6',
                fontWeight: '400' 
              }}
            >
              Comprehensive structural engineering outsourcing services delivered through scalable offshore teams and process-driven workflows. We support global engineering firms, contractors, and developers with reliable structural design, BIM, detailing, and technical support tailored to international codes, project scales, and delivery timelines.
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative background elements (optional, based on "soft lavender-to-white gradient" art direction) */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-40">
        <div 
          className="w-full h-full" 
          style={{ 
            background: 'radial-gradient(circle at 70% 20%, #F1EEFF 0%, transparent 70%)' 
          }} 
        />
      </div>
    </section>
  );
};

export default ServicesHero;