const Quiz = ({ answers, questions, handleAnswerChange }) => {
  return (
    <>
      <h2>Quiz 🧐</h2>
      <ul>
        {answers.length !== questions.length ? questions.map((q, questionIdx) => (
          <li key={questionIdx}>
            <p>❓Fråga: {q.question}</p>
            {Object.entries(q.alternatives).map(([key, value]) => (
              <p key={key}>
                <label>
                  <input
                    type="radio"
                    name={`question-${questionIdx}`}
                    value={value}
                    onChange={(e) => handleAnswerChange(questionIdx, e.target.value)}
                  /> {value}
                </label>
              </p>
            ))}
          </li>
        )) :
          <>
            <h2>Dina svar:</h2>
            {answers.map((answ, idx) => (
              <div key={idx}>
                Fråga: {idx + 1} - <span>Svar: {answ.answer}</span>
                <span>{questions.find(q => q.answer === answ.answer) ? '✅' : '❌'}</span>
              </div>
            ))}
          </>
        }
      </ul>
    </>
  )
}
export default Quiz