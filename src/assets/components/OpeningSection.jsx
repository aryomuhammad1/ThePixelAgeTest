import React, { forwardRef } from "react";
import HoverText from "./HoverText";

const OpeningSection = forwardRef((props, ref) => {
  const { mainText, mainTextBox, hoverText } = ref;
  return (
    <section className="z-[99] opening-section py-[4%] min-h-[60vh] tablet:min-h-[100vh] w-[100vw] flex justify-center items-center">
      <div
        ref={mainTextBox}
        className="overflow-y-hidden flex flex-col gap-[50px] justify-center items-center w-[100%]"
      >
        <h2
          ref={mainText}
          className="translate-y-[50%] leading-snug opacity-0 text-6xl tablet:text-6xl laptop:text-8xl"
        >
          <span className="translate-x-[-12%] block">
            Honoring Our <br />
          </span>
          <span className="translate-x-[12%] inline-block font-semibold text-8xl tablet:text-7xl laptop:text-9xl">
            Heritage,
          </span>{" "}
          <br />
          <span className="translate-x-[-12%] block">
            Shaping Our <br />
          </span>
          <span className="translate-x-[12%] inline-block font-semibold text-8xl tablet:text-7xl laptop:text-9xl">
            Legacy
          </span>
        </h2>
        <div ref={hoverText} className="opacity-0">
          <HoverText
            className="translate-x-[-10%] tablet:translate-x-[-20%]"
            text={"Trace Our Milestone"}
            color={"#51505B"}
          />
        </div>
      </div>
    </section>
  );
});

export default OpeningSection;
