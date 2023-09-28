import React, { useState } from "react";
import "./Water.css";

export default function Water({ getWater, waterClose }) {
  const [text, setText] = useState(false);

  return (
    <div className="waterContainer">
      <header>Ratio</header>
      <div className="waterText">
        <p>Finding the right balance</p>
        <p>between coffee grounds and water.</p>
        <p>The ratio determines the strength</p>
        <p>and flavor of your coffee.</p>
      </div>
      <div className="waterRatio">
        <div
          onClick={() => {
            setText("7:1");
          }}
          style={{ backgroundColor: text === "7" ? "lightslategrey" : "" }}
        >
          <p>Strong</p>
          <p>7:1</p>
        </div>
        <div
          onClick={() => {
            setText("10:1");
          }}
          style={{ backgroundColor: text === "10" ? "lightslategrey" : "" }}
        >
          <p>Normal</p>
          <p>10:1</p>
        </div>
        <div
          onClick={() => {
            setText("12:1");
          }}
          style={{ backgroundColor: text === "12" ? "lightslategrey" : "" }}
        >
          <p>Mild</p>
          <p>12:1</p>
        </div>
      </div>
      <button
        onClick={() => {
          if (!text) {
            waterClose(true);
            alert("Please fix Coffee Amount First or Choose Ratio");
          } else {
            waterClose(false);
            getWater(text);
          }
        }}
      >
        Save It!
      </button>
    </div>
  );
}
