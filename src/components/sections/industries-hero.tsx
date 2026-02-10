import React from 'react';

const IndustriesHero: React.FC = () => {
  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        minHeight: '450px',
        background: 'linear-gradient(90deg, #F3F1FF 0%, #FFFFFF 100%)',
      }}
    >
      <div className="container relative z-10 px-6 mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 
            className="mb-6 font-bold text-[#000000]"
            style={{ 
              fontSize: '48px', 
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            Industries We Serve
          </h1>

          <div className="max-w-[850px] space-y-4">
            <p className="text-[#555555] text-[16px] leading-[1.6]">
              Structural engineering outsourcing services tailored to the unique demands of different industries and project environments.
            </p>
            <p className="text-[#555555] text-[16px] leading-[1.6]">
              We support a wide range of industries by delivering code-compliant, constructible, and well-documented structural engineering solutions—adapted to sector-specific requirements, risks, and workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-40">
        <div 
          className="w-full h-full" 
          style={{ background: 'radial-gradient(circle at 70% 20%, #F1EEFF 0%, transparent 70%)' }} 
        />
      </div>
    </section>
  );
};

export default IndustriesHero;
