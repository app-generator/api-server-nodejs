/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

 const _ = require('lodash');
const { expect } = require('code');
const request = require('supertest');
const lab = require('lab').script();
exports.lab = lab;
const app = require('../../index.js');

const faker = require('faker');
const { test, before, after, beforeEach, afterEach, suite } = lab;

suite('[test][User]', () => {
	before(function () {
	});
    
	beforeEach(function () {
		//get the models
	});

	after(function () {
		//do a global cleanup of the database
	});

	afterEach( function () {
		//do something after each test
    });
    
    test('User should be able to login', async (done) => {
        const email = faker.internet.email();
		const password = faker.internet.password();
		const name = faker.name;
        const response = await request(app).post('/api/users/login').send({user:{email: email, password: password}}).set('Accept', 'application/json');
        //this user was not created before so it will return an error
        expect(response.status).to.equal(400);
    });

	test('User should be able to register', async (done) => {
        const email = faker.internet.email();
		const password = faker.internet.password();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName(); 
        let response = await request(app).post('/api/users/signup').send({email: email, password: password, name: lastName, surname: firstName}).set('Accept', 'application/json');
        expect(response.status).to.equal(200);
        const user = response.body;
        expect(user.email).to.equal(email);
        expect(user.password).to.equal(password);
        expect(user.name).to.equal(lastName);
        expect(user.surname).to.equal(firstName);
        //Now let's see if the user is able to login
        response = await request(app).post('/api/users/login').send({user:{email: email, password: password}}).set('Accept', 'application/json');
        expect(response.status).to.equal(200);

	});
});
