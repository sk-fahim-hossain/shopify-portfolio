"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaLaptop, FaCode, FaRocket } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

// 1. EXTENDABLE DATA
const gridItems = [
  {
    id: 1,
    title: "180+ projects delivered across Shopify, Webflow, and custom web applications.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    img: "/bg1.jpg", // Add your image paths
    icon: <FaGlobe className="text-purple-400" />,
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    img: "",
    icon: <FaLaptop className="text-blue-400" />,
  },
  {
    id: 3,
    title: "Modern technologies I work with",
    description: "Next.js - React.js - TypeScript - JavaScript - Node.js - Express.js - MongoDB - Tailwind CSS - Shopify Liquid - Webflow - Git & GitHub - REST API",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    img: "",
    icon: <FaCode className="text-emerald-400" />,
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    img: "",
    icon: <FaRocket className="text-orange-400" />,
  },
  {
    id: 5,
    title: "Building Shopify Custom Theme from scratch",
    description: "Focused on creating scalable web applications, integrating APIs, optimizing performance, implementing authentication, and following industry best practices.",
    className: "md:col-span-3 md:row-span-2",
    img: "/bg1.jpg",
    icon: <FaCode className="text-pink-400" />,
  },
  {
    id: 6,
    title: "Looking for a reliable Frontend or Full Stack Developer?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    img: "",
    icon: <IoCopyOutline className="text-purple-300" />,
    isCTA: true, // Special flag for the Email Copy card
  },
];

const BentoGrid = ({ accentColor = "#50a2ff" }) => {
  
  return (
    <section id="about" className="py-20 w-full bg-[#000319] bg-grid-white/[0.03] relative px-4">
      <div className="max-w-7xl p-4 backdrop-blur-3xl bg-fuchsia-50/10 rounded-4xl mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8">
        {gridItems.map((item, i) => (
          <BentoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const BentoCard = ({ item, accentColor}) => {
 const hexToRgba = (hex, opacity) => {
  // যদি hex না থাকে বা ভুল ফরম্যাটে থাকে, তবে একটি ডিফল্ট কালার দিবে (যেমন ব্লু)
  if (!hex || typeof hex !== 'string' || hex.length < 6) {
    return `rgba(80, 162, 255, ${opacity})`; 
  }

  // হেক্স কোড থেকে হ্যাশ (#) সরিয়ে নেওয়া
  const cleanHex = hex.replace('#', '');
  
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

  return (
    <motion.div
      // 2. GROW ON SCROLL ANIMATION
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`
        relative overflow-hidden rounded-3xl border border-white/[0.1] 
        group transition duration-200 shadow-input dark:shadow-none 
        justify-between flex flex-col space-y-4 
        bg-gradient-to-b from-[#04071d] to-[#0c0e23]
        backdrop-blur-xl ${item.className}
      `}
    >


      {/* Background Glow Effect */}
<div 
  className="absolute inset-0 -bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
  style={{ 
    background: `linear-gradient(to top right, ${hexToRgba(accentColor, 0.1)}, transparent 70%)` 
  }} 
/>



      <div className={`${item.id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {item.img && (
            <img
              src={item.img}
              alt={item.img}
              className="object-cover object-center w-full h-full opacity-50 group-hover:scale-110 transition-transform duration-500"
            />
          )}
        </div>

        <div
          className={`group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`}
        >
          
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-white mt-2">
            {item.title}
          </div>

          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 mt-2">
            {item.description}
          </div>

          {/* Icon styling */}
          <div className="absolute top-5 right-5 opacity-30 group-hover:opacity-100 transition-opacity">
            {item.icon}
          </div>

          {/* Specialized CTA for Card 6 */}
          {item.isCTA && (
            <div className="mt-5 relative">
              <button className="bg-[#161a31] mx-auto cursor-pointer text-white px-7 py-3 rounded-xl border border-white/10 backdrop-blur-3xl hover:bg-[#1c213d] transition-all flex items-center gap-2">
                Send me an email
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BentoGrid;
