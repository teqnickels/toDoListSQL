#!/user/bin/env node
const command = process.argv[2]
const arg = process.argv.slice([3]).join().replace(/\,/g, ' ')
const {addTask, deleteTask, listTasks, pgp} = require('./db/db.js')
const {writeToConsole, getAllInDb} = require('./helper.js')


const processCommands = () => {
  switch (command) {
    case 'add':
      addTask(arg).then((value) => {
        writeToConsole(value, 'add')
        pgp.end()
      })
    break;

    case 'delete':
      deleteTask(arg).then(function(value) {
        console.log(arg)
        writeToConsole(arg, 'delete')
        pgp.end()
      })
    break; 

    case 'list':
      listTasks().then(function (value) {
        writeToConsole(value, 'list')
        pgp.end()
      })
      break;

  }
}
processCommands()
