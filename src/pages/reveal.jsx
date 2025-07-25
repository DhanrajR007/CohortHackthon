import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardScrollComponent from "./CardSection";
import ClickSpark from "../components/Sparc";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const videoRef = useRef(null);
  const ctaRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ctaRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        ease: "power3.out",
      }
    );

   gsap.fromTo(
      videoRef.current,
      {
        scaleX: 0,
        scaleY: 0,
        transformOrigin: "top left",
        duration:3,
      },
      {
        scaleX: 1,
        scaleY: 1,
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 0",
          end: "0 bottom",
          duration:10,
          scrub: 3,
        },
        duration:10,
        ease: "power2.out",
      }
    );
  }, []);

  return (
   <ClickSpark  sparkColor='#000'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}>
     <div>
      <section className="-mt-30">
        {/* HERO SECTION */}
        <div
          className="f-hero h-screen flex flex-col justify-center items-center w-full bg-[url(https://www.tarunkhiwal.com/images/project-gallery/2-22Mar2024093847-large-24Feb2025124728-medium.jpg)] bg-cover bg-center px-4 text-center md:text-left"
          ref={textRef}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white">
            <span className="font-serif italic">Rooted</span> in care,
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white">
            grown with <span className="font-serif italic">kindness</span>
          </h1>
          <p className="text-base sm:text-lg font-thin uppercase text-white mt-3 px-4 sm:px-0">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
          <button className="mt-10 sm:mt-20 bg-white text-black text-lg sm:text-xl font-thin px-6 sm:px-10 py-2 rounded">
            <Link to={"/work"}>View All Work</Link>
          </button>
        </div>

        {/* MIDDLE SPLIT SECTION */}
        <div className="w-full min-h-[50vh] flex flex-col md:flex-row justify-center items-center gap-10 bg-white px-6 py-10 md:py-0">
          <div className="w-full md:w-1/3 text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin font-serif tracking-tight leading-tight md:text-right text-center">
              Crafting Visual Poetry: Where Tradition Meets Vision
            </h1>
          </div>
          <div className="w-full md:w-[1px] h-[1px] md:mx-8 md:h-[45vh] bg-black "></div>
          <div className="w-full md:w-1/3 relative flex flex-col justify-center items-start gap-4 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin italic tracking-tight leading-tight md:text-left text-center">
              Recognized globally for visual storytelling in fashion
            </h1>
            <svg
              className="absolute bottom-22 md:bottom-14 left-40 md:-left-8 -translate-x-1/3 w-40 sm:w-52 md:w-72"
              viewBox="0 0 320 120"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="60"
                cy="60"
                r="45"
                stroke="black"
                strokeWidth="5"
                fill="white"
              />
              <circle cx="60" cy="60" r="20" fill="black" />
              <rect x="90" y="25" width="10" height="25" fill="black" rx="2" />
            </svg>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="w-full h-screen overflow-hidden" ref={videoRef}>
          <video
            src="https://www.tarunkhiwal.com/images/films/Shoe%20mart.mov"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </section>

      <CardScrollComponent />

      {/* CTA Section - kept as separate and animated */}
      <section ref={ctaRef}>
        <div className="bg-white h-auto min-h-[50vh] lg:h-80vh flex flex-col justify-center items-center text-center text-black px-5 py-16">
          <h1 className="uppercase text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
            different today
          </h1>
          <h1 className="uppercase text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mt-2">
            unmissable tomorrow
          </h1>
          <button className="mt-10">
            <p className="border-b-2 border-black tracking-tighter uppercase text-lg font-normal">
              discuss your project
            </p>
          </button>
        </div>
      </section>
       <section>
      <div className='insta-highlight'>
        <div className="i-title text-center w-full my-4">
          <h1 className='text-xl uppercase font-thin'>follow us on instagram</h1>
        </div>

        <div className="flex flex-wrap gap-4 w-[90%] mx-auto justify-center items-center relative">
          {/* Image 1 - always visible */}
          <div className="i-img w-[170px] h-[170px]">
            <img className='w-full h-full object-cover' src="https://www.tarunkhiwal.com/images/client-gallery/Femina%2028.02.20201786_V001-01Dec2022232048-medium.jpg" alt="" />
          </div>

          {/* Image 2 - always visible */}
          <div className="i-img w-[170px] h-[170px]">
            <img className='w-full h-full object-cover' src="https://www.tarunkhiwal.com/images/client-gallery/The%20Week%2024.08.201817965-V001-01Dec2022230927-medium.jpg" alt="" />
          </div>

          {/* Image 3 - always visible */}
          <div className="i-img w-[170px] h-[170px]">
            <img className='w-full h-full object-cover' src="https://www.tarunkhiwal.com/images/client-gallery/Neeraj%20Chopra%2020.09.20213591-01Dec2022230621-medium.jpg" alt="" />
          </div>

          {/* Image 4 - hidden on mobile */}
          <div className="i-img w-[170px] h-[170px] hidden sm:block">
            <img className='w-full h-full object-cover' src="https://www.tarunkhiwal.com/images/client-gallery/11-07Jul2023060809-medium.jpg" alt="" />
          </div>

          {/* Image 5 - hidden on mobile */}
          <div className="i-img w-[170px] h-[170px] hidden sm:block">
            <img className='w-full h-full object-cover' src="https://www.tarunkhiwal.com/images/project-gallery/6-08Dec2022114349-large.jpg" alt="" />
          </div>

          {/* Image 6 - hidden on tablets and mobile */}
          <div className="i-img w-[170px] h-[170px] hidden lg:block">
            <img className='w-full h-full object-cover' src="https://www.tarunkhiwal.com/images/project-gallery/MensXP%20Saif%20Ali%20Khan%2021.05.2019-261%201-01Dec2022232611-medium.jpg" alt="" />
          </div>

          {/* Image 7 - hidden on tablets and mobile */}
          <div className="i-img w-[170px] h-[170px] hidden lg:block">
            <img className='w-full h-full object-cover' src="https://www.tarunkhiwal.com/images/project-gallery/1-22Mar2024093834-large-12Feb2025090104-large-24Feb2025124717-medium.jpg" alt="" />
          </div>

          {/* Button in center */}
          <button className='absolute bg-white/70 px-8 py-2 -translate-x-1/2 -translate-y-1/2 text-black left-1/2 top-1/2'>
           <Link to={"https://www.instagram.com/tarun_khiwal/"}> <p className='text-xl font-thin uppercase'>@tarunkhiwal</p></Link>
          </button>
        </div>
      </div>
    </section>
    </div>
   </ClickSpark>
  );
};

export default Home;
