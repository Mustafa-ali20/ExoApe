import React from "react";
import { motion } from "motion/react";
import { Power4 } from "gsap/all";

function Footer() {
  return (
    <div className="w-full h-[80vh] sm:h-[110vh] text-[#E0CCBB] bg-[#080808]  px-8 py-15 sm:px-40 sm:py-20 relative overflow-x-hidden">
      <div className="title w-full h-[20vh] sm:h-[43vh] mb-10 relative z-[999] overflow-hidden">
        <h1 className="text-6xl sm:text-[20vh] sm:tracking-tight">
          <motion.span
            initial={{ rotate: 10, y: "80%", opacity: 0 }} // Changed from 100% to 80%
            whileInView={{ rotate: 0, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: Power4.easeInOut,
              duration: 1,
            }}
            className="inline-block origin-left"
          >
            Our
          </motion.span>
        </h1>
        <h1 className="text-6xl sm:text-[20vh] sm:tracking-tight ">
          <motion.span
            initial={{ rotate: 10, y: "80%", opacity: 0 }} // Changed from 100% to 80%
            whileInView={{ rotate: 0, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: Power4.easeInOut,
              duration: 1,
            }}
            className="inline-block origin-left"
          >
            Story
          </motion.span>
        </h1>
      </div>
      <div className="aspect-video w-56 h-28 sm:w-[140vh] sm:h-[40vh] absolute top-17 left-35 sm:top-40 sm:left-170 z-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="/videos/video-6.mp4"
        ></video>
      </div>
      <div className="w-full">
        <p className="font-medium text-[4.5vw] sm:text-[1.6vw] sm:w-[40%] sm:mt-18 mb-20 text-[#B1A195]">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
        <hr className="border-none h-[1px] w-full rounded-full bg-[#B1A195]" />
      </div>
      <div className="w-full flex gap-30 sm:gap-53 mt-7 sm:mt-17 relative font-medium text-sm sm:text-xl">
        <div className="hidden sm:block ">
          <ul className="space-y-3 text-[#B1A195]">
            <li>
              <a href="#">Willem ll Singel 8</a>
            </li>
            <li>
              <a href="#">6041 HS, Roermond</a>
            </li>
            <li>
              <a href="#">The Netherlands</a>
            </li>
            <li>
              <a href="#">hello@exoape.com</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3 text-[#B1A195]">
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Studio</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3 text-[#B1A195]">
            <li>
              <a href="#">Behance</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Dribble</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <a
          className="absolute text-md sm:text-xl sm:font-normal -top-20 left-0 sm:top-31 sm:left-374 border-b inline-block leading-none sm:pb "
          href="#"
        >
          Our story
        </a>
      </div>
    </div>
  );
}

export default Footer;