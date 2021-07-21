
# Nodejs API Server

Express / Nodejs Starter with JWT authentication, and **SQLite** persistance - Provided by **AppSeed** [App Generator](https://appseed.us/app-generator).
Authentication Flow uses [json web tokens](https://jwt.io) via Passport library - `passport-jwt` startegy.

<br />

> Features:

- Simple, intuitive codebase - can be extended with ease.  
- Typescript
- **Stack**: NodeJS / Express / SQLite / TypeORM
- Auth: Passport / `passport-jwt` strategy 
- [API Interface Descriptor](https://github.com/app-generator/api-server-nodejs/blob/master/media/api.postman_collection.json): POSTMAN Collection

<br />

> Can be used with other UI projects for a complete **fullstack** experience  

- [React Berry Dashboard](https://github.com/app-generator/react-berry-admin-template) - open-source sample
- [React Datta Dashboard](https://github.com/app-generator/react-datta-able-dashboard) - open-source sample
- [React Datta Dashboard PRO](https://appseed.us/product/react-node-js-datta-able-pro) - commercial fullstack product

<br />

> Support: 

- Github (issues tracker), Email: **support @ appseed.us** 
- **Discord**: [LIVE Support](https://discord.gg/fZC6hup) (registered AppSeed Users) 

<br />

![Nodejs API Server - Open-source Nodejs Starter provided by AppSeed.](https://user-images.githubusercontent.com/51070104/124414813-142aa180-dd5c-11eb-9279-6b082dadc51a.png)

<br />

## Requirements

- [Node.js](https://nodejs.org/) >= 12.x
- [SQLite](https://www.sqlite.org/index.html)

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

**Run the SQLite migration**

```
$ yarn typeorm migration:run
```

**Start the API server** - development mode

```bash
$ npm dev
// OR
$ yarn dev
```

**Production Build** - files generated in `build` directory

```bash
$ npm build
// OR
$ yarn build
```

**Start the API server** - for production (files served from `build/index.js`)

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
     |-- migration/
     |    |-- some_migration.ts     # database migrations
     |
     |-- models/                              
     |    |-- activeSession.ts      # Sessions Model (Typeorm)              
     |    |-- user.ts               # User Model (Typeorm) 
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

## SQLite Path

The SQLite Path is set in `.env`, as `SQLITE_PATH`

## Database migration

##### generate migration:

yarn typeorm migration:generate -n your_migration_name

##### run migration: 

yarn typeorm migration:run

<br />

## API

For a fast set up, use this POSTMAN file: [api_sample](https://github.com/app-generator/api-server-nodejs-pro/blob/master/media/api.postman_collection.json)

> **Register** - `api/users/register`

```
POST api/users/register
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

## Credits

This software is provided by the core AppSeed team with an inspiration from other great NodeJS starters: 

- Initial verison - coded by [Teo Deleanu](https://www.linkedin.com/in/teodeleanu/)
- [Hackathon Starter](https://github.com/sahat/hackathon-starter) - A truly amazing boilerplate for Node.js apps
- [Node Server Boilerplate](https://github.com/hagopj13/node-express-boilerplate) - just another cool starter
- [React NodeJS Argon](https://github.com/creativetimofficial/argon-dashboard-react-nodejs) - released by **Creative-Tim** and [ProjectData](https://projectdata.dev/)

<br />

---
Nodejs API Server - provided by AppSeed [App Generator](https://appseed.us)
