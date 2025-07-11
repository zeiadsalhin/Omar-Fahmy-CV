import React from 'react';
import { motion } from 'framer-motion';

//
// Footer component that displays social media links and a message
const Footer = () => {
  return (
    <motion.footer
      className="flex flex-col items-center p-5 mt-10 rounded-t-2xl bg-blue-950 text-[#EAEAEA]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h1 className="text-lg font-semibold text-[#EAEAEA]">Follow me on:</h1>
      <div className="flex space-x-5 p-5">
        {/* GitHub Link */}
        <a href="https://github.com/OmarFahmy03" aria-label="Omar's Github" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github hover:opacity-50 transform transition duration-300"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>        </a>
        
        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/omar-hussein-a92065187/" aria-label="Omar's Linkedin" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin hover:opacity-50 transform transition duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
      <p className="text-[#B6B6B6]">Made with ❤ by Omar</p>
    </motion.footer>
  );
};

export default Footer;
