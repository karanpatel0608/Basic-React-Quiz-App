import React from 'react';

const ResultPage = ({ count, totalQuestions }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px', color: '#ffffff' }}>
      <h2 style={{ marginBottom: '10px' }}>Thank You!</h2>
      <p style={{ marginTop: '5px' }}>{`${count} out of ${totalQuestions} questions were correct.`}</p>
    </div>
  );
};

export default ResultPage;
