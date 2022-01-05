let age: number

age = 12

let userName: string

userName = 'User Name'

let isInstructor: boolean

isInstructor = false

// MOre complex types

let hobbies: string[] // Array of strings

hobbies = ['one', 'two', 'three']

let person: {
    name: string,
    age: number
}

person = {
    name: 'Name',
    age: 33
}
//
// person = {
//     isName: true,
// }

let people: {
    name: string,
    age: number
}[] // And array of objects win name and age fields with string and number types accordingly

people = [
    {
        name: 'NAme',
        age: 23
    },
    {
        name: 'NAme',
        age: 23
    },
    {
        name: 'NAme',
        age: 23
    },
    {
        name: 'NAme',
        age: 23
    }
]

// Type inference

let course = 'React - The complet Guide'

// course = 1231231  Error cause by default is we assign string or any type of data to a variable ts auto adds this type to this variable
// So we shouldnt specify string type for this variable in that case ts will do it for us

//Union Type

let someString: string | number = 'React - The complet Guide'

someString = 31313 // string OR a number types are allowed in this example

// Type Aliases

type Person = { // We create a ne type 'set' that we can reuse later
    name: string,
    age: number
}

let persone: Person = { // like here
    name: 'Name',
    age: 1231
}

let persones: Person[] = [
    {
        name: 'anton',
        age: 33
    },
    {
        name: 'anton',
        age: 33
    },
]

// Functions & types

function add(a: number, b: number): number { //We can define a type of returned value of a function, here it is infered as :number though
    return a + b                     // Beacuse arguments can be only numbers and addition of numbers is always a number, so we dont need to specify it here
}

function printOutput(value: any): void { // Here infered type is void, because function doesnt return any value at all
    console.log(value)
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray
}

const demoArray = [1, 2, 3]

const updateArray = insertAtBeginning(demoArray, -1)
