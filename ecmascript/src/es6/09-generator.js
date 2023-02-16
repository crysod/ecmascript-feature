function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it =  iterate(['cristian','Andrea','Eva','Fernando']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

console.log(it.next().value);
