import { NavLink } from "react-router-dom";

const DeckListComponent = ({ deck }) => {
  return (
    <div className='deckListComponent'>
      <NavLink
        className="deckList__deck-name"
        to={`/adventures/${deck.id}`}
        key={deck.id}
      >
        {deck.name}
      </NavLink>
      <div className="deckList__deck-best-score">Best Score</div>
      <div className="deckList__deck-best-score">Average Score</div>
    </div>
  );
};

export default DeckListComponent;
