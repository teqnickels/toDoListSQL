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
// var todo = {}
// todo.id = results.id
// todo.description = results.tasks

const format = (results) => {
  let infoPair = []
  // console.log(results)
  results.forEach(function(element) {
    let taskArr = []
    taskArr.push(element.id)
    taskArr.push(element.task)
    infoPair.push(taskArr)
  })

  console.table(['id', 'task'], infoPair);
}


