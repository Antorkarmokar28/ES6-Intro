// Using regular function and create callback function

function display(some){
    console.log(some);
}

function calculator(num1, num2){
    const sum = num1 + num2;
    return sum;
}
const result = calculator(5, 5);
display(result);

// Using arrow function and create callback function
const displayResult = (multipy) => console.log(multipy);
const myCalculator = (number1, number2) => number1 * number2;
const result2 = myCalculator(5, 5);
displayResult(result2);

// this is the right way
const myDisplay = some => console.log(some);
const myCalculate = (number1, number2, callback) =>{
    const sum = number1 + number2;
    callback(sum);
};
myCalculate(5, 10, myDisplay);
