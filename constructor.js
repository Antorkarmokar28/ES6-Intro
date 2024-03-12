function User(first, last, age, email, password){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.email = email;
    this.password = password;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
};
const antor = new User('Antor', 'Karmokar', 26, 'antor546@gmail.com', 'AbC53@');
const bishow = new User('Bishow', 'Karmokar', 23, 'bishow56@gmail.com', 'BishowC53@');
console.log(antor)
console.log(bishow)
