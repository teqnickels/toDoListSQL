const command = process.argv[2]
const arg = process.argv.slice([3]).join().replace(/\,/g, ' ')
const {addTask, deleteTask, listTasks, pgp} = require('./db/db.js')
const {writeToConsole} = require('./helper.js')

if(!command) {
  console.log( 'There needs to be a command' )
  process.exit()
}
if(command !== 'list' && !arg) {
  console.log('User must add data')
  process.exit()
}

const processCommands = () => {
  switch (command) {
    case 'add':
      return addTask(arg)
        .then((value) => {
          writeToConsole(value, 'add')
          pgp.end()
        })
        .catch((err) => {
          console.log('Error adding task to the database')
        })

    case 'delete':
      return deleteTask(arg)
        .then(function(value) {
          writeToConsole(arg, 'delete')
          pgp.end()
       })
      .catch((err) => {
        console.log('Error, unable to delete requested task')
      })

    case 'list':
      return listTasks()
        .then(function (value) {
          console.log("VALUE",value)
          writeToConsole(value, 'list')
          pgp.end()
        }).catch((err) => {
          console.log(err, "Unhandled err")
          pgp.end()
        }).then((value) => {
          console.log("Database connection has been closed")
          pgp.end()
        })

  }
}

processCommands()

  module.exports = processCommands