const http = require('http');
const express = require('express');
const mysql = require('mysql2');
const app = express();

// Include route files
const usersRoute = require('./routes/users');
const constants = require('./const.js');

// Use routes
app.use('/users', usersRoute);

const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: constants.DB_HOST,
    port: constants.DB_PORT,
    user: constants.DB_USER,
    password: constants.DB_PASSWORD,
    database: constants.DB_DATABASE
  });

connection.connect((err) => {
  if (err) {
    console.error('Errore di connessione al database:', err.message);
  } else {
    console.log('Connessione al database riuscita');
  }
}); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('hello root node');
});

app.get('/getData', (req, res) => {
  const sqlQuery = 'SELECT * FROM PostIt';

  // Execute the query
  connection.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Print data in the console
    console.log('Data from MySQL:', results);

    // Send the data as a JSON response
    res.json(results);
  });
});