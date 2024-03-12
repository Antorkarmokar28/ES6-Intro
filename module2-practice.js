const oddNumbers = [1, 3, 5, 7, 9];
function getEvenNumberInArray(array){
    let evenNumber = [];
    for(const element of array){
        const getEvenNumber = element + 1;
        evenNumber.push(getEvenNumber);
    }
    return evenNumber;
}
console.log(getEvenNumberInArray(oddNumbers));

const oddNumbers2 = [1, 3, 5, 7, 9];
const getEvenNumber = oddNumbers2.map(number => number + 1);
console.log(getEvenNumber);
// You are given an array say : [33, 50, 79, 78, 90, 101, 30]. Now return/get all the elements which are divisible by 10 using array.filter()method.

// Now do the same task of question 2.But do this using array.find() method.Then compare the output of question 2 & question 3.
const divisibleNumbers = [33, 50, 79, 78, 90, 101, 30];
const getDivisibleNumbers = divisibleNumbers.filter(num => num % 10 === 0)
console.log(getDivisibleNumbers);

const divisibleNumber = [33, 50, 79, 78, 90, 101, 30];
const getDivisibleNumber = divisibleNumber.find(number => number % 10 === 0);
console.log(getDivisibleNumber);
// you have an array of object:
// const instructor = [
//     {name:'Nodi', age:28, position:'Senior'},
//     {name:'Akil', age:26, position:'Junior'},
//     {name:'Shobuj', age:30, position:'Senior'},
// ];
// Your task is to display the instructor names that has the position senior using filter
const instructor = [
    {name:'Nodi', age:28, position:'Senior'},
    {name:'Akil', age:26, position:'Junior'},
    {name:'Shobuj', age:30, position:'Senior'},
];
const getSeniorInstructor = instructor.filter(seniorInstructor =>{
    if(seniorInstructor.position === 'Senior'){
        console.log(`Name: ${seniorInstructor.name}, Age:${seniorInstructor.age} Position:${seniorInstructor.position}`)
    }
})
// practice problem reduce()
// const people = [
//     {name:'Meena', age:20},
//     {name:'Rina', age:15},
//     {name:'Suchorita', age:22},
// ];
// 1) Follow above array of object.So,you have 3 objects as array element.Can you find out the total sum from here?
// 20 + 15 + 22 = 57.The output will be 57
// What are you thingking?Yeah!Do it  with for loop.I know you can do it.CanBut!Wait!!wait!!Do you same task using array.reduce() method.
const people = [
    {name:'Meena', age:20},
    {name:'Rina', age:15},
    {name:'Suchorita', age:22},
];
const getAgeValueTotalSum = array =>{
    let sum = 0;
    for(const element of array){
        const ageSum = sum + element.age
        sum = ageSum;
    }
    return sum
}
console.log(getAgeValueTotalSum(people));
// using array.reduce() method
const people2 = [
    {name:'Meena', age:20},
    {name:'Rina', age:15},
    {name:'Suchorita', age:22},
];
const getAgeValueTotalSum2 = people2.reduce((accumuletor, currentValue) => accumuletor + currentValue.age, 0);
console.log(getAgeValueTotalSum2);

let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary: [
                    {school_name: 'ABC primary school'},
                    {location: 'Peters burg'},
                ]
            },
            {
                secondary: [
                    {school_name: 'ABC secondary school'},
                    {location: 'St Lorence'},
                ]
            }
        ]
    }
}
console.log(data.Sophia.study[1].secondary[1].location);

let students = {
    2222: {
        name: 'Jack',
        section: 'C',
        class: 'IX',
        address: {
            'building no': 12,
            'street': 'St. Jonson',
            'city': 'Petersburg',
            'country': 'UK'
        }
    },
    3333: {
        name: 'Herry',
        section: 'D',
        class: 'X',
        address: {
            'building no': 85,
            'street': 'DC road',
            'city': 'Kochukhet',
            'country': 'Bangladesh'
        }
    }
}
console.log(students['2222'].address['city']);
console.log(students['3333'].name);

let data2 = {
    data:[
        {
            bookId: 1,
            bookDetails: {
                name: 'habluder adda',
                category: 'XYZ',
                price: '20$',
            },
            bookCategory: 'Basic',
        },
        {
            bookId: 2,
            bookDetails: {
                name: 'gobluder adda',
                category: 'ABC',
                price: '40$',
            },
            bookCategory: 'Beginner',
        },
    ]
}
console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);