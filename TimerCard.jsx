import React from 'react';

const TimerCard = () => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      width: '300px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Timer</h3>
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        margin: '20px 0',
        fontFamily: 'monospace'
      }}>
        00:00
      </div>
      <div>
        <button style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          margin: '0 5px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Start
        </button>
        <button style={{
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          margin: '0 5px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default TimerCard;