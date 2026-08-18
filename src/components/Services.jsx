"use client";
import React from "react";
import { motion } from "framer-motion";

// 1. EXTENDABLE DATA ARRAY
const servicesData = [
  {
    id: 1,
    title: "Custom Website Development",
    description:
      "I build fast, modern, and scalable websites using Next.js, React, HTML, CSS, JavaScript, and Tailwind CSS. Every website is optimized for performance, user experience, and business growth.",
    image: "/service1.png",
  },
  {
    id: 2,
    title: "Webflow Development",
    description:
      "From Figma to fully responsive Webflow websites, I create pixel-perfect, CMS-powered, and SEO-friendly websites with smooth interactions, animations, and clean structure.",
    image: "/service2.png",
  },
  {
    id: 3,
    title: "Shopify Store Development",
    description:
      "I develop high-converting Shopify stores with custom sections, Liquid customization, app integrations, Shopify Markets setup, performance optimization, and conversion-focused design.",
    image: "/service3.png",
  },
  {
    id: 4,
    title: "MERN Stack Development",
    description:
      "Need a full-stack web application? I build scalable MERN Stack applications using MongoDB, Express.js, React, and Node.js with secure APIs, authentication, and database integration.",
    image: "/service4.png",
  },
  {
    id: 5,
    title: "Technical SEO & Analytics",
    description:
      "Improve your website's visibility with Technical SEO, Google Search Console indexing, Google Analytics 4 (GA4), Google Tag Manager, Meta Pixel, Google Ads Conversion Tracking, TikTok Pixel, LinkedIn Insight Tag, Pinterest Pixel, and other tracking integrations.",
    image: "/service5.png",
  },
  {
    id: 6,
    title: "Website Maintenance & Optimization",
    description:
      "Keep your website secure, fast, and up-to-date with bug fixes, speed optimization, responsive improvements, SEO enhancements, content updates, and ongoing technical support.",
    image: "/service6.png",
  },
];

const Services = ({accentColor = "#50a2ff"}) => {
  return (
    <section className="py-20 px-5 "> {/* Dark Navy Background */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
         <h2
            className="text-5xl font-bold mb-2"
            style={{ color: accentColor }}
          >
            Services
          </h2>
           
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// 2. INDIVIDUAL SERVICE CARD COMPONENT
const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }} // Subtle lift on hover
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl transition-all"
    >
      {/* Left: Illustration Area */}
      <div className="w-full sm:w-1/3 flex-shrink-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-auto object-contain max-h-[120px] rounded-lg"
        />
      </div>

      {/* Right: Text Content */}
      <div className="flex flex-col text-center sm:text-left">
       <h3 className={`text-xl font-bold text-white mb-3`}>
          {service.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Services;