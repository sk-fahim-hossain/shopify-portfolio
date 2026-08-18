"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiFirebase, SiMongodb, SiFramer, SiSwiper, SiGreensock, 
  SiExpress, SiJavascript, SiBootstrap, SiWebflow, SiGithub, 
  SiWordpress, SiRedux, SiShopify, SiMui, SiAxios 
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";


const skills = [
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Typescript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-purple-400" /> },
  { name: "Swiperjs", icon: <SiSwiper className="text-blue-600" /> },
  { name: "Gsap", icon: <SiGreensock className="text-[#88CE02]" /> },
  { name: "Expressjs", icon: <SiExpress className="text-gray-400" /> },
  { name: "Javascript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Webflow", icon: <SiWebflow className="text-blue-500" /> },
  { name: "Github", icon: <SiGithub className="text-white" /> },
  { name: "Wordpress", icon: <SiWordpress className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Shopify", icon: <SiShopify className="text-[#96BF48]" /> },
  { name: "React Native", icon: <SiReact className="text-cyan-400" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-400" /> },
  { name: "Axios", icon: <SiAxios className="text-indigo-500" /> },
  { name: "SEO", icon: <TbSeo className="text-emerald-400" /> },
  { name: "Photoshop", icon: <DiPhotoshop className="text-blue-400" /> },
];

// 2. ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This creates the "one-by-one" effect
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = ({accentColor = "#50a2ff" }) => {
  return (
    <section className="py-20 px-5 flex flex-col items-center justify-center bg-[#000319]">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
        My <span style={{color: accentColor}}>Skills</span>
      </h2>


      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm cursor-default transition-colors group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">
              {skill.icon}
            </span>
            <span className="text-white/80 group-hover:text-white text-sm md:text-base font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;