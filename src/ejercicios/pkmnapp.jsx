import  { useState, useEffect } from 'react';

const App = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('https://api.tcgdex.net/v2/:lang')
      .then(response => response.json())
      .then(data => {
        setDatos(data); // Actualizar el estado con los datos obtenidos
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []); // La dependencia vacía asegura que se haga la solicitud solo una vez al montar el componente

  return (
    <div>
      <h1>API JSON en React</h1>
      <ul>
        {datos.map(item => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
