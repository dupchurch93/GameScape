import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signupUserThunk } from "../../store/session";
import WelcomeComponent from "../WelcomeComponent";
import "./SignUpFormPage.css";

function SignUpFormPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (user) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      try {
        const user = await dispatch(
          signupUserThunk({ email, username, password })
        );
        if (user) {
          <Redirect to="/" />;
        }
      } catch (e) {
        setErrors([...e]);
      }
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <>
      <WelcomeComponent></WelcomeComponent>
      <div className="main-dashboard-component">
        <div className="sign-up-form__header">Start Your Adventures Today</div>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>Email</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label>Username</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          /><br/>
          <button className="sign-up-page__sign-up-button" type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUpFormPage;
