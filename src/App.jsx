import { useState } from 'react';
import Works from './ejercicios/Works';





// const WorkoutList = ({ onSelectWorkout }) => {
//   const [selectedWorkoutIndex, setSelectedWorkoutIndex] = useState(0);

//   const handleWorkoutClick = (index) => {
//     setSelectedWorkoutIndex(index);
//     onSelectWorkout(workoutsData[index]);
//   };

//   return (
//     <WorkoutColumn>
//       {workoutsData.map((workout, index) => (
//         <WorkoutItem
//           key={index}
//           isSelected={index === selectedWorkoutIndex}
//           onClick={() => handleWorkoutClick(index)}
//         >
//           {workout.name}
//         </WorkoutItem>
//       ))}
//     </WorkoutColumn>
//   );
// };

// const ExerciseList = ({ exercises }) => {}

const App = () => {
  //const [selectedWorkout, setSelectedWorkout] = useState(workoutsData[0]);

//   const handleSelectWorkout = (workout) => {
//     setSelectedWorkout(workout);
//   };

  return (







    <Works />

















    // <Container>
    //   <WorkoutList onSelectWorkout={handleSelectWorkout} />
    //   <ExerciseList exercises={selectedWorkout.exercises} />
    // </Container>
    //  <ExerciseColumn>
    //   {workoutsData.map((exercise, index) => (
    //     <ImageContainer key={index}>
    //       <Arrow onClick={() => console.log("Avanzar al siguiente ejercicio")} />
    //       <Image src={exercise.img} alt={exercise.name} />
    //       <p>{exercise.name}</p>
    //     </ImageContainer>
    //   ))}
    // </ExerciseColumn>
   
  );
};

export default App;
