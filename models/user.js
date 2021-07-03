/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

//const uuid = require('uuid/v4');
const { v4: uuidv4 } = require('uuid');

'use strict';
module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: () => uuidv4()
        },
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        indexes: [{
            unique: true,
            fields: ['email']
        }]
    });

    return User;
};