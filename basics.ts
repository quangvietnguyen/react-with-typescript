// Primitives: number, string, boolean

let age: number = 14;
age = 12

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

let hobbie: null;

// hobbie = 12;

// More complex types

type Person = {
    name: string;
    age: number;
}

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number
};

person = {
    name: 'Max',
    age: 32,
}

// or

let persons: Person;

// person = {
//     isEmployee: true
//     // This has the wrong type
// }

let people: {
    name: string;
    age: number;
}[];

// Type inference

let course = 'React';

// course = 12333

let courseId: string | number | boolean = 'React';
courseId = 12344;

// Function & types

function addNumber(a: number, b: number): number | string {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics - this to make sure they are all the same type

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1,2,3]
const updatedArray = insertAtBeginning(demoArray, -1);