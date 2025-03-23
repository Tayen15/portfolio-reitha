"use client";

import React from 'react';

const About = () => {
     return (
          <div className="fade-in">
               <h2 className="text-2xl font-semibold text-pink-800 mb-6 block md:hidden">About Me</h2>
                 <div className="space-y-4 text-gray-600">
                          <p className="text-xl leading-relaxed">
                                 Hello! I&apos;m a passionate <span className="font-bold text-pink-800">developer</span> specializing in creating beautiful,
                                 responsive, and user-friendly websites. With a keen eye for <span className="font-bold text-pink-800">design</span> and
                                 attention to detail, I strive to build digital experiences that leave a
                                 lasting impression.
                          </p>
                          <p className="text-xl leading-relaxed">
                                 My approach combines creativity with technical <span className="font-bold text-pink-800">expertise</span> to deliver
                                 solutions that not only look great but also perform exceptionally well.
                                 I believe in the power of clean <span className="font-bold text-pink-800">code</span> and intuitive interfaces to make
                                 the web more accessible and enjoyable for everyone.
                          </p>
                          <p className="text-xl leading-relaxed">
                                 When I&apos;m not coding, you can find me exploring new <span className="font-bold text-pink-800">trends</span>,
                                 contributing to open-source <span className="font-bold text-pink-800">projects</span>, or enjoying a cup of coffee
                                 while sketching new <span className="font-bold text-pink-800">ideas</span>.
                          </p>
                          <p className="text-xl leading-relaxed">
                                 Fun fact I absolutely love <span className="font-bold text-pink-800">cats</span>, and I have an adorable cat that always brightens my day.
                          </p>
                 </div>
          </div>
     );
};

export default About;