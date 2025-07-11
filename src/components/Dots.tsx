import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// This component creates a visual representation of dots with animations
// and transitions when they come into view.
export default function Dots() {
  const [line1Height, setLine1Height] = useState('h-10');
  const [line2Height, setLine2Height] = useState('h-10');
  const [round2Opacity, setRound2Opacity] = useState('opacity-0');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      const runProgress = () => {
        setTimeout(() => {
          setLine1Height('h-20');
        }, 50);

        setTimeout(() => {
          setRound2Opacity('opacity-100');
        }, 300);

        setTimeout(() => {
          setLine2Height('h-20');
        }, 800);
      };

      runProgress();
    }
  }, [inView]);

  return (
    <div
      id="dots"
      className="flex flex-col items-center justify-center my-12"
      ref={ref}
    >
      <div
        className={`w-1 ${line1Height} bg-[#B6B6B6] transition-all duration-1000 ease-out`}
      />
      <div
        className={`w-5 h-5 rounded-full ${round2Opacity} bg-[#08D9D6] transition-opacity duration-500 ease-out my-2`}
      />
      <div
        className={`w-1 ${line2Height} bg-[#B6B6B6] transition-all duration-1000 ease-out`}
      />
    </div>
  );
}
