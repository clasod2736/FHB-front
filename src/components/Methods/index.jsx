import React, { useState, useEffect } from "react";
import "./Methods.css";

import { gifArr } from "../../util/getPreload";

//images
import { MokapotSvg, Frendpress, Handdrip, AeroPress, SyphonSvg, ChemaxSvg } from "../../assets";

//Components
import { Basic, Mokapot, Hario, Frenchpress, Aeropress, Chemax, Syphon } from "./components";

export default function Methods() {
  const [method, setMethod] = useState("");
  const [width, setWidth] = useState(0);

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

  //preloading gifs
  useEffect(() => {
    gifArr(method);
  }, [method]);

  //Get props from child component(all the mothod components)
  const getMethod = (data) => {
    setMethod(data);
  };
  //And setting method component as props from child components
  const settingMethod = () => {
    if (method === "") {
      return <Basic getMethod={getMethod} isMobile={isMobile} />;
    } else if (method === "harioV6") {
      return <Hario getMethod={getMethod} method={method} isMobile={isMobile} />;
    } else if (method === "mokapot") {
      return <Mokapot getMethod={getMethod} method={method} isMobile={isMobile} />;
    } else if (method === "frenchpress") {
      return <Frenchpress getMethod={getMethod} method={method} isMobile={isMobile} />;
    } else if (method === "aeropress") {
      return <Aeropress getMethod={getMethod} method={method} isMobile={isMobile} />;
    } else if (method === "chemax") {
      return <Chemax getMethod={getMethod} method={method} isMobile={isMobile} />;
    } else if (method === "syphon") {
      return <Syphon getMethod={getMethod} method={method} isMobile={isMobile} />;
    }
  };

  //setting Mobile layout
  const settingMobileMethod = () => {
    if (isMobile) {
      return <div className="mtContainer">{settingMethod()}</div>;
    }
  };

  return (
    <div className="mtContainer">
      {settingMobileMethod()}
      <div className="methods" style={{ display: isMobile ? "none" : "flex" }}>
        <p className="title">Choose Your Brewing Method.</p>
        <div className="choiceContainer">
          <div
            className="hario"
            onClick={() => {
              setMethod("harioV6");
            }}
          >
            <svg width="180px" height="180px" viewBox=" 130 160 250 150 " opacity="0.8">
              <Handdrip />
            </svg>
            <p>Hario V6</p>
          </div>
          <div
            className="mokaPot"
            onClick={() => {
              setMethod("mokapot");
            }}
          >
            <svg width="180px" height="180px" viewBox=" 125 165 230 150 " opacity="0.8">
              <MokapotSvg />
            </svg>
            <p>Moka Pot</p>
          </div>
          <div
            className="frenchPress"
            onClick={() => {
              setMethod("frenchpress");
            }}
          >
            <svg width="180px" height="180px" viewBox=" 120 165 230 150" opacity="0.8">
              <Frendpress />
            </svg>
            <p>French Press</p>
          </div>
          <div
            className="aeroPress"
            onClick={() => {
              setMethod("aeropress");
            }}
          >
            <svg width="180px" height="180px" viewBox=" 130 170 220 150" opacity="0.7">
              <AeroPress />
            </svg>
            <p>Aeropress</p>
          </div>
          <div
            className="chemax"
            onClick={() => {
              setMethod("chemax");
            }}
          >
            <svg width="180px" height="180px" viewBox=" 140 160 230 150" opacity="0.7">
              <ChemaxSvg />
            </svg>
            <p>Chemax</p>
          </div>
          <div
            className="syphon"
            onClick={() => {
              setMethod("syphon");
            }}
          >
            <svg width="180px" height="180px" viewBox=" 140 170 210 150" opacity="0.8">
              <SyphonSvg />
            </svg>
            <p>Syphon</p>
          </div>
        </div>
        <span className="choiceContents">{settingMethod()}</span>
      </div>
    </div>
  );
}
