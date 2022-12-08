const express = require('express');
const {sequelize} = require("./models");
const auth = require("./routes/auth");

const app = express();
app.use(express.json());

app.use("/auth", auth);

app.listen({port:3000}, async() =>{
    console.log("Server up!");
    await sequelize.authenticate();
    console.log("Database connected!");
});
