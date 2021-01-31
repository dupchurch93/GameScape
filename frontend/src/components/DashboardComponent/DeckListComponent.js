import { NavLink } from "react-router-dom";

const DeckListComponent = ({ deck }) => {
  const questions = deck.Questions;
  const totalQuestionsInDeck = questions.length;

  let displayAverageScore;
  if (deck.averageScore - Math.floor(deck.averageScore) > 0.5) {
    displayAverageScore = Math.ceil(deck.averageScore);
  } else {
    displayAverageScore = Math.floor(deck.averageScore);
  }

  let bestScore;
  let averageScore;
  if (deck.bestScore === 0 || deck.bestScore === undefined) {
    bestScore = "Try Out the Adventure...";
    averageScore = "";
  } else {
    bestScore = `${deck.bestScore}/${totalQuestionsInDeck}`;
    averageScore = `${displayAverageScore}/${totalQuestionsInDeck}`;
  }

  return (
    <div className="deckListComponent">
      <NavLink
        className="deckList__deck-name"
        to={`/adventures/preview/${deck.id}`}
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
