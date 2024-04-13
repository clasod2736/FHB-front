import React, { useEffect, useState } from "react";
import "./Steps.css";
import { useParams, useNavigate } from "react-router-dom";
import methodSteps from "../../../../util/StuffData/methodSteps.json";
import menuSteps from "../../../../util/StuffData/MenuSteps.json";

export default function Steps({ isMobile }) {
  const [methodStepInfo, setMethodStepInfo] = useState([]);
  const [menuStepInfo, setMenuStepInfo] = useState([]);
  const [steps, setSteps] = useState(undefined);

  const navigate = useNavigate();
  const { menuName, methodName } = useParams();

  //get Json data from util folder
  useEffect(() => {
    setMethodStepInfo(methodSteps[methodName]);
    setMenuStepInfo(menuSteps[menuName]);
    isMobile ? setSteps(0) : setSteps(undefined);
  }, [methodName, menuName, isMobile]);

  //rendering Brewing Steps
  const brewingSteps = () => {
    if (steps !== undefined && methodStepInfo.length > steps) {
      //method Steps
      const title = methodStepInfo[steps].step[0].title;
      const gifUrl = methodStepInfo[steps].step[1].gif;
      const description = methodStepInfo[steps].step[2].description;

      return (
        <div className="methodSteps">
          <header>{title}</header>
          <img src={gifUrl} alt="brewingGif" />
          <div className="brewingStepsText">
            <p>{description}</p>
          </div>
          <div className="btnContainer">
            <button
              onClick={() => {
                setSteps((prev) => prev - 1);
              }}
              style={{ display: steps === 0 ? "none" : "block" }}
            >
              Back
            </button>
            <button
              onClick={() => {
                setSteps((prev) => prev + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      );

      // After method Steps Show menu direction.
    } else if (methodStepInfo.length <= steps) {
      //menu Steps
      const img = menuStepInfo[0].img;
      const direction = menuStepInfo[1].direction;

      return (
        <div className="menuSteps">
          <img src={img} alt="menuImg" />
          <div className="menuStepContents">
            <header>{menuName}</header>
            <div className="directions">
              {direction.map((dir) => (
                <li key={dir}>{dir}</li>
              ))}
            </div>
            <div className="btnContainer">
              <button
                onClick={() => {
                  setSteps(0);
                }}
              >
                Back to Start
              </button>
              <button
                onClick={() => {
                  navigate("./finish");
                }}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="stepsContainer">
      <div className="steps" style={{ display: isMobile ? "none" : "flex" }}>
        <div className="stepsBefore" style={{ display: steps === undefined ? "flex" : "none" }}>
          <header>Did you check everything? Then...</header>
          <button
            onClick={() => {
              setSteps(0);
            }}
          >
            Start Brewing!
          </button>
        </div>
        {brewingSteps()}
      </div>
      <div className="stepsMobile" style={{ display: isMobile ? "flex" : "none" }}>
        {brewingSteps()}
      </div>
    </div>
  );
}
