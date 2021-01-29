const test = require('tape');
const {addStudentPromise } = require('../dist/test/addStudent')

test('insert to database',async function(t){
    try {
         const response = await addStudentPromise();
        t.ok(response);
    } catch (error) {
        console.log(error);
    }
   
})