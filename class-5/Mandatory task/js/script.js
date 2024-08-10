// Task 1

function createGreeting(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(createGreeting("Siam", 20));

// Task 2 

function calculateArea(length, width = length) {
    return length * width;
}

console.log(calculateArea(5));
console.log(calculateArea(5, 10));
