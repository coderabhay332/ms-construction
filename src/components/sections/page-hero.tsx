import React from 'react';

const PageHero = () => {
  return (
    <section 
      className="relative pt-[180px] pb-[100px] text-center px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF7F1 100%)',
      }}
    >
      {/* Container to maintain max-width as identified in design system */}
      <div className="container mx-auto max-w-[1200px]">
        
        {/* Main Heading H1 - Centered */}
        <h1 
          className="text-[#001a33] font-bold mb-5 leading-[1.2] mx-auto transition-all duration-300"
          style={{
            fontSize: '48px',
            fontFamily: 'var(--font-display)',
          }}
        >
          Our Services
        </h1>

        {/* Descriptive Paragraph - Centered with maxWidth to match screenshots */}
        <div className="flex justify-center">
          <p 
            className="text-[#555555] text-base leading-[1.6] max-w-[770px] mx-auto text-center"
            style={{
              fontFamily: 'var(--font-sans)',
            }}
          >
            Comprehensive structural engineering outsourcing services delivered through scalable offshore teams and process-driven workflows. We support global engineering firms, contractors, and developers with reliable structural design, BIM, detailing, and technical support tailored to international codes, project scales, and delivery timelines.
          </p>
        </div>
      </div>

      {/* Subtle visual elements as suggested by the screenshots (gradient blobs) */}
      <div 
        className="absolute top-0 right-[-10%] w-[40%] h-[100%] pointer-events-none opacity-40 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #ee5e3515 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-[-10%] w-[30%] h-[80%] pointer-events-none opacity-30 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, #ee5e3510 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
    </section>
  );
};

export default PageHero;