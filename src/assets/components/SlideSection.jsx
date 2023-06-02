import React, { useEffect, useRef } from "react";

import OpeningSection from "./OpeningSection";
import ImageSection from "./ImageSection";
import DescriptionSection from "./DescriptionSection";
import VideoSection from "./VideoSection";

import gsapMathcMedia, { mm } from "../../utils";

const SlideSection = () => {
  // Refs
  const mainText = useRef(null);
  const mainTextBox = useRef(null);
  const descRef = useRef(null);
  const slideSection = useRef(null);
  const hoverText = useRef(null);
  const videoRef = useRef(null);
  const videoParentRef = useRef(null);
  const videoSecRef = useRef(null);

  useEffect(() => {
    // Refs Elements
    const textEl = mainText.current;
    const textBoxEl = mainTextBox.current;
    const descSecEl = descRef.current;
    const mainSecEl = slideSection.current;
    const hoverTextEl = hoverText.current;
    const videoEl = videoRef.current;
    const videoParentEl = videoParentRef.current;
    const videoSecEl = videoSecRef.current;

    // Implement animations from utils folder
    gsapMathcMedia({
      textEl,
      textBoxEl,
      descSecEl,
      mainSecEl,
      hoverTextEl,
      videoEl,
      videoParentEl,
      videoSecEl,
    });

    // Clear the animation
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={slideSection}
      className="bg-[rgb(226,226,229)] text-[rgb(81,80,91)]"
    >
      <OpeningSection
        ref={{
          mainText: mainText,
          mainTextBox: mainTextBox,
          hoverText: hoverText,
        }}
      />
      <ImageSection />
      <DescriptionSection ref={{ descRef: descRef }} />
      <VideoSection
        ref={{
          videoSecRef: videoSecRef,
          videoParentRef: videoParentRef,
          videoRef: videoRef,
        }}
      />
    </section>
  );
};

export default SlideSection;
