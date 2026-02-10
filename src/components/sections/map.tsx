import React from 'react';

/**
 * MapSection component displays a full-width Google Maps integration
 * showing the office location in Pune, Maharashtra.
 * Since an API key is required for a functional Google Map, and none is provided,
 * we use the standard iframe embed approach for pixel-perfect integration as seen in the design.
 */
const MapSection = () => {
  // Address from content: 202, Solitaire Business Hub III, Baner, Pune-411045
  // Encoded for the iframe query
  const mapAddress = encodeURIComponent("202, Solitaire Business Hub III, Baner, Pune-411045");

  return (
    <section className="w-full h-[450px] relative overflow-hidden bg-[#f3f4f6]">
      <div className="w-full h-full">
        <iframe
          title="MS Construction Office Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_API_KEY&q=${mapAddress}&center=18.5590,73.7797&zoom=15`}
          // Standard fallback URL if API key is not available (using the open embed format)
          // Based on the visual screenshot, it shows Solitaire Business Hub III in Baner, Pune.
          srcDoc={`
            <html>
              <head>
                <style>
                  body, html { margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden; }
                  iframe { width: 100%; height: 100%; border: 0; }
                </style>
              </head>
              <body>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.316823432729!2d73.77708517592496!3d18.55986878254131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec7047f3ad9%3A0xc3995817c767f401!2sSolitaire%20Business%20Hub%20III!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </body>
            </html>
          `}
          allowFullScreen
          loading="lazy"
          className="grayscale-0 contrast-[1.1] brightness-[1.02]"
        ></iframe>
      </div>

      {/* Decorative Overlays if needed to match custom map styles often used in these designs */}
      <div className="absolute inset-0 pointer-events-none border-y border-border/20"></div>

      {/* Accessibility Link for Larger Map as seen in screenshot */}
      <div className="absolute top-4 left-4 z-10 pointer-events-auto">
        <a
          href="https://maps.google.com/maps?q=Solitaire+Business+Hub+III,+Baner,+Pune"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white px-[12px] py-[6px] shadow-sm rounded-[2px] text-[12px] font-medium text-[#4285f4] hover:bg-gray-50 flex items-center gap-1 transition-colors"
          style={{ fontFamily: 'Roboto, Arial, sans-serif' }}
        >
          View larger map
        </a>
      </div>
    </section>
  );
};

export default MapSection;