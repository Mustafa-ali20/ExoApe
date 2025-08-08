import gsap from "gsap";
import { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function PlayReel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(max-width: 639px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: "0 0",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(
        videodiv.current,
        {
          width: "80%",
          height: "80%",
          y: "-40%",
          ease: Power4.easeInOut,
        },
        "a"
      )
        .to(
          play.current,
          {
            x: "-126.5%",
            ease: Power4.easeInOut,
          },
          "a"
        )
        .to(
          reel.current,
          {
            x: "125%",
            ease: Power4.easeInOut,
          },
          "a"
        );
    });

    mm.add("(min-width: 640px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: "0 0",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(
        videodiv.current,
        {
          width: "105%",
          height: "105%",
          ease: Power4.easeInOut,
        },
        "a"
      )
        .to(
          play.current,
          {
            x: "95%",
            ease: Power4.easeInOut,
          },
          "a"
        )
        .to(
          reel.current,
          {
            x: "-95%",
            ease: Power4.easeInOut,
          },
          "a"
        );
    });

    return () => mm.revert(); // Clean up on unmount
  }, []);
  return (
    <div
      ref={parent}
      className="w-full h-screen sm:h-[101vh] overflow-hidden relative bg-black "
    >
      <div
        ref={videodiv}
        className="w-40 sm:w-[24vw] aspect-video fixed sm:absolute top-[43%] sm:top-[51%] left-1/2 -translate-x-1/2 sm:-translate-y-[50%] sm:mt-[-2vh] overflow-hidden opacity-30"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
          src="/videos/playreel.mp4"
        ></video>
      </div>
      <div className="overlay absolute w-full sm:h-[100%] h-full text-white flex flex-col justify-between sm:justify-start py-20 ">
        <div className="w-full flex items-center justify-center gap-2.5 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 sm:w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1 className="text-sm font-medium sm:text-lg text-zinc-200">
            Work in motion
          </h1>
        </div>
        <h1 className="w-full flex justify-center gap-20 sm:gap-185 items-center sm:mt-60 ">
          <div
            ref={play}
            className="text-6xl font-medium sm:text-[10vw] text-zinc-200"
          >
            Play
          </div>
          <div
            ref={reel}
            className="text-6xl font-medium sm:text-[10vw] text-zinc-200"
          >
            Reel
          </div>
        </h1>

        <p className="text-center px-10 text-sm font-medium sm:text-lg text-zinc-200 leading-relaxed sm:mt-60">
          Our work is best experienced in motion. Don't
          <br />
          <span className="inline-block pl-6">
            forget to put on your headphones.
          </span>
        </p>
      </div>
    </div>
  );
}

export default PlayReel;
