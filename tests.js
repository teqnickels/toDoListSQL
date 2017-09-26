const {processCommands, addTask, deleteTask, listTasks, pgp } = require('./db/db.js')
const tasks = require('./tasks')
const chai = require('chai')
const should = require('chai').should();

context('addTask()', () => {
  it('add a task object to the database', () => {
    return addTask('test 1').then(
      function (result) {
        result.id.should.equal(27);
      }
    );
  })
 
  context('deleteTask()', () => {
    it('removes a item from the database', () => {
      return deleteTask(2).then(
        function (result) {
          console.log(result.id)
          result.id.should.equal(2)
        
        }
      );
    })
  })

  context('listTasks()', () => {
    it('lists items in the database', () => {
       
      return listTasks().then(
         function (result) {
          result.length.should.equal(4)
        }
      );
    })
  })
})
