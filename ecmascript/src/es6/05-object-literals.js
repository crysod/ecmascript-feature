//enahced object literals

function newUser(user, age, country, uId) {
    return {
        user: user,
        age: age,
        country: country,
        id: uId
    }
}
console.log(newUser('Cristian', 26, 'COL', 01));