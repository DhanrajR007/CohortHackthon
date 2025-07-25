import React from 'react';
import ImageTrail from '../components/ImageSlide';
import ClickSpark from '../components/Sparc';

const Contact = () => {
  return (
    <ClickSpark sparkColor='#000'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}>
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Background image trail */}
      <div className='absolute inset-0 z-1'>
        <div className="relative h-full overflow-hidden">
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
      </div>

      {/* Text content over image - changed z-1 to z-10 for proper layering */}
      <div className="absolute -top-30 pt-5  z-0 flex flex-col justify-center items-start h-full  backdrop-blur-sm">
        <h2 className="uppercase leading-none tracking-tight font-bold text-lg md:text-5xl">
          Let's start the conversation
        </h2>
        <h1 className="uppercase leading-none tracking-tight font-bold text-5xl md:text-7xl">
          Great design isn't just
        </h1>
        <h1 className="uppercase leading-none tracking-tight font-bold text-4xl md:text-7xl">
          about what you make – it's
        </h1>
        <h1 className="uppercase leading-none tracking-tight font-bold text-5xl md:text-7xl mb-10">
          about who you make it with.
        </h1>

      
      </div>
        <div className="flex flex-col gap-4 max-w-xl absolute z-2 bottom-10 right-10 px-2">
          <p className="text-md font-medium capitalize w-2/3">
            I partner with those who value thoughtful, intentional work that speaks with purpose. If you're ready to be heard, I'm ready to listen.
          </p>

          {/* Changed these to proper anchor tags with hover effects */}
          <a 
            href="mailto:ojifojdo@gmail.com" 
            className="text-xl uppercase font-bold border-t-2 pt-2 hover:underline inline-block"
          >
           tarunkhiwal@gmail.com
          </a>

          <a 
            href="#" 
            className="text-xl uppercase font-bold border-t-2 pt-2 hover:underline inline-block"
          >
            Schedule a call
          </a>
        </div>
    </section>
    </ClickSpark>
  );
};

export default Contact;