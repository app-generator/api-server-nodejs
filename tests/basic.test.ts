/*

Copyright (c) 2019 - present AppSeed.us

*/

import request from 'supertest';

import app from '../src/server';
import { prepareDB } from '../src/server/database';

let testDB: {
  start: () => void;
  stop: () => Promise<boolean>;
} | null;

beforeAll(async () => {
  testDB = await prepareDB();
  testDB.start();
});
afterAll(async () => testDB?.stop());

describe('API tests', () => {
  // The most basic test
  test('API should return a 200 status', (done) => {
    request(app)
      .get('/api/users/testme')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        done();
      });
  });
});
