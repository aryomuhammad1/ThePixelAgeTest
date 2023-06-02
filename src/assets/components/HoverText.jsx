import React, { useState } from "react";

const HoverText = ({ text, color, className }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`${className} flex gap-6 mb-4 cursor-pointer`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`border-[${color}] flex justify-center items-center rotate-45 border-2 border-solid rounded-md h-[20px] tablet:h-[18px] laptop:h-[25px] w-[20px] tablet:w-[18px] laptop:w-[25px]`}
      >
        <div
          className={`${
            isHover ? `scale-[2]` : ""
          } transition-transform duration-[400ms] bg-[${color}] rounded-sm h-[60%] w-[60%] inline-block`}
        ></div>
      </div>
      <p className="text-4xl tablet:text-2xl laptop:text-3xl">{text}</p>
    </div>
  );
};

export default HoverText;
