//Enviado por Macco, Revisar
function fetchIBMistas (name) {
    return new Promise(function(resolve,reject){

        fetch('http://faces.tap.ibm.com/api/find/?q=' + name)
            .then(function(response) {

            return response.json();

        })

            .then(function(result){
             resolve(result);
        })

        .catch(function(error){
            reject(error);

        })
    });
}

window.addEventListener('load',function()
{
    let promise = fetchIBMistas('borlee');
    console.log(promise)
    promise.then(function(listOfIBMistas){

        let ul= document.createElement('ul');

         listOfIBMistas.forEach(function(ibmista){
             let li=document.createElement('li');
             let img=document.createElement('img');
             let span=document.createElement('span');

             img.src='https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/' + ibmista.email;
             img.setAttribute('with',  '200px');
             img.setAttribute('height',  '200px'); 
             span.innerHTML= ibmista.name;

             li.appendChild(img);
             li.appendChild(span);

             ul.appendChild(li);          

         });
        document.body.appendChild(ul);
    });

    promise.catch(function(error){
        console.log(error);

    });


});

/*
http://faces.tap.ibm.com/api/find/?q=

from Felipe Brito Rodrigues to everyone:

http://ciolab.ibm.com/trac/wiki/FacesAPIs
*/
