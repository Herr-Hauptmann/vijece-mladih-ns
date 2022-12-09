const router = require("express").Router();
const {sequelize, Organization} = require('../models');

//Index
router.get('/', async (req, res)=>{
    try{
        const organizations = await Organization.findAll();
        return res.json(organizations);
    } catch(err){
        return res.status(500).json({error:"Greška pri dobavljanju organizacija."})
    }
});

//Create
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
});

//READ
router.get('/:id', async (req, res)=>{
    const id = req.params.id;
    try{
        const organization = await Organization.findOne({
            where: {id}
        });
        return res.json(organization);
    } catch(err){
        return res.status(500).json({error:"Greška pri dobavljanju organizacija."})
    }
});


//UPDATE
router.put('/:id', async(req, res)=>{
    const id = req.params.id;
    try{
        const organization = await Organization.update(req.body, {
            where: {
              id
            }
        });
        return res.json(organization);
    }catch(err){
        console.log(err)
        return res.status(500).json({error:"Greška pri izmjeni podataka o organizaciji."})
    }
});


//DELETE
router.delete('/:id', async(req, res)=>{
    const id = req.params.id;
    try{
        await Organization.destroy({
            where: {
                id
            }
          });
        return res.json({msg: "Organizacija uspjesno izbrisana!"});
    }catch(err){
        console.log(err)
        return res.status(500).json({error:"Greška pri brisanju organizacije."})
    }
});

module.exports = router;