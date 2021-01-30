import DeckListComponent from "./DeckListComponent";
import DeckListHeadersComponent from "./DeckListHeaders";
import "./DashboardComponent.css";
import { useSelector } from "react-redux";

const Dashboard = ({ isLoaded }) => {
  //pass through decks?
  const user = useSelector((state) => state.session.user);
  const decks = useSelector((state) => state.decks.deckList);

  const deckListHeaders = {
    name: "Recent Adventures",
    averageScore: "Average Score",
    bestScore: "Best Score",
  };

  let mainDashboard;
  if (user) {
    mainDashboard = (
      <div className="main-dashboard-component savedDecks-container">
        <div className="savedDecks__deckList">
          <DeckListHeadersComponent
            deck={deckListHeaders}
          ></DeckListHeadersComponent>
          {Object.values(decks).map((deck) => {
            return (
              <DeckListComponent key={deck.id} deck={deck}></DeckListComponent>
            );
          })}
        </div>
      </div>
    );
  } else {
    mainDashboard = (
      <div className="main-dashboard-component">
        GameScape is a gamified studying application. Create new decks to study
        from, which count as adventures for your avatar. The more you study, the
        more experience your avatar will gain. Browse other adventures put
        together by brave explorers like yourself to obtain new skills and
        knowledge.<br></br>
        <br />
        Please login or create an account to start your adventures.
      </div>
    );
  }

  return (
    <>
      <div className="main-dashboard-component">
        <h2 className="greeting">Welcome To GameScape</h2>
        <div className="description">
          Create, find, and study decks while leveling up your character!
        </div>
      </div>
      {isLoaded && mainDashboard}
    </>
  );
};

export default Dashboard;
