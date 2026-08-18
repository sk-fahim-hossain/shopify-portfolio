"use client";
import React from "react";

const FooterBottom = ({ accentColor = "#50a2ff" }) => {
  return (
    <footer className="w-full py-10 bg-[#000319] border-t border-white/5 flex justify-center items-center px-5">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center">
        
        {/* Year and Developed by text */}
        <p className="text-white/60 text-sm md:text-base font-medium tracking-wide">
         © 2026 — Designed & Developed by
        </p>

        {/* Name Badge */}
        <div 
          className="px-3 py-1 bg-white/5 border border-white/5 rounded-full backdrop-blur-md shadow-2xl transition-all hover:scale-105"
        //   style={{ border: `0.5px solid ${accentColor}` }} // অপশনাল: সাইডে একটু অ্যাকসেন্ট কালার টাচ
        >
          <span className="text-white font-bold text-sm md:text-base tracking-tight">
            Fahim Hossain
          </span>
        </div>
        
      </div>
    </footer>
  );
};

export default FooterBottom;