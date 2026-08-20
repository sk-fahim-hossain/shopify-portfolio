"use client";
import React from 'react';
import { FaLocationArrow, FaDownload } from 'react-icons/fa';

export default function AnimOutlinedButton({
  link = "#",
  buttonText = "Click Me",
  type = "link", // 'link' | 'download' | 'button'
  icon,
  onClick, // বাইরে থেকে ফাংশন পাস করার জন্য
  downloadName = "Fahim Hossain Resume.pdf",
  otherClasses = "",
  isExternal = false
}) {
  
  // আইকন সিলেকশন
  const defaultIcon = type === "download" ? <FaDownload /> : <FaLocationArrow />;

  // যদি type 'button' হয়, তাহলে এটি <button> হিসেবে কাজ করবে, নাহলে <a>
  const isButton = type === "button";
  const Tag = isButton ? "button" : "a";

  // টাইপ অনুযায়ী অ্যাট্রিবিউট সেট করা
  const attributes = isButton 
    ? { onClick, type: "button" } // বাটন হলে onClick কাজ করবে
    : { 
        href: link, 
        download: type === "download" ? downloadName : undefined,
        target: isExternal || type === "download" ? "_blank" : "_self",
        rel: "noopener noreferrer"
      };

  return (
    <Tag 
      {...attributes}
      className={`group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ${otherClasses}`}
    >
      {/* এনিমেটেড বর্ডার স্প্যান */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      
      {/* মেইন বাটন বডি */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-all group-hover:bg-slate-900/80">
        {buttonText}
        <span className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          {icon || defaultIcon}
        </span>
      </span>
    </Tag>
  );
}