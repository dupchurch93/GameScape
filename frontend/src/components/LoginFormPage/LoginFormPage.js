import { useState } from "react";
import { loginUserThunk } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const LoginFormPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  if (user) {
    history.push("/");
  }

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const userData = {
      credential,
      password,
    };

    try {
      const user = await dispatch(loginUserThunk(userData));
    } catch (e) {
      console.error("catch error here-------", e.data.errors);
      setErrors([...e.data.errors]);
    }
    if (user) {
      history.push("/");
    }
  };
  return (
    <div className="login-form-container">
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginFormPage;
