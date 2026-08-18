"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";

const ProjectCard = ({ title, des, img, iconLists, link, accentColor = "#50a2ff" }) => {
  const cardRef = useRef(null);

  // Hex to RGBA Helper
  const hexToRgba = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    const spotlight = card.querySelector(".spotlight");
    if (spotlight) {
      spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, ${hexToRgba(accentColor, 0.15)} 0%, transparent 80%)`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    
    const spotlight = cardRef.current.querySelector(".spotlight");
    if (spotlight) {
      spotlight.style.background = `transparent`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      {/* পুরো কার্ডটিকে <a> ট্যাগ দিয়ে র‍্যাপ করা হয়েছে */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block cursor-pointer outline-none"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ borderColor: `${accentColor}33` }} 
          className="
            relative flex flex-col items-start justify-center w-full p-4 
            rounded-3xl border bg-[#0c0e23] 
            transition-transform duration-200 ease-out will-change-transform
            group overflow-hidden
          "
        >
          {/* Dynamic Spotlight Effect */}
          <div className="spotlight absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

          {/* Image Container */}
          <div className="relative flex items-center justify-center w-full overflow-hidden h-auto  min-h-[260px] g:h-[25vh] mb-6 rounded-2xl bg-[#13162d]">
            <img
              src={img}
              alt={title}
              className="z-10 absolute bottom-0 w-full h-auto lg:h-full rounded-t-xl transition-transform duration-500 group-hover:scale-105 shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="z-20 w-full">
            <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
              {title}
            </h2>

            <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-3">
              {des}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between w-full mt-5">
              <div className="flex items-center">
                {iconLists.map((Icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{ 
                      transform: `translateX(-${5 * index + 2}px)`,
                      color: accentColor 
                    }}
                  >
                    <div className="text-xs lg:text-sm">
                      {Icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* এটি এখন আর <a> ট্যাগ নয়, জাস্ট একটি div যা স্টাইল ধরে রাখে */}
              <div 
                style={{ color: accentColor }} 
                className="flex items-center font-medium group-hover:brightness-125 transition-all border border-white/[.2] rounded-full px-3 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm"
              >
                <span className="text-sm lg:text-base">Check Live Site</span>
                <FaLocationArrow className="ms-2 text-xs" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;