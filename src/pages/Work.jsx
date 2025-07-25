import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assuming you have a data.js file with your content
import { data } from "../data.js";
import { Link } from "react-router-dom";

const Work = () => {
  const pinnedSectionRef = useRef(null);
  const progressBarRef = useRef(null);
  const imagesRef = useRef([]);
  const lastCycleRef = useRef(0);

  // Add images to ref array
  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scrolling

    const pinnedSection = pinnedSectionRef.current;
    const progressBar = progressBarRef.current;
    const images = imagesRef.current;
    const pinnedHeight = window.innerHeight * 10;

    function animateImageEntry(img) {
      gsap.fromTo(
        img,
        {
          scale: 1.25,
          clipPath: "polygon(0% 100% ,100% 100% , 100% 100% , 0% 100%)",
          opacity: 0,
        },
        {
          scale: 1,
          clipPath: "polygon(0% 0% ,100% 0% , 100% 100% , 0% 100%)",
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        }
      );
      gsap.fromTo(
        img.querySelector("img"),
        {
          filter: "contrast(2) brightness(5)",
        },
        {
          filter: "contrast(1) brightness(1)",
          duration: 1,
          ease: "power2.inOut",
        }
      );
    }

    function animateImageExitForward(img) {
      gsap.to(img, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    }

    function animateImageExitReverse(img) {
      gsap.to(img, {
        scale: 1.25,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(img.querySelector("img"), {
       
        duration: 1,
        ease: "power2.inOut",
      });
    }

    function updateInfoContent(index) {
      const infoItems = document.querySelectorAll(".info > div p");
      const link = document.querySelector(".info .link a");
      infoItems.forEach((item) => (item.innerHTML = ""));
      link.setAttribute("href", "#");

      const item = data[index];
      const contentArray = [item.title, item.tagline, item.year, item.tag];

      infoItems.forEach((element, i) => {
        if (i < 4) {
          const letters = String(contentArray[i]).split("");
          letters.forEach((letter, idx) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.opacity = 0;
            element.appendChild(span);

            gsap.to(span, {
              opacity: 1,
              duration: 0.01,
              delay: 0.03 * idx,
              ease: "power1.inOut",
            });
          });
        }
      });

      link.setAttribute("href", item.link);

      const linkText = link.textContent;
      link.innerHTML = "";
      linkText.split("").forEach((letter, idx) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = 0;
        link.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          duration: 0.01,
          delay: 0.03 * idx,
          ease: "power1.inOut",
        });
      });
    }

    // Initialize first content and image
    updateInfoContent(0);
    animateImageEntry(images[0]);

    const scrollTrigger = ScrollTrigger.create({
      trigger: pinnedSection,
      start: "top top",
      end: `+=${pinnedHeight}`,
      pin: true,
      pinSpacing: true,
      scrub: 0.1,
      onUpdate: (self) => {
        const totalProgress = self.progress * 5;
        const currentCycle = Math.floor(totalProgress);
        const cycleProgress = (totalProgress % 1) * 100;

        if (currentCycle < images.length) {
          const currentImage = images[currentCycle];
          const scale = 1 - (0.25 * cycleProgress) / 100;
          gsap.to(currentImage, {
            scale: scale,
            duration: 0.1,
            overwrite: "auto",
          });

          if (currentCycle !== lastCycleRef.current) {
            // When scrolling forward
            if (self.direction > 0) {
              if (lastCycleRef.current < images.length) {
                animateImageExitForward(images[lastCycleRef.current]);
              }
              if (currentCycle < images.length) {
                animateImageEntry(images[currentCycle]);
                updateInfoContent(currentCycle);
              }
            }
            // When scrolling backward
            else {
              if (currentCycle < images.length) {
                animateImageEntry(images[currentCycle]);
                updateInfoContent(currentCycle);
              }
              if (lastCycleRef.current < images.length) {
                // Only animate exit if we're moving to a previous image
                if (lastCycleRef.current > currentCycle) {
                  animateImageExitReverse(images[lastCycleRef.current]);
                }
              }
            }
            lastCycleRef.current = currentCycle;
          }
        }

        if (currentCycle < 5) {
          gsap.to(progressBar, {
            height: `${cycleProgress}%`,
            duration: 0.1,
            overwrite: true,
          });
          if (cycleProgress < 1 && self.direction > 0) {
            gsap.set(progressBar, { height: "0%" });
          } else if (cycleProgress > 99 && self.direction < 0) {
            gsap.set(progressBar, { height: "100%" });
          }
        } else {
          gsap.to(progressBar, {
            height: self.direction > 0 ? "100%" : `${cycleProgress}%`,
            duration: 0.1,
            overwrite: true,
          });
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="overflow-x-hidden overflow-hidden ">
      <section className="pinned " ref={pinnedSectionRef}>
        <div className="info ">
          <div className="title ">
            <p></p>
          </div>
          <div className="tagline ">
            <p></p>
          </div>
          <div className="year ">
            <p></p>
          </div>
          <div className="tag ">
            <p></p>
          </div>
          <div className="link">
            <Link className="a" to={"/coming"}>Explore</Link>
            
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress " ref={progressBarRef}></div>
        </div>
        <div className="img s-img" ref={(el) => addToRefs(el)}>
          <img
            src="https://www.tarunkhiwal.com/images/project-gallery/1-04Feb2025134211-medium.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="img s-img" ref={(el) => addToRefs(el)}>
          <img
            src="https://www.tarunkhiwal.com/images/client-gallery/11-12Feb2025071827-medium.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="img s-img" ref={(el) => addToRefs(el)}>
          <img
            src="https://www.tarunkhiwal.com/images/project-gallery/Kohler%2009.02.20222164f-02Dec2022000752-medium.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="img s-img" ref={(el) => addToRefs(el)}>
          <img
            src="https://www.tarunkhiwal.com/images/client-gallery/Srk1-04Feb2025084550-medium.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="img  s-img" ref={(el) => addToRefs(el)}>
          <img
            src="https://www.tarunkhiwal.com/images/client-gallery/4-14Dec2022105336-medium.jpg"
            alt=""
            className=""
          />
        </div>
      </section>
    </div>
  );
};

export default Work;
