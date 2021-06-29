require('./config/config');


const express = require('express');
const mongoose = require('mongoose');



const app = express();


const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//configuracion de las rutas 
app.use(require('./routes/index'));


const MONGODB_URI = process.env.URLDB
mongoose.set('useCreateIndex', true);
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(db => console.log('database is connected'))

.catch(err => console.log(err));



app.listen(process.env.PORT, () => {

    console.log('escuchando el puerto ', process.env.PORT);

});