const express = require('express');
const path = require('path');
const publicRoutes = require('./routes/public');

const app = express();

const {sequelize} = require("./models");

app.use(express.static(__dirname + 'static'));

app.use(publicRoutes);

app.listen({port:3000}, async() =>{
    console.log("Server up!");
    await sequelize.authenticate();
    console.log("Database connected!");
});

module.exports = app;
module.exports = path;