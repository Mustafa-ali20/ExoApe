import React from "react";
import { motion } from "motion/react";
import { Power4 } from "gsap/all";

function Landing() {
  return (
    <div className="w-full h-[150vh] sm:h-[290vh] ">
      <div className="picture w-full h-full overflow-hidden">
        <img
        data-scroll
        data-scroll-speed="-1"
          src="/Bg-image.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full absolute top-0">
        <div className="absolute top-0 text max-w-screen-2xl h-full mx-auto px-5 sm:px-10 text-white">
          <div className="para mt-72 sm:mt-[40%] sm:pl-[9%] font-[TWKLausanne400]">
            <div className="hidden sm:block">
              <p className="text-lg sm:text-3xl sm:max-w-[50.7%] leading-snug overflow-hidden">
                <motion.span
                  initial={{ rotate: 10, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{ ease: Power4.easeInOut, duration: 1.5 }}
                  className="inline-block origin-left"
                >
                  Global digital design studio partnering with
                </motion.span>
              </p>
              <p className="text-lg sm:text-3xl sm:max-w-[50.7%] leading-snug overflow-hidden">
                <motion.span
                  initial={{ rotate: 10, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                    delay: 0.05,
                  }}
                  className="inline-block origin-left"
                >
                  brands and businesses that create exceptional
                </motion.span>
              </p>
              <p className="text-lg sm:text-3xl sm:max-w-[50.7%] leading-snug overflow-hidden">
                <motion.span
                  initial={{ rotate: 10, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                    delay: 0.1,
                  }}
                  className="inline-block origin-left"
                >
                  experiences where people live, work, and unwind.
                </motion.span>
              </p>
            </div>

            <div className="block sm:hidden">
              <p className="text-lg leading-snug overflow-hidden">
                <motion.span
                  initial={{ rotate: 10, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                    delay: 0.05,
                  }}
                  className="inline-block origin-left"
                >
                  Global digital design studio partnering
                </motion.span>
              </p>
              <p className="text-lg leading-snug overflow-hidden">
                <motion.span
                  initial={{ rotate: 10, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                    delay: 0.1,
                  }}
                  className="inline-block origin-left"
                >
                  with brands and businesses that create
                </motion.span>
              </p>
              <p className="text-lg leading-snug overflow-hidden">
                <motion.span
                  initial={{ rotate: 10, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                    delay: 0.1,
                  }}
                  className="inline-block origin-left"
                >
                  exceptional experiences where people
                </motion.span>
              </p>
              <p className="text-lg leading-snug overflow-hidden">
                <motion.span
                  initial={{ rotate: 10, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                    delay: 0.2,
                  }}
                  className="inline-block origin-left"
                >
                  live, work, and unwind.
                </motion.span>
              </p>
            </div>
          </div>
          <div className="headings w-[90vw] h-[114vh] mt-5 sm:mt-26 sm:font-[TWKLausanne300] sm:pl-[7%]">
            {["Digital", "Design", "Experience"].map((item, index) => (
              <h1 key={index} className="text-6xl tracking-tighter leading-16.5 sm:leading-94 font-[TWKLausanne500] sm:text-[37vh] overflow-hidden">
                <motion.span
                  initial={{ rotate: 10, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 2,
                    delay: index * 0.05,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
            ))}
          </div>
          <div className="para2  -mt-90 sm:mt-55 font-[TWKLausanne400] sm:w-[50%] sm:pl-[9%]">
            <p className="sm:text-3xl ">
              We help experience-driven companies thrive by making audience feel
              the refined intricacies of their brand and product in the digital
              space. Unforgettable journeys start with a click.
            </p>
            <a
              className="sm:text-xl sm:border-b-[1.2px] border-b-[0.3px] border-zinc-100 mt-4 sm:mt-20 inline-block "
              href="#"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;