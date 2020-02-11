const pgp = require('pg-promise')({
  schema: process.env.DB_SCHEMA,
  capSQL: true
})

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  idleTimeoutMillis: 300,
  ssl: true
})

module.exports = db
