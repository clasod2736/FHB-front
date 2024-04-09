import React, { useState, useEffect } from "react";
import checkLogIn from "../../util/checkLogIn";
import "./MyRecipe.css";

//Component
import Fav from "./Fav";
import History from "./History";
import { useSelector } from "react-redux";

export default function MyRecipe() {
  const isLogIn = useSelector((state) => state.logIn);

  const [favUpdated, setFavUpdated] = useState(false);

  const getFavUpdated = (data) => {
    setFavUpdated(data);
  };

  useEffect(() => {
    checkLogIn(isLogIn);
  }, [isLogIn]);

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
            <History getFavUpdated={getFavUpdated} favUpdated={favUpdated} />
          </div>
        </div>
        <div className="myRecipeImg"></div>
      </div>
    </div>
  );
}
