'use strict';

const express = require('express');

// Constants
//
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Ciao, benvenuto....sono un esempio di codice nodeJS fatto da sviluppatore1\n');
});

app.get('/pietro', (req, res) => {
  res.send('Ciao, benvenuto....sono Pietroo\n');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
