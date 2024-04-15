import React, { useState } from 'react'
import workoutsData from '../components/workout/workouts';
import  { WorkoutItem, ExerciseColumn, ImageContainer, Image, Arrow} from '../app/workStyle';
import flecha from "../components/workout/img/flecha.png"


const Works = () => {
  const [cuenta,setCuenta] = useState(0)

  return (
    <>
      <span><img src={flecha} alt="" onClick={() => setCuenta(cuenta - 1)} /></span>
        {workoutsData[cuenta].title}
      <span><img  style={{transform: 'scaleX(-1)'}} src={flecha} alt="" onClick={() => setCuenta(cuenta + 1)} /></span>

        <ExerciseColumn>
        {workoutsData[cuenta].exercises.map((exercise, index) => (
          <ImageContainer key={index}>
           
            <Image src={exercise.img} alt={exercise.name} id='hola' />
            <p>{exercise.name}</p>
            {console.log(exercise.img)}
          </ImageContainer>
          
        ))}
      </ExerciseColumn>
     </>
     
  )
}

export default Works