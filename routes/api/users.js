/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

const Joi = require('joi');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const generateJWT = require('../../utils/generateJWT');
const User = require('../../models').User;

const userSchema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).optional(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    name: Joi.string().alphanum().min(2).max(100).optional(),
    surname: Joi.string().alphanum().min(2).max(100).optional()
});

/* POST login route */
router.post('/login', auth.optional, (req, res, next) => {
    const { body: { user } } = req;

    const result = userSchema.validate(req.body);

    if (result.error) {
        return res.status(422).json({
            errors: result.error
        });
    }

    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {

        if (err) {

            return next(err);
        }

        if (passportUser) {
            const user = {
                _id: passportUser.id,
                email: passportUser.email,
                name: passportUser.name,
                surname: passportUser.surname,
                token: generateJWT(passportUser)
            };

            return res.json({ user });
        }

        return res.status(400).send(info);

    })(req, res, next);
});

router.post('/signup', auth.optional, async(req, res /*, next*/ ) => {
    const { body: { user } } = req;

    //console.log('> User Email:', req.body.email);
    //console.log('> User Username:', req.body.username);

    const result = userSchema.validate(req.body);

    if (result.error) {
        return res.status(422).json({
            errors: result.error
        });
    }

    email = req.body.email;
    name = req.body.username;

    // Check eMail
    let checkEmail = await User.findOne({ where: { email } });
    if (checkEmail) {
        return res.status(200).json({
            errors: "{ 'email':'already registered' }"
        });
    }

    try {
        const user = await User.create(req.body);
        return res.json({ user });
    } catch (e) {
        return res.status(500).json({

            //errors: e # this can throw SQL exceptions
            errors: "{ 'credentials':'already registered' }"

        });
    }
});

/* GET list route */
router.get('/list', (req, res, next) => {

    User.findAll().then(users => {

        return res.status(200).json(
            JSON.stringify(users)
        );
    })

});


module.exports = router;