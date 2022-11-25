
# [Nodejs API Server](https://appseed.us/boilerplate-code/nodejs-starter/)

Express / [Nodejs Starter](https://appseed.us/boilerplate-code/nodejs-starter/) with JWT authentication, and **SQLite** persistance - Provided by **AppSeed** [App Generator](https://appseed.us).
Authentication Flow uses `json web tokens` via Passport library - `passport-jwt` strategy.

<br />

> Features:

- ✅ [API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition) - the unified API structure implemented by this server
- ✅ Simple, intuitive codebase - can be extended with ease.  
- ✅ `TypeScript`, `Joy` for validation
- ✅ **Stack**: NodeJS / Express / SQLite / TypeORM
- ✅ Auth: Passport / `passport-jwt` strategy 
- 🚀 `Instant Deploy` on RENDER using [Python Deployer](https://github.com/app-generator/deploy-automation-render)
  - `python.exe deployer.py nodejs <THIS_REPO>`
  
<br />

> Tested with:

| NodeJS | NPM | YARN | 
| --- | --- | --- | 
| `v18.0.0`  | ❌ | ✅ |
| `v17.0.0`  | ❌ | ✅ |
| `v16.13.0` | ❌ | ✅ | 
| `v16.0.0`  | ❌ | ❌ | 

<br />

> Can be used with other [React Starters](https://appseed.us/apps/react) for a complete **Full-Stack** experience:

| [React Node JS Berry](https://appseed.us/product/berry-dashboard/api-server-nodejs/react/) | [React Node Soft Dashboard](https://appseed.us/product/soft-ui-dashboard/api-server-nodejs/react/) | [React Node Horizon](https://appseed.us/product/horizon-ui/api-server-nodejs/) |
| --- | --- | --- |
| [![React Node JS Berry](https://user-images.githubusercontent.com/51070104/176936514-f1bccb21-bafe-4b43-9e4c-b6fe0ec9511d.png)](https://appseed.us/product/berry-dashboard/api-server-nodejs/react/) | [![React Node Soft Dashboard](https://user-images.githubusercontent.com/51070104/176936814-74386559-4e05-43d5-b9a4-8f70ce96a610.png)](https://appseed.us/product/soft-ui-dashboard/api-server-nodejs/react/) | [![React Node Horizon](https://user-images.githubusercontent.com/51070104/174428337-181e6dea-0ad9-4fe1-a35f-25e5fa656a9d.png)](https://appseed.us/product/horizon-ui/api-server-nodejs/)

<br />

![Nodejs API Server - Open-source Nodejs Starter provided by AppSeed.](https://user-images.githubusercontent.com/51070104/124414813-142aa180-dd5c-11eb-9279-6b082dadc51a.png)

<br />

## ✨ Requirements

- [Node.js](https://nodejs.org/) >= v16.13
- [SQLite](https://www.sqlite.org/index.html)

<br />

## ✨ How to use the code

> **Step 1** - Clone the project

```bash
$ git clone https://github.com/app-generator/api-server-nodejs.git
$ cd api-server-nodejs
```

<br />

> **Step 2** - Install dependencies via `Yarn`

```bash
$ yarn
```

<br />

> **Step 3** - Run the SQLite migration via TypeORM

```
$ yarn typeorm migration:run
```

<br />

> **Step 4** - Start the API server (development mode)

```bash
$ yarn dev
```

<br />

> **Step 5** - Production Build (files generated in `build` directory)

```bash
$ yarn build
```

<br />

> **Step 6** - Start the API server for production (files served from `build/index.js`)

```bash
$ yarn start
```

The API server will start using the `PORT` specified in `.env` file (default 5000).

<br />

## ✨ Codebase Structure

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
     |-- index.js                   # API Entry Point
     |-- .env                       # Specify the ENV variables
     |                        
     |-- ************************************************************************
```

<br />

## ✨ SQLite Path

The SQLite Path is set in `.env`, as `SQLITE_PATH`

<br />

## ✨ Database migration

> Generate migration:

```bash
$ yarn typeorm migration:generate -n your_migration_name
```

> run migration: 

```bash
$ yarn typeorm migration:run
```

<br />

## ✨ API

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

## ✨ Run the Tests

```yarn test```

<br />


## ✨ Credits

This software is provided by the core AppSeed team with an inspiration from other great NodeJS starters: 

- Initial verison - coded by [Teo Deleanu](https://www.linkedin.com/in/teodeleanu/)
- [Hackathon Starter](https://github.com/sahat/hackathon-starter) - A truly amazing boilerplate for Node.js apps
- [Node Server Boilerplate](https://github.com/hagopj13/node-express-boilerplate) - just another cool starter
- [React NodeJS Argon](https://github.com/creativetimofficial/argon-dashboard-react-nodejs) - released by **Creative-Tim** and [ProjectData](https://projectdata.dev/)

<br />

---
**[Node JS API Server](https://appseed.us/boilerplate-code/nodejs-starter/)** - provided by AppSeed [App Generator](https://appseed.us)
