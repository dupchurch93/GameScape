import { useState } from "react";
import { loginUserThunk } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import WelcomeComponent from "../WelcomeComponent";
import "./LoginFormPage.css";

export const LoginFormPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (user) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const userData = {
      credential,
      password,
    };

    try {
      const user = await dispatch(loginUserThunk(userData));
      if (user) {
        <Redirect to="/" />;
      }
    } catch (e) {
      console.error("catch error here-------", e.data.errors);
      setErrors([...e.data.errors]);
    }
  };
  return (
    <>
      <WelcomeComponent></WelcomeComponent>
      <div className="login-form-container main-dashboard-component">
        <form className="login-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <h2>Login</h2>
          <label>Username or Email</label>
          <br></br>
          <input
            type="text"
            name="credential"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
          ></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <button className="login-page__login-button" type="submit">Continue Your Adventures</button>
        </form>
      </div>
    </>
  );
};

export default LoginFormPage;
