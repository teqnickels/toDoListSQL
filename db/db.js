const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/todosql`)

const add = 'INSERT INTO tasks (task) VALUES ($1) RETURNING id'
const deleteTask = 'DELETE FROM tasks WHERE id = $1'
const list = 'SELECT id, task FROM tasks'

exports.addTask = function(task) {
  return db.one(add, task)
}

exports.listTasks = function() {
  return db.any(list) 
}

exports.deleteTask = function(task) {
    return db.none(deleteTask, task)
}

exports.pgp = pgp