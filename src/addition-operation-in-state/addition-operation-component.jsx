import React, { useState } from 'react';

const AdditionOperationComponent = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto'
    },
    input: {
      padding: '10px',
      margin: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100px'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      margin: '10px'
    },
    result: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h1>Addition Operation</h1>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          style={styles.input}
        />
        <span> + </span>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          style={styles.input}
        />
      </div>
      <button onClick={handleAddition} style={styles.button}>
        Calculate
      </button>
      <div style={styles.result}>
        Result: {result}
      </div>
    </div>
  );
};

export default AdditionOperationComponent;