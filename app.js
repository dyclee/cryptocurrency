const express = require('express');
const cors = require("cors");
const rp = require('request-promise');

require('dotenv').config();

// Create the Express app.
const app = express();
app.use(express.json());
app.use(cors());

// Define routes.

app.get('/data', (req, res) => {
  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '30',
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
    res.status(200).json({
      data: response
    })
    return;
  }).catch((err) => {
    console.log('API call error:', err.message);
    res.send('Hello from Express!');
  });

});


// Define a port and start listening for connections.

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
