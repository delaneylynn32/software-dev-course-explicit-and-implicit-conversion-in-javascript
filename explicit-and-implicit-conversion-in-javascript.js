/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2; // can run either way as it is subtraction- implicit converstion changes 5 into a number. It may look better without quotes.
  let result = Number("5") - 2; // would be an explicit conversion 
console.log("The result is: " + result);

let isValid = Boolean("false"); //this automatically runs true because it is a string, not a 0, null, undefined, etc. value- explicit conversion 
if (isValid) {
    console.log("This is valid!");
}

let age = "25"; // Declare a variable 'age'and assign to a string value "25"; // fixes the out come of 255
let totalAge = Number(age) + 5;// convert 'age' from a string to a number then add 5
console.log("Total Age: " + totalAge); explicit conversion
//Implicit Conversion:
let studentAge = "10" * 2;
console.log("The student's age is:" , studentAge); // Output: 20
// Explicit Conversion:
let studentAge = Number("10") * 2;
console.log("The student's age is:", studentAge); // Output:20
// Explicit Conversion using Edge Case- Null
let studentAge= Number(null) * 2;
console.log("The student's age is:", studentAge); // Output: 0
