const AnswerButtonComponent = ({ setAnsweredState }) => {
  return (
    <div>
      <button
        className="question-button"
        onClick={() => setAnsweredState(false)}
      >
        Correct
      </button>
      <button
        className="question-button"
        onClick={() => setAnsweredState(false)}
      >
        Incorrect
      </button>
    </div>
  );
};

export default AnswerButtonComponent;
