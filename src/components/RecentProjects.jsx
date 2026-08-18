"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiReact, SiTypescript, SiWebflow, SiGreensock, SiShopify } from "react-icons/si";

// 1. PROJECT DATA (Future Extendable)
const projectsData = [
  {
    id: 1,
    title: "Message Therapy (Pass:shewff)",
    des: "Full custom design with custom liquid and styles with full controll through shopify schema",
    img: "/p1.png",
    iconLists: [<SiShopify />, <SiGreensock />,],
    link: "https://www.therarecovery.store/",
  },
  {
    id: 2,
    title: "Car Detailer - (Pass: thiesk)",
    des: "Unique design with full controll over every css with responsive.",
    img: "/p2.png",
    iconLists: [<SiShopify />, <SiGreensock />],
    link: "https://southernglossco.com/",
  },
  {
    id: 3,
    title: "Ovia Hair - hairfall solution",
    des: "Custom Design with complex layout and full controll over every css and custom shopify schema.",
    img: "/p3.png",
    iconLists: [<SiShopify />],
    link: "https://oviaofficiel.fr/",
  },
  {
    id: 4,
    title: "kajou Design - (Pass: dahpiy)",
    des: "A full-scale ecommerce solution for architecture and furniture fully custom every section",
    img: "/p4.png",
    iconLists: [<SiShopify />],
    link: "https://kajoudesign.com/",
  },
];

const RecentProjects = ({ columns = 3, accentColor = "#50a2ff" }) => {
  // 2. GRID COLUMN CONTROLLER
  const gridLayouts = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <section id="projects" className="py-20 bg-[#000319] px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
          A small selection of{" "}
          <span style={{color:accentColor}}>recent projects</span>
        </h1>

        {/* Dynamic Grid */}
        <div className={`grid ${gridLayouts[columns] || gridLayouts[2]} gap-x-8 gap-y-12`}>
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id}
              {...project} // Spreading all project properties as props
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;