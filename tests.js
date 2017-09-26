const {processCommands, addTask, deleteTask, listTasks, pgp } = require('./db/db.js')
const tasks = require('./tasks')
const chai = require('chai')


context('addTask()', () => {
  it('add a task object to the database', () => {
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
 
  context('deleteTask()', () => {
    it('sets a tasks complete property to true', () => {
      deleteTask('test 1').then(
        function (result) {
          result.should.equal('test 1');
          done();
        },
        function (err) {
          done(err);
        }
      );
    })
  })

  context('listTasks()', () => {
    it('lists items in the database', () => {
      addTask('Test 1')
      addTask('Test 2')
      addTask('Test 3')
       
      listTasks().then(
        function (result) {
          return expect(Promise.resolve()).to.eventually.have.property([
            { id: 1, task: 'Test 1' },
            { id: 2, task: 'Test 2' },
            { id: 3, task: 'Test 3' }
            ])
          done();
        },
        function (err) {
          done(err);
        }
      );
    })
  })
})
