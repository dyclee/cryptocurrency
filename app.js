const express = require('express');
const rp = require('request-promise');

require('dotenv').config();

// Create the Express app.
const app = express();


// Define routes.

app.get('/', (req, res) => {
  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '5000',
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.APIKEY
    },
    json: true,
    gzip: true
  };

  rp(requestOptions).then(response => {
    console.log('API call response:', response);
  }).catch((err) => {
    console.log('API call error:', err.message);
  });

  res.send('Hello from Express!');
});


// Define a port and start listening for connections.

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
