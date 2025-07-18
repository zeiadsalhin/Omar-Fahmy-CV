import { ChevronLeft, ChevronRight, FolderGit2 } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';

// Define the type for project data
interface Project {
  src: string;
  title: string;
  description: string;
  link: string;
  code: string;
  type: "Games" | "AI";
};

// projects data
const allProjects: Project[] = [
  {
    src: "/srgan.webp",
    title: "SRGAN Image Enhancement",
    description: "Image enhancement web app using a trained SRGAN model upscaling low-res images",
    link: "https://gans-model.netlify.app/",
    code: "https://github.com/zeiadsalhin/GANs-model",
    type: "AI",
  },
  {
    src: "/chattok_gaming.webp",
    title: "Chattok Gaming",
    description: "Unity Tiktok Games Designed, Built, published in cooperation with developers",
    link: "https://mory-racing.netlify.app",
    code: "https://github.com/zeiadsalhin/mory-racing",
    type: "Games",
  },
];

const filterTypes = ["All", "Games", "AI"] as const;

// Projects component
// This component displays a list of projects with filtering options and a horizontal scroll feature.
// It allows users to view projects based on their type (React, Vue, JS) and provides a smooth scrolling experience.
// The component also includes navigation arrows to scroll through the projects when they overflow the container.
const Projects: React.FC = () => {
  const [activeType, setActiveType] = useState<typeof filterTypes[number]>("All");
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
  
    const handleScroll = () => {
      if (!container) return;
  
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeft(scrollLeft > 40);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
    };
  
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }
  
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);  

  const filteredProjects =
    activeType === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === activeType);


  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
  
    const cards = Array.from(container.children);
    const scrollLeft = container.scrollLeft;
  
    const currentIndex = cards.findIndex(
      (card) => (card as HTMLElement).offsetLeft >= scrollLeft - 10
    );
  
    const newIndex =
      direction === "left"
        ? Math.max(0, currentIndex - 1)
        : Math.min(cards.length - 1, currentIndex + 1);
  
    container.scrollTo({
      left: (cards[newIndex] as HTMLElement).offsetLeft,
      behavior: "smooth",
    });
  };      
      

  return (
    <div className="bg-blue-950 text-[#EAEAEA] px-4 py-10 md:max-w-[96rem] mx-auto rounded-2xl">
      <div className="flex items-center justify-center mb-6 space-x-4">
        <FolderGit2 size={60} strokeWidth={2} className="text-blue-50" />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-50">My Projects</h1>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        {filterTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeType === type
                ? "bg-blue-500/80 text-white"
                : "bg-blue-900 hover:bg-[#08D9D6]/80"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="relative">
        {/* Scroll Arrows */}
        {showLeft && (
            <button
              aria-label='Scroll Left'
              onClick={() => scroll("left")}
              className="absolute left-2 z-20 top-1/2 -translate-y-1/2 bg-[#1A1A1D]/80 hover:bg-blue-500/80 hover:scale-110 transition-all duration-300 text-white p-2.5 rounded-full shadow-xl border border-blue-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {showRight && (
            <button
              aria-label='Scroll Right'
              onClick={() => scroll("right")}
              className="absolute right-2 z-20 top-1/2 -translate-y-1/2 bg-[#1A1A1D]/80 hover:bg-blue-500/80 hover:scale-110 transition-all duration-300 text-white p-2.5 rounded-full shadow-xl border border-blue-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

        {/* Projects Scroll Area */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth md:px-10 py-3"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="md:min-w-[280px] md:max-w-sm max-w-[20rem] bg-blue-500/20 border border-[#333] rounded-xl p-4 flex-shrink-0 hover:scale-105 transition-transform"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold mb-1 text-gray-50">{project.title}</h4>
              <p className="text-sm text-[#B6B6B6] mb-4">{project.description}</p>
              
              <div className="Buttons flex gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 hover:bg-[#07c7c4]/80 text-white rounded hover:text-white hover:outline-[#08D9D6] outline-1 transition-all duration-300"
              >
                View Project
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#07c7c4]/20 text-white rounded hover:bg-[#07c7c4]/40 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github hover:opacity-50 transform transition duration-300 inline-block"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span className='ms-1'>Source Code</span>
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
