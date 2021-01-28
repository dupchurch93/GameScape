import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import DeckStartComponent from "./DeckStartComponent";
import "./AdventureComponent.css";

const AdventureComponent = () => {
  const { deckId } = useParams();
  const deck = useSelector((state) => state.decks.deckList[deckId]);
  const questions = deck.questions;
  console.log(deck);
  const [answeredState, setAnsweredState] = useState(false);

  return (
    <div className="adventure-component__deck-container">
      <div className="main-dashboard-component deck-title">{deck.name}</div>
      <div className="main-dashboard-component question-area">
        <div className="question-area__question">{questions[0].question}</div>
        <div className="question-area__buttons">
          <button className="question-button">Show Answer</button>
        </div>
      </div>
    </div>
  );
};

export default AdventureComponent;
