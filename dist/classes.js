"use strict";
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let user = new User("John", "Doe", 25);
console.log(user);
console.log(user.getFullName());
class Admin extends User {
    getFullName() {
        return `Admin: ${this.firstName} ${this.lastName}`;
    }
}
let admin = new Admin("John", "Doe", 25);
console.log(admin);
console.log(admin.getFullName());
