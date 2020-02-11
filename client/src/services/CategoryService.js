import axios from 'axios'

const url = 'http://localhost:3000/api/categories/'

class CategoryService {
  // Get All Categories
  static getAll () {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        resolve(res.data)
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default CategoryService
