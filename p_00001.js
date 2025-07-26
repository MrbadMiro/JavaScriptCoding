/*
=================================================================
JAVASCRIPT LEARNING TOPICS - FROM ARRAY LARGEST ELEMENT PROBLEM
=================================================================

Based on solving: "Find largest element in array"
Your solution time: 0.45 (faster than Math.max!)

=================================================================
1. VARIABLES & DATA TYPES
=================================================================
*/

// Variable Declaration
let max = arr[0]; // 'let' - can change value
const size = 5; // 'const' - cannot change value
var oldWay; // 'var' - old way (avoid)

// Data Types
let number = 42; // Number
let text = "hello"; // String
let isTrue = false; // Boolean
let nothing = null; // Null
let notDefined; // Undefined

/*
=================================================================
2. ARRAYS - STORING MULTIPLE VALUES
=================================================================
*/

// Array Creation
let arr = [1, 8, 7, 56, 90];
let empty = [];
let mixed = [1, "hello", true];

// Array Access (IMPORTANT: Starts from 0!)
arr[0]; // First element = 1
arr[1]; // Second element = 8
arr[4]; // Last element = 90
arr.length; // Total count = 5

// Array Properties
arr.length; // Get size
arr[arr.length - 1]; // Get last element

/*
=================================================================
3. FOR LOOPS - REPEATING ACTIONS
=================================================================
*/

// Basic For Loop Structure
for (let i = 1; i < arr.length; i++) {
  // Code that repeats
}

// Loop Parts Explained:
// let i = 1           - START: Begin with i = 1
// i < arr.length      - CONDITION: Continue while true
// i++                 - UPDATE: Increase i by 1 each time

// Loop Examples
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints: 0, 1, 2, 3, 4
}

/*
=================================================================
4. CONDITIONAL STATEMENTS - MAKING DECISIONS
=================================================================
*/

// If Statement
if (arr[i] > max) {
  max = arr[i]; // Execute if condition is true
}

// If-Else
if (condition) {
  // Do this if true
} else {
  // Do this if false
}

// If-Else-If
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}

/*
=================================================================
5. COMPARISON OPERATORS
=================================================================
*/

// Comparison Operators
5 > 3; // Greater than = true
5 < 3; // Less than = false
5 >= 5; // Greater than or equal = true
5 <= 3; // Less than or equal = false
5 == 5; // Equal to = true
5 === 5; // Strictly equal = true
5 != 3; // Not equal = true
5 !== "5"; // Strictly not equal = true

/*
=================================================================
6. FUNCTIONS - REUSABLE CODE BLOCKS
=================================================================
*/

// Function Declaration
function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function Usage
let result = largest([1, 8, 7, 56, 90]);
console.log(result); // Output: 90

// Arrow Functions (Modern Way)
const largest2 = (arr) => {
  // Same code as above
};

/*
=================================================================
7. ARRAY METHODS - BUILT-IN FUNCTIONS
=================================================================
*/

// Useful Array Methods
arr.push(100); // Add to end
arr.pop(); // Remove from end
arr.shift(); // Remove from start
arr.unshift(0); // Add to start
arr.indexOf(8); // Find position of 8
arr.includes(56); // Check if contains 56

// Advanced Methods
Math.max(...arr); // Find maximum (slower than manual)
Math.min(...arr); // Find minimum
arr.sort(); // Sort array
arr.reverse(); // Reverse array

/*
=================================================================
8. CONSOLE OUTPUT - DEBUGGING
=================================================================
*/

console.log("Hello"); // Print text
console.log(max); // Print variable
console.log("Max is:", max); // Print multiple things
console.log(arr); // Print entire array

/*
=================================================================
9. COMMON PATTERNS FROM YOUR SOLUTION
=================================================================
*/

// Pattern 1: Find Maximum/Minimum
let max = arr[0]; // Assume first is best
for (let i = 1; i < arr.length; i++) {
  // Check rest
  if (arr[i] > max) {
    // If better found
    max = arr[i]; // Update best
  }
}

// Pattern 2: Array Traversal
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // Do something with each element
}

// Pattern 3: Counting
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 50) {
    count++;
  }
}

/*
=================================================================
10. NEXT TOPICS TO LEARN
=================================================================
*/

// After mastering basics above, learn:
// - Objects { name: "John", age: 25 }
// - Array methods: map(), filter(), reduce()
// - String methods: split(), join(), substring()
// - Error handling: try/catch
// - Async programming: promises, async/await
// - DOM manipulation (for web pages)
// - Event handling (click, input, etc.)

/*
=================================================================
PRACTICE PROBLEMS TO SOLVE NEXT:
=================================================================

1. Find smallest element in array
2. Find sum of all elements  
3. Count how many elements are greater than 10
4. Find second largest element
5. Check if array contains a specific number
6. Remove duplicates from array
7. Reverse an array manually
8. Find average of all numbers

Your foundation is strong! Keep practicing these patterns.
Time to beat: 0.45 (your current best!)
=================================================================
*/
