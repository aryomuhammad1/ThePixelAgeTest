import React from "react";
import leftImg1 from "../images/side-519x788.jpg";
import leftImg2 from "../images/side-708x531.jpg";
import rightImg1 from "../images/side-816x459.jpg";
import rightImg2 from "../images/side-526x788.jpg";

const ImageSection = () => {
  return (
    <section className="hidden tablet:flex flex-1 justify-between max-w-[100vw] relative ">
      <div className="left-slide w-[28%] flex flex-col gap-[350px] h-[200%]">
        <img src={leftImg1} alt="" />
        <img src={leftImg2} alt="" />
      </div>
      <div className="right-slide w-[28%] flex flex-col gap-[400px] h-[150%]">
        <img className="mt-[650px]" src={rightImg1} alt="" />
        <img src={rightImg2} alt="" />
      </div>
    </section>
  );
};

export default ImageSection;
