import React, { useEffect, useState } from "react";
import "./Finish.css";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import getTime from "../../util/getTime";

export default function Finish() {
  const userEmail = useSelector((state) => state.userEmail);

  const [favOpen, setFavOpen] = useState(false);
  const [favName, setFavName] = useState("");
  const [favResponse, setFavResponse] = useState("");
  const [saved, setSaved] = useState(false);

  const { menuName, methodName, water, coffee, roasting, grind } = useParams();
  const navigate = useNavigate();

  const heroku = process.env.REACT_APP_HEROKU_URL;

  //Automatically Post brew history in DB after finish brewing
  useEffect(() => {
    if (menuName !== undefined) {
      async function getCurrentBrew() {
        const postOldUrl = `${heroku}/saveHistory`;

        //use current time for organising recent brew and time that when make oldBrews.
        const currentTime = getTime();

        //post oldBrews with currentBrews data first.
        try {
          await axios.post(postOldUrl, {
            email: userEmail,
            oldBrews: [
              {
                order: currentTime[0],
                date: currentTime[1],
                menuName: menuName,
                methodName: methodName,
                water: water,
                coffee: coffee,
                roasting: roasting,
                grind: grind,
              },
            ],
          });
          console.log("Last brew data saved.");
        } catch (error) {
          console.log(error);
        }
      }
      getCurrentBrew();
    } else {
      return;
    }
  }, [coffee, grind, menuName, methodName, roasting, userEmail, water, heroku]);

  //get error response if Fav store is full.
  useEffect(() => {
    if (favResponse === "422") {
      setSaved(false);
      alert("You have 5 favourite brew already! You can manage in My Recipe page.");
      setFavResponse("");
      navigate(`/myRecipe`);
      return;
    }
  }, [favResponse, navigate]);

  //Post NEW favourite brew in DB
  const saveFavBrews = async () => {
    if (favName === "") {
      alert("Please put name.");
      return;
    } else if (favName.length > 10) {
      alert("Please put name less 10 letters");
      setFavName("");
    } else if (menuName === undefined) {
      alert("This is just Browsing Page!");
      return;
    } else {
      const postFvUrl = `${heroku}/saveFavourites`;

      //use current time for organising brews
      const currentTime = getTime();

      //post favourites with currentBrews data
      try {
        const response = await axios.post(postFvUrl, {
          email: userEmail,
          favourites: [
            {
              favName: favName,
              order: currentTime[0],
              date: currentTime[1],
              menuName: menuName,
              methodName: methodName,
              water: water,
              coffee: coffee,
              roasting: roasting,
              grind: grind,
              description: "",
            },
          ],
        });

        setFavResponse(JSON.stringify(response.status));
        setFavName("");
      } catch (error) {
        console.log(error);
        const errMessage = error.response.status;
        setFavResponse(JSON.stringify(errMessage));
        return;
      }
    }
  };

  return (
    <div className="finishContainer">
      <div className="finish">
        <div className="finishContents">
          <header>How was your Coffee today?</header>
          <div className="finishText">
            <p>Thanks for your journey with FHB.</p>
            <p>You can check your brew history in MyRecipe page.</p>
            <p>Try different coffee everytime!</p>
          </div>
          <div className="btnContainer">
            <button
              className="recipe"
              onClick={() => {
                setFavOpen(true);
                setSaved(false);
              }}
            >
              Save Favourite
            </button>
            <Link to={"/menu"} className="tryAnother">
              Try Another
            </Link>

            <button className="shop">
              <a href="https://github.com/clasod2736?tab=repositories">Github Codes</a>
            </button>
          </div>
          <div className="favSubmit" style={{ display: favOpen ? "flex" : "none" }}>
            <input
              type="text"
              className="favNameInput"
              placeholder="Name of Fav"
              onChange={(e) => {
                setFavName(e.target.value);
              }}
              value={favName}
            />
            <div className="btnContainer">
              <button
                onClick={() => {
                  setFavOpen(false);
                }}
              >
                X
              </button>
              <button
                className="submitBtn"
                onClick={() => {
                  if (menuName === undefined) {
                    saveFavBrews();
                    setSaved(false);
                    return;
                  } else if (favResponse !== "422") {
                    saveFavBrews();
                    setFavOpen(false);
                    setSaved(true);
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="afterSaveFav" style={{ display: saved ? "flex" : "none" }}>
            <p>Saved!</p>
            <Link className="goMyRecipeBtn" to={"/myRecipe"}>
              Check in My Recipe Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
