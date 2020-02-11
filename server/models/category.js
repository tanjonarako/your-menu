const db = require('../config/db')

class Category {
  static async all() {
    return db.any(`SELECT id, name FROM category;`)
    .catch((err) => { throw err })
  }
}

module.exports = Category
