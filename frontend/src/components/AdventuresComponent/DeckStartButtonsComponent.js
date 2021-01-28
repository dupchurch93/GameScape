const DeckStartButtonsComponent = ({setStudyingBegan}) => {
    return(
        <button className="question-button" onClick={() => setStudyingBegan(true)}>Start Adventure</button>
    )
}

export default DeckStartButtonsComponent;
