function square(num) {
    return console.log(num*num);
}
square(2);
//----------------------------------------------------------------
const square = (num) => {
    return console.log(num*num);
}
square(3);
//----------------------------------------------------------------
const square = num => console.log(num*num);
square(4);
// Este tipo de función tienen el return implicito, unicamente sirve cuando se le pasa un unico parametro  y ni hay mas de una unica linea de codigo