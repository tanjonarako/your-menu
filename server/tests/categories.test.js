const request = require('supertest')
const app = require('../../server')

describe('Category Endpoints', () => {
  beforeEach(() => {
    jest.setTimeout(10000)
  })

  it('should get all categories', async (done) => {
    const response = await request(app).get('/api/categories')
    expect(response.statusCode).toBe(200)
    done()
  })
})
