
# [Nodejs Starter](https://appseed.us/boilerplate-code/nodejs-starter)

Express / [Nodejs Starter](https://appseed.us/boilerplate-code/nodejs-starter) with [JWT authentication](https://jwt.io/introduction/), [SQLite](https://www.sqlite.org/index.html) database, [Sequelize](http://docs.sequelizejs.com/) ORM, unit tests and basic tooling - Provided by **AppSeed** [Web App Generator](https://appseed.us/app-generator).

<br />

![Open-Source Nodejs Starter - Product cover image.](https://github.com/app-generator/static/blob/master/products/boilerplate-code-nodejs-starter-cover.jpg?raw=true) 

<br />

## Requirements
- [Node.js](https://nodejs.org/) >= 6.x

<br />

## Authentication
Authentication is based on [json web tokens](https://jwt.io). `passport-jwt` strategy is used to handle the email / password authentication.
After a successful login the generated token is sent to the requester. 

<br />

## API
### Login: `api/users/login`
```
POST api/users/login
Host: localhost:3000
Content-Type: application/json

{
    "email": "demo@appseed.us",
    "password": "demo"
}
```

### Signup: `/api/users/signup`
```
POST api/users/signup
Host: localhost:3000
Content-Type: application/json

{
    "email": "demo@appseed.us",
    "password": "demo",
    "name": "George",
    "surname": "Clooney"
}
```

<br />

## Setting up for development
* clone repo: `git clone https://github.com/app-generator/nodejs-starter.git` 
* change directory to nodejs-starter: 
* create a file named .env which should contain the following default setup:
```
SALT=35kj7waj3k5kja09jeoi21kn0pg13iuhlkn // used in password hashing
JWT_SECRET=secret        // used in JWT signing
SESSION_SECRET=secret    // used for session data
PORT=3000                // the port on which your server will be available on
SERVER_ADDRESS=127.0.0.1 // or 0.0.0.0 for all or other interface address you want to listen
```
* users are saved in file `config/users.js`

<br />

## Scripts
**Install Modules**
```bash
$ npm i
$ npm i nodemon -g 
```

<br />

**Run**
```bash
$ npm run start # classic start OR
$ npm run dev # with nodemon live update  
```
Runs the application with [nodemon]("https://nodemon.io/"). Server is listening on Port 3000 by default. This can be overwritten by `PORT` constant in `.env` file. 

<br />

## Support

For issues and features request, use **Github** or access the [support page](https://appseed.us/support) provided by **AppSeed** 

<br />

## License
MIT @ [AppSeed](https://appseed.us)

<br />

---
[Nodejs Starter](https://appseed.us/boilerplate-code/nodejs-starter) provided by **AppSeed**
