import { useState } from "react";
import "./NewAdventureComponent.css"

const NewAdventuresComponent = () => {
  const [deckTitle, setDeckTitle] = useState("");
  const [questionObjectsArray, setQuestionsObjectArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new-adventure-container">
      <div className="main-dashboard-component main-dashboard-component-title">
        This is the new adventure component.
      </div>
      <div className="main-dashboard-component deck-creation-area">
        <form className="deck-creation-form" onSubmit={handleSubmit}>
          <label htmlFor="deckTitle">Deck Title</label>
          <input
            type="text"
            id="deckTitle"
            onChange={(e) => setDeckTitle(e.target.value)}
            value={deckTitle}
          ></input>
          <div className="question-inputs">
              <label htmlFor="questionObjectArray">Question</label>
              
          </div>

        </form>
      </div>
    </div>
  );
};

export default NewAdventuresComponent;
