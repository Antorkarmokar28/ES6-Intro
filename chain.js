const person = [
    {
        name: 'Karim',
        age: 27,
        address: 'Dhaka Bangladesh'
    }
];
console.log(person[0].name);

const data = [
    {
      count : 5001,
      name : 'Abdul Khan',
      age : 28,
      street : {
        address : '2/4 MirPur, Dhaka',
        parmanentAddress : 'Uttora sector 1, Dhaka',
      },
      city: 'Dhaka Bangladesh'
    }
]
console.log(data[0].street.parmanentAddress)