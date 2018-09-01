/// <reference path="person.ts"/>
function greeter(person) {
    return "Hello," + person.firstname + " " + person.lastname;
}
var user = { firstname: "Jane", lastname: "User" };
var n = -10;
console.log(greeter(user));
console.log(Math.abs(n));
