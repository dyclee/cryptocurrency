const express = require('express');

// Create the Express app.
const app = express();
console.log("app", app)

// Define routes.

app.get('/', (req, res) => {
  console.log("WTF")
  res.send('Hello from Express!');
});
app.get('/wtf', (req, res) => {
  console.log("WTF")
  res.send('Hello from Express!');
});

// Define a port and start listening for connections.

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
