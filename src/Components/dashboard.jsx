// src/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Your Dashboard</h2>
      <div style={styles.quizOptions}>
        <div style={styles.quizCard}>
          <h3 style={styles.quizTitle}>Quiz 1</h3>
          <p style={styles.quizDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button style={styles.startButton}><Link to="/quiz" style={{color:"white",textDecoration:"none"}}>Start Quiz</Link></button>
        </div>
        <div style={styles.quizCard}>
          <h3 style={styles.quizTitle}>Quiz 2</h3>
          <p style={styles.quizDescription}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button style={styles.startButton}><Link to="/quiz" style={{color:"white",textDecoration:"none"}}>Start Quiz</Link></button>
        </div>
        <div style={styles.quizCard}>
          <h3 style={styles.quizTitle}>Quiz 3</h3>
          <p style={styles.quizDescription}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <button style={styles.startButton}><Link to="/quiz" style={{color:"white",textDecoration:"none"}}>Start Quiz</Link></button>
        </div>
        <div style={styles.quizCard}>
          <h3 style={styles.quizTitle}>Quiz 4</h3>
          <p style={styles.quizDescription}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button style={styles.startButton}><Link to="/quiz" style={{color:"white",textDecoration:"none"}}>Start Quiz</Link></button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '30px',
    color: '#3498db',
  },
  quizOptions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  quizCard: {
    border: '3px solid #3498db',
    borderRadius: '20px',
    padding: '40px',
    width: '100%',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    background: '#ecf0f1',
  },
  quizTitle: {
    color: '#3498db',
    fontSize: '28px',
    marginBottom: '20px',
  },
  quizDescription: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  startButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '15px 25px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default Dashboard;
