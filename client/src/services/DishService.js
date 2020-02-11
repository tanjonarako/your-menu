import axios from 'axios'

const url = 'https://your-menu.herokuapp.com/api/dishs/'

class DishService {
  // Get All Dishs
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

  // Get Dishs by category
  static getDishsByCategory (category) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + category)
        resolve(res.data)
      } catch (e) {
        reject(e)
      }
    })
  }

  // Add Dish
  static addDish (name, categoryId) {
    return axios.post(url, { name, categoryId })
  }

  // Update Dish
  static updateDish (id, name, categoryId) {
    return axios.patch(`${url}${id}`, { name, categoryId })
  }

  // Delete Dish
  static deleteDish (id) {
    return axios.delete(`${url}${id}`)
  }
}

export default DishService
