"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { SiShopify, SiGreensock } from "react-icons/si";
import { GoCopy } from "react-icons/go";
import { FiX } from "react-icons/fi";
import AnimOutlinedButton from "./Shared/AnimOutlinedButton";

// 1. PROJECT DATA (Added 'password' field)
const projectsData = [
  {
    id: 1,
    title: "Message Therapy",
    des: "Full custom design with custom liquid and styles with full control through shopify schema",
    img: "/p1.png",
    iconLists: [<SiShopify />, <SiGreensock />],
    link: "https://www.therarecovery.store/",
    password: "shewff", // আলাদা পাসওয়ার্ড ফিল্ড
  },
  {
    id: 2,
    title: "Car Detailer",
    des: "Unique design with full control over every css with responsive.",
    img: "/p2.png",
    iconLists: [<SiShopify />, <SiGreensock />],
    link: "https://southernglossco.com/",
    password: "thiesk",
  },
  {
    id: 3,
    title: "Ovia Hair - hairfall solution",
    des: "Custom Design with complex layout and full control over every css and custom shopify schema.",
    img: "/p3.png",
    iconLists: [<SiShopify />],
    link: "https://oviaofficiel.fr/",
    password: "",
  },
  {
    id: 4,
    title: "kajou Design",
    des: "A full-scale ecommerce solution for architecture and furniture fully custom every section",
    img: "/p4.png",
    iconLists: [<SiShopify />],
    link: "https://kajoudesign.com/",
    password: "admin",
  },
];

const RecentProjects = ({ columns = 3, accentColor = "#50a2ff" }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);

  // 2. GRID COLUMN CONTROLLER
  const gridLayouts = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  // Function to handle click
  const handleCardClick = (project) => {
    if (project.password) {
      setSelectedProject(project);
    } else {
      window.open(project.link, "_blank");
    }
  };

  const handleCopyAndGo = () => {
    navigator.clipboard.writeText(selectedProject.password);
    setCopied(true);
    document.getElementById("make-color").style.color = accentColor;
    document.getElementById("make-color").style.fontWeight = 800;
    document.getElementById("make-color").style.fontSize = "1rem";
    setTimeout(() => {
      window.open(selectedProject.link, "_blank");
      setSelectedProject(null);
      setCopied(false);
    }, 1500);
  };

  return (
    <section id="projects" className="py-20 bg-[#000319] px-5 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
          A small selection of{" "}
          <span style={{ color: accentColor }}>recent projects</span>
        </h1>

        <div
          className={`grid ${gridLayouts[columns] || gridLayouts[2]} gap-x-8 gap-y-12`}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className="cursor-pointer"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* --- PASSWORD MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
          <div className="bg-[#10132e] border border-white/20 p-8 rounded-2xl max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              <FiX size={24} />
            </button>

            <div className="text-center">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="mx-auto mb-4 rounded-lg max-h-80 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              Password Protected!
            </h2>
            <p className="text-gray-400 mb-6">
              This project is password protected. Use the password below to
              access the site.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between bg-[#161a31] border border-white/10 p-4 rounded-lg">
                <span className="text-xl font-mono text-white/40 font-bold">
                  {selectedProject.password}
                </span>
                <button
                  onClick={handleCopyAndGo}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md transition-all text-white"
                >
                  {copied ? (
                    "Copied!"
                  ) : (
                    <>
                      <GoCopy />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <AnimOutlinedButton
                onClick={handleCopyAndGo}
                buttonText="Copy & Go"
                isExternal="true"
                type="button"
              />
            </div>
            <p id="make-color" className="text-white text-sm mt-4 text-center">Click on the Password input  and  Cntrl + V (Past)</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentProjects;
