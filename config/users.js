/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

/* 
 * The hardcoded users list 
 *
*/

const user1 = {
	id        : 1,
	name      : 'John',
	surname   : 'Doe',
	email     : 'demo@appseed.us',
	password  : 'demo'
};

const user2 = {
	id        : 2,
	name      : 'George',
	surname   : 'Clooney',
	email     : 'demo2@appseed.us',
	password  : 'demo'
};

var Users = { };

Users[ user1.email ] = user1;
Users[ user2.email ] = user2;

module.exports = Users;
