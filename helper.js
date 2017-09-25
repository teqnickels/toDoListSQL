const {listTasks} = require('./db/db.js')
require('console.table');


exports.writeToConsole = (results, caller) => {
  switch(caller) {
    case 'add':
      console.log(`Created Task ${results.id}`)
      break;
    
    case 'delete':
      console.log(`Deleted task ${results}`)
      break;

    case 'list':
      format(results)
      break;
    }
};


const format = (results) => {
  let infoPair = []
  results.forEach(function(element) {
    let taskArr = []
    taskArr.push(element.id)
    taskArr.push(element.task)
    infoPair.push(taskArr)
  })

  console.table(['id', 'task'], infoPair);
}


