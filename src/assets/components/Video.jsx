import React, { forwardRef, useEffect } from "react";
import videoSrc from "../videos/video.mp4";
import HoverText from "./HoverText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Video = forwardRef(function (props, ref) {
  //   useEffect(() => {
  //     const ctx = gsap.context(() => {
  //       gsap.registerPlugin(ScrollTrigger);
  //     });
  //     return () => ctx.revert();
  //   }, []);

  return (
    // <section className="relative flex justify-center items-center max-h-[30vh] max-w-[30vw]">
    <div
      ref={ref}
      className="translate-y-[100%] relative max-h-[100] max-w-[100vw]"
    >
      <div className="gap-[28px] text-white absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[2]">
        <p className="font-thin text-8xl">
          Celebrate <span className="font-semibold">With Us</span>
        </p>
        <HoverText text={"Watch Our Celebration"} color={"#fff"} />
      </div>
      <div className="z-[0] opacity-0">
        <video width="100%" autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Sorry, your browser does not support this video
        </video>
      </div>
    </div>
  );
});

export default Video;
