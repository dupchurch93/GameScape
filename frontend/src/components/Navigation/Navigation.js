import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserThunk } from "../../store/session";
import UserDetailComponent from "./userDetailComponent";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUserThunk());
  };

  let navBarHeader;
  if (user) {
    navBarHeader = (
      <div className="navigation-component__logged-in">
        <div className="navigation-component__user-detail-container">
          <UserDetailComponent user={user}></UserDetailComponent>
          <div className="navigation-component__navlink-container">
            <NavLink exact to="/">
              Home
            </NavLink>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
        <div className="navigation-component__create-new-adventure-container navcomponent__other-components">
          <NavLink to="/adventures/new">
            Create New Adventures and Hone Your Skills
          </NavLink>
        </div>
        <div className="navigation-component__browse-adventures-container navcomponent__other-components">
          <NavLink to="/adventures/explore">
            Find New Adventures and Expand Your Skills
          </NavLink>
        </div>
        <div className="navigation-component__create-adventure-types navcomponent__other-components">
        <NavLink to="/adventures/skills">
            Explore Adventures by Skill Types
          </NavLink>
        </div>
      </div>
    );
  } else {
    navBarHeader = (
      <div className="navigation__logged-out-navlinks">
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className="navigation-link">
      <div>{isLoaded && navBarHeader}</div>
    </div>
  );
}

export default Navigation;
