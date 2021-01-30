import deckReducer from "../../store/deck";

const FinishedComponentButtons = ({ questions, setUnansweredquestions, setFinishedState, setStudyingBegan, setCurrentScore, setAnsweredState }) => {
  return (
    <button
      className="question-button"
      onClick={() => {
        setAnsweredState(false)
        setStudyingBegan(false)
        setFinishedState(false)
        setCurrentScore(0)
        setUnansweredquestions([...questions])
      }}
    >
      Adventure Again
    </button>
  );
};

export default FinishedComponentButtons;
