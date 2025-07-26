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
PRACTICE PROBLEMS WITH SOLUTIONS:
=================================================================
*/

// PROBLEM 1: Find smallest element in array
// Input: [1, 8, 7, 56, 90] → Output: 1
function smallest(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      // Change > to <
      min = arr[i];
    }
  }
  return min;
}

// PROBLEM 2: Find sum of all elements
// Input: [1, 8, 7, 56, 90] → Output: 162
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i]; // or total += arr[i]
  }
  return total;
}

// PROBLEM 3: Count elements greater than 10
// Input: [1, 8, 7, 56, 90] → Output: 2 (56 and 90)
function countGreaterThan10(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      count++; // Same as count = count + 1
    }
  }
  return count;
}

// PROBLEM 4: Check if array contains a number
// Input: arr=[1,8,7,56,90], find=8 → Output: true
function contains(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true; // Found it!
    }
  }
  return false; // Not found
}

// PROBLEM 5: Find average of all numbers
// Input: [1, 8, 7, 56, 90] → Output: 32.4
function average(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length; // Sum divided by count
}

// PROBLEM 6: Find second largest element
// Input: [1, 8, 7, 56, 90] → Output: 56
function secondLargest(arr) {
  let max = arr[0];
  let secondMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max; // Old max becomes second
      max = arr[i]; // New max
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i]; // New second max
    }
  }
  return secondMax;
}

// PROBLEM 7: Reverse array manually
// Input: [1, 8, 7, 56, 90] → Output: [90, 56, 7, 8, 1]
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // Start from end
    reversed.push(arr[i]);
  }
  return reversed;
}

// PROBLEM 8: Count specific number occurrences
// Input: [5, 5, 3, 5, 1], find=5 → Output: 3
function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

/*
=================================================================
COMMON QUESTIONS & ANSWERS:
=================================================================

Q: Why start loop from i=1 in largest function?
A: Because we already took arr[0] as initial max. Starting from i=1 
   avoids comparing first element with itself.

Q: What happens if array is empty []?
A: arr[0] will be undefined, causing errors. Always check:
   if (arr.length === 0) return null;

Q: Why use i++ instead of i = i + 1?
A: Both work the same. i++ is shorter and more common in programming.

Q: What's difference between == and ===?
A: == compares values (5 == "5" is true)
   === compares values AND types (5 === "5" is false)
   Always use === for safety!

Q: Can I use arr.length inside the loop condition?
A: Yes! for(let i=0; i<arr.length; i++) is standard and efficient.

Q: What if arr[i] is undefined?
A: Comparisons with undefined give unexpected results. Always validate
   your array has the expected data.

Q: How to handle negative numbers?
A: Same logic works! -5 > -10 is true. Your algorithm handles all numbers.

Q: Why is manual loop faster than Math.max()?
A: Math.max(...arr) has overhead from spread operator and function calls.
   Simple loops are often faster for basic operations.

=================================================================
DEBUGGING TIPS:
=================================================================

// Add console.log to see what's happening:
function largest(arr) {
    let max = arr[0];
    console.log("Starting max:", max);
    
    for (let i = 1; i < arr.length; i++) {
        console.log("Checking:", arr[i], "vs current max:", max);
        if (arr[i] > max) {
            max = arr[i];
            console.log("New max found:", max);
        }
    }
    return max;
}

// Test with different inputs:
console.log(largest([1, 8, 7, 56, 90]));     // Expected: 90
console.log(largest([5, 5, 5, 5]));          // Expected: 5  
console.log(largest([10]));                  // Expected: 10
console.log(largest([-1, -5, -3]));          // Expected: -1

Your foundation is strong! Keep practicing these patterns.
Time to beat: 0.45 (your current best!)
=================================================================
*/
