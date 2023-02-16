// array destructuring

let fruits = ['Apple', 'Orange', 'Banana']; // array declarations
let [a, b, c] = fruits; //destructing array -> se le asigna a cada elemento un elemento del array.
console.log(b, c);

// Object destructuring
let user ={
    username: 'Cristian',
    age: 26
};
let {username, age} = user;
console.log(username, age);

//----------------------------------------------------------------
//Spread operator
let person = {name: 'John', age: 54};
let country = 'COL';

let data = {...person, country};
console.log(data);

//----------------------------------------------------------------
//Rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3);

//----------------------------------------------------------------
/*ejercicio:

En este deafío recibirás dos objetos JSON por parámetros.

Usando el spread operator, deberás combinar ambos objetos en uno solo. Es posible que no se te envíe alguno de los dos objetos o ninguno, por lo que deberás usar estos por defecto, en su respectivo orden:

JSON 1:

{
    name: "Mr. Michi",
    food: "Pescado"
}

JSON 2:

{
    age: 12,
    color: "Blanco"
}

La solución deberá tener un input y output como la siguiente, recuerda que se te pueden o no envíar los parámetros.

Input:

solution({
    name: "Bigotes",
    food: "Pollito"
}),

Output:

{
    name: "Bigotes",
    food: "Pollito",
    age: 12,
    color: "Blanco"
}
RESPUESTA
export function solution(
    json1 = {
        name: "Mr. Michi",
        food: "Pescado",
    },
    json2 = {
        age: 12,
        color: "Blanco",
    }
) {
    return {...json1, ...json2,};
}
*/

let json1 ={
    name: "Mr. Michi",
    food: "Pescado"
};

let json2 = {
    age: 12,
    color: "Blanco"
};

function solution (output1, output2) {
    let json3 = {...output1, ...output2,};
    return console.log(json3);
}

solution(json1, json2);