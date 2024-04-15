import { useState } from 'react';

const CounterComponent = ({ initialValue, onValueChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    onValueChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = value - 1;
    setValue(newValue);
    onValueChange(newValue);
  };

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="text" value={value} onChange={handleInputChange} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default CounterComponent;
