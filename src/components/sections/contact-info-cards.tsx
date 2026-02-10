import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * ContactInfoCards Component
 * 
 * Replicates the three horizontal contact information cards from the MS Construction contact page.
 * Features:
 * - Rounded rectangle cards with #FFF8F6 background
 * - Subtle box-shadow (0px 10px 30px rgba(0, 0, 0, 0.05))
 * - Teal icons (#4AC9BD) centered in a soft circle
 * - Precision typography (Outfit font, specific weights/sizes)
 */

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
  subContent?: string;
}

const ContactCard = ({ icon, title, content, link, subContent }: ContactCardProps) => {
  return (
    <div className="contact-card flex flex-col items-center sm:items-start text-center sm:text-left h-full w-full bg-[#fff8f6] rounded-[12px] p-[40px_30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-[5px]">
      <div className="flex flex-row items-center gap-[20px]">
        <div className="icon-circle min-w-[50px] min-h-[50px] w-[50px] height-[50px] rounded-full bg-[#4ac9bd1a] text-[#4ac9bd] flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col">
          <h3 className="text-[20px] font-semibold text-[#000000] leading-[1.4] mb-[4px]">
            {title}
          </h3>
          <div className="flex flex-col">
            {link ? (
              <a
                href={link}
                className="text-[16px] text-[#666666] leading-[1.6] hover:text-[#f15a2b] transition-colors duration-300"
              >
                {content}
              </a>
            ) : (
              <p className="text-[16px] text-[#666666] leading-[1.6]">
                {content}
              </p>
            )}
            {subContent && (
              <p className="text-[16px] text-[#666666] leading-[1.6]">
                {subContent}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoCards = () => {
  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {/* Email Card */}
          <ContactCard
            icon={<Mail size={22} />}
            title="Email Address"
            content="info@msconstruction.com"
            link="mailto:info@msconstruction.com"
          />

          {/* Phone Card */}
          <ContactCard
            icon={<Phone size={22} />}
            title="Phone Number"
            content="+91 8115603603"
            link="tel:+918115603603"
          />

          {/* Address Card */}
          <ContactCard
            icon={<MapPin size={22} />}
            title="Office Address"
            content="420, Solitaire Business Hub - III,"
            subContent="Baner, Pune-411045"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;