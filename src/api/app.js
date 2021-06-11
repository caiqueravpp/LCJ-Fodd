const express = require('express');
const api = express();
const database = require('./database')
const routes = require('./routes')
const path = require('path')

try {
    console.log('Connected!');
    database.connect();
} catch (e) {
    console.log(e);
}

api.use(routes);
api.use(express.static(path.resolve(__dirname, '../public')));


api.listen(3000, () => {
    console.log('API up and running!');
});

// api.get('/', (req, res) => {
//    console.log(req);
//    res.send('Hello, world!');
//});