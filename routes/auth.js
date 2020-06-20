const router = require('express').Router();

const User = require('../model/User');
const jwt = require('jsonwebtoken');

// import register validation

const { registerValidation, loginValidation } = require('../validation');

const bcrypt = require('bcryptjs');



router.post('/register', async(req, res) => {

    // lets validate the data before make a user

    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error.details)
    }

    // checking if the user is already existing in database

    const emailExist = await User.findOne({
        email: req.body.email
    });
    if (emailExist) {
        return res.status(400).send({
            error: "Email already exist"
        });
    }

    // hash the password

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const savedUser = await user.save();
        res.send({
            userid: user._id
        });

    } catch (err) {
        res.status(400).send(err);
    }
});


router.post('/login', async(req, res) => {
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).send({
            error: error.details
        });
    }

    // checking if the email exist

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send({
            error: 'Email is not registered'
        });
    }

    // validating password
    const validPass = await bcrypt.compare(req.body.password, user.password);

    if (!validPass) {
        return res.status(400).send({
            error: 'Password is incorrect'
        });
    }
    const token = jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email
    }, process.env.TOKEN_SECRET);



    res
        .header('auth-token', token)
        .send({ token });

});

module.exports = router;