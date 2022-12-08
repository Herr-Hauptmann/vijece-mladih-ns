const express = require('express');
const {sequelize} = require("./models");
const auth = require("./routes/auth");
const organizations = require("./routes/organizations");
const users = require("./routes/users");

const app = express();
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/organizations", organizations);
app.use("/api/users", users);

app.listen({port:3000}, async() =>{
    await sequelize.authenticate();
    // await sequelize.sync({force: true});
});

module.exports = app;