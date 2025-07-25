import React from "react";
import { Link } from "react-router-dom";
import ImageTrail from "../components/ImageSlide";

const ComingSoon = () => {
  return (
    <section>
        <div className="relative h-[40vh] md:h-[80vh] overflow-hidden">
              <ImageTrail
                key={1}
                items={[
                  'https://www.tarunkhiwal.com/images/project-gallery/1-22Mar2024093834-large-12Feb2025090104-large-24Feb2025124717-medium.jpg',
                  'https://www.tarunkhiwal.com/images/project-gallery/MensXP%20Saif%20Ali%20Khan%2021.05.2019-261%201-01Dec2022232611-medium.jpg',
                  'https://www.tarunkhiwal.com/images/project-gallery/6-08Dec2022114349-large.jpg',
                  'https://www.tarunkhiwal.com/images/client-gallery/11-07Jul2023060809-medium.jpg',
                  'https://www.tarunkhiwal.com/images/client-gallery/Neeraj%20Chopra%2020.09.20213591-01Dec2022230621-medium.jpg',
                  'https://www.tarunkhiwal.com/images/client-gallery/The%20Week%2024.08.201817965-V001-01Dec2022230927-medium.jpg',
                  'https://www.tarunkhiwal.com/images/client-gallery/Femina%2028.02.20201786_V001-01Dec2022232048-medium.jpg',
                 
                ]}
                variant={1}
              />
            </div>
    <div className="w-full h-[60vh]  md:h-[80vh] flex flex-col justify-center items-center px-6 absolute z-0 top-0 left-0 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic mb-4">
        Website Under Construction
      </h1>
      <p className="text-sm sm:text-base md:text-lg font-thin text-gray-500 max-w-xl mb-10">
        This page is still a work in progress. We're crafting something beautiful — please check back later!
      </p>

     

      {/* Optional Decoration SVG */}
      <svg
        className="mt-20 w-28 sm:w-40 opacity-80"
        viewBox="0 0 320 120"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle cx="60" cy="60" r="45" stroke="white" strokeWidth="4" fill="black" />
        <circle cx="60" cy="60" r="20" fill="white" />
        <rect x="90" y="25" width="8" height="20" fill="black" rx="2" />
        <text x="130" y="65" fontSize="20" fontWeight="bold" fill="black">
          TARUN KHIWAL
        </text>
        <text x="130" y="90" fontSize="10" fill="gray" letterSpacing="4">
          PHOTOGRAPHY
        </text>
      </svg>
    </div>
    </section>
  );
};

export default ComingSoon;
