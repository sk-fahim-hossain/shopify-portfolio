import React from 'react';
import { 
  SiFramer, SiSwiper, SiExpress, SiJavascript, 
  SiBootstrap, SiWebflow, SiGithub, SiWordpress, 
  SiRedux, SiReact, 
  SiGreensock,
  SiShopify
} from 'react-icons/si';
import { TbSeo } from 'react-icons/tb';

const TechMarque = () => {

  const techStack = [
  { name: 'Framer Motion', icon: <SiFramer className="text-blue-400" /> },
  { name: 'Swiperjs', icon: <SiSwiper className="text-blue-500" /> },
  { name: 'Gsap', icon: <SiGreensock className="text-[#88CE02]" /> }, // Added GSAP
  { name: 'Expressjs', icon: <SiExpress className="text-gray-400" /> },
  { name: 'Javascript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Shopify', icon: <SiShopify className="text-[#96BF48]" /> }, // Added Shopify
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
  { name: 'Webflow', icon: <SiWebflow className="text-blue-600" /> },
  { name: 'SEO', icon: <TbSeo className="text-emerald-400" /> },      // Added SEO
  { name: 'Github', icon: <SiGithub className="text-white" /> },
  { name: 'Wordpress', icon: <SiWordpress className="text-blue-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
  { name: 'React Native', icon: <SiReact className="text-cyan-400" /> },
];

  // We double the array to ensure the loop is seamless and never shows a gap
  const doubledTech = [...techStack, ...techStack];

  return (
    <div className="w-full py-10 overflow-hidden bg-transparent">
      {/* Container for the moving part */}
      <div className="flex w-max items-center gap-12 animate-scroll">
        {doubledTech.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-4 py-2 group cursor-default"
          >
            {/* Logo Part */}
            <div className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity">
              {tech.icon}
            </div>
            
            {/* Title Part */}
            <span className="text-gray-500 text-lg font-medium whitespace-nowrap group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarque;