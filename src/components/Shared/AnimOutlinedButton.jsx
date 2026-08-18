"use client";
import React from 'react';
import { FaLocationArrow, FaDownload } from 'react-icons/fa';

export default function AnimOutlinedButton({
  link = "#",
  buttonText = "Click Me",
  type = "link", // 'link' অথবা 'download'
  icon,          // যদি কাস্টম আইকন দিতে চান
  downloadName = "Fahim Hossain Resume.pdf", // ডাউনলোডের সময় ফাইলের নাম
  otherClasses = "", // এক্সট্রা স্টাইল যোগ করার জন্য
  isExternal = false // নতুন ট্যাবে ওপেন করার জন্য
}) {
  
  // বাটনের টাইপ অনুযায়ী ডিফল্ট আইকন সেট করা
  const defaultIcon = type === "download" ? <FaDownload /> : <FaLocationArrow />;

  return (
    <a 
      href={link} 
      // যদি টাইপ ডাউনলোড হয়, তবে ডাউনলোড অ্যাট্রিবিউট যোগ হবে
      download={type === "download" ? downloadName : undefined}
      target={isExternal || type === "download" ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`group ${otherClasses}`}
    >
      <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
        
        {/* এনিমেটিং বর্ডার (Magic Border) */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        
        {/* মেইন বাটন বডি */}
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-all group-hover:bg-slate-900/80">
          {buttonText}
          
          {/* যদি আইকন পাস করা হয় তবে সেটা দেখাবে, নাহলে টাইপ অনুযায়ী ডিফল্টটা দেখাবে */}
          <span className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            {icon || defaultIcon}
          </span>
        </span>
      </div>
    </a>
  );
}