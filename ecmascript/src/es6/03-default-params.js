function newUser(name, age, country) { 
    var name = name || 'Cristian';
    var age = age || 26;
    var country = country || 'Valledupa';
    console.log(name, age, country);
}
newUser();

//................................................................

function newAdmin(name ='Cristian', age =26, country = 'Valledupa'){
    console.log(name, age, country);
}
newAdmin();