class User {
    protected firstName: string;
    protected lastName: string;
    protected age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let user = new User("John", "Doe", 25);
console.log(user);
console.log(user.getFullName());

class Admin extends User {
    public getFullName() {
        return `Admin: ${this.firstName} ${this.lastName}`;
    }
}
let admin = new Admin("John", "Doe", 25);
console.log(admin);
console.log(admin.getFullName());