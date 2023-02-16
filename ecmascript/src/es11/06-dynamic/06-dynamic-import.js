import hello from "./modulo.js";

const button = document.getElementById('btn');

button.addEventListener('click', async  function(){
    const module = import('./modulo.js')

    console.log(module);

    module.hello();
})