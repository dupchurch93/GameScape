import { NavLink } from "react-router-dom";

const DeckListComponent = ({ deck }) => {
  const questions = deck.questions;
  const totalQuestionsInDeck = questions.length
  let bestScore;
  let averageScore
  if(deck.bestScore===0){
    bestScore = "Try Out the Adventure...";
    averageScore = "";
  } else{
    bestScore = (deck.bestScore / totalQuestionsInDeck);
    averageScore = (deck.averageScore / totalQuestionsInDeck);
  }


  return (
    <div className='deckListComponent'>
      <NavLink
        className="deckList__deck-name"
        to={`/adventures/${deck.id}`}
        key={deck.id}
      >
        {deck.name}
      </NavLink>
      <div className="deckList__deck-best-score">{bestScore}</div>
      <div className="deckList__deck-best-score">{averageScore}</div>
    </div>
  );
};

export default DeckListComponent;
