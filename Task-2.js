// 1️ Create Student Data

let students = [
  { id: 1, name: "Naveen", mark: 85, course: "MERN" },
  { id: 2, name: "John", mark: 45, course: "Python" },
  { id: 3, name: "Priya", mark: 72, course: "Java" },
  { id: 4, name: "Arun", mark: 95, course: "React" }
];

// Task 1: Print All Students

console.log("Task 1: Print All Students");
for (let i = 0; i < students.length; i++) {
  console.log(
    students[i].id,
    students[i].name,
    students[i].mark,
    students[i].course
  );
}
//Output - Task-1
//  1 'Naveen' 85 'MERN'
//  2 'John' 45 'Python'
//  3 'Priya' 72 'Java'
//  4 'Arun' 95 'React'

//  Task 2: Pass / Fail

console.log("\nTask 2: Pass / Fail");
for (let student of students) {
  if (student.mark >= 50) {
    console.log(student.name + " - Pass");
  } else {
    console.log(student.name + " - Fail");
  }
}
//Ouput - Task 2: Pass / Fail
//  Naveen - Pass
//  John - Fail
//  Priya - Pass
//  Arun - Pass

//  Task 3: Grade System

console.log("\nTask 3: Grade System");
for (let student of students) {
  if (student.mark >= 90) {
    console.log(student.name + " - A Grade");
  } else if (student.mark >= 75) {
    console.log(student.name + " - B Grade");
  } else if (student.mark >= 50) {
    console.log(student.name + " - C Grade");
  } else {
    console.log(student.name + " - Fail");
  }
}
//Ouput - Task 3: Grade System
//  Naveen - B Grade
//  John - Fail
//  Priya - C Grade
//  Arun - A Grade


//  Task 4: Topper Student

console.log("\nTask 4: Topper Student");
let topper = students[0];

for (let student of students) {
  if (student.mark > topper.mark) {
    topper = student;
  }
}
console.log("Topper is " + topper.name + " - " + topper.mark);
//Ouput - Task 4: Topper Student
//  Topper is Arun - 95


//  Task 5: Course Search

console.log("\nTask 5: Course Search (React)");
for (let student of students) {
  if (student.course === "React") {
    console.log(student.id, student.name, student.mark, student.course);
  }
}

//Ouput-5 - Task 5: Course Search (React)
//  4 'Arun' 95 'React'

//  Task 6: Add New Student

console.log("\nTask 6: Add New Student");
students.push({
  id: 5,
  name: "Rahul",
  mark: 88,
  course: "Node JS"
});

for (let student of students) {
  console.log(student.id, student.name, student.mark, student.course);
}

//Output - Task 6: Add New Student
//  1 'Naveen' 85 'MERN'
//  2 'John' 45 'Python'
//  3 'Priya' 72 'Java'
//  4 'Arun' 95 'React'
//  5 'Rahul' 88 'Node JS'


//  Task 7: Attendance System

console.log("\nTask 7: Attendance System");
let status = "present";

switch (status) {
  case "present":
    console.log("Welcome");
    break;
  case "absent":
    console.log("Mark Absent");
    break;
  case "leave":
    console.log("Approved Leave");
    break;
  default:
    console.log("Invalid Status");
}

//Output - Task 7: Attendance System
//  Welcome

//  Task 8: Login System

console.log("\nTask 8: Login System");
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid User");
}

//Output - Task 8: Login System
//  Login Success