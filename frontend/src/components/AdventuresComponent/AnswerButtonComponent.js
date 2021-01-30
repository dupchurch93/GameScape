const AnswerButtonComponent = ({ currentScore, askRandomQuestion, setCurrentScore }) => {
  return (
    <div>
      <button className="question-button" onClick={() => {
        askRandomQuestion();
        setCurrentScore(currentScore + 1)
      }}>
        Correct
      </button>
      <button className="question-button" onClick={askRandomQuestion}>
        Incorrect
      </button>
    </div>
  );
};

const setScore = (prev) => {

}

export default AnswerButtonComponent;
