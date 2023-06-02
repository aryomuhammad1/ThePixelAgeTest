import React, { forwardRef } from "react";
import videoSrc from "../videos/video.mp4";

import HoverText from "./HoverText";

const VideoSection = forwardRef((props, ref) => {
  const { videoSecRef, videoParentRef, videoRef } = ref;

  return (
    <section
      ref={videoSecRef}
      className="min-h-[180vh] w-[100vw] overflow-y-hidden"
    >
      <div
        ref={videoParentRef}
        className="relative min-h-[100vh] max-w-[100vw]"
      >
        <div className="gap-[28px] text-white absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[2]">
          <p className="font-thin text-7xl tablet:text-8xl">
            Celebrate <span className="font-semibold">With Us</span>
          </p>
          <HoverText text={"Watch Our Celebration"} color={"#fff"} />
        </div>
        <div
          ref={videoRef}
          className="z-[0] h-[100%] relative opacity-[0.2] scale-0"
        >
          <video autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Sorry, your browser does not support this video
          </video>
        </div>
      </div>
    </section>
  );
});

export default VideoSection;
