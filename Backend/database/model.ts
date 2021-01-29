import {dbConn} from '../dist/database/config'
function addStudent(studentName:string,age:number, course:string){
  dbConn.run("INSERT INTO students VALUES ($name,$age, $course)", {
      $name: studentName,
      $age: age,
      $course: course
    })
}
  
let addStudentPromise = new Promise((resolve,reject)=>{
  try {
     setTimeout(() => {
    resolve(addStudent('Ebenezer C. Hayford',28,'React.js'))
  }, 1000);
  } catch (error) {
    reject(`There was a problem adding student: ${error}`)
  }
 
})

module.exports ={addStudentPromise}

