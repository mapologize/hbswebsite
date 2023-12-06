const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const generalRouter = require('./routes/general');

const app = express();
const port = 4000;

app.set('view engine', 'hbs');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

hbs.registerPartials(__dirname + '/views/partials');    

app.use('/', generalRouter);

app.listen(port,() => {
    console.log('app listen port :' + port);
});