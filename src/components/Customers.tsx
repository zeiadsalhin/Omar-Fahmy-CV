import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut"
    },
  }),
};

// Customers Component
// This component displays customer testimonials with animations and styling.
// It uses Framer Motion for animations and Tailwind CSS for styling.
// The component is structured to show two customer testimonials side by side with a connector image in between.
const Customers = () => {
  return (
    <div id="darkmode" className="darkmode md:max-w-[98.5rem] mx-auto">
      {/* Heading */}
      <motion.div
        className="p-10 text-2xl md:text-4xl font-bold dark:text-[#EAEAEA]"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        "What People Say"
      </motion.div>

      {/* Content Section */}
      <div className="content flex-col bg-[#121212] h-fit rounded-2xl 2xl:mx-5 mt-20 mb-20">
        <div className="content flex-row md:flex p-5 md:space-x-10 justify-center">
          {/* Customer 1 */}
          <motion.div
            className="c1 flex-col bg-[#1A1A1D] dark:text-[#EAEAEA] text-center rounded-xl p-10 -mt-20 md:w-1/2 xl:w-1/4 h-fit hover:scale-105 transition-transform duration-300 ease-in-out"
            custom={0.1}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/yh.jpg"
              className="mx-auto rounded-full"
              width="300"
              height="300"
              alt="Yasser"
              loading="lazy"
            />
            <h3 className="md:text-3xl font-bold p-3">Yasser Hejazi</h3>
            <h5 className="mb-2 text-[#FF2E63]">Pactel Founder and CEO</h5>
            <div className="w-1/5 h-1 bg-[#FF2E63] mx-auto m-5"></div>
            <p className="italic font-semibold text-[#B6B6B6]">
              "Hardworking, wonderful, <br />very cooperative and able to work with any team"
            </p>
          </motion.div>

          {/* Connector */}
          <motion.div
            className="block"
            custom={0.3}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/connector.svg"
              className="mx-auto rotate-90 md:rotate-180 md:mt-48 dark:invert"
              width="110"
              height="110"
              alt="connector"
            />
          </motion.div>

          {/* Customer 2 */}
          <motion.div
            className="c2 flex-col bg-[#1A1A1D] dark:text-[#EAEAEA] text-center rounded-xl p-10 md:w-1/2 xl:w-1/4 h-fit -mb-20 hover:scale-105 transition-transform duration-300 ease-in-out"
            custom={0.2}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="/mk.jpg"
              className="mx-auto rounded-full"
              width="300"
              height="300"
              alt="Mohamed"
              loading="lazy"
            />
            <h3 className="md:text-3xl font-bold p-3">Mohamed Khaled</h3>
            <h5 className="mb-2 text-[#FF2E63]">Backend and Data Science Team Member</h5>
            <div className="w-1/5 h-1 bg-[#FF2E63] mx-auto m-5"></div>
            <p className="italic font-semibold text-[#B6B6B6]">
              "I am pleased to work with Ziad, <br />he is very optimistic, hardworking, and always a helping hand"
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
