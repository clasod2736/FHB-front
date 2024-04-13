import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Choices.css";

import { useSelector } from "react-redux";
import axios from "axios";

//utils and api
import { getOldbrews } from "../../../api/getOldbrews";
import getChoices from "../../../util/getChoice";
import getTime from "../../../util/getTime";

export default function Choices({ click }) {
  const isLogIn = useSelector((state) => state.logIn);
  const userEmail = useSelector((state) => state.userEmail);

  const [data, setData] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const heroku = process.env.REACT_APP_HEROKU_URL;

  //save Favourite with choices
  const saveFavs = async () => {
    const postFvUrl = `${heroku}/saveFavourites`;

    //use current time for organising brews
    const currentTime = getTime();

    //post favourites with currentBrews data
    try {
      const response = await axios.post(postFvUrl, {
        email: userEmail,
        favourites: [
          {
            favName: "Your Choices!",
            order: currentTime[0],
            date: currentTime[1],
            menuName: data.menu[0][0],
            methodName: data.method[0][0],
            water: data.water,
            coffee: data.coffee,
            roasting: data.roasting[0][0],
            grind: data.grind[0][0],
            description: "",
          },
        ],
      });
      if (response.status === 200) {
        alert("Your Most Choices Saved as Favs!");
      }
    } catch (error) {
      console.log(error);
      alert("Your favs over the 5 or none, You can managing them in My Recipe page.");
    }
  };

  //getOldbrews from DB
  useEffect(() => {
    if (isLogIn) {
      async function fetchingChoices() {
        const response = await getOldbrews(userEmail);
        const mostChoices = getChoices(response);
        mostChoices === null ? setData(null) : setData(mostChoices);
        console.log("Most Choice loaded");
      }
      fetchingChoices();
    }
  }, [click, isLogIn, userEmail]);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="navBtn">
        Choices
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="canvas"
        placement="end"
        scroll={true}
        backdrop={true}
        restoreFocus={true}
        aria-modal={false}
      >
        <Offcanvas.Header className="slideHeader">
          <Offcanvas.Title className="slideTitle">Your Most Choices</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="canvasBody">
          {data !== null ? (
            <div className="choices-container">
              <div className="choice--total">
                <header>Your Total Brews: {data.totalBrew}</header>
              </div>
              <div className="choice--menu">
                <p>Your most choice of Coffee</p>
                <p className="data">{data.menu[0][0]}</p>
              </div>
              <div className="choice--mehotd">
                <p>Your most choice of Method</p>
                <p className="data">{data.method[0][0]}</p>
              </div>
              <div className="choice--roasting">
                <p>Your most choice of Roasting level</p>
                <p className="data">{data.roasting[0][0]}</p>
              </div>
              <div className="choice--grind">
                <p>Your most choice of Grind size</p>
                <p className="data">{data.grind[0][0]}</p>
              </div>
              <div className="choice--coffee">
                <p>Your most choice of Coffee amout</p>
                <p className="data">'{data.coffee / 20}' serve</p>
              </div>
              <div className="choice--water">
                <p>Your most choice of Water ratio</p>
                <p className="data">{data.water} ratio</p>
              </div>
            </div>
          ) : (
            <header>Loading or No history.</header>
          )}
          <div className="btn-container">
            <button
              onClick={() => {
                saveFavs();
              }}
            >
              Save Favourite with this.
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
