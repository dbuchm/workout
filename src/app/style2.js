import styled from 'styled-components';

export const StyledBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.color || 'blue'};
  &:hover {
	  background-color:palegreen;
  }
`;

