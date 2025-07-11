import React, { lazy, Suspense } from 'react';

// Dynamically import components
// in order to reduce the initial bundle size and improve performance
import Hero from '../components/Hero';
const Services = lazy(() => import('../components/Services'));
const MyInfo = lazy(() => import('../components/MyInfo'));
const Skills = lazy(() => import('../components/Skills'));
const EduExp = lazy(() => import('../components/EduExp'));
const Served = lazy(() => import('../components/Served'));
const Dots = lazy(() => import('../components/Dots'));
const Projects = lazy(() => import('../components/Projects'));
// const Customers = lazy(() => import('../components/Customers'));
const Contact = lazy(() => import('../components/Contact'));

// loading spinner component
// to be displayed while the components are loading
// const LoadingSpinner = () => (
//   <div className="flex justify-center items-center py-48">
//     <Loader2 className="animate-spin text-accent" size={48} />
//   </div>
// );

// Main component for the home page
// It uses React's Suspense to load components lazily
// and displays a loading spinner while they are being loaded
// The main layout is a flex container with a minimum height of 1200px
const HomePage: React.FC = () => {
  return (
    <main>
      <div className="main min-h-[1200px]">
          <Hero />

        <div className="min-h-[1200px] md:max-w-[80rem] 2xl:max-w-[101rem] mx-auto p-4 xl:p-0">
          <Suspense >
            <Services />
          </Suspense>
          <Suspense >
            <Dots />
          </Suspense>
          <Suspense >
            <MyInfo />
          </Suspense>
          <Suspense >
            <Dots />
          </Suspense>
          <Suspense >
            <Skills />
          </Suspense>
          <Suspense >
            <Dots />
          </Suspense>
          <Suspense >
            <EduExp />
          </Suspense>
          <Suspense >
            <Dots />
          </Suspense>
          <Suspense >
            <Served />
          </Suspense>
          <Suspense >
            <Dots />
          </Suspense>
          <Suspense >
            <Projects />
          </Suspense>
          {/* <Suspense >
            <Dots />
          </Suspense>
          <Suspense >
            <Customers />
          </Suspense> */}
        </div>

        <Suspense >
          <Dots />
        </Suspense>
        <Suspense >
          <Contact />
        </Suspense>
      </div>
    </main>
  );
}

export default HomePage;
