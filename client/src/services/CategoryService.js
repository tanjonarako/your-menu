import axios from 'axios'

const url = 'https://your-menu.herokuapp.com/api/categories/'

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
