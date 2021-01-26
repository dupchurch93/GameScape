import fetch from "../../store/csrf";
import { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import "./LoggedInDashboard.css";

const LoggedInDashboard = () => {
  //pass through decks?
  const [isLoaded, setIsLoaded] = useState(false);
  const [decks, setDecks] = useState([]);

  const getUserDecks = useCallback(async () => {
    const res = await fetch("/api/decks/savedDecks");
    setDecks(res.data.decksList);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    getUserDecks();
  }, [getUserDecks]);

  return (
    <>
      {console.log(decks)}
      <h2 className="logged-in-dashboard-component greeting">
        Welcome To GameScape
      </h2>
      <div className="logged-in-dashboard-component savedDecks-container">
        <div className="savedDecks__deckList">
          Newest Decks
          {isLoaded &&
            decks.map((deck) => {
              return (
                <div>
                  <NavLink to={`/quests/${deck.id}`} key={deck.id}>
                    {deck.name}
                  </NavLink>
                </div>
              );
            })}
        </div>
        <ul className="savedDecks__deckList">Most Difficult Decks</ul>
      </div>
    </>
  );
};

export default LoggedInDashboard;
