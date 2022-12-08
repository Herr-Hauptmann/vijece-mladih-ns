const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const {sequelize, User} = require('../models');
const bcrypt = require("bcrypt");

router.post(
    "/signup",
    [
        check("email", "Unesena email adresa nije ispravna!").isEmail(),
        check("password", "Unesena lozinka nije duža od 5 karaktera").isLength({
            min: 6,
        }),
        check("name", "Niste unijeli ime").isLength({min:1})
    ],
    async (req, res) =>{

        //Validate the input
        let { password, email, name } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //Check if user already exists
        const exists = await User.count({
            where: {
                email: email
            }
        });

        if (exists)
            return res.status(400).json({ errors: [
                    {
                        "value" : email,
                        "msg" : "Korisnik s ovim emailom već postoji",
                        "param" : "email",
                        "location" : "body"
                    }
                ] 
            });

        //Hash password
        password = await bcrypt.hash(password, 10);
        
        try{
            const user = User.create({
                email:email,
                password:password,
                name: name
            });
            res.json(user);
        }catch(err){
            return res.status(500).json({err});
        } 
    }
);

module.exports = router;
