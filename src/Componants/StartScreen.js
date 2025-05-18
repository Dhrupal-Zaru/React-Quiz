import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function StartScreen() {
    const {numQuestions, dispatch} = useQuiz();
    return <div className="start">
        <h2>Welcome to The React Quiz!</h2>
        <h3>{numQuestions} questions to test your React mastery <span>🧾</span></h3>
        <button className="btn btn-ui" onClick={() => dispatch({type: 'start'})}>Let's Start <span>🤩</span></button>
    </div>;
}
