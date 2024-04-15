import { useState } from 'react';
import styled from 'styled-components';
import textosTeatro from './data/teatro.json';


const StyledParagraph = styled.p`
  background-color: ${props => props.highlighted ? 'pink' : 'rgb(239,239,239)'};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, textosTeatro.length - 1));
  };

  return (
    <div style={{ padding: '20px' }}>
      <button style={{'height':100, 'width':771, backgroundColor:'red'}} onClick={handlePrev}>Anterior</button>
      <button style={{'height':100, 'width':771, backgroundColor:'green'}} onClick={handleNext}>Siguiente</button>
      {textosTeatro.map((line, index) => (
        <StyledParagraph key={index} highlighted={index === currentIndex}>
          {line}
        </StyledParagraph>
      ))}
    </div>
  );
};

export default App;

