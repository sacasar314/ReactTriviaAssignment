import { useEffect, useState } from 'react';

function QuestionForm({
    formData,
    questionData,
    setQuestionData,
    selectedAnswer,
    setSelectedAnswer,
    apiError,
    setApiError,
    onSubmitAnswer
  }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch question when formData changes
  const fetchQuestion = async () => {
    setLoading(true);
    setApiError(""); // Clear previous error

    const url = `https://opentdb.com/api.php?amount=1&type=multiple&category=${formData.category}&difficulty=${formData.difficulty}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const questionItem = data.results[0];

      const answers = [...questionItem.incorrect_answers];
      answers.push(questionItem.correct_answer);
      answers.sort(() => Math.random() - 0.5);

      setQuestionData({
        question: questionItem.question,
        correctAnswer: questionItem.correct_answer,
        answers: answers
      });

      setSelectedAnswer("");
    } catch (error) {
      setApiError("Failed to fetch question. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [formData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedAnswer) {
      setError("Please choose an answer.");
      return;
    }

    setError("");
    onSubmitAnswer(selectedAnswer); // Pass selected answer back to App.jsx
  };

  if (loading) {
    return (
      <div className="question-form">
        <p>Loading question...</p>
      </div>
    );
  }

  if (apiError) {
    return (
      <div className="question-form">
        <p className="error">{apiError}</p>
        <button onClick={fetchQuestion}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="question-form">
      <h2 dangerouslySetInnerHTML={{ __html: questionData.question }} />

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Select your answer:</legend>

          {questionData.answers && questionData.answers.map((answer, index) => (
            <label key={index}>
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              />
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </label>
          ))}
        </fieldset>

        {error && <p className="error">{error}</p>}

        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
}

export default QuestionForm;
