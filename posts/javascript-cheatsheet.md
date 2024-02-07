---
title: "Javascript Cheatsheet for beginners"
subtitle: "Use this cheatsheet as your reference for basic JavaScript as you keep learning. take a peek at the ref. links!"
date: "2024-01-04"
color: '#fb923c'
---
# Variables and Data Types

### Variables
```javascript
// Declaration
let variableName;

// Assignment
variableName = 10;

// Declaration and Assignment
let anotherVariable = "Hello";

```
### Data Types
```JavaScript
let number = 10;          // Number
let text = "Hello";       // String
let isTrue = true;         // Boolean
let array = [1, 2, 3];     // Array
let object = {            // Object
  key: "value",
  age: 25
};
```
### Operators
```JavaScript
// Arithmetic
let sum = 5 + 3;
let difference = 10 - 4;
let product = 2 * 6;
let quotient = 8 / 2;

// Comparison
let isEqual = 5 === 5;
let isNotEqual = 10 !== 5;
let greaterThan = 15 > 10;
let lessThan = 3 < 7;

// Logical
let andOperator = true && false;
let orOperator = true || false;
let notOperator = !true;
```
### Control Flow
#### Conditional Statements
```JavaScript
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```
#### Loops
```JavaScript
// For Loop
for (let i = 0; i < 5; i++) {
  // Code to repeat
}

// While Loop
let count = 0;
while (count < 3) {
  // Code to repeat
  count++;
}
```
### Functions
```JavaScript
// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function Call
let greeting = greet("John");
console.log(greeting);
```

## DOM Manipulation

DOM manipulation refers to the process of modifying the Document Object Model (DOM) using JavaScript. The DOM is a programming interface for web documents, representing the structure of an HTML or XML document as a tree-like structure. Each element in the document, such as HTML tags, attributes, and text content, is represented as nodes in this tree.

When you perform DOM manipulation in JavaScript, you're essentially using JavaScript to interact with and modify the structure, content, and style of an HTML document dynamically. This allows you to update the appearance and behavior of a webpage without requiring a full page reload.

```JavaScript
// Selecting an element by ID
let elementById = document.getElementById("myElement");

// Selecting elements by class name
let elementsByClass = document.getElementsByClassName("myClass");

// Selecting elements by tag name
let elementsByTag = document.getElementsByTagName("p");

// Event Listener
elementById.addEventListener("click", function() {
  // Code to execute when element is clicked
});
```

## Miscellaneous

### Logging to Console

`console.log("This is a message");`

### Alert Box

`alert("This is an alert!");`

### Comments

`// This is a single-line comment  /*   This is a   multi-line comment */`

## JavaScript Important Links and References

**JavaScript Documentation**
- [Mozilla Developer Network (MDN) - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

**JavaScript ES6+ Features**
- [ES6 Features](https://www.taniarascia.com/es6-syntax-and-feature-overview/)

**DOM Manipulation**
- [MDN - Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [W3Schools - DOM Tutorial](https://www.w3schools.com/js/js_htmldom.asp)

**JavaScript Functions**
- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript Functions - W3Schools](https://www.w3schools.com/js/js_functions.asp)

**Asynchronous JavaScript**
- [MDN - Asynchronous programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [Understanding JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

**AJAX and Fetch API**
- [MDN - Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Introduction to AJAX](https://www.w3schools.com/xml/ajax_intro.asp)

**Modern JavaScript Frameworks**
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vue.js Guide](https://vuejs.org/v2/guide/)
- [Angular Documentation](https://angular.io/docs)

**Online Interactive Platforms**
- [Codecademy - Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)
- [freeCodeCamp - JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

**Additional Resources**
- [Eloquent JavaScript Book](https://eloquentjavascript.net/)
- [You Don't Know JS Book Series](https://github.com/getify/You-Dont-Know-JS)
