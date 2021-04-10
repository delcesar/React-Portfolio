import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";
import Panel from "./components/Panel";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Panel />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
