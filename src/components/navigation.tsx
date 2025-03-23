"use client";

import React, { useEffect, useState } from "react";

const navItems = [
     { id: "about", label: "ABOUT" },
     { id: "projects", label: "PROJECTS" },
];

const Navigation = () => {
     const [activeSection, setActiveSection] = useState<string>("about");

     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              setActiveSection(entry.target.id);
                         }
                    });
               },
               { threshold: 0.6 }
          );

          navItems.forEach((item) => {
               const section = document.getElementById(item.id);
               if (section) observer.observe(section);
          });

          return () => observer.disconnect();
     }, []);

     return (
          <nav className="space-y-4 hidden md:block">
               {navItems.map((item) => (
                    <a
                         key={item.id}
                         href={`#${item.id}`}
                         className={`flex items-center group cursor-pointer transition-all duration-300 ${activeSection === item.id ? "text-pink-600" : "text-gray-500 hover:text-pink-400"
                              }`}
                    >
                         <div
                              className={`h-0.5 transition-all duration-300 ${activeSection === item.id ? "w-20 bg-pink-600" : "w-10 bg-gray-300 group-hover:w-20 group-hover:bg-pink-300"
                                   }`}
                         />
                         <span className="ml-3 font-medium">{item.label}</span>
                    </a>
               ))}
          </nav>
     );
};

export default Navigation;
