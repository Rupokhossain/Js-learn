// Task - 01

var a = 5;
var b = 15;

if (a > b) {
    console.log('a is greater than b');
}
else {
    console.log('a is not greater than b');
}

// ===========
function multiply(x, y) {
    return x * y;
}
console.log(multiply(3, 7));

// =========
var c = 8;
var d = 8;
if(c === d) {
    console.log('c is equal to d');
}
else{
    console.log('c is not equal to d');
}

// =======
function subtract(m, n) {
    return m - n;
}
console.log(subtract(10, 4));

// ======
var e = 12;
var f = 6;
if(e % f === 0) {
    console.log('e is divisible by f');
}
else{
    console.log('e is not divisible by f');
}

// ======
function divide(p, q) {
    return p / q;
}
console.log(divide(20, 5));


// Task - 02

// Arithmetic Operations
let A = 10;
let B = 5;
console.log(A + B); // 15
console.log(A - B); // 5
console.log(A * B); // 50
console.log(A / B); // 2
console.log(A % B); // 0

// Comparison Operations
console.log(A > B); // true
console.log(A < B); // false
console.log(A == B); // false
console.log(A != B); // true

// Logical Operations
let isAdult = true;
let hasPermission = false;
console.log(isAdult && hasPermission); // false
console.log(isAdult || hasPermission); // true
console.log(!isAdult); // false

// Ternary Operation
let age = 20;
let access = (age >= 18) ? 'Granted' : 'Denied';
console.log(access); // Outputs: Granted


// Task 03


// Addition function
 function add(x, y) {
    return x + y;
 }
 console.log(add(5, 10)); // 15

 // Subtraction Function:
function subtract(x, y) {
    return x - y;
}
console.log(subtract(10, 4)); // 6

// Multiplication Function:
function multiply(x, y) {
    return x * y;
}
console.log(multiply(3, 7)); // 21

// Division Function:
function divide(x, y) {
    return x / y;
}
console.log(divide(20, 5)); // 4