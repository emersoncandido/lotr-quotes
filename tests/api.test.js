const request = require('supertest');
const app = require('../src/index');

describe('LotR Quotes API Endpoints', () => {
    
    test('GET / should return available endpoints', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('endpoints');
    });

    test('GET /characters should return the list of 4 characters', async () => {
        const res = await request(app).get('/characters');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toContain('Gandalf');
        expect(res.body.length).toBe(4);
    });

    test('GET /quotes/bilbo should return Bilbo quotes', async () => {
        const res = await request(app).get('/quotes/bilbo');
        expect(res.statusCode).toEqual(200);
        expect(res.body.character).toBe('bilbo');
        expect(res.body.quotes.length).toBeGreaterThan(0);
    });

    test('GET /random should return a quote and its character', async () => {
        const res = await request(app).get('/random');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('quote');
        expect(res.body).toHaveProperty('character');
    });

    test('GET /quotes/sauron should return 404', async () => {
        const res = await request(app).get('/quotes/sauron');
        expect(res.statusCode).toEqual(404);
    });
});