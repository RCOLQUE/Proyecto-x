window.nombre = 'Martin Mussolini'

function greet (){
    console.log(this.nombre + 'apoya a Macri');
}
greet();

const persona = {
    nombre: 'Sebas Andreoletti tambien ',
    edad:'40',
    isHungry= true;
    greet: greet
}

persona.greet();

// ARRAY

const array = [];  // el inndice inicia en 0
console.log(array);

array.push(100);
array.push({nombre: 'Ricardo Colque'});

console.array(array);
console.log(array.length);

//-----------------------------------------------
let filtered = array.filter

