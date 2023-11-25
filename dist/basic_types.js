"use strict";
// number
let firstNumber;
firstNumber = 10;
firstNumber = 10.5;
console.log(firstNumber);
// boolean
let active;
active = true;
active = false;
console.log(active);
// string
let firstName = 'John';
let lastName = 'Doe';
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
// enum
var ROLES;
(function (ROLES) {
    ROLES["MASTER"] = "Master";
    ROLES["ADMIN"] = "Admin";
    ROLES["EDITOR"] = "Editor";
    ROLES["DESIGN"] = "Design";
})(ROLES || (ROLES = {}));
function setRole(role) {
    console.log(role);
}
setRole(ROLES.ADMIN);
// array
let numbers = [1, 2, 3];
let names = ['John', 'Jane'];
let roles = [ROLES.ADMIN, ROLES.EDITOR];
console.log(numbers);
console.log(names);
console.log(roles);
