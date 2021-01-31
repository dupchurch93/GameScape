import { useHistory } from "react-router-dom";

const FinishedComponentButtons = ({
  questions,
  setUnansweredquestions,
  setFinishedState,
  setStudyingBegan,
  setCurrentScore,
  setAnsweredState,
}) => {
  const history = useHistory();
  return (
    <>
      <button
        className="question-button"
        onClick={() => {
          setAnsweredState(false);
          setStudyingBegan(false);
          setFinishedState(false);
          setCurrentScore(0);
          setUnansweredquestions([...questions]);
        }}
      >
        Adventure Again
      </button>
      <button className="question-button" onClick={() => history.push("/")}>
        Back To My Adventures
      </button>
    </>
  );
};

export default FinishedComponentButtons;
