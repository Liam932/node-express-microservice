const request = require('supertest');
const app = require('../../app');

describe('Admin Status', () => {
  it('returns 200', () =>
    request(app)
      .get('/admin/status')
      .set('Accept', 'application/json')
      .expect(200));
});
