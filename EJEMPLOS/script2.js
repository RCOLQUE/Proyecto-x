function func (param){
    param();
}

let otherfunc = function funcName() {
    console.log('Hola Mundo')
    }

    // Esto se muestra en la Consola //
func(otherfunc);

