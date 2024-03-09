// do loop throw map each element of the array
const numbers = [5, 7, 10, 15, 3, 8];
function getDouble(number){
    return number * 2;
}
const doubleNumber  = numbers.map(getDouble);
console.log(doubleNumber);

const numbers2 = [8, 40, 5, 17, 36, 9]
const getSumNumbers = numbers2.map(num => num + 5)
console.log(getSumNumbers);