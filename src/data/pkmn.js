
fetch('https://api.tcgdex.net/v2/:lang')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos
    console.log(data);
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error al obtener datos:', error);
  });
