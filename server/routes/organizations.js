const router = require("express").Router();
const {sequelize, Organization} = require('../models');


router.get('/', (req, res)=>{
    //Vrati sve organizacije
});

router.post('/', async(req, res)=>{
    const {
        name,
        logo,
        info,
        email,
        phone,
        website
    } = req.body;
    try{
        const org = await Organization.create({
            name,
            logo,
            info,
            email,
            phone,
            website
        });
        return res.json(org);
    }
    catch(err){
        console.log(err);
    }
})


module.exports = router;