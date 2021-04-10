import React from "react";
import Navigation from "./Navigation";
import { Routes } from "./Routes";

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default Panel;
