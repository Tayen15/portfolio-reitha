"use client";

import About from "@/components/about";
import Projects from "@/components/projects";
import Navigation from "@/components/navigation";

export default function Home() {
     return (
          <main className="min-h-screen bg-pink-50/80 text-gray-800">
               <div className="container mx-auto px-4 py-10 md:py-12 max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-16">
                         
                         {/* Left Sidebar */}
                         <aside className="md:w-1/3 md:sticky md:top-20 h-fit flex flex-col justify-between md:mr-20">
                              <div className="mt-12">
                                   <a href="" className="text-5xl font-bold text-pink-800">Reitha Alvida</a>
                                     <p className="text-md text-pink-700 mt-4 font-normal">
                                              Crafting seamless, beautiful, and engaging web experiences with passion.
                                     </p>
                              </div>

                              <div className="mt-16">
                                   <Navigation />
                              </div>
                         </aside>

                         {/* Right Content */}
                         <section className="md:w-2/3">
                              {/* Setiap section diberikan scroll-margin-top dan padding yang cukup */}
                              <div id="about" className="scroll-mt-24 py-24 border-pink-200">
                                   <About />
                              </div>

                              <div id="projects" className="scroll-mt-24 py-24">
                                   <Projects />
                              </div>
                         </section>
                    </div>
               </div>
          </main>
     );
}
