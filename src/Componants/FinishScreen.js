import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function FinishScreen() {
    const { dispatch, points, maxPossiblePoints, highscore } = useQuiz();
    const percentage = (points / maxPossiblePoints) * 100;
    let emoji;
    if (percentage === 100) emoji = "🏅";
    if (percentage >= 80 && percentage < 100) emoji = "🎉";
    if (percentage >= 50 && percentage < 80) emoji = "😊";
    if (percentage >= 0 && percentage < 50) emoji = "😞";
    if (percentage === 0) emoji = "🤦‍♂️";

    return (
        <>
            <p className="result">
                <span>{emoji} </span>
                You score {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
            </p>
            <p className="highscore">Highscore: {highscore} Points </p>
            <button className="btn btn-ui" onClick={()=> dispatch({type: 'restart'})}>Restart Quiz</button>
        </>
    );
}
