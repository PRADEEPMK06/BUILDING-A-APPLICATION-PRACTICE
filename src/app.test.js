const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return status UP and status code 200', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('UP');
    });
});