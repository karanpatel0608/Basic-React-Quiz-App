import React, { useState } from 'react';
import ResultPage from './ResultPage'; // Import the ResultPage component
import { Link } from 'react-router-dom';


const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);
  const [answered, setAnswered] = useState(false); // State to track if the user has answered

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption(null);
      setShowResult(false);
      setShowSubmit(false);
      setAnswered(false); // Allow user to answer the next question
    } else {
      setShowSubmit(true);
    }
  };

  const handleOptionSelect = (option) => {
    if (!answered) {
      const currentQuiz = questions[currentQuestion];
      const correctAnswer = currentQuiz.correctAnswer;

      setSelectedOption(option);
      setShowResult(true);
      setAnswered(true); // User has answered, prevent further changes

      if (option === correctAnswer) {
        setCorrectCount((count) => count + 1);
      }
    }
  };


  const questions = [
    {
      question: 'What is the capital of France?',
      options: [ 'Berlin', 'London', 'Rome','Paris'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest mammal on Earth?',
      options: ['Elephant','Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    // Add more questions as needed
  ];

  const currentQuiz = questions[currentQuestion];

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#3498db',
    },
    quizCard: {
      display: 'grid',
      gridTemplateRows: 'auto auto auto',
      gap: '20px',
      border: '3px solid #3498db',
      borderRadius: '20px',
      padding: '40px',
      width: '600px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      background: '#ecf0f1',
      margin: '0 auto',
    },
    question: {
      fontSize: '20px',
      marginBottom: '20px',
      color: '#3498db',
    },
    options: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
    },
    option: {
      padding: '10px',
      border: '1px solid #3498db',
      borderRadius: '10px',
      cursor: 'pointer',
    },
    nextButton: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '15px 25px',
      border: 'none',
      borderRadius: '10px',
      fontSize: '18px',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Quiz {currentQuestion + 1}</h2>
      <div style={styles.quizCard}>
      <h3 style={styles.question}>{currentQuiz.question}</h3>
        <div style={styles.options}>
          {currentQuiz.options.map((option, index) => (
            <div
              key={index}
              style={{
                ...styles.option,
                backgroundColor:
                  selectedOption === option && showResult
                    ? option === currentQuiz.correctAnswer ? '#2ecc71' : '#e74c3c'
                    : selectedOption === option && showResult && option !== currentQuiz.correctAnswer
                    ? '#e74c3c'
                    : '#ecf0f1',
                color:
                  selectedOption === option && showResult && option !== currentQuiz.correctAnswer
                    ? '#ffffff'
                    : '#000000',
              }}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
              {selectedOption === option && showResult && option !== currentQuiz.correctAnswer && (
                <span> - Wrong Answer</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        {showResult && (
          <p style={{ color: selectedOption === currentQuiz.correctAnswer ? '#2ecc71' : '#e74c3c' }}>
            {selectedOption === currentQuiz.correctAnswer ? 'Your answer was correct!' : 'Incorrect option!'}
          </p>
        )}
      </div>
      {showSubmit ? (
         <>
         <button style={styles.nextButton} onClick={() => setShowSubmit(false)}>
           Submit
         </button>
         {/* Additional button beside the 'Submit' button */}
         <button style={{...styles.nextButton, marginLeft: '10px'}} >
          <Link to="/home" style={{color:"white",textDecoration:"none"}}> Back to Dashboard </Link> 
         </button>
       </>
      ) : (
        <button style={styles.nextButton} onClick={handleNextQuestion}>
        {currentQuestion + 1 === questions.length ? 'Submit' : 'Next Question'}
      </button>
      )}
      {showSubmit && <ResultPage count={correctCount} totalQuestions={questions.length} />}
    </div>
  );
};

export default QuizPage;
