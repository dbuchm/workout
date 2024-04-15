import { useState } from 'react';
import styled from 'styled-components';
import workoutsData from './components/workout/workouts';

const Container = styled.div`
  display: flex;
`;

const WorkoutColumn = styled.div`
  flex: 1;
  padding: 10px;
`;

const ExerciseColumn = styled.div`
  flex: 2;
  padding: 10px;
`;

const WorkoutItem = styled.div`
  cursor: pointer;
  border: 1px solid ${props => props.isSelected ? 'red' : 'transparent'};
  padding: 5px;
  margin-bottom: 5px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid #333;
  border-right: 2px solid #333;
  transform: rotate(-45deg);
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const WorkoutList = ({ onSelectWorkout }) => {
  const [selectedWorkoutIndex, setSelectedWorkoutIndex] = useState(0);

  const handleWorkoutClick = (index) => {
    setSelectedWorkoutIndex(index);
    onSelectWorkout(workoutsData[index]);
  };

  return (
    <WorkoutColumn>
      {workoutsData.map((workout, index) => (
        <WorkoutItem
          key={index}
          isSelected={index === selectedWorkoutIndex}
          onClick={() => handleWorkoutClick(index)}
        >
          {workout.name}
        </WorkoutItem>
      ))}
    </WorkoutColumn>
  );
};

const ExerciseList = ({ exercises }) => {
  return (
    <ExerciseColumn>
      {workoutsData.map((exercise, index) => (
        <ImageContainer key={index}>
          <Arrow onClick={() => console.log("Avanzar al siguiente ejercicio")} />
          <Image src={exercise.img} alt={exercise.name} />
          <p>{exercise.name}</p>
        </ImageContainer>
      ))}
    </ExerciseColumn>
  );
};

const App = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(workoutsData[0]);

  const handleSelectWorkout = (workout) => {
    setSelectedWorkout(workout);
  };

  return (
    <Container>
      <WorkoutList onSelectWorkout={handleSelectWorkout} />
      <ExerciseList exercises={selectedWorkout.exercises} />
    </Container>
  );
};

export default App;
