"use strict";
const getUser = (user) => {
    return `First Name: ${user.firstName} Last Name: ${user.lastName} Age: ${user.age}`;
};
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person("John", "Doe", 30);
console.log(getUser(person));
