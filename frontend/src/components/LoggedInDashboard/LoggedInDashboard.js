import "./LoggedInDashboard.css";

const LoggedInDashboard = () => {
    //pass through decks?

  return (
    <>
      <h2 className="logged-in-dashboard-component greeting">
        Welcome To GameScape
      </h2>
      <div className="logged-in-dashboard-component savedDecks-container">
        <div className="savedDecks__newestDecks">Newest Decks</div>
        <div className="savedDecks__newestDecks">Most Difficult Decks</div>
      </div>
    </>
  );
};

export default LoggedInDashboard;
