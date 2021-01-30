import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { updateDeckScoreThunk } from "../../store/deck";

const FinishedComponent = ({ deck, currentScore }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const averageScore = deck.averageScore || 0;
    const bestScore = deck.bestScore || 0;
    const totalQuestions = deck.questions.length;
    const timesStudied = deck.timesStudied || 0;
    console.log('best score', bestScore);
    console.log('previous average score', averageScore);
    console.log('times played', timesStudied);
    const newAverageScore = (averageScore + currentScore)/((timesStudied*averageScore)+1);
    console.log('new average score', newAverageScore)
    deck.averageScore = newAverageScore;
    deck.timesStudied = timesStudied + 1;
    if (bestScore < currentScore) {
      deck.bestScore = currentScore;
    };
    dispatch(updateDeckScoreThunk(deck));
  });

  return (
    <div>
      You completed your adventure. You managed to defeat #{currentScore}{" "}
      enemies out of a total
    </div>
  );
};

export default FinishedComponent;
