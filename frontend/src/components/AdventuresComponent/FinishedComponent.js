const FinishedComponent = ({ deck, currentScore }) => {


  return (
    <div>
      You completed your adventure. You managed to defeat {currentScore}{" "}
      enemies out of a total {deck.Questions.length}.
    </div>
  );
};

export default FinishedComponent;
