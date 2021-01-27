
const DeckListHeadersComponent = ({ deck }) => {
  return (
    <div className='deckListComponent deckListHeaders'>
      <div
        className="deckList__deck-name"
      >
        {deck.name}
      </div>
      <div className="deckList__deck-best-score">Best Score</div>
      <div className="deckList__deck-best-score">Average Score</div>
    </div>
  );
};

export default DeckListHeadersComponent;
