import fetch from "../../store/csrf";
import { useEffect, useState } from "react";
import IndividualDeckComponent from "./IndividualDeckComponent";
import "./AllDecks.css";
import { useSelector } from "react-redux";

const AllDecksComponent = () => {
  const decks = useSelector((state) => state.decks.deckList);
  const [allDecks, setAllDecks] = useState(null);

  useEffect(() => {
    const getAllDecks = async () => {
      const res = await fetch("/api/decks/all");
      setAllDecks(res.data.decks);
    };
    getAllDecks();
  }, []);

  return (
    <div className="allDecks-page-container">
      <div className="main-dashboard-component main-dashboard-component-title">
        Browse Adventures
      </div>
      <div className="main-dashboard-component decks-holder">
        {allDecks &&
          allDecks.map((deck) => {
            if (Object.keys(decks).includes(deck.id.toString())) {
              return;
            } else {
              return (
                <IndividualDeckComponent
                  key={deck.id}
                  deck={deck}
                ></IndividualDeckComponent>
              );
            }
          })}
      </div>
    </div>
  );
};
export default AllDecksComponent;
