// get keys of object
const glass = {
    name : 'Glass',
    price : 101,
    color : 'Golden',
    isClean : true
}
const key = Object.keys(glass);
console.log(key);
// get values of object
const values = Object.values(glass);
console.log(values);
// get keys or value of object
const entries = Object.entries(glass);
console.log(entries);
// like object of object
// [
//     [ 'glass', 'Glass' ],
//     [ 'price', 101 ],
//     [ 'color', 'Golden' ],        
//     [ 'isClean', true ]
// ]
// delete property of object
delete glass.isClean;
console.log(glass);
// { name: 'Glass', price: 101, color: 'Golden' }
// another way delete property of object
const {name, ...rest} = glass;
console.log(rest);
// { price: 101, color: 'Golden' }