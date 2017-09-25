const {listTasks} = require('./db/db.js')

exports.writeToConsole = (results, caller) => {
  switch(caller) {
    case 'add':
      console.log(`Created Task ${results.id}`)
      break;
    
    case 'delete':
      console.log(`Deleted task ${results}`)
      break;

    case 'list':
      // let arr = []
      // arr.push(results)
      console.log(results)
      break;
    }
};

const format = (results) => {
  results.forEach((element, index) => {
    var todoObj = {}
    todoObj.id = index + 1
    todoObj.description = element
    finalArr.push(todoObj)
  })
  console.table(finalArr)
}


