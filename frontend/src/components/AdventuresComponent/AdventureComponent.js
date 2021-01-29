import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import DeckStartComponent from "./DeckStartComponent";
import QuestionComponent from "./QuestionComponent";
import "./AdventureComponent.css";
import DeckStartButtonsComponent from "./DeckStartButtonsComponent";
import QuestionButtonComponent from "./QuestionButtonComponent";
import AnswerComponent from "./AnswerComponent";
import AnswerButtonComponent from "./AnswerButtonComponent";

const AdventureComponent = () => {
  const { deckId } = useParams();
  const deck = useSelector((state) => state.decks.deckList[deckId]);
  const [studyingBegan, setStudyingBegan] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [unansweredQuestions, setUnansweredQuestions] = useState([
    ...deck.questions,
  ]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredState, setAnsweredState] = useState(true);

  console.log("unanswerdQuestions outside use effect", unansweredQuestions);

  const askRandomQuestion = useCallback(() => {
    //grab the question at a random index
    const questionIndex = Math.floor(
      Math.random() * unansweredQuestions.length
    );
    const question = unansweredQuestions[questionIndex];

    //get a new array without the question that has been taken out in order to set to the new unansweredQuestionArray
    const newUnansweredQuestionsArray = [
      ...unansweredQuestions.slice(0, questionIndex),
      ...unansweredQuestions.slice(questionIndex + 1, questionIndex.length),
    ];
    console.log(
      "newUnansweredQuestions in use effect before set----",
      newUnansweredQuestionsArray
    );
    setUnansweredQuestions(newUnansweredQuestionsArray);
    console.log(
      "unansweredQuestions in use effect after set----",
      unansweredQuestions
    );
    setCurrentQuestion(question);
  }, []);

  useEffect(() => {
    if (answeredState) {
      return;
    } else {
      askRandomQuestion();
    }
  }, [answeredState, askRandomQuestion]);

  let questionArea;
  let buttonsArea;
  if (!studyingBegan) {
    questionArea = <DeckStartComponent></DeckStartComponent>;
    buttonsArea = (
      <DeckStartButtonsComponent
        setStudyingBegan={setStudyingBegan}
        setAnsweredState={setAnsweredState}
      ></DeckStartButtonsComponent>
    );
  } else {
    if (!answeredState) {
      questionArea = (
        <QuestionComponent question={currentQuestion}></QuestionComponent>
      );
      buttonsArea = (
        <QuestionButtonComponent
          setAnsweredState={setAnsweredState}
        ></QuestionButtonComponent>
      );
    } else {
      questionArea = (
        <AnswerComponent question={currentQuestion}></AnswerComponent>
      );
      buttonsArea = (
        <AnswerButtonComponent
          setAnsweredState={setAnsweredState}
        ></AnswerButtonComponent>
      );
    }
  }

  return (
    <div className="adventure-component__deck-container">
      <div className="main-dashboard-component deck-title">{deck.name}</div>.
      <div className="main-dashboard-component question-area">
        {questionArea}
        <div className="question-area__buttons">{buttonsArea}</div>
      </div>
    </div>
  );
};

export default AdventureComponent;
