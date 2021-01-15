const express = require('express');
const path = require('path');
const morgan = require('morgan');

const bodyParser = require('body-parser'); 
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Manejo de errores
app.use((err, req, res, next) => {
  res.send({ error: err.message });
})

app.listen((app.get('port')), () => {
    console.log(`server running on port ${app.get('port')}`); 
})

const DB = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'portalpagos'
});

DB.connect();
app.use(cors())
app.use(express.json())

app.post('/api/create', (req, res) => {

  const nombre = req.body.nombre;
  const email = req.body.email;

  console.log(nombre, email);

    DB.query("INSERT INTO users (nombre, email) VALUES (? ,?)", [nombre, email], (err, res) => {
    if (err) {
      console.log('hay un error', err)
    } else {
      console.log(`creado con exito el usuario `)
    }
  })
})

// DB.end();