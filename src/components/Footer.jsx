"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaRegFilePdf } from "react-icons/fa";
import AnimOutlinedButton from "./Shared/AnimOutlinedButton";

// 1. EXTENDABLE DATA
const CTA_CONTENT = {
  titlePart1: "Let's create ",
  highlight: "exceptional",
  titlePart2: " digital experiences together. ",
  description: "Passionate about building high-performance web applications with modern technologies. I'm currently open to full-time, remote, and freelance opportunities.",
  primaryBtn: {
    text: "Let's get in touch",
    link: "https://www.linkedin.com/in/dev-fahim/",
    icon: <FaLocationArrow className="text-xs" />,
  },
  secondaryBtn: {
    text: "Download Resume",
    link: "/resume.pdf",
    icon: <FaRegFilePdf className="text-xs" />,
  }
};

const FooterCTA = () => {
  // Typewriter Animation Variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05, // Speed of typing
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="contact" className="relative w-full py-28 px-5 overflow-hidden bg-[#000319] bg-slanted-lines">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* TYPEWRITER HEADER */}
        <motion.h2 
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
        >
          {CTA_CONTENT.titlePart1.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>{char}</motion.span>
          ))}
          
          <span className="text-blue-400">
            {CTA_CONTENT.highlight.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>{char}</motion.span>
            ))}
          </span>

          {CTA_CONTENT.titlePart2.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>{char}</motion.span>
          ))}
          
          {/* Flashing Cursor */}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1 h-10 md:h-14 bg-blue-400 ml-1 align-middle"
          />
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm md:text-lg mb-12 max-w-xl"
        >
          {CTA_CONTENT.description}
        </motion.p>

        {/* BUTTONS GROUP */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Primary Button */}
          

<AnimOutlinedButton buttonText="Let's Get In Touch" type="link" isExternal="true" link="https://www.linkedin.com/in/dev-fahim/" />

<AnimOutlinedButton
            link="/resume.pdf"
            buttonText="Download Resume"
            type="download"
            downloadName="Fahim_Hossain_Resume.pdf"
          />
        


          {/* Secondary Button */}
          
        </div>

      </div>
    </section>
  );
};

export default FooterCTA;