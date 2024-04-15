import styled from 'styled-components';






export const Container = styled.div`
  display: flex;
`;

export const WorkoutColumn = styled.div`
  flex: 1;
  padding: 10px;
`;

export const ExerciseColumn = styled.div`
  flex: 2;
  padding: 10px;
`;

export const WorkoutItem = styled.div`
  cursor: pointer;
  border: 1px solid ${props => props.isSelected ? 'red' : 'transparent'};
  padding: 5px;
  margin-bottom: 5px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;
export const Arrow = styled.div`

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

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;