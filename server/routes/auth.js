const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { sequelize, User } = require("../models");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const env = require(__dirname + "/../env.json");

router.post(
    "/signup",
    [
        check("email", "Unesena email adresa nije ispravna!").isEmail(),
        check("password", "Unesena lozinka nije duža od 5 karaktera").isLength({
            min: 6,
        }),
        check("name", "Niste unijeli ime").isLength({ min: 1 }),
    ],
    async (req, res) => {
        //Validate the input
        let { password, email, name } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //Check if user already exists
        const exists = await User.count({
            where: {
                email: email,
            },
        });

        if (exists)
            return res.status(400).json({
                errors: [
                    {
                        value: email,
                        msg: "Korisnik s ovim emailom već postoji",
                        param: "email",
                        location: "body",
                    },
                ],
            });

        //Hash password
        password = await bcrypt.hash(password, 10);

        //Create user
        try {
            const user = User.create({
                email: email,
                password: password,
                name: name,
            });

            const token = JWT.sign(
                {
                    email,
                },
                env.secret,
                {
                    expiresIn: 9000,
                }
            );
            //NOTE: Malo promisliti trajanje i refreshovanje sesije
            res.json({
                token,
            });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }
);

router.post("/login", async (req, res) => {
    let { password, email } = req.body;
    try {
        let user = await User.findOne({
            where: {
                email: email,
            },
        });
        if (!user) throw err;

        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw err;
        const token = JWT.sign(
            {
                email
            },
            env.secret,
            {
                expiresIn: 9000,
            }
        );
        //NOTE: Malo promisliti trajanje i refreshovanje sesije
        res.json({
            token,
        });
    } catch (err) {
        return res.status(404).json({
            errors: [
                {
                    msg: "Uneseni email ili lozinka nisu tačni",
                },
            ],
        });
    }
});

module.exports = router;
