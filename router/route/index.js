let express = require('express');
let app = express();

app.use('/',require('./login'));
app.use('/',require('./register'));

module.exports = app;