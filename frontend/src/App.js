import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import DashboardComponent from "./components/DashboardComponent";
import AdventureComponent from "./components/AdventuresComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { restoreUserThunk } from "./store/session";
import {getDecksThunk} from "./store/deck";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(async () => {
    await dispatch(restoreUserThunk());
    await dispatch(getDecksThunk());
    await setIsLoaded(true);
  }, [dispatch]);

  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="navbar-container">
          <Navigation isLoaded={isLoaded} />
        </div>
        <div className="page-contents-container">
          {isLoaded && (
            <Switch>
              <Route exact path="/">
                <DashboardComponent isLoaded={isLoaded}></DashboardComponent>
              </Route>
              <Route exact path="/login">
                <LoginFormPage />
              </Route>
              <Route exact path="/signup">
                <SignupFormPage />
              </Route>
              <Route exact path="/adventures/new">
                <h2>Render Create Adventure Page</h2>
              </Route>
              <Route exact path="/adventures/explore">
                <h2> Render All Decks to Explore</h2>
              </Route>
              <Route exact path="/adventures/skills">
                <h2> Display decks by tags </h2>
              </Route>
              <Route path="/adventures/:deckId">
                <AdventureComponent></AdventureComponent>
              </Route>
              <Route>
                <h2>Render a not found page</h2>
              </Route>
            </Switch>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
