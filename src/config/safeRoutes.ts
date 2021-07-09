/*

Copyright (c) 2019 - present AppSeed.us

*/
import { NextFunction, Request, Response } from 'express';

import ActiveSession from '../models/activeSession';

// eslint-disable-next-line import/prefer-default-export
export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const token = String(req.headers.authorization);
  ActiveSession.find({ token }, (_err, session) => {
    if (session.length === 1) {
      return next();
    }
    return res.json({ success: false, msg: 'User is not logged on' });
  });
};
