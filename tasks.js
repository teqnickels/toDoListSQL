#!/user/bin/env node
const command = process.argv[2]
const arg = process.argv.slice([3]).join().replace(/\,/g, ' ')
const {addTask} = require('./db/db.js')
const {writeToConsole} = require('./helper.js')

const processCommands = () => {
  switch (command) {
    case 'add':
      addTask(arg).then(function(value) {
        writeToConsole(value)
      })
    break;
  }
}
processCommands()