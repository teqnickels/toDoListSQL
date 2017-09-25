#!/user/bin/env node
const command = process.argv[2]
const arg = process.argv.slice([3]).join().replace(/\,/g, ' ')
const {addTask, deleteTask, listTasks, pgp} = require('./db/db.js')
const {writeToConsole, getAllInDb} = require('./helper.js')


const processCommands = () => {
  switch (command) {
    case 'add':
      return addTask(arg)
        .then((value) => {
          writeToConsole(value, 'add')
        })
        .catch((err) => {
          console.log('Error adding task to the database')
        })

    case 'delete':
      return deleteTask(arg)
        .then(function(value) {
          writeToConsole(arg, 'delete')
       })
      .catch((err) => {
        console.log('Error, unable to delete requested task')
      })

    case 'list':
      return listTasks()
        .then(function (value) {
          writeToConsole(value, 'list')
        })
  }
}

//add .catch on processCommands call, add.finally() and inside there close db connection
processCommands()
  .catch((err) => {
    console.log(err, "Unhandled err")
    pgp.end()
  })
  .then((value) => {
    console.log("Database connection has been closed")
    pgp.end()
  })
