const anotherFuncion = () =>{
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('Se logro!');
        }else{
            reject('Whoooops');
        }
    })
}

anotherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err));