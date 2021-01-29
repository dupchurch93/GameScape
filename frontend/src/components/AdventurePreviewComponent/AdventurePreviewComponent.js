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
      console.log("deck here", res.data.deck);
      setDeck(res.data.deck);
      // setQuestions(res.data.deck.Questions);
    }
  };

  useEffect(() => {
    getDeck();
  }, []);

  useEffect(() => {
    if (deck) {
      console.log('here')
      setQuestions(deck.Question);
      console.log(questions)
    }
  }, [deck]);

  return (
    <div className="preview-container">
      <div className="main-dashboard-component">{deck && deck.name}</div>
      <div className="main-dashboard-component preview-questions">
        {questions &&
          questions.map((question) => {
            return (
              <div>test</div>
              // <>
              //   <div className='preview-questions-question'>
              //     {question.question}?
              //   </div>
              //   <div className='preview-questions-answer'>{question.answer}</div>
              // </>
            );
          })}
      </div>
    </div>
  );
};

export default AdventurePreviewComponent;
