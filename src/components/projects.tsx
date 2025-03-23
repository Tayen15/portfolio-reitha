"use client";

import React, { useEffect, useState } from "react";
import { getProjects } from "@/lib/firebaseService";
import { Project } from "@/types/types";

const Projects = () => {
     const [projectsList, setProjectsList] = useState<Project[]>([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    console.log("🔍 Fetching projects from Firestore...");
                    const projectsData = await getProjects();
                    console.log("✅ Projects Data:", projectsData);
                    setProjectsList(projectsData);
               } catch (error) {
                    console.error("❌ Error fetching projects:", error);
               } finally {
                    setLoading(false);
               }
          };

          fetchData();
     }, []);

     return (
          <div className="fade-in">
               <h2 className="text-2xl font-semibold text-pink-800 mb-6 block md:hidden">Projects</h2>
               {loading ? (
                    <p>Loading...</p>
               ) : (
                    <div className="grid grid-cols-1 gap-8">
                         {projectsList.map((project) => (
                              <div
                                   key={project.id}
                                   className="border border-pink-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm"
                              >
                                   <div className="h-48 bg-pink-100/70 flex items-center justify-center">
                                        <div className="text-pink-300 text-6xl">✦</div>
                                   </div>
                                   <div className="p-5">
                                        <h3 className="text-xl font-medium text-pink-700">
                                             {project.title}
                                        </h3>
                                        <p className="text-gray-600 mt-2">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                             {project.technologies.map((tech, index) => (
                                                  <span
                                                       key={index}
                                                       className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full"
                                                  >
                                                       {tech}
                                                  </span>
                                             ))}
                                        </div>

                                        <div className="flex gap-4 mt-4">
                                             {project.liveUrl && (
                                                  <a
                                                       href={project.liveUrl}
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-sm text-pink-600 hover:text-pink-700 flex items-center"
                                                  >
                                                       <span className="mr-1">Live Demo</span>
                                                       <span>↗</span>
                                                  </a>
                                             )}
                                             {project.repoUrl && (
                                                  <a
                                                       href={project.repoUrl}
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-sm text-pink-600 hover:text-pink-700 flex items-center"
                                                  >
                                                       <span className="mr-1">GitHub</span>
                                                       <span>↗</span>
                                                  </a>
                                             )}
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
};

export default Projects;
