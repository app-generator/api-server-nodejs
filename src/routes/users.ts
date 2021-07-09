import bcrypt from 'bcrypt-nodejs';
/*

Copyright (c) 2019 - present AppSeed.us

*/
import express from 'express';
import Joi from 'joi';
import jwt from 'jsonwebtoken';

import config from '../config/keys';
import { checkToken } from '../config/safeRoutes';
import ActiveSession from '../models/activeSession';
import User from '../models/user';

// eslint-disable-next-line new-cap
const router = express.Router();

// Route: <HOST>:PORT/api/users/

const userSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(4).max(15)
    .optional(),
  password: Joi.string().required(),
});

router.post('/register', (req, res) => {
  // Joy Validation
  const result = userSchema.validate(req.body);
  if (result.error) {
    res.status(422).json({
      success: false,
      msg: `Validation err: ${result.error.details[0].message}`,
    });
    return;
  }

  const { username, email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (user) {
      res.json({ success: false, msg: 'Email already exists' });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, null, (err2, hash) => {
          if (err2) throw err2;
          const query = {
            username,
            email,
            password: hash,
          };
          User.create(query, (err3, createdUser) => {
            if (err3) throw err;
            res.json({ success: true, userID: createdUser._id, msg: 'The user was succesfully registered' });
          });
        });
      });
    }
  });
});

router.post('/login', (req, res) => {
  // Joy Validation
  const result = userSchema.validate(req.body);
  if (result.error) {
    res.status(422).json({
      success: false,
      msg: `Validation err: ${result.error.details[0].message}`,
    });
    return;
  }

  const { email } = req.body;
  const { password } = req.body;

  User.findOne({ email }, null, null, (err: Error | null, user) => {
    if (err) throw err;

    if (!user) {
      return res.json({ success: false, msg: 'Wrong credentials' });
    }

    if (!user.password) {
      return res.json({ success: false, msg: 'No password' });
    }

    bcrypt.compare(password, user.password, (_err2, isMatch) => {
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 86400, // 1 week
        });

        const query = { userId: user._id, token };
        ActiveSession.create(query, () => {
          // Delete the password (hash)
          user.password = undefined;
          return res.json({
            success: true,
            token,
            user,
          });
        });
      } else {
        return res.json({ success: false, msg: 'Wrong credentials' });
      }
    });
  });
});

router.post('/logout', checkToken, (req, res) => {
  const { token } = req.body;
  ActiveSession.deleteMany({ token }, (err:Error | null) => {
    if (err) {
      res.json({ success: false });
    }
    res.json({ success: true });
  });
});

router.post('/checkSession', checkToken, (_req, res) => {
  res.json({ success: true });
});

router.post('/all', checkToken, (_req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.json({ success: false });
    }
    users = users.map((item) => {
      const x = item;
      x.password = undefined;
      x.__v = undefined;
      return x;
    });
    res.json({ success: true, users });
  });
});

router.post('/edit', checkToken, (req, res) => {
  const { userID, username, email } = req.body;

  User.find({ _id: userID }).then((user) => {
    if (user.length === 1) {
      const query = { _id: user[0]._id };
      const newvalues = { $set: { username, email } };
      User.updateOne(query, newvalues, null, (err: Error | null) => {
        if (err) {
          // eslint-disable-next-line max-len
          res.json({ success: false, msg: 'There was an error. Please contract the administator' });
        }
        res.json({ success: true });
      });
    } else {
      res.json({ success: false });
    }
  });
});

// Used for tests (nothing functional)
router.get('/testme', (_req, res) => {
  res.status(200).json({ success: true, msg: 'all good' });
});

export default router;
