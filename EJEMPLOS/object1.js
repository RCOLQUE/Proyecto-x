// ARRAY
// 2 / 2 = 0
// 3 / 2 = 1
const array = [1,2,3,4,5,6,7,8,9,10];  
const arraypar = [];  
const arrayimpar = [];  
console.log(array);
//console.log(array.length);

array.forEach(function (item) {
    //console.log(item);
    const resultado = item % 2;
    if (resultado===0){
        arraypar.push(item);
    } else{
        arrayimpar.push(item);
    }

})

arraypar.forEach(function (item) {
    console.log(item)
    
})

arrayimpar.forEach(function (item) {
    console.log(item)
    
})
/*
let filtered = array.filter(function (item) {
    const resultado = false;
    if (item===5){
        resultado = true;
    }
    return resultado;
});

console.log(filtered);

*/