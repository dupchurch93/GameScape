import ProfileButton from "./ProfileButton";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const user = useSelector((state) => state.session.user);

  let navLinks;
  if (user) {
    navLinks = (
      <div>
        <ProfileButton user={user}></ProfileButton>
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
    <ul className="navigation-link">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
        {isLoaded && navLinks}
      </li>
    </ul>
  );
}

export default Navigation;
