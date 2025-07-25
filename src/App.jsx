
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";


import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import Mainroutes from "./routes/MainRoute";
import ClickSpark from "./components/Sparc";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);
  return (
    <>
  
<ClickSpark
  sparkColor='#000'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>  <Navbar />

      <Mainroutes />
      <Footer />
  {/* Your content here */}
</ClickSpark>
    
    </>
  );
};

export default App;
