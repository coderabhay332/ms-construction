import React from 'react';

interface HeroBreadcrumbProps {
  title: string;
}

const HeroBreadcrumb: React.FC<HeroBreadcrumbProps> = ({ title }) => {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center py-[100px] md:py-[120px]"
      style={{
        background: 'linear-gradient(135deg, #f3f4ff 0%, #ffffff 50%, #fff5f2 100%)',
        minHeight: '300px',
        paddingTop: '160px',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(at 10% 10%, rgba(232, 91, 51, 0.05) 0px, transparent 50%),
            radial-gradient(at 90% 10%, rgba(18, 33, 63, 0.05) 0px, transparent 50%),
            radial-gradient(at 50% 90%, rgba(253, 226, 217, 0.2) 0px, transparent 50%)
          `
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <h1
          className="font-bold text-[#000000] mb-4"
          style={{
            fontSize: '48px',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>

        <div
          className="flex items-center justify-center gap-2"
          style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#444444',
            fontWeight: 500,
            opacity: 0.8
          }}
        >
          <a href="/" className="hover:text-[#ed5a2d] transition-colors cursor-pointer">
            MS CONSTRUCTION
          </a>
          <span className="text-[#444444] opacity-50">&gt;</span>
          <span className="text-[#ed5a2d]">{title}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroBreadcrumb;
