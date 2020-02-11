const request = require('supertest')
const app = require('../../server')

describe('Dish Endpoints', () => {
  beforeEach(() => {
    jest.setTimeout(10000)
  })

  it('should get all dishs', async (done) => {
    const response = await request(app).get('/api/dishs')
    expect(response.statusCode).toBe(200)
    done()
  })

  it('should get dishs by category', async (done) => {
    const response = await request(app).get('/api/dishs/mainCourse')
    expect(response.statusCode).toBe(200)
    expect(response.body[0].categoryId).toBe(2)
    done()
  })

  it('should create dish', async (done) => {
    const randomName = [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
    const response = await request(app).post('/api/dishs/').send({name: randomName, categoryId: 2})
    expect(response.statusCode).toBe(200)
    done()
  })

  it('should delete dish', async (done) => {
    const all = await request(app).get('/api/dishs')
    const response = await request(app).delete('/api/dishs/' + all.body[0].id)
    expect(response.statusCode).toBe(201)
    done()
  })

  it('should update dish', async (done) => {
    const all = await request(app).get('/api/dishs')
    const randomName = [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
    const response = await request(app).patch('/api/dishs/' + all.body[0].id).send({name: randomName, categoryId: 2})
    expect(response.statusCode).toBe(201)
    done()
  })
})
