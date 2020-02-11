// const { Pool } = require('pg')

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// })

// const { Client } = require('pg')
// const client = new Client({
//   host: process.env.DB_HOST,
//   port: 5432,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// })

// module.exports = client
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
