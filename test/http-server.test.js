const request = require('supertest');
const app = require('../http-server');

describe('GET /', () => {
  it('should display "Hello World"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World');
    expect(response.statusCode).toBe(200);
  });
});