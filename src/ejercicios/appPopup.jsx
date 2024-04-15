import { useState } from 'react';
import { StyledBox } from './app/style2';

const App = () => {
  const [color, setColor] = useState('');
  const [showElements, setShowElements] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['red', 'blue'];

  const handleToggleElements = () => {
    setShowElements(!showElements); // Cambiar entre mostrar y ocultar los elementos
  };

  const handleChangeColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length); // Alternar entre los índices de los colores
    setColor(colors[currentColorIndex]); // Establecer el color actual
  };

  return (
    <div>
      {showElements && (
        <>
          <button onClick={handleChangeColor}>Cambiar color</button>
          <StyledBox color={color} />
        </>
      )}
      <button onClick={handleToggleElements}>
        {showElements ? 'Ocultar Elementos' : 'Mostrar Elementos'}
      </button>
    </div>
  );
};

export default App;