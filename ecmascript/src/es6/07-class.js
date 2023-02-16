//Declaration
class  User{}
//Instance
const newuser = new User();

class user {
    //Metodos
    greeting(){
        return 'Hello';
    }
}

const cristian = new user();
console.log(cristian.greeting());

//----------------------------------------------------------------

const fernando = new user();
console.log(fernando.greeting());

//----------------------------------------------------------------
//constructor
class  User{
    constructor(){
        console.log('new user');
    }
    //
    greeting(){
        return 'Hello';
    }
}
const ortega = new User(); //Cuando se inicializa una instancia se llama al constructor para inicializar los elementos que tenga.

//----------------------------------------------------------------
//this

class user{
    constructor(name){
        this.name = name;
    }
    //metodo
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name} 👍`;
    }
}

const whoops = new user('Fernando');
console.log(whoops.greeting());

//----------------------------------------------------------------
//  setters AND getters

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Methode
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name} 👍`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const dev = new User('Cristian', 26);
console.log(dev.uAge);
console.log(dev.uAge=20);