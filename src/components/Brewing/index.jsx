import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Brewing.css";
import StuffList from "./components/StuffList";
import Steps from "./components/Steps";

import FinalLogo from "../../assets/img/finalLogo2.jpg";

import { preloadImg } from "../../util/getPreload";

export default function Brewing() {
  const [width, setWidth] = useState(0);
  const [startBrewingMobile, setStartBrewingMobile] = useState(false);

  //Image preolading for next page
  useLayoutEffect(() => {
    preloadImg(FinalLogo);
  }, []);

  //Mobile setup
  const currentWidth = window.innerWidth;

  useEffect(() => {
    const resizeListener = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeListener);
    window.addEventListener("load", resizeListener);
    setWidth(currentWidth);

    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("load", resizeListener);
    };
  }, [width, currentWidth]);

  const isMobile = width <= 766;

  //get mobile props from child component
  const getBrewMobile = (value) => {
    setStartBrewingMobile(value);
  };

  //mobile components
  const settingBrewingMobile = () => {
    if (!isMobile) {
      return;
    } else if (isMobile && !startBrewingMobile) {
      return (
        <div className="brewingMobile">
          <StuffList isMobile={isMobile} getBrewMobile={getBrewMobile} />
        </div>
      );
    } else if (startBrewingMobile) {
      return (
        <div className="brewingMobile">
          <Steps isMobile={isMobile} />
        </div>
      );
    }
  };

  return (
    <div className="brewingContainer">
      <div className="brewing" style={{ display: isMobile ? "none" : "flex" }}>
        <StuffList isMobile={isMobile} />
        <Steps isMobile={isMobile} />
      </div>
      {settingBrewingMobile()}
    </div>
  );
}
