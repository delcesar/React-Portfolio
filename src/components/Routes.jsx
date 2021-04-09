import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import { AppContext } from "./AppContext";
import { Home } from "./Home";
import { Work } from "./Work";
import { About } from "./About";
import { Contact } from "./Contact";

export function Routes() {
  const { preset } = useContext(AppContext);

  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route
        render={({ location }) => (
          <PageTransition
            preset="moveToLeftFromRight"
            transitionKey={location.pathname}
          >
            <Switch location={location}>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          </PageTransition>
        )}
      />
    </>
  );
}
