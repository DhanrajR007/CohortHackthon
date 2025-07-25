import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CardScrollComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".card");
    
    const rotations = [-12, 10, -5, 5, -5, -2];

    cards.forEach((card, index) => {
      gsap.set(card, {
        x: window.innerWidth,
        rotate: rotations[index],
      });
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".sticky-cards",
      start: "1px top",
      end: "+=5600",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalCards = cards.length;
        const progressPerCard = 1 / totalCards;

        cards.forEach((card, index) => {
          const cardStart = index * progressPerCard;
          let cardProgress = (progress - cardStart) / progressPerCard;
          cardProgress = Math.min(Math.max(cardProgress, 0), 1);

          let xPos = window.innerWidth * (1 - cardProgress);
          let yPos = 0;

          if (cardProgress === 1 && index < totalCards - 1) {
            const remainingProgress =
              (progress - (cardStart + progressPerCard)) /
              (1 - (cardStart + progressPerCard));

            if (remainingProgress > 0) {
              const distanceMultiplier = 1 - index * 0.15;
              xPos =
                -window.innerWidth *
                0.3 *
                distanceMultiplier *
                remainingProgress;
            }
          }

          gsap.set(card, {
            x: xPos,
            y: yPos,
          });
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    
    <section className="sticky-cards bg-zinc-200 h-screen relative overflow-hidden">
      {/* BIG WORK TEXT */}
      <main className="absolute top-0 left-1/2 -translate-x-1/2  z-0 text-9xl md:text-[200px] text-zinc-950 font-bold pointer-events-none select-none">
        WORK
      </main>

      {/* Cards */}
        {/* Card 1 */}
      <div className="card absolute w-[300px] h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="card-img h-[80%]">
          <img
            src="https://www.tarunkhiwal.com/images/client-gallery/IMG_3102-12Jul2023005418-medium.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="card-content p-2">
          <p className="text-lg font-thin leading-none tracking-tight">Rekha Ji for Vogue Arabia</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card absolute w-[300px] h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="card-img h-[80%]">
          <img
            src="https://www.tarunkhiwal.com/images/client-gallery/Cosmo%20Kartik%2025.03.20190322_V001-01Dec2022232236-medium.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="card-content p-2">
          <p className="text-lg font-thin leading-none tracking-tight">Kartik Aryan</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card absolute w-[300px] h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="card-img h-[80%]">
          <img
            src="https://www.tarunkhiwal.com/images/client-gallery/IMG_3155-01Dec2022204153-medium.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="card-content p-4">
          <p className="text-lg font-thin leading-none tracking-tight">Sculptures</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card absolute w-[300px] h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="card-img h-[80%]">
          <img
            src="https://www.tarunkhiwal.com/images/client-gallery/adidas%2017-11-1494362-01Dec2022162846-medium.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="card-content p-2">
          <p className="text-lg font-thin leading-none tracking-tight">Adidas V-Kohli</p>
        </div>
      </div>

      {/* Card 5 */}
      <div className="card absolute w-[300px] h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="card-img h-[80%]">
          <img
            src="https://www.tarunkhiwal.com/images/client-gallery/LP%2013.03.20171619%20copy-03Jun2025154055-medium.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="card-content p-2">
          <p className="text-lg font-thin leading-none tracking-tight">Louis Philippe</p>
        </div>
      </div>

  
      
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2  z-0  text-zinc-950 font-thin pointer-events-none select-none">
       <p>Where vision, emotion, and detail come together as art.</p>
      </div>
    </section>
  );
};

export default CardScrollComponent;
