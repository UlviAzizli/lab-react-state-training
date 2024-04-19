import React from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";

import ClickPicture from "./components/ClickPicture";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>LAB | React Training</h1>
      <div className="like-button-container">
        <LikeButton />
        <LikeButton />
      </div>
      <div className="counter-container">
        <Counter />
      </div>
      <div className="click-picture">
        <ClickPicture />
      </div>
    </div>
  );
}

export default App;
