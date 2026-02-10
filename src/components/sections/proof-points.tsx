import React from 'react';

const ProofPoints = () => {
  const stats = [
    {
      value: "Years of Experience",
      label: "5+"
    },
    {
      value: "Projects Completed",
      label: "40+"
    },
    {
      value: "On-Time Delivery",
      label: "98%"
    },
    {
      value: "Quality Workmanship",
      label: "100%"
    }
  ];

  return (
    <section className="bg-[#ED5A2D] py-[60px] md:py-[80px] w-full overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-white text-[32px] md:text-[36px] font-bold tracking-[-0.01em] leading-tight">
            Proof points
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-[1200px] mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <div className="text-white text-[40px] md:text-[48px] font-bold leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-white text-[14px] md:text-[30px] font-medium opacity-90 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;