import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// This component uses the Intersection Observer API to trigger animations when the component comes into view. 
// It displays statistics about customers served, projects completed, and years of experience.
// It uses the CountUp library to animate the counting of numbers.
const Served: React.FC = () => {
  const { ref: servsRef, inView: servsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Lowered threshold for mobile reliability
  });

  return (
    <motion.div
      ref={servsRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: servsInView ? 1 : 0, y: servsInView ? 0 : 50 }}
      transition={{ duration: 0.6 }}
    >
      <div
        id="counter"
        className="dark:bg-blue-950 dark:text-[#EAEAEA] text-[#EAEAEA] flex justify-center w-auto text-center 2xl:m-[2.5rem] md:py-5 py-10 bg-[#1A1A1D] rounded-2xl"
      >
        <div className="nums md:flex mx-auto p-4 m-4 justify-center lg:space-x-40 md:space-y-0 space-y-10 text-2xl">
          {/* Customers Served */}
          <section
            aria-label="Customers Served"
            className="one flex-col hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <i className="fa-solid fa-store fa-3x text-[#FF2E63]"></i>
            <p className="p-4 font-semibold text-[#B6B6B6]">Customers Served</p>
            <div className="flex justify-center">
              <p className="text-4xl">+</p>
              {servsInView && (
                <CountUp
                  className="text-4xl p-1 font-bold"
                  start={0}
                  end={1}
                  duration={3}
                  separator=","
                />
              )}
            </div>
          </section>

          {/* Project Complete */}
          <section
            aria-label="Project Completed"
            className="two flex-col hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <i className="fa-brands fa-twitch fa-3x text-[#FF2E63]"></i>
            <p className="p-4 font-semibold text-[#B6B6B6]">Project Complete</p>
            <div className="flex justify-center">
              <p className="text-4xl">+</p>
              {servsInView && (
                <CountUp
                  className="text-4xl p-1 font-bold"
                  start={0}
                  end={2}
                  duration={1}
                  separator=","
                />
              )}
            </div>
          </section>

          {/* Experience Years */}
          <section
            aria-label="Experience Years"
            className="four flex-col hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <i className="fa-brands fa-youtube fa-3x text-[#FF2E63]"></i>
            <p className="p-4 font-semibold text-[#B6B6B6]">Experience Years</p>
            <div className="flex justify-center">
              <p className="text-4xl">+</p>
              {servsInView && (
                <CountUp
                  className="text-4xl p-1 font-bold"
                  start={0}
                  end={3}
                  duration={1}
                  separator=","
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Served;
