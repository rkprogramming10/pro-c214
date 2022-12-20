const express = require('express');
const app = express();

const server = require('http').Server(app);

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});


app.get('/error', (req, res) => {
    res.render('error');
});

server.listen(3030);

