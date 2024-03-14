const person = [
    {id:'ID01', name:'Abul Mia', age:25},
    {id:'ID02', name: 'Habul Mia', age:29},
    {id:'ID03', name: 'Kalam Mia', age:19},
    {id:'ID04', name:'Salam Mia', age:31},
];
const obj = {};
person.map(person =>{
    const id = person.id;
    const name = person.name;
    obj[id] = name;
});
console.log(obj);