import React from "react";
import AnimOutlinedButton from "./Shared/AnimOutlinedButton";

const Hero = ({
  subtitle = "SHOPIFY DEVELOPER & ECOMMERCE SPECIALIST",
  titlePart1 = "Building High-Converting",
  titlePart2 = "Shopify Stores That",
  highlightedWord = "Drive Sales",
  description = "I help businesses launch and scale their Shopify stores with custom development, performance optimization, technical SEO, analytics, and advanced marketing integrations.",
  buttonText = "View My Work",
  accentColor = "#50a2ff", // Default accent color
}) => {
  return (
    <div className="relative pt-36 pb-20 px-5 flex flex-col items-center justify-center min-h-screen overflow-hidden bg-grid">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-spotlight pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
        {/* Top Subtitle */}
        <p className="uppercase tracking-widest text-xs text-blue-100 max-w-100 mb-4">
          {subtitle}
        </p>

        {/* Main Heading */}
        <h1 className="text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight">
          {titlePart1} <span className="">{titlePart2}</span>
          <br />
          <span className="text-purple-300" style={{ color: accentColor }}>
            {highlightedWord}
          </span>
        </h1>

        {/* Description */}
        <p className="md:tracking-wider mb-8 mt-4 text-sm md:text-lg lg:text-2xl text-white/80">
          {description}
        </p>

        {/* Extendable Button Component */}
        <div className="flex md:flex-row flex-col  gap-2">
          <AnimOutlinedButton link="#projects" buttonText={buttonText} />
          <AnimOutlinedButton
            link="/resume.pdf"
            buttonText="Download Resume"
            type="download"
            downloadName="Fahim_Hossain_Resume.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
