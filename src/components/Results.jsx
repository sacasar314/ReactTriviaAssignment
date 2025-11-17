function Results({ name, isCorrect, correctAnswer, onRestart }) {
  return (
    <div className="results p-6 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>

      {isCorrect ? (
        <p className="text-green-600 text-lg mb-4">
          Great job, {name}! You answered correctly!
        </p>
      ) : (
        <>
          <p className="text-red-600 text-lg mb-2">
            Nice try, {name}! That was not correct.
          </p>
          <p className="text-gray-700 mb-4">
            The correct answer was: <strong>{correctAnswer}</strong>
          </p>
        </>
      )}

      <button
        onClick={onRestart}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try Another Question
      </button>
    </div>
  );
}

export default Results;
