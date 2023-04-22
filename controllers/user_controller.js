const User = require('../models/user');

const jwt = require('jsonwebtoken');
//register a user

module.exports.user = async function (req, res) {

    const {name, email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if (!user) {
            const newUser = new User({
                name,
                email,
                password
            });
            await newUser.save();
            return res.status(200).json(newUser);
        }
        return res.status(406).json({
            message: 'User Already Exists'
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }

}

//login a user

module.exports.login = async function (req, res) {

    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (user) {
        if (user.email == email && user.password == password) {
            return res.status(200).json(user)

        }
    }
    return res.status(401).json(
        {
            message: 'Email and password not match'
        });
}

//crating user token
module.exports.createSession = async function (req, res) {
    try {
        let user = await User.findOne({email: req.body.email});
        if (!user || user.password != req.body.password) {
            return res.json(422, {
                message: "invalid user name and password"
            })
        }

        return res.status(200).json({
            message: 'sign in successfully',
            data: {
                token: jwt.sign(user.toJSON(), 'qwertyuiomqsdertyhj', {expiresIn: '3600000'})
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'internal server error'})
    }
}