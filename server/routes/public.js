const express= require('express');
const path = require('../app.js');
const router = express.Router();

router.get('/', (req, res, next) =>{
    console.log(path.dirname);
});

module.exports = router;