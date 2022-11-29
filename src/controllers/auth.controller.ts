import {  Request, Response } from 'express';
import {
    getGithubOathToken,
    getGithubUser,
  } from '../services/session.service';
import { createUserWithToken } from '../services/user.service';

const frontend_url = process.env.FRONTEND_URL ?? '/'

export const githubOauthHandler = async (
    req: Request,
    res: Response,
  ) => {
    try {
      const code = req.query.code as string;
  
      if (req.query.error) {
        return res.redirect(`${frontend_url}/login`);
      }
  
      if (!code) {
        console.log('authorization code not provided')
      }
  
      // Get access_token using code
      const { access_token } = await getGithubOathToken({ code });
  
      // Get user details using access token
      const userData = await getGithubUser({access_token});

      const returnedUser = await createUserWithToken(userData)
      if(returnedUser) {
        res.redirect(frontend_url);
      }else {
        res.json({error: 'no user returned'})
      }
      
    } catch (err: any) {
      res.json({'error': err.message})
    }
  };
  