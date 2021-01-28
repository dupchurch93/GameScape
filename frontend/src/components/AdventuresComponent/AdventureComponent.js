import { useParams } from "react-router-dom";
import fetch from "../../store/csrf";
import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import DeckStartButtonsComponent from './DeckStartButtonsComponent';
import DeckStartComponent from './DeckStartComponent';
import "./AdventureComponent.css";

const AdventureComponent = () => {
  const { deckId } = useParams();
  const [apiIsLoaded, setApiIsLoaded] = useState(false);
  const [deck, setDeck] = useState({});
  const [questions, setQuestions] = useState([]);
  const [answeredState, setAnsweredState] = useState(false);
  const user = useSelector((state) => state.session.user);

  const getDeck = useCallback(async () => {
    if (user) {
      const res = await fetch(`/api/decks/${deckId}`);
      setDeck(res.data.deck);
      setQuestions(res.data.deck.Questions);
      setApiIsLoaded(true);
    }
  }, [user, deckId]);

  useEffect(() => {
    getDeck();
  }, [getDeck]);

  useEffect(() => {

  })

  return (
    <div className="adventure-component__deck-container">
      {apiIsLoaded && (
        <>
          <div className="main-dashboard-component deck-title">{deck.name}</div>
          {questions.length > 1 && (
            <div className="main-dashboard-component question-area">
                <div className='question-area__question'>{questions[0].question}</div>
                <div className='question-area__buttons'>
                    <button className='question-button'>Show Answer</button>
                </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdventureComponent;
