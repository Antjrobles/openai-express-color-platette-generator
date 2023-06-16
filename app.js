const express = require('express');
require('dotenv').config();  
const { getColors } = require('./controllers/openaiController')

const port = process.env.PORT || 3000;      
const localhost = process.env.LOCALHOST || 'localhost';

const app = express();




//APP SETUP
app.listen(port, localhost, () => {
  console.log(`server listening on ${port} on ${localhost}`)
});       

//MIDDLEWARE
app.use(express.json());
app.use(express.static('public'))


//ROUTES
app.post('/palette',  getColors);

