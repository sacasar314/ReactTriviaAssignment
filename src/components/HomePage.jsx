import { useState } from 'react';

function HomePage({ formData, setFormData, onStartQuiz }) {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.category || !formData.difficulty) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");
    onStartQuiz();
  };

  return (
    <div className="homepage">
      <h1>Welcome to the Quiz App</h1>
      <p>Please enter your details to begin.</p>

      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <label>
          First Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => 
                setFormData(prev => ({
                    ...prev, 
                    name: e.target.value
                }))
            }
          />
        </label>

        {/* Category Dropdown */}
        <label>
          Category:
          <select
            value={formData.category}
            onChange={(e) => 
                setFormData(prev => ({
                    ...prev,
                    category: e.target.value
                }))
            }
          >
            <option value="">-- Select Category --</option>
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="23">History</option>
            <option value="27">Animals</option>
          </select>
        </label>

        {/* Difficulty Dropdown */}
        <label>
          Difficulty:
          <select
            value={formData.difficulty}
            onChange={(e) => 
                setFormData(prev => ({
                    ...prev, 
                    difficulty: e.target.value
                }))
            }
          >
            <option value="">-- Select Difficulty --</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>

        <button type="submit">Start Quiz</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default HomePage;