import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import fetch from "../../store/csrf";
import { removeDeckThunk, addDeckThunk } from "../../store/deck";
import "./AdventurePreviewComponent.css";

const AdventurePreviewComponent = () => {
  const { deckId } = useParams();
  const savedDecks = useSelector((state) => state.decks.deckList);
  const history = useHistory();
  const dispatch = useDispatch();

  const [deck, setDeck] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [isSaved, setIsSaved] = useState();

  const getDeck = async () => {
    const res = await fetch(`/api/decks/${deckId}`);
    if (res.ok) {
      setDeck(res.data.deck);
      setQuestions(res.data.deck.Questions);
    }
  };

  useEffect(() => {
    getDeck();
    if(savedDecks && savedDecks[deckId]){
      setIsSaved(true);
    }
  }, []);

  const studyNowSaved = () => {
    history.push(`/adventures/${deckId}`);
  };

  const studyNowNotSaved = () => {

  }

  const unSaveDeck = async () => {
    setIsSaved(false);
    dispatch(removeDeckThunk(deckId));
  }

  const saveForLater = () => {
    setIsSaved(true);
    dispatch(addDeckThunk(deck));
  }



  let buttons;
  if (isSaved) {
    buttons = (
      <div className="button-container">
        <button className="main-button" onClick={studyNowSaved}>
          Study Now
        </button>
        <button className='main-button' onClick={unSaveDeck}>Unsave Deck</button>
      </div>
    );
  } else {
    buttons = (
      <div className="button-container">
        <button className="main-button" onClick={studyNowNotSaved}>
          Study Now
        </button>
        <button className="main-button" onClick={saveForLater}>
          Save For Later
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="main-dashboard-component">
        <h2>{deck && deck.name}</h2>
      </div>
      <div className="main-dashboard-component preview-questions">
        <div className="header-container">
          <div className="adventure-preview-header">Questions</div>
          <div className="adventure-preview-header">Answers</div>
        </div>
        {questions &&
          questions.map((question) => {
            return (
              <div className="question-grid-container" key={question.id}>
                <div className="preview-questions-question">
                  {question.question}?
                </div>
                <div className="preview-questions-answer">
                  {question.answer}
                </div>
              </div>
            );
          })}
        {buttons}
      </div>
    </>
  );
};

export default AdventurePreviewComponent;
