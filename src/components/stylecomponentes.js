// StyledComponents.js
import styled from 'styled-components';

// StyledComponent1
export const StyledComponent1 = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: red;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// StyledComponent2
export const StyledComponent2 = styled(StyledComponent1)`
  font-weight: bold;
  color: #333;

  &:hover {
    background-color: pink;
  }
/* Estilos para escritorio */
@media (min-width: 768px) {
  
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    background-color: gray;
    color: white;
}

`;
