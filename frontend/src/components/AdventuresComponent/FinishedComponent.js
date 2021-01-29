import FinishedComponentButtons from "./FinishedComponentButtons"

const FinishedComponent = ({currentScore}) => {
    return(
        <div>You completed your adventure. You managed to defeat #{currentScore} enemies out of a total</div>
    )
}

export default FinishedComponent;
