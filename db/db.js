const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/todosql`)

const add = 'INSERT INTO tasks (task) VALUES ($1) RETURNING task'

exports.addTask = function(task) {
  return db.one(add, task)
}