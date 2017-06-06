let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./public'));
app.use(require('./router/route/index'));

app.listen(3000,()=>{
    console.log('listen 3000');
});