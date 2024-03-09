// write an arrow function that will take 3 perameters, will multiply the perameters and will return the result
const multipleNumber = (x, y, z) => x * y * z;
const multiply = multipleNumber(5, 3, 7);
console.log(multiply);
// write the following sentence in the three line and print the result
const sentence = `I am a web developer.
I love to code.
I love to eat biryani.`;
console.log(sentence);
// write an arrow function that will take 2 perameters: one perameter will come from you and the other parameter will be a default parameter.Add these two parameters and return the result
const defaultValue = (number1, number2 = 155) => number1 + number2;
const sumResult = defaultValue(55, 55);
console.log(sumResult);
// write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the name of your friends
// b) Check if the length of each element is event, push elements with even length to a new array and return the result
const getEvenLengthFriendName = (names) =>{
    let evenElement = [];
    for(let name of names){
        if(name.length % 2 == 0){
            evenElement.push(name);
        }
    }
    return evenElement;
}
const friendsName = ['Bipu Buiyan', 'Kanon Mondol', 'Rumon Seikh', 'Bishow Karmokar', 'Rony Ahammed'];
const evenFriendsNameResult = getEvenLengthFriendName(friendsName);
console.log(evenFriendsNameResult);
// write an arrow function where it will do the flowing: 
// a) Square each array element
// b) calculate the sum of Square elements
// c) Return the average of the sum of the Squared elements
const squareSum = (array) =>{
    let sum = 0;
    for(const element of array){
        const squareNumber = Math.pow(element,2);
        const sumNumber = sum + squareNumber;
        sum = sumNumber;
    }
    return sum
}

const numberOfArray = [2, 4, 5, 6, 8]
const outputSqureNumber = squareSum(numberOfArray);
console.log(outputSqureNumber)