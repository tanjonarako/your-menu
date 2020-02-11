const request = require('supertest')
const app = require('../../server')

describe('Side dish Endpoints', () => {
  beforeEach(() => {
    jest.setTimeout(10000)
  })

  it('should get all sides', async (done) => {
    const response = await request(app).get('/api/sidedishs')
    expect(response.statusCode).toBe(200)
    done()
  })

  it('should create side', async (done) => {
    const randomName = [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
    const response = await request(app).post('/api/sidedishs/').send({name: randomName})
    expect(response.statusCode).toBe(200)
    done()
  })

  it('should delete side', async (done) => {
    const all = await request(app).get('/api/sidedishs')
    const response = await request(app).delete('/api/sidedishs/' + all.body[0].id)
    expect(response.statusCode).toBe(201)
    done()
  })
})