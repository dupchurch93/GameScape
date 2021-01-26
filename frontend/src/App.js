import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import LoggedInDashboard from "./components/LoggedInDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { restoreUserThunk } from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUserThunk()).then(() => setIsLoaded(true));
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
                <LoggedInDashboard></LoggedInDashboard>
              </Route>
              <Route exact path="/login">
                <LoginFormPage />
              </Route>
              <Route exact path="/signup">
                <SignupFormPage />
              </Route>
              <Route path="/quests/:deckId">
                <h2 style={{backgroundColor: "white", marginTop: "5rem"}}>Render Individual Decks Here</h2>
              </Route>
            </Switch>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
