let div = document.createElement('div');
let p = document.createElement('p');

let x = document.createElement('p');

p.classList.add('text');
x.classList.add('text2');


/*p.classList.remove('text')
p.classList.toggle('text')  */
// Si exites cambia lo cambia, sino lo agrega//

p.innerHTML = "A Maccorin parece que le gusta";
x.innerHTML = "A Sebas parece que tambien le gusta";

/*
p.style.fontSize='48px';
p.style.color='red';
p.style.backgroundColor='yellow';
*/
div.appendChild(p);
div.appendChild(x);

document.body.appendChild(div);