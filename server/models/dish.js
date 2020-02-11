const db = require('../config/db')
const generateId = require('../utils/generateId')

class Dish {
  constructor (row) {
    this.row = row
  }

  get name () {
    return this.row.name
  }

  static async all () {
    return db.any(`SELECT id, name, "categoryId" FROM dish;`)
    .catch((err) => { throw err })
  }

  static async allByCategory (category) {
    return db.any(`
      SELECT d.id, d.name, d."categoryId" FROM dish as d
      INNER JOIN category as c on c.id = d."categoryId"
      WHERE c.name = $1;
    `, [category])
    .catch((err) => { throw err })
  }

  static async addDish (dish) {
    const dishId = generateId()
    return db.one(`
      INSERT INTO dish(id, name, "categoryId", reference, "sidedishId")
      VALUES
       ($1, $2, $3, $4, $5)
      RETURNING id, name, "categoryId", reference, "sidedishId";`, [dishId, dish.name, dish.categoryId, dish.reference, dish.sidedishId])
  }

  static async deleteDish (id) {
    return db.result(`DELETE FROM dish WHERE id = $1`, [id])
  }

  static async updateDish (dish) {
    return db.one(`UPDATE dish 
      SET name = $1, "categoryId" = $2, reference = $3
      WHERE id = $4 
      RETURNING id, name, "categoryId", reference; `,
      [dish.name, dish.categoryId, dish.reference, dish.id])
  }
}

module.exports = Dish
