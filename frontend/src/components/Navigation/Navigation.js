import ProfileButton from "./ProfileButton";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { logoutUserThunk } from "../../store/session";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUserThunk());
  };

  let navLinks;
  if (user) {
    navLinks = (
      <div>
        <ul className="profile">
          <li> Character: {user.username}</li>
          <li>Level: {user.level}</li>
          <li>Exp:  {user.currentXp}</li>
          <li>To Next: {user.xpTilNextLevel}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      </div>
    );
  } else {
    navLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navigation-link">
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
        {isLoaded && navLinks}
      </div>
    </div >
  );
}

export default Navigation;
