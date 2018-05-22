// REvisar y completar este Script
function fetchIBMistas(name){
	return new Promise(function(resolve,reject){
        fetch('http://faces.tap.ibm.com/api/find/?q='+name)
        .then(function (response){
            return response.json();
        })
        .then(function (result){
            resolve(result);
        })
        .catch(function (error){
            reject(error);
        });
    });
}

window.addEventListener('load',function() {

    let Promise = fetchIBMistas('ruan');

    Promise.then(function(listOfIBMistas){
        console.log(listOfIBMistas)
    });

    Promise.catch(function(error){
        console.log(error)
    });
})