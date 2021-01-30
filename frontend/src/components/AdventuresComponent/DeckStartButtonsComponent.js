const DeckStartButtonsComponent = ({ askRandomQuestion }) => {
  return (
    <button className="question-button" onClick={askRandomQuestion}>
      Start Adventure
    </button>
  );
};

export default DeckStartButtonsComponent;
