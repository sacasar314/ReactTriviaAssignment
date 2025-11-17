import { useState } from 'react';
import HomePage from './components/HomePage';
import QuestionForm from './components/QuestionForm';
import Results from './components/Results';
import './App.css';

function App() {
  // Set initial state values
  const [screen, setScreen] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    difficulty: ""
  });
  const [questionData, setQuestionData] = useState({
    question: "",
    correctAnswer: "",
    answers: []
  });
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [apiError, setApiError] = useState("");

  // Reset all state values to start over
  const resetApp = () => {
    setScreen("home");
    setFormData(prev => ({
      name: prev.name,
      category: "",
      difficulty: ""
    }));
    setQuestionData({
      question: "",
      correctAnswer: "",
      answers: []
    });
    setSelectedAnswer("");
    setIsCorrect(null);
    setApiError("");
  };

  // Move from HomePage to Quiz
  const handleStart = () => {
    setScreen("quiz");
  };

  // Check answer and move to results
  const handleAnswerSubmit = () => {
  if (!selectedAnswer) return;

  const isAnswerCorrect = selectedAnswer === questionData.correctAnswer;
  setIsCorrect(isAnswerCorrect);
  setScreen("result");
};

  return (
    <>
      {screen === "home" && (
        <HomePage 
          formData={formData}
          setFormData={setFormData}
          onStartQuiz={handleStart}
        />
      )}

      {screen === "quiz" && (
        <QuestionForm
          formData={formData}
          questionData={questionData}
          setQuestionData={setQuestionData}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          apiError={apiError}
          setApiError={setApiError}
          onSubmitAnswer={handleAnswerSubmit}
        />
      )}

      {screen === "result" && (
        <Results
          name={formData.name}
          isCorrect={isCorrect}
          correctAnswer={questionData.correctAnswer}
          onRestart={resetApp}
        />
      )}
    </>
  );
}

export default App
