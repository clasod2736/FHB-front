import React, { useEffect, useState } from "react";
import "./MyRecipe.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

//Component
import Fav from "./Fav";

export default function MyRecipe() {
  const userEmail = useSelector((state) => state.userEmail);

  const [oldBrews, setOldBrews] = useState([]);
  const [changeHistory, setChangeHistory] = useState(false);
  const [favResponse, setFavResponse] = useState(false);
  const [favUpdated, setFavUpdated] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const heroku = process.env.REACT_APP_HEROKU_URL;

  //fetch history of oldBrews from database
  useEffect(() => {
    async function fetchData() {
      const serverUrl = `${heroku}/getOldbrews`;

      if (userEmail === "") {
      } else if (location === "/myRecipe") {
        try {
          const response = await axios.get(serverUrl, {
            params: {
              email: userEmail,
            },
          });
          console.log(response.data);
          setOldBrews(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [userEmail, heroku]);

  //alert if fav storage is full
  useEffect(() => {
    if (favResponse === "422") {
      alert("You have 5 favourite brew already!");
      setFavResponse("");
      return;
    }
  }, [favResponse]);

  // make history lists use with fetched data.
  const settingOldBrews = () => {
    if (oldBrews.length > 0) {
      const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
      const displayBrews = changeHistory ? sortedBrews.slice(5, 10) : sortedBrews.slice(0, 5);

      return (
        <ul className="history">
          {displayBrews.map((brew, index) => (
            <li key={index}>
              <p className="menu">{brew.menuName}</p>
              <p className="method">{brew.methodName}</p>
              <p className="coffee">{brew.coffee}g</p>
              <p className="water">{brew.water}</p>
              <p className="roasting">{brew.roasting}</p>
              <p className="grind">{brew.grind}</p>
              <div className="historyBtnContainer">
                <button
                  onClick={() => {
                    navigate(
                      `/menu/${brew.menuName}/method/${brew.methodName}/recipe/${brew.water}/${brew.coffee}/${brew.roasting}/${brew.grind}/brewing`
                    );
                  }}
                >
                  Go Brew
                </button>
                <button
                  onClick={async () => {
                    const postFvUrl = `${heroku}/saveFavourites`;

                    //use current time for organising brews
                    const order = Date.now();
                    const date = new Date();
                    const year = date.getFullYear().toString();
                    const month = (date.getMonth() + 1).toString();
                    const day = date.getDate().toString();
                    const hour = date.getHours().toString();
                    const minute = date.getMinutes().toString();
                    const fullDate = hour + ":" + minute + " / " + day + "." + month + "." + year;

                    //post favourites with currentBrews data
                    try {
                      const response = await axios.post(postFvUrl, {
                        email: userEmail,
                        favourites: [
                          {
                            favName: brew.order,
                            order: order,
                            date: fullDate,
                            menuName: brew.menuName,
                            methodName: brew.methodName,
                            water: brew.water,
                            coffee: brew.coffee,
                            roasting: brew.roasting,
                            grind: brew.grind,
                            description: "",
                          },
                        ],
                      });

                      console.log(response);
                      setFavResponse(JSON.stringify(response.status));
                      setFavUpdated(!favUpdated);
                    } catch (error) {
                      console.log(error);
                      const errMessage = error.response.status;
                      setFavResponse(JSON.stringify(errMessage));
                      console.log(favResponse);
                      return;
                    }
                  }}
                >
                  Save Fav
                </button>
              </div>
            </li>
          ))}
        </ul>
      );
    } else if (oldBrews.length === 0) {
      return (
        <div className="noHistory">
          <p>Wait! You don't have any history yet.</p>
        </div>
      );
    }
  };

  return (
    <div className="myRecipeContainer">
      <div className="myRecipe">
        <div className="myRecipeContents">
          <Fav favUpdated={favUpdated} />
          <div className="myRecipTitle">
            <header>Check your History of Brewing.</header>
            <p>
              FHB automatically save maximum your 10 recent Brews. "Click" brew that you like to try
              Again!
            </p>
          </div>
          <div className="oldBrews">
            <div className="category">
              <p className="menu">Menu</p>
              <p className="method">Method</p>
              <p className="coffee">Coffee</p>
              <p className="water">Water</p>
              <p className="roasting">Roasting</p>
              <p className="grind">Grind</p>
              <p className="functions">Functions</p>
            </div>
            {settingOldBrews()}
            <div className="moreBtn">
              <button
                onClick={() => {
                  setChangeHistory((prevChangeHistory) => !prevChangeHistory);
                }}
              >
                {changeHistory ? "Check first 5 Brews" : "Check rest of the Brews"}
              </button>
            </div>
          </div>
        </div>
        <div className="myRecipeImg"></div>
      </div>
    </div>
  );
}
