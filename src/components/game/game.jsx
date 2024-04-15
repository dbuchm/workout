import { useState } from 'react';
import styled from 'styled-components';
import Questions from './questions';
// Importa las imágenes

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: pink;
`;

const QuestionContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
  border: 3px solid black;
  border-radius: 7px;
  background-color: white;
`;

const Answer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;


const AnswerButton = styled.button`
  background-color: ${props => props.backgroundColor || 'transparent'};
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answerIndex, isRight) => {
    setSelectedAnswer(isRight);
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 1000);
  };

  return (
    <GameContainer>
      <QuestionContainer>
        <h2>Pregunta:</h2>
        <p>{Questions[currentQuestionIndex].question}</p>
        <Image src={Questions[currentQuestionIndex].img} alt="Imagen de la pregunta" />
      </QuestionContainer>
      <div>
        {Questions[currentQuestionIndex].answers.map((answer, index) => (
          <Answer key={index}>
            <AnswerButton
              onClick={() => handleAnswerClick(index, answer.isRight)}
              backgroundColor={selectedAnswer !== null ? (answer.isRight ? 'green' : 'red') : 'white'}
            >
              {answer.txt}
            </AnswerButton>
          </Answer>
        ))}
      </div>
    </GameContainer>
  );
};

export default Game;
