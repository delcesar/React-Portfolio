import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";
import { Navigation } from "./components/Navigation";
import { Routes } from "./components/Routes";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
