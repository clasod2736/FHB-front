import React, { useState } from "react";
import "./MyRecipe.css";

//Component
import Fav from "./Fav";
import History from "./History";

export default function MyRecipe() {
  const [changeHistory, setChangeHistory] = useState(false);

  const [favUpdated, setFavUpdated] = useState(false);

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
            <History changeHistory={changeHistory} setFavUpdated={setFavUpdated} />
            <div className="moreBtn">
              <button
                onClick={() => {
                  setChangeHistory((prev) => !prev);
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
