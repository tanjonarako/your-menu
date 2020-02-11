const db = require('../config/db')
const generateId = require('../utils/generateId')

class SideDish {
  static async all() {
    return db.any(`SELECT id, name FROM sidedish;`)
    .catch((err) => { throw err })
  }

  static async add(side) {
    const sideId = generateId()
    return db.one(`
      INSERT INTO sidedish(id, name)
      VALUES
       ($1, $2)
      RETURNING id, name;`, [sideId, side.name])
  }

  static async delete (id) {
    return db.result(`DELETE FROM sidedish WHERE id = $1`, [id])
  }
}

module.exports = SideDish
