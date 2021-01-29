const QuestionComponent = ({question}) => {
    return (
      <div className="question-area__question">
        <div>{question.question}?</div>
      </div>
    );
  };

  export default QuestionComponent;
