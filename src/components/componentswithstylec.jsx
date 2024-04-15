// ComponentWithStyledComponents.js

import GlobalStyle from '../app/globalstyle.js';
import { StyledComponent1, StyledComponent2 } from './stylecomponentes.js';

const ComponentWithStyledComponents = ({ fontSize }) => {
  return (
    <>
      <GlobalStyle />
      <StyledComponent1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, impedit excepturi sed qui consequatur obcaecati cum nam repellat enim alias nisi, harum provident debitis laboriosam saepe omnis in explicabo quos.</StyledComponent1>
      <StyledComponent2 fontSize={fontSize}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates, delectus asperiores itaque aut neque recusandae consequuntur enim iusto reprehenderit nisi, ducimus, dolore distinctio! Laudantium tempora fuga modi ea nostrum.</StyledComponent2>
    </>
  );
};

export default ComponentWithStyledComponents;
