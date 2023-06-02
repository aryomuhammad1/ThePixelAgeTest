import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import bigHeroImg from "../videos/lottie-1366x350.json";
import smallHeroImg from "../videos/lottie-428x450.json";

const HeroLottie = () => {
  const [bigHero, setBigHero] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 650 && bigHero) {
        console.log("mustBeSmall", bigHero);
        setBigHero(false);
      }
      if (window.innerWidth > 650 && !bigHero) {
        console.log("mustBeBig", bigHero);
        setBigHero(true);
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="absolute bottom-0 left-0 right-0">
      <Lottie animationData={bigHero ? bigHeroImg : smallHeroImg} />
    </div>
  );
};

export default HeroLottie;
