/*

Copyright (c) 2019 - present AppSeed.us

*/
const ActiveSession = require('../models/activeSession');

const checkToken = (req, res, next) => {
  const token = String(req.headers.authorization);
  ActiveSession.find({token: token}, function(err, session) {
    if (session.length == 1) {
      return next();
    } else {
      return res.json({success: false, msg: 'User is not logged on'});
    }
  });
};

module.exports = {
  checkToken: checkToken,
};
