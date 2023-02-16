const user = {
    username: 'Cristian',
    age: 26,
    country: 'CO'
}

const {username, ...values} = user;
console.log(username, values)