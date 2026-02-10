import React from 'react';

/**
 * PrivateClients Component
 * 
 * Clones the "Private Clients" section from the MS Construction website.
 * This section is centered, contains descriptive text about custom-built structures,
 * and features a full-width "Value we add" highlight box.
 * 
 * Theme: Light (Warm background)
 */
const PrivateClients: React.FC = () => {
  return (
    <section
      className="alternating-bg section-padding w-full overflow-hidden"
      style={{
        backgroundColor: '#FFF5F2',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      <div className="container mx-auto px-[20px] max-w-[1200px]">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          {/* Section Heading */}
          <h2
            className="text-[32px] font-bold text-black mb-[24px]"
            style={{
              fontFamily: 'Outfit, sans-serif',
              lineHeight: '1.3'
            }}
          >
            Private Clients
          </h2>

          {/* Description Text */}
          <p
            className="text-[16px] text-[#444444] leading-[1.6] mb-[32px]"
            style={{
              fontFamily: 'Outfit, sans-serif'
            }}
          >
            For individual or niche clients, we design <span className="font-bold">custom-built structures</span> such as villas, farmhouses, and private facilities with personal attention to design detail and cost.
          </p>

          {/* Value We Add Box - Centered version for this specific section */}
          <div
            className="w-full text-left"
            style={{
              backgroundColor: '#FDE2D9',
              borderLeft: '4px solid #E85B33',
              padding: '24px',
              borderRadius: '0 5px 5px 0'
            }}
          >
            <span
              className="block font-bold text-black text-[16px] mb-[8px]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Value we add:
            </span>
            <p
              className="text-[15px] text-[#444444] m-0"
              style={{
                fontFamily: 'Outfit, sans-serif',
                lineHeight: '1.5'
              }}
            >
              Personalized design support and end-to-end project guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateClients;