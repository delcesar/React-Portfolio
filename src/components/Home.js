import React from "react";
import ReactIcon from "../data/react-icon.svg";

export function Home() {
  return (
    <div className="wrapper wrapper--home">
      <div className="container">
        <h1 className="title">
          <span>Hello</span> World
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
        <img src={ReactIcon} alt="React icon" />
      </div>
    </div>
  );
}
