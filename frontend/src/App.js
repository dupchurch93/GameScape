import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import DashboardComponent from "./components/DashboardComponent";
import AdventureComponent from "./components/AdventuresComponent";
import AllDecksComponent from "./components/AllDecksComponent";
import NewAdventuresComponent from "./components/NewAdventuresComponent";
import AdventurePreviewComponent from "./components/AdventurePreviewComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { restoreUserThunk } from "./store/session";
import { getDecksThunk } from "./store/deck";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const getInfo = async () => {
      await dispatch(restoreUserThunk());
      await setIsLoaded(true);
    };

    getInfo();
  }, [dispatch]);
  
  useEffect(() => {
    const getDecks = async () => {
      await dispatch(getDecksThunk());
    };
    getDecks();
  }, [isLoaded, dispatch]);

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
                <NewAdventuresComponent></NewAdventuresComponent>
              </Route>
              <Route exact path="/adventures/explore">
                <AllDecksComponent></AllDecksComponent>
              </Route>
              <Route exact path="/adventures/skills">
                <h2> Display decks by tags </h2>
              </Route>
              <Route exact path="/adventures/:deckId">
                <AdventureComponent></AdventureComponent>
              </Route>
              <Route path="/adventures/preview/:deckId">
                <AdventurePreviewComponent></AdventurePreviewComponent>
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
