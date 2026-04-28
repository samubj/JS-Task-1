// Level 1 – Functions Basics

// Task 1: Student Form Function
// Create a function studentForm(name, age, course) and print:
// Name: Naveen
// Age: 22
// Course: MERN

function studentForm(name, age, course) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Course:", course);
}
studentForm("Naveen", 22, "MERN");


// Output:Task-1 : Student Form Function
// Name: Naveen
// Age: 22
// Course: MERN


// Task 2: Calculator Function
// Create function calc(a,b):
// print addition
// print subtraction
// print multiplication

function calc(a, b) {
  console.log("Addition:", a + b);
  console.log("Subtraction:", a - b);
  console.log("Multiplication:", a * b);
}
calc(10, 5);


// Output:
// Addition: 15
// Subtraction: 5
// Multiplication: 50

// Task 3: Reusable Greeting
// Call same function for 3 users:
// Hello Kamal
// Hello Praveen
// Hello Sai

function greet(name) {
  console.log("Hello", name);
}
greet("Kamal");
greet("Praveen");
greet("Sai");


// Output:
// Hello Kamal
// Hello Praveen
// Hello Sai

//Level-2 
// Task 4: Return Value
// Create function square(num)
// Return square value.
function square(num) {
  return num * num;
}
console.log(square(5));


// Output:
// 25

// Task 5: Scope Check
// Inside function:
// let secret = "javascript"
// Try printing outside function.
// Observe what happens.
// Explain why.

function testScope() {
  let secret = "javascript";
  console.log("Inside:", secret);
}
testScope();
// console.log(secret); // Error Why???

//Explaination
// secret is created using let inside the function.
// That means it belongs only to that function's local scope.

/*
Output:
Inside: javascript

Outside:
ReferenceError: secret is not defined
*/


// Level 3 – Spread / Rest

// Task 6: Merge Arrays
// let boys = ["car","bike"]
// let girls = ["doll","teddy"]
// Use spread operator and make:
// ["car","bike","doll","teddy"]


let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let toys = [...boys, ...girls];
console.log(toys);


// Output:
// ["car", "bike", "doll", "teddy"]


// Task 7: Unlimited Numbers
// Create function:
// sumAll(...nums)
// Pass:
// sumAll(10,20,30,40)
// Output:
// 100

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}
console.log(sumAll(10, 20, 30, 40));


// Output:
// 100

// Level 4 – Destructuring

// Task 8: Array Destructuring
// let colors = ["red","green","blue"]
// Store into:
// c1 c2 c3
// Print all.

let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;

console.log(c1, c2, c3);


// Output:
// red green blue

// Task 9: Object Destructuring

// let emp = {
//  name:"Naveen",
//  role:"Developer",
//  salary:"5LPA"
// }
// Destructure and print:
// Naveen Developer

// Task 9: Object Destructuring
let emp = {
  name: "Naveen",
  role: "Developer",
  salary: "5LPA"
};

let { name, role } = emp;
console.log(name, role);


// Output:
// Naveen Developer

// Level 5 – Real-Time Logic

// Task 10: Offer Generator
// Use generator function.
// Each next() should give:
// 10% cashback
// 20% cashback
// 50% cashback
// Try again
// After completed:
// No more offers

function* offers() {
  yield "10% cashback";
  yield "20% cashback";
  yield "50% cashback";
  yield "Try again";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().done ? "No more offers" : offer.next().value);


// Output:

// 10% cashback
// 20% cashback
// 50% cashback
// Try again
// No more offers

// Level 6 – Advanced

// Task 11: Curry Function
// Make:
// add(10)(20)(30)
// Output:
// 60

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(10)(20)(30));


// Output:
// 60

// Task 12: Student Marks Analyzer

// Create function:
// marks(...nums)
// Input:
// marks(80,90,70,60)
// Output:
// Total = 300
// Average = 75

function marks(...nums) {
  let tot = 0
  for (let n of nums) {
    tot += n;
  }
  let avg = tot / nums.length;

  console.log("Total =", tot);
  console.log("Average =", avg);
}
marks(80, 90, 70, 60);


// Output:
// Total = 300
// Average = 75

//  Challenge Task (Real Company Level)

// Create employee registration system:
// register(name, role, ...skills)
// Example:
// register("Naveen","Frontend","HTML","CSS","JS","React")
// Output:
// Name: Naveen
// Role: Frontend
// Skills: HTML CSS JS React

function register(name, role, ...skills) {
  console.log("Name:", name);
  console.log("Role:", role);
  let [skill_1,skill_2,skill_3,skill_4] = skills
  console.log("Skills:", skill_1,skill_2,skill_3,skill_4);
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");


// Output:
// Name: Naveen
// Role: Frontend
// Skills: HTML CSS JS React

