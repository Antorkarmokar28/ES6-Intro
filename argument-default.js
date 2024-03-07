// default value
function sum(number1 = 0, number2 = 0){
    const result = number1 + number2;
    console.log(number1, number2, result)
}
const outPutResult = sum(10);

function person(firstName = '', lastName = ''){
    const fullName = firstName + ' ' + lastName;
    console.log(firstName, lastName, fullName);
}
const personName = person('Antor', 'Karmokar');
