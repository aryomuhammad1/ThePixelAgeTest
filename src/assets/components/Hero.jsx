import React from "react";
import Heading from "./Heading";
import HeroLottie from "./HeroLottie";

const Hero = () => {
  return (
    <div className="hero bg-[url('./src/assets/images/24.webp')] bg-cover bg-center h-[100vh] max-w-[100vw] relative">
      <Heading />
      <HeroLottie />
    </div>
  );
};

export default Hero;
