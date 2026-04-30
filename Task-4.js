// Task 1: Array Basics
// let arr = [10, 20, 30, 40, 50];
// Print:
// First element
// Last element
// Total length

let arr = [10, 20, 30, 40, 50];
console.log("First:", arr[0]);
console.log("Last:", arr[arr.length - 1]);
console.log("Length:", arr.length);

// Output:
// First: 10
// Last: 50
// Length: 5


//  Task 2: Push & Pop
// let arr = [1,2,3];
//  Add 4,5 at end
// Remove last element
// Final output should be: [1,2,3,4]

let arr1 = [1,2,3];
arr1.push(4,5);
arr1.pop();
console.log("After Push/Pop: ", arr1);

// Output:
// After Push/Pop: [1,2,3,4]


// Task 3: Includes Check
// Check if "javascript" exists in:
// let arr = ["html","css","javascript","react"];

let arr2 = ["html","css","javascript","react"];
console.log(arr2.includes("javascript"));

// Output:
// true



//LEVEL 2
// Task 4: Filter Salaries
// let emp = [
//   {name:"A", salary:10000},
//   {name:"B", salary:50000},
//   {name:"C", salary:30000}
// ];
// Get employees with salary greater than 20000

let emp1 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

let filtered_Array = emp1.filter(e => 
    {
        return e.salary > 20000
    }
);
console.log("Filtered Array:", filtered_Array);

// Output:
// Filtered Array: [ {name:"B", salary:50000}, {name:"C", salary:30000} ]


//  Task 5: Map Names
//  From above array, return only:
// ["A","B","C"]

let names = emp1.map(e => 
    {
        return e.name
    }
    );
console.log("Names:", names);

// Output:
// Names: ["A","B","C"]


//  Task 6: Reduce Sum
//  Find total salary using reduce()

let total = emp1.reduce((sum, e) => sum + e.salary, 0);
console.log("Total Salary:", total);
// Output:
// Total Salary: 90000



// LEVEL 3 (Logic Building)
// Task 7: Remove Duplicates
// let arr = [1,2,2,3,4,4,5];
// Output: [1,2,3,4,5]

let arr4 = [1,2,2,3,4,4,5];
let unique_array = [...new Set(arr4)];
console.log("Unique:", unique_array);


// Output:
// Unique: [1,2,3,4,5]


// Task 8: Find Largest Number
// let arr = [10, 200, 5, 90];
// Output: 200

let arr5 = [10, 200, 5, 90];
let max = Math.max(...arr5);
console.log("Max:", max);

// Output:
// Max: 200


// Task 9: Reverse String

let str1 = "hello";
let rev = "";
for(let i = str1.length - 1; i >= 0; i--){
  rev += str1[i];
}
console.log("Reversed:", rev);

// Output:
// Reversed: olleh



// LEVEL 4

// Task 10: Group by Salary

let emp2 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let grouped = emp2.reduce((acc, e) => {
  if(!acc[e.salary]) {
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});
console.log("Grouped:", grouped);


// Output:
// Grouped: {10000:["A","C"], 50000:["B"]}


// Task 11: Flatten Array

let arr6 = [1,[2,[3,[4]]]];
let flatten = arr6.toString();
console.log("Flatten:", flatten);

// Output:
// Flatten: [1,2,3,4]


// Task 12: Descending Sort

let arr7 = [5,2,9,1];
arr7.sort((a,b) => 
    {
        return b - a 
    }
);
console.log("Sorted Desc:", arr7);

// Output:
// Sorted Desc: [9,5,2,1]



// Task 13: Second Largest

let arr8 = [10, 50, 20, 40];

let first = -Infinity;
let second = -Infinity;

for (let num of arr8) {
  if (num > first) {
    second = first;
    first = num;
  } else if (num > second && num !== first) {
    second = num;
  }
}

console.log("Second Largest:", second);

// arr8.sort()
// console.log(arr8[arr8.length-2]) //Not works


// Output:
// Second Largest: 40


// Task 14: Count Characters

let str2 = "aabbccdde";
let count = {};
for(let ch of str2){
  count[ch] = (count[ch] || 0) + 1;
}
console.log("Char Count:", count);

// Output:
// Char Count: {a:2, b:2, c:2, d:2, e:1}
