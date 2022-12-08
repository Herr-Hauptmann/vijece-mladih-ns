const router = require("express").Router();
const { check, validationResult } = require("express-validator");

router.post(
    "/signup",
    [
        check("email", "Unesena email adresa nije ispravna!").isEmail(),
        check("password", "Unesena lozinka nije duža od 5 karaktera").isLength({
            min: 6,
        }),
    ],
    (req, res) => {
        const { password, email } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send("Validation passed");
    }
);

module.exports = router;
