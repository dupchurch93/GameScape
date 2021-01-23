import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage/SignUpFormPage";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useState, useEffect } from 'react';
import { restoreUserThunk } from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUserThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <Switch>
      <Route exact path="/">
        <h2>Home</h2>
      </Route>
      <Route exact path="/login">
        <LoginFormPage></LoginFormPage>
      </Route>
      <Route exact path='/signup'>
        <SignupFormPage></SignupFormPage>
      </Route>
    </Switch>
  );
}

export default App;
