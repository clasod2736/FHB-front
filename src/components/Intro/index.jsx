import React, { useState, useEffect } from "react";
import "./Intro.css";
import Logo from "./Logo";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getRecentbrews } from "../../api/getRecentbrew";

export default function Intro() {
  const isLogIn = useSelector((state) => state.logIn);
  const userEmail = useSelector((state) => state.userEmail);
  const [recentBrew, setRecentBrew] = useState(null);

  const navigate = useNavigate();

  const heroku = process.env.REACT_APP_HEROKU_URL;

  //fetch data for get recent brew data.
  useEffect(() => {
    if (isLogIn) {
      const fetchedRecentBrew = getRecentbrews(isLogIn, userEmail);
      setRecentBrew(fetchedRecentBrew);
      console.log("Recent brew loaded.");
    } else if (!isLogIn) {
    }
  }, [isLogIn, userEmail, heroku]);

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
          {settingButtons()}
        </div>
      </div>
    </div>
  );
}
