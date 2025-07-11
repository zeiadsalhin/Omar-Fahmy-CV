import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Freelancer – Web Developer",
    company: "Freelancer",
    period: "05/2022 – present",
    highlights: [
      "Founded 80% of Chattok Gaming web app using Nuxt.js & Supabase",
      "Reduced login errors by 30% by using Supabase Auth",
      "Created Economic Youth Web App used by 100+ students"
    ]
  },
  {
    title: "Web Developer at PACTEL",
    company: "PACTEL",
    period: "01/2021 – present",
    highlights: [
      "Improved performance 90% on pactel.site",
      "Integrated APIs improving efficiency by 20%",
      "Built MiddleEast landing page increasing traffic by 50%",
      "Developed Pactel Courses with Vue & Tailwind, boosting enrollments by 40%"
    ]
  },
  // {
  //   title: "Pactel Official Website",
  //   period: "02/2025",
  //   highlights: [
  //     "Used React.js, Swiper, TailwindCSS, and Brevo CRM",
  //     "Improved UI/UX, brand presence and CRM integration"
  //   ]
  // },
  // {
  //   title: "Movies App",
  //   period: "03/2025",
  //   highlights: [
  //     "Full-stack app with React, Supabase, MUI, TMDB API",
  //     "Auth with Email, OAuth, OTP, 2FA",
  //     "Netflix-style responsive UI with protected routes"
  //   ]
  // },
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
                  <p className="text-lg md:text-xl me-6 text-[#B6B6B6]">09/2021 – 2025</p>
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
