import "./Navigation.css";
import warrioricon from "../../images/warrioricon.png";

const UserDetailComponent = ({ user }) => {
  return (
    <div className="user-detail-header">
      <div className="user-detail-header__image-container">
        <img src={warrioricon} alt="userIcon" />
      </div>
      <div className="user-detail-header__user-details-container">
        <div>{user.username}</div>
        <div className="user-details-container__stat-block">
          <div>Level:</div>
          <div> {user.level}</div>
          <div>Exp:</div>
          <div> {user.currentXp}</div>
          <div>To Next:</div>
          <div> {user.xpTilNextLevel}</div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailComponent;
