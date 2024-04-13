import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Intro.css";
import Logo from "./Logo";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getRecentbrews } from "../../api/getRecentbrew";
import { preloadingMenuImg } from "../../util/getPreload";

export default function Intro() {
  const isLogIn = useSelector((state) => state.logIn);
  const userEmail = useSelector((state) => state.userEmail);
  const [recentBrew, setRecentBrew] = useState(null);
  const [showBtns, setShowBtns] = useState(false);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    preloadingMenuImg();
  });

  //fetch data for get recent brew data.
  useEffect(() => {
    const fetchData = async () => {
      if (isLogIn) {
        const fetchedRecentBrew = await getRecentbrews(userEmail);
        console.log(fetchedRecentBrew);
        // setRecentBrew(fetchedRecentBrew);
      }
    };
    fetchData();
  }, [isLogIn, userEmail]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBtns(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  //Set right Buttons with loggedIn or not
  const settingButtons = () => {
    if (!isLogIn) {
      return (
        <div className="loginContainer">
          <Link className="login" to={"/login"}>
            Login!
          </Link>
        </div>
      );
    } else {
      return (
        <div className="expContainer">
          <button
            className="exploreBtn"
            onClick={() => {
              if (isLogIn) {
                recentBrew !== null
                  ? navigate(
                      `/menu/${recentBrew.menuName}/method/${recentBrew.methodName}/recipe/${recentBrew.water}/${recentBrew.coffee}/${recentBrew.roasting}/${recentBrew.grind}/brewing`
                    )
                  : alert("You don't have Any History...make a New Brew!");
              }
            }}
          >
            Make Last Brew!
          </button>
          <Link to={isLogIn ? "/menu" : "/login"} className="exploreBtn">
            Make New Brew!
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="introContainer">
      <div className="logoContainer">
        <div className="gate">
          <Logo />
          {showBtns ? settingButtons() : ""}
        </div>
      </div>
    </div>
  );
}
