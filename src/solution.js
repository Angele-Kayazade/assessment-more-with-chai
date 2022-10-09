/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  for (let i = 0; i<students.length; i++){
    if(students[i].name == name) {
      return students[i];
    }
  }
  return null;
}

module.exports = findStudentByName;
