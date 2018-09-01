/// <reference path="person.ts"/>
function greeter(person : Person) {
  return "Hello," + person.firstname + " " + person.lastname;
}

var user =  {firstname: "Jane", lastname: "User"};
var n : number = -10;

console.log(greeter(user));
console.log(Math.abs(n));


