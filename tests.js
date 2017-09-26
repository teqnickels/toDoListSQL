const {processCommands, addTask, deleteTask, listTasks, pgp } = require('./db/db.js')
const tasks = require('./tasks')
const chai = require('chai')


describe('addTask()', () => {
    it.only('add a task object to the database', () => {
      addTask('test 1').then(
        function (result) {
          result.should.equal('test 1');
          done();
        },
        function (err) {
          done(err);
        }
      );
    })
 
  // context('complete()', () => {
  //   it('sets a tasks complete property to true', () => {
  //     complete(1)
  //     expect(allTasks[0].complete).to.equal(true)
  //   })
  // })

  // context('deleteTask()', () => {
  //   it('removes a task from the allTasks.json', () => {
  //     deleteTask(1)
  //     setTimeout(function () {
  //       expect(allTasks.length).to.equal(0)
  //     }, 100)
  //   })
  // })
})
