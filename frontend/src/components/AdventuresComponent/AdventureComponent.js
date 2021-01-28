import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import DeckStartComponent from "./DeckStartComponent";
import QuestionComponent from "./QuestionComponent";
import "./AdventureComponent.css";
import DeckStartButtonsComponent from "./DeckStartButtonsComponent";

const AdventureComponent = () => {
  const { deckId } = useParams();
  const deck = useSelector((state) => state.decks.deckList[deckId]);
  const questions = deck.questions;
  const [studyingBegan, setStudyingBegan] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [unansweredQuestions, setUnansweredQuestions] = useState([
    ...questions,
  ]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredState, setAnsweredState] = useState(false);

  console.log("deck here", deck);
  console.log("questions here", questions);

  const askRandomQuestion = () => {
    const questionIndex = Math.floor(
      Math.random() * unansweredQuestions.length
    );
    const newUnansweredQuestionsArray = unansweredQuestions.splice(
      questionIndex
    );
    console.log("return of the splice", newUnansweredQuestionsArray[0]);
    console.log("unaswered questions array", unansweredQuestions);
  };

  askRandomQuestion();

  let questionArea;
  let buttonsArea;
  if (studyingBegan) {
    questionArea = (
      <div> this is a test</div>
    )
  } else {
    questionArea = <DeckStartComponent></DeckStartComponent>;
    buttonsArea = (
      <DeckStartButtonsComponent
        setStudyingBegan={setStudyingBegan}
      ></DeckStartButtonsComponent>
    );
  }

  return (
    <div className="adventure-component__deck-container">
      <div className="main-dashboard-component deck-title">{deck.name}</div>.
      <div className="main-dashboard-component question-area">
        {/* <div className="question-area__question">{questions[0].question}</div> */}
        {questionArea}
        <div className="question-area__buttons">
          {/* <button className="question-button">Show Answer</button> */}
          {buttonsArea}
        </div>
      </div>
    </div>
  );
};

export default AdventureComponent;
