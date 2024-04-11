import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../MyRecipe.css";

import { useSelector } from "react-redux";

import { getOldbrews } from "../../../api/getOldbrews";
import saveFavourites from "../../../api/saveFavourites";

export default function History(getFavUpdated, favUpdated) {
  const userEmail = useSelector((state) => state.userEmail);

  const [oldBrews, setOldBrews] = useState([]);
  const [favResponse, setFavResponse] = useState(false);
  const [changeHistory, setChangeHistory] = useState(false);

  const navigate = useNavigate();

  //fetch history of oldBrews from database
  useEffect(() => {
    async function fetchData() {
      const fetchedOldbrews = await getOldbrews(userEmail);
      setOldBrews(fetchedOldbrews);
    }
    fetchData();
  }, [userEmail, changeHistory]);

  //alert if fav storage is full
  useEffect(() => {
    if (favResponse) {
      alert("You have 5 favourite brew already!");
      setFavResponse(false);
      return;
    }
  }, [favResponse]);

  if (oldBrews.length > 0) {
    const sortedBrews = oldBrews.sort((a, b) => b.order - a.order);
    const displayBrews = changeHistory ? sortedBrews.slice(5, 10) : sortedBrews.slice(0, 5);

    return (
      <>
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
                  onClick={() =>
                    navigate(
                      `/menu/${brew.menuName}/method/${brew.methodName}/recipe/${brew.water}/${brew.coffee}/${brew.roasting}/${brew.grind}/brewing`
                    )
                  }
                >
                  Go Brew
                </button>
                <button
                  onClick={async () => {
                    const result = await saveFavourites(userEmail, brew);
                    if (result) {
                      setFavResponse(false);
                      getFavUpdated(true);
                    } else favResponse(true);
                  }}
                >
                  Save Fav
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="moreBtn">
          <button
            onClick={() => {
              setChangeHistory((prev) => !prev);
            }}
          >
            {changeHistory ? "Check first 5 Brews" : "Check rest of the Brews"}
          </button>
        </div>
      </>
    );
  } else if (oldBrews.length === 0) {
    return (
      <div className="noHistory">
        <p>Wait! You don't have any history yet.</p>
      </div>
    );
  }
}
