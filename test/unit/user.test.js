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
const models = require('../../models');
const User = models.User;
exports.lab = lab;

const faker = require('faker');
const { test, before, after, beforeEach, afterEach, suite } = lab;

suite('[test][User]', () => {
	before(function () {
		//make sure the models are synced, or do any other global init it may be required
		// return models.sequelize.sync();
	});
    
	beforeEach(function () {
		//get the models
		
	});

	after(function () {
		//do a global cleanup of the database
		return Promise.all([
			User.destroy({ truncate: true })
		]);
	});

	afterEach( function () {
		//do something after each test
	});
	test('User should be created and retrieved', async() => {
		const email = faker.internet.email();
		const password = faker.internet.password();
		const name = faker.name;
		const newUser = await User.create({ email: email, password: password, name: name.lastName(), surname: name.firstName()});
		expect(newUser.email).to.equal(email);
		const foundUser = await User.findOne({where:{ email }});
		expect(foundUser.email).to.equal(email);
	});
});
