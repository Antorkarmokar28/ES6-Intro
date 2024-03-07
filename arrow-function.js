// single perameter use brackets
const add = (number, number2) => number + number2;
const sum = add(10, 2);
console.log(sum);
// single perameter arrow function none use brackets
const add1 = number => number;
const number1 = add1(10);
console.log(number1);
// none perameter arrow function
const getPI = () => Math.PI;
console.log(getPI());

// multiple perameter arrow function
const multy = (x, y, z) => {
    const sum = x + y + z;
    const multiple = x * y * z;
    const result = sum + multiple;
    return result;
}
const output = multy(4, 5, 6);
console.dir(output);

const getObject = (person) => person.institute;
const student = {
    name:'Antor',
    age: 25,
    institute: 'Pakutia School and Collage, Ghatail, Tangail, Dhaka Bangladesh'
}
const person1 = getObject(student);
console.log(person1);