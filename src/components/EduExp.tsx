import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Game Developer",
    company: "USA - Indiana",
    period: "2024 – Current",
    highlights: [
      "Currently I’m working with growing company.",
      "We have a great idea to convert streaming platforms like tiktok to completely intractable game.",
      "Using backend and get information from tiktok api and likes and so on."
    ]
  },
  {
    title: "Data Entry",
    company: "El Maadi",
    period: "2023 - 2024",
    highlights: [
      "I Have worked as data typist in covo connect in Egypy-el-maadi.",
      "I have learned so much from such experience as I can reach average 58 WPM.",
    ]
  },
  {
    title: "Game Developer Freelancer",
    company: "Remote Job",
    period: "2022 - Current",
    highlights: [
      "With more than 3 Years experience in this field I have mastered how to use unity",
      "I have worked in many solo projects and as a team with a lot of people all over the world."
    ]
  },
  {
    title: "Mobile App Developer",
    company: "Remote Job",
    period: "2022 - Current",
    highlights: [
      "Developed cross-platform mobile apps using Flutter and Dart.",
      "Implemented responsive UIs, integrated REST APIs and Firebase.",
      "Optimized performance and ensured smooth UX on Android and iOS."
    ]
  },
  // {
  //   title: "E-commerce Store App",
  //   period: "04/2025",
  //   highlights: [
  //     "React + Ant Design UI with JWT, Zustand for state",
  //     "Includes Admin Dashboard and secure checkout",
  //     "Optimized performance and UX for mobile/desktop"
  //   ]
  // },
  // {
  //   title: "Live Interactive Games App",
  //   period: "08/2024",
  //   highlights: [
  //     "Nuxt, Supabase, Vuetify & Tailwind for TikTok live games",
  //     "Multi-language real-time gameplay with SSR"
  //   ]
  // },
  // {
  //   title: "Online Courses and Portfolio App",
  //   period: "07/2024",
  //   highlights: [
  //     "Unified educational + portfolio app",
  //     "Nuxt, Vuetify, Supabase, Tailwind stack",
  //     "Focused on intuitive navigation and scalability"
  //   ]
  // }
];


// This component displays the education and experience sections of a resume
// It allows users to toggle between the two sections using buttons
const EduExp = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex justify-center space-x-6 mb-10">
        <button
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            activeTab === "education"
              ? "bg-blue-500/80 text-white"
              : "bg-blue-950 text-[#EAEAEA] border border-[#08D9D6]"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            activeTab === "experience"
              ? "bg-blue-500/80 text-white"
              : "bg-blue-950 text-[#EAEAEA] border border-[#08D9D6]"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "education" && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-10 bg-blue-50/60"></div>
                  <p className="text-lg md:text-xl me-12 text-[#B6B6B6]">2021 – 2025</p>
                </div>
                <div className="md:ml-10 mt-4 md:mt-0">
                  <h2 className="text-2xl md:text-3xl font-semibold text-blue-50/90">
                    B.Sc. Computer Science
                  </h2>
                  <p className="text-xl font-light text-[#08D9D6]/80">Helwan University – Egypt</p>
                  <ul className="list-disc ml-5 mt-4 text-md text-[#B6B6B6] space-y-1">
                    <li>Bachelor of Science in Computer science & Mathematics</li>
                    <li>Graduation Project: AI-Powered GANs Super resolution model</li>
                    <li>Key Courses: Data Structures, DBMS, Software Engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-10 bg-bg-blue-50/60"></div>
                    <p className="text-lg md:text-xl min-w-[10rem] text-[#B6B6B6]">{exp.period}</p>
                  </div>
                  <div className="md:ml-10 mt-4 md:mt-0">
                    <h2 className="text-2xl md:text-3xl font-semibold text-bg-blue-50/90">
                      {exp.title}
                    </h2>
                    {exp.company && (
                      <p className="text-xl font-light text-[#08D9D6]/80">{exp.company}</p>
                    )}
                    <ul className="list-disc ml-5 mt-4 text-md text-[#B6B6B6] space-y-1">
                      {exp.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EduExp;
