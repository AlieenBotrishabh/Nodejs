const express = require('express');

const app = express();

const logger = require('./logger');

const authorize = require('./authorize');

const morgan = require('morgan');

const { people } = require('./data');

app.use(morgan('tiny'));

// app.use([logger, authorize]);

app.get('/', (req, res) => {
    res.send("Hello");
})

app.get('/about', (req, res) => {
    res.send("About");
})

app.get('/api/products', (req, res) => {
    res.send("Products");
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send("Items");
})

app.get('/api/people', (req, res) => {
    res.status(200).json( { success : true, data : people });
})

app.listen(5000, () => {
    console.log("Server is listening on the port 5000");
})