import React, { useState, useEffect } from "react";
import "./Intro.css";
import Logo from "./Logo";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Intro() {
  const isLogIn = useSelector((state) => state.logIn);
  const userEmail = useSelector((state) => state.userEmail);
  const [recentBrew, setRecentBrew] = useState(null);

  const navigate = useNavigate();

  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  const heroku = `${PROXY}${process.env.REACT_APP_HEROKU_URL}`;

  //fetch data for get recent brew data.
  useEffect(() => {
    if (isLogIn) {
      async function fetchDatas() {
        const serverUrl = `${heroku}/getOldbrews`;

        try {
          const response = await axios.get(serverUrl, {
            params: {
              email: userEmail,
            },
          });
          const fetchedBrews = response.data;

          //state and sort recent brew data.
          const sortedBrews = fetchedBrews.sort((a, b) => b.order - a.order);
          setRecentBrew(sortedBrews[0]);
        } catch (error) {
          console.log(error);
        }
      }
      fetchDatas();
    } else if (!isLogIn) {
      setRecentBrew(null); // Set recentBrew to null
    }
  }, [isLogIn, userEmail]);

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
