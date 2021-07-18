
# Nodejs API Server

Simple starter built with Typescrypt / Express / MongoDB and JWT Auth powered by **Passport** library - provided and actively supported by **AppSeed** [App Generator](https://appseed.us/app-generator). The authentication flow is based on [json web tokens](https://jwt.io) and `passport-jwt` strategy. 

<br />

> Features:

- Simple, intuitive codebase - built for beginners (can be extended with ease) 
- Node JS / Express / MongoDB
- Typescript 
- Auth: Passport / `passport-jwt` strategy 
- [API Interface Descriptor](https://github.com/app-generator/api-server-nodejs/blob/master/media/api.postman_collection.json): POSTMAN Collection
- Docker 
- Full-stack Samples that uses this backend 
     - [React Node JS Datta](https://appseed.us/product/react-node-js-datta-able) - open-source full-stack sample
     - [React Node JS Berry](https://appseed.us/product/react-node-js-berry-dashboard) - open-source full-stack sample

<br />

> Support: 

- Github (issues tracker), Email: **support @ appseed.us** 
- **Discord**: [LIVE Support](https://discord.gg/fZC6hup) (registered AppSeed Users) 

<br />

![Nodejs API Server - Open-source Nodejs Starter provided by AppSeed.](https://user-images.githubusercontent.com/51070104/124414813-142aa180-dd5c-11eb-9279-6b082dadc51a.png)

<br />

## Requirements

- [Node.js](https://nodejs.org/) >= 10.x
- [MongoDB](https://www.mongodb.com/) server 

<br />

## How to use the code

**Clone the sources**

```bash
$ git clone https://github.com/app-generator/api-server-nodejs.git
$ cd api-server-nodejs
```

**Install dependencies** via NPM or Yarn

```bash
$ npm i
// OR
$ yarn
```

**Start the API server** - development mode

```bash
$ npm dev
// OR
$ yarn dev
```

**Start the API server** - for production (files served from `build/build/index.js`)

```bash
$ npm start
// OR
$ yarn start
```

The API server will start using the `PORT` specified in `.env` file (default 5000)

<br />

## Codebase Structure

```bash
< ROOT / src >
     | 
     |-- config/                              
     |    |-- config.ts             # Configuration       
     |    |-- passport.ts           # Define Passport Strategy             
     | 
     |-- models/                              
     |    |-- activeSession.ts      # Sessions Model (Mongo)              
     |    |-- user.ts               # User Model (Mongo) 
     | 
     |-- routes/                              
     |    |-- users.ts              # Define Users API Routes
     | 
     | 
     |-- index.js                     # API Entry Point
     |-- .env                       # Specify the ENV variables
     |                        
     |-- ************************************************************************
```

<br />

## Mongo Settings

The Mongo URI lives in `config/keys.js`

```javascript
... = 'mongodb://localhost/api_server_nodejs'
```

<br />

## API

For a fast set up, use this POSTMAN file: [api_sample](https://github.com/app-generator/api-server-nodejs/blob/master/media/api.postman_collection.json)

> **Register** - `api/users/signup`

```
POST api/users/signup
Content-Type: application/json

{
    "username":"test",
    "password":"pass", 
    "email":"test@appseed.us"
}
```

<br />

> **Login** - `api/users/login`

```
POST /api/users/login
Content-Type: application/json

{
    "password":"pass", 
    "email":"test@appseed.us"
}
```

<br />

> **Logout** - `api/users/logout`

```
POST api/users/logout
Content-Type: application/json
authorization: JWT_TOKEN (returned by Login request)

{
    "token":"JWT_TOKEN"
}
```

<br />

## License

MIT @ [AppSeed](https://appseed.us)

<br />

## Credits

This software is provided by the core AppSeed team with an inspiration from other great NodeJS starters: 

- Initial verison - coded by [Teo Deleanu](https://www.linkedin.com/in/teodeleanu/)
- [Hackathon Starter](https://github.com/sahat/hackathon-starter) - A truly amazing boilerplate for Node.js apps
- [Node Server Boilerplate](https://github.com/hagopj13/node-express-boilerplate) - just another cool starter
- [React NodeJS Argon](https://github.com/creativetimofficial/argon-dashboard-react-nodejs) - released by **Creative-Tim** and [ProjectData](https://projectdata.dev/)

<br />

---
[Nodejs Starter](https://appseed.us/boilerplate-code/nodejs-starter) - provided by AppSeed [App Generator](https://appseed.us)
