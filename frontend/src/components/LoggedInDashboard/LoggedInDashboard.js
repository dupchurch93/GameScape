import fetch from "../../store/csrf";
import { useEffect, useState, useCallback } from "react";
import DeckListComponent from "./DeckListComponent";
import DeckListHeadersComponent from "./DeckListHeaders";
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

  const deckListHeaders = {name: "Recent Quests", averageScore: "Average Score", bestScore: "Best Score"}

  return (
    <>
      {console.log(decks)}
      <div className="logged-in-dashboard-component">
        <h2 className="greeting">Welcome To GameScape</h2>
        <div className="description">
          A gamified study application. Create,find, and study decks while leveling up
          your character!
        </div>
      </div>
      <div className="logged-in-dashboard-component savedDecks-container">
        <div className="savedDecks__deckList">
          <DeckListHeadersComponent deck={deckListHeaders}></DeckListHeadersComponent>
          {isLoaded &&
            decks.map((deck) => {
              return (
                <DeckListComponent deck={deck}></DeckListComponent>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default LoggedInDashboard;
