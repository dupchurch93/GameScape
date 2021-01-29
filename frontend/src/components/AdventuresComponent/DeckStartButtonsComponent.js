const DeckStartButtonsComponent = ({ setStudyingBegan, setAnsweredState }) => {
  return (
    <button
      className="question-button"
      onClick={() => {
        setStudyingBegan(true);
        setAnsweredState(false);
      }}
    >
      Start Adventure
    </button>
  );
};

export default DeckStartButtonsComponent;
