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
      <div class="navigation-component__logged-in">
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
          Create New Decks and Take On New Quests
        </div>
        <div className="navigation-component__browse-adventures-container navcomponent__other-components">
          Find New Quests and Expand Your Skills
        </div>
        <div className="navigation-component__create-adventure-types navcomponent__other-components">
          Explore Quests by Different Skill Types
        </div>
      </div>
    );
  } else {
    navBarHeader = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navigation-link">
      <div>{isLoaded && navBarHeader}</div>
    </div>
  );
}

export default Navigation;
