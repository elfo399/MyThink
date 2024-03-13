const http = require('http');
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const log4js = require('log4js');
log4js.configure('conf/log4js.json');
const logger = log4js.getLogger();

/*
logger.trace('This is a TRACE message.');
logger.debug('This is a DEBUG message.');
logger.info('This is an INFO message.');
logger.warn('This is a WARN message.');
logger.error('This is an ERROR message.');
logger.fatal('This is a FATAL message.');
*/

// Include route files
const usersRoute = require('./routes/users');
const constants = require('./conf/database.conf.js');

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
    logger.info('Connessione al database riuscita');
  });

  // Gestire l'evento di connessione
connection.connect((err) => {
  if (err) {
    logger.error('Errore di connessione al database:', err.message);
    let retryCount = 0;
    const maxRetries = 5;

    function retryConnection() {
      if (retryCount < maxRetries) {
        retryCount++;
        logger.info(`Tentativo di connessione al database ${retryCount}/${maxRetries}...`);
        // Attendere per un certo periodo di tempo prima di ritentare
        setTimeout(() => {
          connection.connect(retryConnection)
        }, 5000); // Ritenta dopo 5 secondi (puoi regolare il tempo di attesa a tuo piacimento)
      } else {
        logger.fatal('Numero massimo di tentativi di connessione raggiunto. Il server Express non verrà avviato.');
      }
    }

    retryConnection();
        
    return;
  }

  logger.info('Connessione al database riuscita');
  startServer(); // Avvia il server Express dopo la connessione al database
});


function startServer() {
  app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
  });
  
  app.get('/', (req, res) => {
      res.send('hello root node');
  });
  
  app.post('/selectAllText', (req, res) => {
    const sqlQuery = 'SELECT * FROM text where `Data` = ?';
    logger.info(req.body);
    const values = [req.body.data];
  
    // Execute the query
    connection.query(sqlQuery, values, (err, results) => {
      if (err) {
        logger.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      // Print data in the console
      logger.info('Data from MySQL:', results);
  
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
        logger.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      // Print data in the console
      logger.info('Data from MySQL:', results);
  
      // Send the data as a JSON response
      res.json(results);
    });
    
  
  });
}