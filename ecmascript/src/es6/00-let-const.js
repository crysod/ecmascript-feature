//----------------------------------------------------------------
var lastName ='Fernando'; // Declara y Asignar
lastName = 'Cristian'; // Reasignar
console.log(lastName);
//----------------------------------------------------------------
let fruit = 'Apple'; // Declara y Asignar
fruit = 'Orange'; // Reasignar
console.log(fruit);
//----------------------------------------------------------------
const  animal = 'Dog'; // Declara y Asignar
animal = 'cat'; // Reasignar
console.log(animal);
//----------------------------------------------------------------
const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // Function  scope
        let fruit2 = 'Orange'; // Block scope
        const fruit3 = 'Banana'; // Block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();
