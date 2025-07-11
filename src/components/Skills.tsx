import React, { JSX } from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Define the types
interface Skill {
  name: string;
  icon: string;
  progress: string;
};

// skills component
// This component displays a list of skills.
// It uses the Intersection Observer API to trigger animations when the component comes into view.
// The skills are displayed in a grid layout, and each skill card has a hover effect.
export default function Skills(): JSX.Element {
  const { ref: skillsRef, inView: sightInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills: Skill[] = [
    { name: 'Unity', icon: '/unity.svg', progress: 'w-80' },
    { name: 'Flutter', icon: '/flutter.svg', progress: 'w-75' },
    { name: 'Firebase', icon: '/firebase.svg', progress: 'w-85' },
    { name: 'GitHub', icon: '/github.svg', progress: 'w-95' },
    { name: 'Restful API', icon: '/api.svg', progress: 'w-75' },
  ];

  return (
    <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: sightInView ? 1 : 0, y: sightInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
    <div
      id="skills"
      className="text-[#EAEAEA] mt-20 w-full md:max-w-[80rem] 2xl:max-w-[96rem] mx-auto px-4a md:px-0 transition-opacity duration-1000"
    >
      <div className="text-center space-y-8">
        <h1 className="text-5xl lg:text-7xl font-bold text-blue-100">My Skills</h1>

        {/* <a
          className="inline-flex items-center gap-3 bg-[#08D9D6] text-[#121212] px-5 py-2 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 w-fit mx-auto"
          href="https://drive.google.com/file/d/1j6OQEoC0okTvrxOMFlLGRcM1OsfC2UDH/view?usp=sharing&export=download"
          download
        >
          <span>Download CV</span>
          <img src="/cv.svg" width="32" height="32" alt="CV" />
        </a> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8 md:gap-10 mt-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-950 rounded-xl p-5 text-center my-auto min-h-[10.8rem] shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={skill.icon}
              className={`mx-auto mb-4 
                ${skill.name === 'Restful API' || skill.name === 'GitHub' ? 'invert' : ''}
                ${skill.name === 'Nuxt.js' ? 'mt-10 mb-5.5' : undefined} 
                ${skill.name === 'Axios' ? 'mt-12.5 mb-6' : undefined}` // Custom classes needed for specific icons
              }
              width={skill.name === 'Tailwind' || skill.name === 'Nuxt.js' || skill.name === 'Axios' ? 130 : 80}
              height="80"
              alt={skill.name}
            />
            <h3 className="text-xl font-semibold text-[#EAEAEA] mb-2">{skill.name}</h3>

            {/* Optional Progress bar - uncomment if you want visual skill level */}
            {/* 
            <div className="w-full h-2 bg-[#121212] rounded-full">
              <div className={`h-full bg-[#08D9D6] rounded-full ${skill.progress}`}></div>
            </div> 
            */}
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
}
