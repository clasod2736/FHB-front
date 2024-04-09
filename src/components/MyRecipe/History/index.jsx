import { useState, useEffect } from "react";
import "../MyRecipe.css";

import { useSelector } from "react-redux";

import { getOldbrews } from "../../../api/getOldbrews";
import saveFavourites from "../../../api/saveFavourites";

export default function History(changeHistory, setFavUpdated, favUpdated) {
  const userEmail = useSelector((state) => state.userEmail);

  const [oldBrews, setOldBrews] = useState([]);
  const [favResponse, setFavResponse] = useState(false);

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
    if (favResponse) {
      alert("You have 5 favourite brew already!");
      setFavResponse(false);
      return;
    }
  }, [favResponse]);

  const generateHistory = () => {
    if (oldBrews.length > 0) {
      const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
      const displayBrews = changeHistory ? sortedBrews.slice(5, 10) : sortedBrews.slice(0, 5);
      console.log("History generated.");

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
                <a
                  href={`/menu/${brew.menuName}/method/${brew.methodName}/recipe/${brew.water}/${brew.coffee}/${brew.roasting}/${brew.grind}/brewing`}
                >
                  Go Brew
                </a>
                <button
                  onClick={() => {
                    const result = saveFavourites(userEmail, brew);
                    if (result) {
                      setFavResponse(true);
                      setFavUpdated(!favUpdated);
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
  return generateHistory();
}
