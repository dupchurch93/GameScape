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
import FinishedComponent from "./FinishedComponent";
import FinishedComponentButtons from "./FinishedComponentButtons";
import {useDispatch} from 'react-redux';
// import { updateDeckScoreThunk } from "../../store/deck";

const AdventureComponent = () => {
  const dispatch = useDispatch();

  const { deckId } = useParams();
  const deck = useSelector((state) => state.decks.deckList[deckId]);
  const [studyingBegan, setStudyingBegan] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [unansweredQuestions, setUnansweredQuestions] = useState([
    ...deck.questions,
  ]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredState, setAnsweredState] = useState(true);
  const [finishedState, setFinishedState] = useState(false);

  console.log("unanswerdQuestions outside use effect", unansweredQuestions);

  const askRandomQuestion = useCallback(() => {
    if (!studyingBegan) {
      setStudyingBegan(true);
      dispatch(updateDeckScoreThunk)
    }
    if (unansweredQuestions.length === 0) {
      setFinishedState(true);

      return;
    }
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
    setAnsweredState(false);
    setUnansweredQuestions(newUnansweredQuestionsArray);
    setCurrentQuestion(question);
  }, [unansweredQuestions, studyingBegan]);

  let questionArea;
  let buttonsArea;

  useEffect(() => {
    console.log("current score----", currentScore);
  }, [currentScore]);

  if (!studyingBegan) {
    questionArea = <DeckStartComponent></DeckStartComponent>;
    buttonsArea = (
      <DeckStartButtonsComponent
        askRandomQuestion={askRandomQuestion}
      ></DeckStartButtonsComponent>
    );
  } else if (finishedState) {
    questionArea = <FinishedComponent currentScore={currentScore}></FinishedComponent>;
    buttonsArea = (
      <FinishedComponentButtons
      setCurrentScore={setCurrentScore}
      setFinishedState={setFinishedState}
      setStudyingBegan={setStudyingBegan}
      setAnsweredState={setAnsweredState}
      questions={deck.questions}
      setUnansweredquestions={setUnansweredQuestions}
      ></FinishedComponentButtons>
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
          setCurrentScore={setCurrentScore}
          askRandomQuestion={askRandomQuestion}
          currentScore={currentScore}
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
