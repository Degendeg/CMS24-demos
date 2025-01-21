import { useState } from "react";
import Quiz from "./Quiz";

const Child = ({ setName }) => {
  const [answers, setAnswers] = useState([]);
  const [questions] = useState([
    {
      question: "Vad heter läraren i Frontend2?",
      alternatives: {
        first: "Tomas",
        second: "Dregen",
        last: "Sebastian",
      },
      answer: "Sebastian",
    },
    {
      question: "Brukar han dra över tiden?",
      alternatives: {
        first: "Ja",
        last: "Nej",
      },
      answer: "Ja",
    },
  ]);


  const handleAnswerChange = (questionIdx, answer) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev]
      updatedAnswers[questionIdx] = { questionNr: questionIdx + 1, answer }
      return updatedAnswers
    });
  };

  return (
    <>
      <h2>Child 👶</h2>
      <button onClick={() => setName("Luigi")}>Update name</button>
      <hr />
      <Quiz answers={answers} questions={questions} handleAnswerChange={handleAnswerChange} />
    </>
  );
};

export default Child;
