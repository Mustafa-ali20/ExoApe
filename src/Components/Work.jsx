import { motion } from "motion/react";
import { Power4 } from "gsap/all";
import { div } from "motion/react-client";
import React, { useState } from "react";

function Work() {
  const [elems, setElems] = useState([
    {
      heading: "Ottografie",
      subheading: " Seamless Photographic Journey",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)",
      video: "/videos/otto.mp4",
    },
    {
      heading: "Amaterasu",
      subheading: "Frontier Health Innovation",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/900x1121/filters:quality(90)",
      video: "/videos/amat.mp4",
    },
    {
      heading: "Columbia pictures",
      subheading: " Celebrating a Century of Cinema",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
      video: "/videos/colomb.mp4",
    },
    {
      heading: "Cambium",
      subheading: "Pioneering Sustainable Solutions",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
      video: "/videos/camb.mp4",
    },
  ]);
  const [hoverStates, setHoverStates] = useState([false, false]);

  const handleHover = (index, state) => {
    setHoverStates((prev) => {
      const newStates = [...prev];
      newStates[index] = state;
      return newStates;
    });
  };

  const textVariants = {
    initial: { y: "100%", opacity: 0, rotate: 10 },
    enter: {
      y: "0%",
      opacity: 1,
      rotate: 0,
      transition: { duration: 1, ease: [0.95, 0, 0.9, 1] },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      rotate: -10,
      transition: { duration: 1, ease: [0.7, 0.2, 0.24, 1] },
    },
  };

  return (
    <div className="bg-white w-full sm:h-[393vh] relative px-3 overflow-hidden ">
      <div className="max-w-screen mx-auto sm:pl-[15%] sm:pr-[8%] sm:py-[13%] px-5 py-20 hidden sm:block">
        <div className=" w-full h-full pb-20 overflow-hidden">
          <h1 className="text-[16vw] w-fit h-fit font-medium tracking-tight">
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
              Work
            </motion.span>
          </h1>
        </div>

        <div className="images relative w-full h-[260vh] ">
          <div
            className="image1 w-[41vw] h-[100vh] absolute top-0 left-0"
            onMouseEnter={() => handleHover(0, true)}
            onMouseLeave={() => handleHover(0, false)}
          >
            <div className="w-full h-full overflow-hidden relative group">
              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                data-scroll
                data-scroll-speed="-.1"
                className="w-full h-full object-cover absolute z-20"
                src="https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover absolute z-10"
                src="/videos/otto.mp4"
              ></video>
            </div>

            <h1 className="mt-4 font-medium text-lg relative z-30 overflow-hidden ">
              <motion.span
                initial="initial"
                animate={hoverStates[0] ? "enter" : "exit"}
                variants={textVariants}
                className="inline-block origin-left"
              >
                Ottografie -{" "}
                <span className="text-zinc-400">
                  Seamless Photographic Journey
                </span>
              </motion.span>
            </h1>
          </div>

          <div
            className="image2 absolute w-[26vw] h-[65vh] top-130 left-237"
            onMouseEnter={() => handleHover(1, true)}
            onMouseLeave={() => handleHover(1, false)}
          >
            <div className="w-full h-full overflow-hidden relative group">
              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                data-scroll
                data-scroll-speed="-.1"
                className="w-full h-full object-cover absolute z-20"
                src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/900x1121/filters:quality(90)"
                alt=""
              />
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover absolute z-10"
                src="/videos/amat.mp4"
              ></video>
            </div>

            <h1 className="mt-4 font-medium text-lg relative z-30 overflow-hidden">
              <motion.span
                initial="initial"
                animate={hoverStates[1] ? "enter" : "exit"}
                variants={textVariants}
                className="inline-block origin-left"
              >
                Amaterasu -{" "}
                <span className="text-zinc-400">
                  Frontier Health Innovation
                </span>
              </motion.span>
            </h1>
          </div>

          <div
            className="image3 absolute w-[34vw] h-[88vh] top-352 left-140"
            onMouseEnter={() => handleHover(2, true)}
            onMouseLeave={() => handleHover(2, false)}
          >
            <div className="w-full h-full overflow-hidden relative group">
              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                data-scroll
                data-scroll-speed="-.1"
                className=" w-full h-full object-cover absolute z-10"
                src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />

              <video
                autoPlay
                muted
                loop
                className=" w-full h-full object-cover absolute "
                src="/videos/colomb.mp4"
              ></video>
            </div>

            <h1 className="mt-4 font-medium text-lg relative z-30 overflow-hidden">
              <motion.span
                initial="initial"
                animate={hoverStates[2] ? "enter" : "exit"}
                variants={textVariants}
                className="inline-block origin-left"
              >
                Columbia pictures -{" "}
                <span className="text-zinc-400">
                  Celebrating a Century of Cinema
                </span>
              </motion.span>
            </h1>
          </div>

          <div
            className="image4 w-[20vw] h-[50vh] absolute top-499"
            onMouseEnter={() => handleHover(3, true)}
            onMouseLeave={() => handleHover(3, false)}
          >
            <div className="w-full h-full overflow-hidden relative group">
              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                data-scroll
                data-scroll-speed="-.1"
                className=" w-full h-full object-cover absolute z-10"
                src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
                alt=""
              />
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover absolute "
                src="/videos/camb.mp4"
              ></video>
            </div>
            <h1 className="mt-4 font-medium text-lg relative z-30 overflow-hidden">
              <motion.span
                initial="initial"
                animate={hoverStates[3] ? "enter" : "exit"}
                variants={textVariants}
                className="inline-block origin-left"
              >
                Cambium -{" "}
                <span className="text-zinc-400">
                  Pioneering Sustainable Solutions
                </span>
              </motion.span>
            </h1>
          </div>
          <div className="absolute discription h-[28vh] w-[26vw] top-5 left-237">
            <div className="flex gap-2">
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4.5"
              >
                <path
                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                  fill="currentColor"
                />
              </svg>
              <h1 className="font-medium text-xl">Featured Projects</h1>
            </div>
            <p className="text-[1.7vw] mt-13 leading-11">
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </p>
          </div>
        </div>
      </div>

      <div className="mobile w-full relative px-3 block sm:hidden">
        <div className="max-w-screen mx-auto sm:px-10 px-5 py-20">
          <div className="featured flex gap-1.5">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3"
              data-v-669b4a84=""
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
                data-v-669b4a84=""
              ></path>
            </svg>
            <h3>Featured Projects</h3>
          </div>
          <h1 className="text-6xl my-6">Work</h1>
          <p className="font-medium">
            Highlights of cases that we
            <span className="inline lg:hidden">
              <br />
            </span>
            passionately built with forward-thinking clients and friends over
            the years.
          </p>
          <div className="elems mt-10 sm:flex sm:flex-wrap sm:gap-2 ">
            {elems.map((items, index) => {
              return (
                <div key={index} className="elem w-full mb-9 sm:w-[48%]">
                  <div className="video w-full h-[104vw] relative overflow-hidden">
                    <img
                      className="hidden sm:block w-full h-full object-cover"
                      src={items.image}
                      alt=""
                    />
                    <video
                      autoPlay
                      muted
                      loop
                      className="block sm:hidden w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src={items.video}
                    ></video>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-md font-semibold">{items.heading}</h3>
                    <p className="text-sm text-zinc-600">{items.subheading}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
