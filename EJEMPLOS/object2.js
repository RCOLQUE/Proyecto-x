// ARRAY de OBJETOS


const diario = {
    title: 'Titulo XXXXX',
    content: 'Lorem Ipsum dolor dddddddddddddddddddddddddddddddddddddddddddd Lorem Ipsum dolor dddddddddddddddddddddddddddddddddddddddddddd',
    image: 'http://thecatapi.com/api/images/get?format=src&type=png&size=small'
};

let x = diario .title + diario.content + diario.image;

let div = document.createElement('div');
let p = document.createElement('p');
let h = document.createElement('h3');
//h.innerHTML(diario.title);
//div.innerHTML=(x);

const img = document.createElement('img');
img.setAttribute('src',diario.image);
// OR 
//img.src =  diario.image ;
const src = img.getAttribute('src');

div.innerHTML= diario.title;
div.appendChild(img);
div.appendChild(p);
p.innerHTML=diario.content;
h.innerHTML=diario.image;

//div.appendChild(p);
document.body.appendChild(div);

//document.body.appendChild(p);
//document.body.appendChild(h);
