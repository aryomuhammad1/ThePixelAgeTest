import React, { useEffect } from "react";
import { gsap } from "gsap";

const Heading = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heading-word", {
        y: "100%",
        opacity: 0,
        ease: "sine",
        stagger: 0.2,
      });
    }, "#heading");
    return () => ctx.revert();
  }, []);

  return (
    <h1
      id="heading"
      className="heading absolute w-[100vw] font-medium text-[rgb(81,80,91)] text-6xl tablet:text-8xl laptop:text-9xl font-lato left-[5%] tablet:left-[30%] laptop:left-[50%] top-[50%] translate-y-[-100%] tablet:translate-x-[-20%] laptop:translate-x-[-35%]"
    >
      <span className="inline-block overflow-y-hidden font-extrabold">
        <span className="inline-block mr-[10px] heading-word">60 </span>
        <span className="inline-block mr-[10px] heading-word">YEARS </span>
        <span className="inline-block mr-[10px] heading-word">OF </span>
      </span>
      <br />
      <span className="text-[rgb(230,156,21)]">
        <span className="inline-block mr-[10px] heading-word">BUILDING </span>
        <span className="inline-block mr-[10px] heading-word">ICONS, </span>
      </span>
      <br />
      <span>
        <span className="inline-block mr-[10px] heading-word">SHAPING </span>
        <span className="inline-block mr-[10px] heading-word">SKYLINES </span>
      </span>
      <br />
    </h1>
  );
};

export default Heading;
