import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetch from "../../store/csrf";

const AdventurePreviewComponent = () => {
  const { deckId } = useParams();

  const [deck, setDeck] = useState(null);
  const [questions, setQuestions] = useState(null);

  const getDeck = async () => {
    const res = await fetch(`/api/decks/${deckId}`);
    if (res.ok) {
      // console.log('deck here', res.data.deck)
      await setDeck(res.data.deck);
    }
    if (deck) {
      console.log(deck);
      await setQuestions(deck.Questions);
    }
  };

  useEffect(() => {
    getDeck();
  }, []);

  return (
    <div className="preview-container">
      <div className="main-dashboard-component">{deck && deck.name}</div>
      <div className="main-dashboard-component preview-questions">
        {questions &&
          questions.map((question) => {
            return (
              <>
                <div className='preview-questions-question'>
                  {question.question}?
                </div>
                <div className='preview-questions-answer'>{question.answer}</div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default AdventurePreviewComponent;
