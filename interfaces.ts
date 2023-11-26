interface UserInterface {
    firstName: string;
    lastName: string;
    age: number;

    getFullName(): string;
}

const getUser = (user: UserInterface): string => {
    return `First Name: ${user.firstName} Last Name: ${user.lastName} Age: ${user.age}`;
}

class Person implements UserInterface {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person("John", "Doe", 30);
console.log(getUser(person));