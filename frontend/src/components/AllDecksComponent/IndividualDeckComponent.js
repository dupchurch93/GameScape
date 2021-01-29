import { NavLink } from "react-router-dom";

const IndividualDeckComponent = ({ deck }) => {
  const questions = deck.questions;

  return (
    <div className='IndividualDeckComponent'>
      <NavLink
        className="deckList__deck-name"
        to={`/adventures/preview/${deck.id}`}
      >
        {deck.name}
      </NavLink>
    </div>
  );
};

export default IndividualDeckComponent;
