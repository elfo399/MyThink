const http = require('http');
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Include route files
const usersRoute = require('./routes/users');
const constants = require('./const.js');

// Use routes
app.use('/users', usersRoute);
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:4200'
}));

const connection = mysql.createConnection({
    host: constants.DB_HOST,
    port: constants.DB_PORT,
    user: constants.DB_USER,
    password: constants.DB_PASSWORD,
    database: constants.DB_DATABASE,
    waitForConnections: true
  });

  connection.on('connect', () => {
    console.log('Connessione al database riuscita');
  });

  // Gestire l'evento di connessione
connection.connect((err) => {
  if (err) {
    console.error('Errore di connessione al database:', err.message);
    let retryCount = 0;
        const maxRetries = 5;

        function retryConnection() {
            if (retryCount < maxRetries) {
                retryCount++;
                console.log(`Tentativo di connessione al database ${retryCount}/${maxRetries}...`);
                // Attendere per un certo periodo di tempo prima di ritentare
                setTimeout(() => {
                    connection.connect(retryConnection)
                }, 5000); // Ritenta dopo 5 secondi (puoi regolare il tempo di attesa a tuo piacimento)
            } else {
                console.error('Numero massimo di tentativi di connessione raggiunto. Il server Express non verrà avviato.');
            }
        }

        retryConnection();
        
        return;
  }

  console.log('Connessione al database riuscita');
  startServer(); // Avvia il server Express dopo la connessione al database
});


function startServer() {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  app.get('/', (req, res) => {
      res.send('hello root node');
  });
  
  app.get('/selectAllText', (req, res) => {
    const sqlQuery = 'SELECT * FROM text';
  
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
  
  app.post('/insert', (req, res) => {  

    const sqlQuery = 'INSERT INTO text (Value, Data) VALUES (?, ?)';
    const values = [req.body.value, req.body.data];

    // Execute the query
    connection.query(sqlQuery, values, (err, results) => {
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
}