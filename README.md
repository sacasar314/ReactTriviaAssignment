# Open Trivia Database Quiz App (React)

A simple React application that generates quiz questions using the Open Trivia Database API.  
Users enter their name, answer a dynamically generated question, receive feedback, and can try additional questions without losing their entered name.

---

## 🚀 Features

- Enter a name and start a personalized quiz.
- Fetch questions using the Open Trivia Database API.
- Multiple choice answers displayed via radio buttons.
- Receive instant feedback after submitting an answer.
- Ability to **try another question** without re-entering the user’s name.
- Basic styling and centered layout for clean UI.
- Fully component-based structure using React hooks.

---

## 🧩 Components Overview

### **HomePage**
- Collects the user's name.
- Starts the quiz and passes the value to the next component.

### **QuestionForm**
- Fetches a question from the Open Trivia Database API.
- Displays the question and answer options.
- Submits the selected answer and checks correctness.
- Renders loading and error states.

### **Results**
- Displays whether the user got the question correct or not.
- Shows the user’s name and their selected answer.
- Contains a **Try Another Question** button that restarts the quiz.

