import React from "react";
import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

export default function Questions() {
    const { questions, index } = useQuiz();

    if (!questions || questions.length === 0) return null;

    const question = questions.at(index);
    if (!question) return null;
    console.log(question);
    return (
        <div>
            <h4>{question.question}</h4>
            <Options question={question}/>
        </div>
    );
}
