import React, { useEffect, useState } from "react";
import "./MyRecipe.css";
import { useSelector } from "react-redux";

import { getOldbrews } from "../../api/getOldbrews";

//Component
import Fav from "./Fav";
import handleHistory from "../../util/handleHistory";

export default function MyRecipe() {
  const userEmail = useSelector((state) => state.userEmail);

  const [oldBrews, setOldBrews] = useState([]);
  const [changeHistory, setChangeHistory] = useState(false);
  const [favResponse, setFavResponse] = useState(false);
  const [favUpdated, setFavUpdated] = useState(false);

  //fetch history of oldBrews from database
  useEffect(() => {
    async function fetchData() {
      const fetchedOldbrews = getOldbrews(userEmail);
      setOldBrews(fetchedOldbrews);
    }
    fetchData();
  }, [userEmail]);

  //alert if fav storage is full
  useEffect(() => {
    if (favResponse === "422") {
      alert("You have 5 favourite brew already!");
      setFavResponse("");
      return;
    }
  }, [favResponse]);

  const settingHistory = handleHistory(
    userEmail,
    oldBrews,
    changeHistory,
    setFavResponse,
    setFavUpdated,
    favUpdated,
    favResponse
  );

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
            {settingHistory}
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
