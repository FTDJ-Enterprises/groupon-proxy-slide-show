const request = require('supertest');
const app = require('../server/app.js');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

describe('Server', () => {
  test('It should successfully respond to GET requests at /', async (done) => {
    const res = await request(app).get('/');
    const indexHtmlData = await readFile('./public/index.html');
    const html = indexHtmlData.toString();
    
    expect(res.status).toEqual(200);
    expect(res.text).toEqual(html);

    done();
  })
})
