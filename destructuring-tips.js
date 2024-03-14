const person = {
    name:'Babul',
    age:61,
}
// const {name} = person;
const {name:myName} = person;
console.log(myName);
const createSentence = (obj) =>{
    const {name, age} = obj;
    // const sentence = `my name is ${obj.name}. I'm a ${obj.age} years older`;
    // console.log(sentence);
    console.log(name, age);
}
// console.log(createSentence(person));
createSentence(person);
