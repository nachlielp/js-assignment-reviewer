'use strict'

console.log('Ex 53')
console.log('Students')
// reviewed ✔️

/*
53. Students:
a. Create a students array (use the same algorithm as before and name it createStudents())
b. Read the student name from the user until “quit” is entered. Populate the students array with student objects.
c. Read 3 grades for each student (each student should have a grades array).
d. Calculate the average of each student.
e. Write the function findWorstStudent(students).
f. Write the function sortStudentsByGrade(students).
g. Write the function sortStudentsByName(students) 
*/

var gNextId = 101
var gStudents = createStudents()
console.log('gStudents : ', gStudents)

enterGrades(gStudents)
// calcAvg(gStudents)

var worstStudent = findWorstStudent(gStudents)
console.log('worstStudent : ', worstStudent)

worstStudent = findWorstStudent2(gStudents) // Using forEach()...
console.log('worstStudent : ', worstStudent)

// The sort challenge was removed from this exercise...

// sortStudentsByGrade(gStudents)
// console.log('After sort gStudents : ', gStudents)

function createStudents() {
	var students = []
	// var studentName = prompt('Enter student name. type quit to exit')
	// while (studentName !== 'quit') {
	// var student = createStudent(studentName)
	students.push(createStudent('tal'), createStudent('tal'), createStudent('tal'))
	// studentName = prompt('Enter student name. type quit to exit')
	// }
	return students
}

function createStudent(name) {
	var student = {
		id: gNextId++,
		name: name,
	}
	return student
}

function enterGrades(students) {
	for (var i = 0; i < students.length; i++) {
		var currStudent = students[i]
		currStudent.grades = [20, 20, 20] || readGrades(currStudent.name)
		calcAvg(currStudent)
	}
}

function readGrades(studentName) {
	var grades = []
	for (var i = 0; i < 3; i++) {
		var grade = +prompt('Enter a grade for ' + studentName)
		grades.push(grade)
	}
	return grades
}

function calcAvg(student) {
	var sum = 0
	var gradesLength = student.grades.length
	for (var i = 0; i < gradesLength; i++) {
		sum += student.grades[i]
	}
	student.avg = sum / gradesLength
}

// function calcAvg(students) {
// 	for (var i = 0; i < students.length; i++) {
// 		var currStudent = students[i]
// 		var sum = 0
// 		var gradesLength = currStudent.grades.length
// 		for (var j = 0; j < gradesLength; j++) {
// 			sum += currStudent.grades[j]
// 		}
// 		currStudent.avg = sum / gradesLength
// 	}
// }

function findWorstStudent(students) {
	var worstStudent = null

	for (var i = 0; i < students.length; i++) {
		var currStudent = students[i]
		if (!worstStudent || currStudent.avg < worstStudent.avg) {
			worstStudent = currStudent
		}
	}
	return worstStudent
}

// The sort challenge was removed from this exercise...

// function sortStudentsByGrade(students) {
//   students.sort((s1, s2) => {
//     return s2.avg - s1.avg
//   })
// }

// function sortStudentsByName(students) {
//   students.sort(function (s1, s2) {
//     if (s1.name.toLowerCase() > s2.name.toLowerCase()) return 1
//     if (s2.name.toLowerCase() > s1.name.toLowerCase()) return -1
//     return 0
//   })
// }

// New version from CaJan23

/*
// Exercise 53 - Students
// Create a students array – use the same algorithm as before and name it createStudents().
// Read a student name from the user until ‘quit’ is entered. Populate the students array with student objects.
// Read 3 grades for each student (each student should have a grades array).
// Write the function calcAvergaeGrade(student).
// Write the function factorGrades(student), which adds 5% to all of the student’s grades.
// Write the function findWorstStudent(students).
// Write the function forEach(students, func), which receives an array of student objects and a pointer to a function. It loops through the array and invokes the function, passing it the current element of the array on each iteration.
// Use forEach() to invoke factorGrades(student) on all students in the array.
// Find a way to imlement findWorstStudent(students) using forEach().
*/

function factorGrades(student) {
	for (var i = 0; i < student.grades.length; i++) {
		student.grades[i] *= 1.05
	}
	if (student.avg) calcAvg(student)
}

function forEach(students, func) {
	for (var i = 0; i < students.length; i++) {
		func(students[i])
	}
}
console.table(gStudents)
forEach(gStudents, factorGrades)
console.table(gStudents)

function findWorstStudent2(students) {
	var gMinAvg = Infinity
	var worstStudent = null

	forEach(students, (student) => {
		if (student.avg < gMinAvg) {
			gMinAvg = student.avg
			worstStudent = student
		}
	})
	return worstStudent
}
