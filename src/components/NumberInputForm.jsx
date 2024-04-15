// NumberInputForm.jsx
import  { useState } from 'react';

function NumberInputForm({ onCalculate }) {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleCalculate = () => {
    const result = parseInt(num1) * parseInt(num2);
    onCalculate(result);
  };

  return (
    <div>
      <h2>Calculadora de Productos</h2>
      <label>
        Primer número:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <br />
      <label>
        Segundo número:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <br />
      <button onClick={handleCalculate}>Calcular</button>
    </div>
  );
}

export default NumberInputForm;
