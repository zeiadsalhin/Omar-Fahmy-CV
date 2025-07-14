import React from 'react';
import { Button } from '@headlessui/react';
import { useInView } from 'react-intersection-observer';
import { FileDown } from "lucide-react";

// MyInfo component that displays personal information
// using the Intersection Observer API to trigger animations
export default function MyInfo() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div
      ref={ref}
      className={`mt-24 m-5 md:max-w-[96rem] mx-auto transition-opacity duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col md:max-w-[80rem] 2xl:max-w-full mx-auto md:flex-row bg-blue-950 rounded-2xl shadow-xl overflow-hidden">
        {/* Image Section */}
        <div className="p-5 md:max-w-1/3 flex justify-center items-center">
          <img
            className="rounded-2xl w-[300px] md:w-[390px] transition-all duration-500"
            src="/photo.avif"
            width="390"
            height="450"
            alt="Ziad"
          />
        </div>

        {/* Text Section */}
        <div className="p-5 md:py-10 md:max-w-[56.3rem]a mx-auto flex flex-col space-y-8 text-[#EAEAEA]">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-100">I am Omar</h1>
          <div className="h-1 w-20 md:w-72 bg-[#08D9D6] rounded-full"></div>
          <h2 className="text-2xl md:text-4xl font-light leading-snug text-[#B6B6B6]">
            A Cross-Platform App & Game Developer Specialized in Game Development
          </h2>
          <p className="text-lg md:text-xl font-sans leading-relaxed max-w-4xl text-[#B6B6B6]">
            I’m a Creative and skilled developer with 3+ years of experience in game and mobile app development.
            Proficient in Unity, Flutter, Dart, and backend integration using APIs and Firebase.
            Currently building interactive experiences by connecting games with platforms like TikTok.
            A reliable team player with strong problem-solving skills and a passion for innovation.
          </p>

          {/* CV Button */}
          <div className="mt-5">
            <a
              href="/Omar CV[1].pdf"
              download
            >
              <Button
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 hover:bg-[#07c7c4]/80 px-4 py-2 text-lg font-semibold text-white hover:scale-105 transition-transform duration-300"
              >
                <span>Download CV</span>
                <FileDown size={23} strokeWidth={3} className="text-white" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
