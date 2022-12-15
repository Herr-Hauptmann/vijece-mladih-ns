const router = require("express").Router();
const {sequelize, User} = require('../models');

//INDEX
router.get('/',async (req, res)=>{
    try{
        const users = await User.findAll();
        return res.json(users);
    } catch(err){
        console.log(err);
        return res.status(500).json({error:"Greška pri dobavljanju korisnika."})
    }
});

module.exports = router;