// number
let firstNumber: number;
firstNumber = 10;
firstNumber = 10.5;
console.log(firstNumber);

// boolean
let active: boolean;
active = true;
active = false;
console.log(active);

// string
let firstName: string = 'John';
let lastName: string = 'Doe';
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);

// enum
enum ROLES {
    MASTER = 'Master',
	ADMIN = 'Admin',
    EDITOR = 'Editor',
    DESIGN = 'Design',
}
function setRole(role: ROLES) {
    console.log(role);
}
setRole(ROLES.ADMIN);

// array
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ['John', 'Jane'];
let roles: Array<ROLES> = [ROLES.ADMIN, ROLES.EDITOR];
console.log(numbers);
console.log(names);
console.log(roles);
