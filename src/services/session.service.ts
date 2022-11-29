import axios from 'axios';
import qs from 'qs'
import fetch from 'node-fetch'

type GitHubOauthToken = {
    access_token: string;
  };
  
  export const getGithubOathToken = async ({
    code,
  }: {
    code: string;
  }): Promise<any> => {
    const rootUrl = 'https://github.com/login/oauth/access_token';
    const options = {
      client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
      client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      code,
    };
  
    const queryString = qs.stringify(options);
  
    try {
      const { data } = await axios.post(`${rootUrl}?${queryString}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const decoded = qs.parse(data) as GitHubOauthToken;
      return decoded;
    } catch (err: any) {
      throw Error(err);
    }
  };
  
  export const getGithubUser = async ({
    access_token,
  }: {
    access_token: string;
  }): Promise<any> => {
    try {
      const response = await fetch('https://api.github.com/user',{
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const data = await response.json()
      return data;
    } catch (err: any) {
      throw Error(err)
    }
  };