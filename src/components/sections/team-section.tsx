"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "ADAM JONATHAN",
    role: "Chief Executive Officer",
    image: "https://alphabuildengineering.com/wp-content/uploads/2023/12/team-1.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "SARA ALBERT",
    role: "Head of Engineering",
    image: "https://alphabuildengineering.com/wp-content/uploads/2023/12/team-2.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "MICHAL DOE",
    role: "Project Manager",
    image: "https://alphabuildengineering.com/wp-content/uploads/2023/12/team-3.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-[100px]">
      <div className="container mx-auto px-4 max-w-[1140px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <span className="text-[14px] font-bold text-[#FFB129] uppercase tracking-[2px] block mb-2">
            Professional Team
          </span>
          <h2 className="text-[40px] font-bold text-[#002244] uppercase leading-[1.2]">
            MEET OUR LEADERSHIP
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
                
                {/* Overlay Content (Social Media) - Appears on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-3">
                    {member.socials.facebook && (
                      <a
                        href={member.socials.facebook}
                        className="bg-white text-[#002244] w-10 h-10 flex items-center justify-center hover:bg-[#FFB129] hover:text-white transition-colors duration-300"
                        aria-label="Facebook"
                      >
                        <Facebook size={18} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="bg-white text-[#002244] w-10 h-10 flex items-center justify-center hover:bg-[#FFB129] hover:text-white transition-colors duration-300"
                        aria-label="Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="bg-white text-[#002244] w-10 h-10 flex items-center justify-center hover:bg-[#FFB129] hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        className="bg-white text-[#002244] w-10 h-10 flex items-center justify-center hover:bg-[#FFB129] hover:text-white transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="mt-6 text-center">
                <h3 className="text-[22px] font-bold text-[#002244] uppercase mb-1 transition-colors duration-300 group-hover:text-[#FFB129]">
                  {member.name}
                </h3>
                <p className="text-[#666666] text-[16px] italic">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;