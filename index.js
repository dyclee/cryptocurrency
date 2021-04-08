const express = require("express");
// const path = require('path');

const app = express();
const port = 3000


// app.use(express.json());
// app.use('/')
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}...`)
})
