const user = {
    name : 'Abul Khan',
    phone : '01775826740',
    id : '5124',
}
const {name, id} = user;
console.log(name, id);
// advance
function getDoubleNum(number1, number2){
    return [number1*2, number2*2];
}
const [firstNumber, secondeNumber] = getDoubleNum(3, 6);
console.log(firstNumber, secondeNumber);