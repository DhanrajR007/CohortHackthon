import React from 'react'
import ClickSpark from '../components/Sparc'

const About = () => {
  return (
     <ClickSpark sparkColor='#000'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}>
  <section className="flex flex-col lg:flex-row w-full min-h-screen items-center justify-center gap-10 lg:gap-20 px-6 py-12">
  {/* Image Section */}
  <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/4 h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden border-2">
    <img
      className="w-full h-full object-top object-cover"
      src="https://www.tarunkhiwal.com/images/about-tarun.jpg"
      alt="Tarun Khiwal"
    />
  </div>

  {/* Text Section */}
  <div className="about-tarun w-full sm:w-11/12 lg:w-1/2 space-y-4 text-sm sm:text-base leading-relaxed">
    <p className="font-medium">
      I’m Tarun Khiwal — an artist shaped by tradition, curiosity, and a desire to see beauty where others see routine...
    </p>
    <p className="font-medium">
      What drives me isn’t just capturing a face or a frame — it’s capturing <strong>emotion, depth, identity</strong>...
    </p>
    <p className="font-medium">
      Over the years, I’ve worked with iconic brands like <strong>Sabyasachi</strong>, <strong>L’Oréal</strong>...
    </p>
    <p className="font-medium">
      For me, photography isn’t just art — it’s <strong>devotion</strong>. A dialogue between stillness and soul...
    </p>
    <p className="font-medium">
      Because in the end, creating a photograph — much like building a brand — is not just about visuals...
    </p>
    <p className="font-medium">
      But then again, no image or sentence can fully explain who I am...
    </p>
  </div>
</section>

</ClickSpark>
  )
}

export default About