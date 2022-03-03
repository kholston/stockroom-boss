import supertest from 'supertest';

import app from '../../app';

const api = supertest(app);

describe('Basic Server Test', () => {
  describe('Once Server is running', () => {
    // Checks /health endpoint to see if the server is running
    test('health check returns ok', async () => {
      const { text } = await api.get('/health').expect(200).expect('Content-Type', /text\/html/);
      expect(text).toEqual('ok');
    });
  });
});