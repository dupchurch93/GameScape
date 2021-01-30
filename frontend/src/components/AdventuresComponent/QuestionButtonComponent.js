const QuestionButtonComponent = ({setAnsweredState}) => {
    return(
        <button className="question-button" onClick={() => setAnsweredState(true)}>Show Answer</button>
    )
}

export default QuestionButtonComponent;
