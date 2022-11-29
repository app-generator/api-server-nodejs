import express from 'express';
import { githubOauthHandler } from '../controllers/auth.controller';

const router = express.Router();

router.get('/oauth/github', githubOauthHandler);

export default router;
