const array = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]];
console.log(array.flat(3));

///----------------------------------------------------------------
// flatMap
const array1 = [1, 2, 3, 4];
console.log(array1.flatMap(v => [v, v * 2]));