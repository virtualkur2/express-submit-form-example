const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// depósito de datos temporal
let alumnos = []; // <- se inicia vacío con la aplicación

//rutas o endpoints
app.post('/api/alumnos/add', (req, res, next) => {
  const alumno = req.body;
  if(!alumno) {
    return res.status(400).json({error: 'No hay datos'});
  }
  alumno.no = alumnos.length + 1;
  console.log(alumno);
  alumnos.push(alumno);
  // podemos enviar el array de alumnos, así por cada vez que accedemos a este
  // a este endpoint vamos viendo los datos almacenados
  return res.status(200).json(alumnos);
});

app.all('/', (req, res) => {
  const fileName = path.join(__dirname, '/index.html');
  return res.sendFile(fileName);
});


app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto: ${port}.`);
});
