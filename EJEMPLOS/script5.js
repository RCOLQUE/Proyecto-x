function handleEvent (event){

    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;
    let operator = document.querySelector('#operator').value;

    let resultado = document.querySelector('#resultado');

    number1 = parseFloat(number1);
    number2 = parseInt(number2);

    if (operator==='suma'){

        let sum = number1 + number2;
        resultado.value = sum ;
    }

    if (operator==='resta'){

        let res = number1 - number2;
        resultado.value = res ;
    }

    if (operator==='multi'){

        let mul = number1 * number2;
        resultado.value = mul ;
    }

    if (operator==='divide'){

        let div = number1 / number2;
        resultado.value = div ;
    }
    /*
    switch(operator){
        case 'suma':
        resultado.value = number1 + number2;

    */
  

    }


}

let button = document.querySelector('#btn');
button.addEventListener('click', handleEvent);