const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/index.js');
app.use(routes);

app.listen(3000, function(){
    console.log('listening on port 3000');
})