import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Linear, Power4, ScrollTrigger } from "gsap/all";
import { motion } from "motion/react";

function Images() {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const spreadRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1,
      },
    });

    tl.to(
      first.current,
      {
        x: isMobile ? "70%" : "130%",
        ease: Linear.easeNone,
      },
      "a"
    )
      .to(
        second.current,
        {
          x: isMobile ? "-45%" : "-45%",
          ease: Power4.easeOut,
        },
        "a"
      )
      .to(
        third.current,
        {
          x: isMobile ? "-50%" : "-70%",
          ease: Power4.easeOut,
        },
        "a"
      )
      .to(
        fourth.current,
        {
          x: isMobile ? "50%" : "90%",
          ease: Power4.easeOut,
        },
        "a"
      );
    if (!isMobile) {
      gsap.fromTo(
        spreadRef.current,
        { y: 100 },
        {
          y: "-30%",
          ease: "power2.out",
          scrollTrigger: {
            trigger: spreadRef.current,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1,
          // Add these to prevent glitches
          refreshPriority: -1,
          invalidateOnRefresh: true,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={parent} className="w-full bg-white">
      {/* Images Section */}
      <div className="w-full h-[70vh] sm:h-[150vh] flex items-center justify-center overflow-hidden pt-22 sm:pt-60 ">
        <div className="w-[38%] h-full sm:w-[26%] sm:h-[110%] relative z-[999]">
          <div
            ref={first}
            className="absolute w-18 h-[14vh] sm:w-48 sm:h-[34vh] -right-10 top-6 sm:-right-23"
          >
            <img
              className="object-cover w-full h-full"
              src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
              alt=""
            />
          </div>
          <div
            ref={second}
            className="absolute w-30 h-[10.5vh] sm:w-[26vw] sm:h-[30vh] right-29 top-22 sm:right-84 sm:top-75 aspect-video"
          >
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              src="/videos/home-news-diesel-be-a-follower.mp4"
            ></video>
          </div>
          <div
            ref={third}
            className="absolute w-27 h-[14.5vh] sm:w-[27vw] sm:h-[35vh] right-30 top-55 sm:right-90 sm:top-200"
          >
            <img
              className="object-cover w-full h-full"
              src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"
              alt=""
            />
          </div>
          <div
            ref={fourth}
            className="absolute w-30 h-[20vh] sm:w-[52vh] sm:h-[52vh] -right-20 top-54 aspect-video sm:-right-77 sm:top-188"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              src="/videos/news-rino-pelle.mp4"
            ></video>
          </div>
          <img
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
            alt=""
          />
        </div>
      </div>

      {/* Text Section */}
      <div ref={spreadRef} className="w-fit mx-auto pb-20 sm:pb-30 relative ">
        <div className="max-w-screen-2xl px-5 sm:px-10">
          <div className="flex items-center justify-center gap-2.5">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5"
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-sm font-medium sm:text-xl">In the media</h1>
          </div>

          <div className="heading mt-6 text-center">
            <h1 className="text-7xl sm:text-[22vh] tracking-tighter h-[12.5vh] sm:h-[25vh] overflow-hidden">
              <motion.span
                initial={{ rotate: 10, y: "100%", opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1, y: 0 }}
                viewport={{ once: true,  }}
                transition={{
                  ease: Power4.easeInOut,
                  duration: 1,
                  
                }}
                className="inline-block origin-left"
              >
                Spread
              </motion.span>
            </h1>
                 <h1 className="text-7xl sm:text-[22vh] tracking-tighter h-[11vh] sm:h-[25vh] overflow-hidden">
              <motion.span
                initial={{ rotate: 10, y: "100%", opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: Power4.easeInOut,
                  duration: 1,
                 
                }}
                className="inline-block origin-left"
              >
                the News
              </motion.span>
            </h1>

            <p className="text-center sm:text-3xl mx-auto w-[69%] sm:w-[40%] mt-7 sm:mt-17 font-medium sm:font-normal">
              Find out more about our work on these leading design and
              technology platforms.
            </p>

            <a
              className="sm:text-xl sm:font-semibold font-medium border-b-[1px] mt-5 sm:mt-15 inline-block leading-none sm:leading-6"
              href="#"
            >
              Browse all news
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;