import React, { useEffect, useState } from "react";
import "./HomeBtn.css";

import { useNavigate } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";

export default function HomeBtn() {
  const navigate = useNavigate();

  const [width, setWidth] = useState(0);

  //Mobile & Tab width setup
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

  const showHomeBtn = width <= 1278;

  return (
    <div className="homebtn--container" style={{ display: showHomeBtn ? "flex" : "none" }}>
      <div className="homebtn--btn">
        <button
          className="homeBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          <AiFillHome />
        </button>
      </div>
    </div>
  );
}
