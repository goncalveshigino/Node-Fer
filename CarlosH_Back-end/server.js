const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require('dotenv').config();

//DB Config
require('./database/config').dbConnection();


router(app);




app.use('/app', express.static('public'));


app.listen(process.env.PORT, () =>{
   console.log(`Rodando na porta ${ process.env.PORT}`)
});