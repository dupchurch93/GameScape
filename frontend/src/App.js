import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { restoreUserThunk } from './store/session';

function App() {

  return (
    <Switch>
      <Route exact path="/">
        <h2>Home</h2>
      </Route>
      <Route exact path="/login">
        <LoginFormPage></LoginFormPage>
      </Route>
    </Switch>
  );
}

export default App;
