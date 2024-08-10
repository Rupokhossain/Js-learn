// Task 01

// global context 
/* function showIt() {
    console.log(this);
}
showIt();*/

const test = {
    prop: 42,
    func: function() {
     return this.prop;
    }
 };
 
 console.log(test.func());
 
 // Task - 02
 function calculateArea() {
     return this.width * this.height;
 }
 
 // Object 1
 const rectangle = {
     width: 10,
     height: 20
 };
 
 // Object 2 
 const square = {
     width: 15,
     height: 15
 };
 
 // using call 
 const rectangleArea = calculateArea.call(rectangle);
 console.log(rectangleArea); // 200
 
 const squareArea = calculateArea.call(square);
 console.log(squareArea); //  225
 
 // using bind 
 const rectangleBind = calculateArea.bind(rectangle);
 console.log(rectangleBind()); // 200
 
 const squareBind = calculateArea.bind(square);
 console.log(squareBind()); // 225
 
 
 // Task 03 
 class User {
     constructor(name, email) {
         this.name = name;
         this.email = email;
     }
     
     login() {
         console.log(`${this.name} is now online.`);
     }
     
     logout() {
         console.log(`${this.name} is now offline.`);
     }
 }
 
 const User1 = new User('Zohan', 'zohan@example.com');
 User1.login(); // Output: Zohan is now online.