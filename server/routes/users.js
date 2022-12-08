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

//CREATE
router.post('/', async(req, res)=>{
    const {
        name,
        email,
        password,
    } = req.body;
    try{
        const user = await User.create({
            name,
            email,
            password,
        });
        return res.json(user);
    }
    catch(err){
        console.log(err);
    }
})

//FIND
router.get('/:uuid',async (req, res)=>{
    const uuid = req.params.uuid;
    try{
        const user = await User.findOne({
            where: {uuid : uuid},
        });
        return res.json(user);
    } catch(err){
        console.log(err);
        return res.status(500).json({error:"Greška pri dobavljanju korisnika."})
    }
});

module.exports = router;