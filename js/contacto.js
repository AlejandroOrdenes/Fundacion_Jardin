import { isEmail, messageValidate } from "./validaciones.js"

const email = document.getElementById('inputEmail');
const message = document.getElementById('inputText');
const sendButton = document.getElementById('botonEnviar');

const validacion = (e) => {

    e.preventDefault();

    if( isEmail( email.value )) {
        email.style.borderColor = "yellowgreen";
        console.log("EMail Correcto!!")
    } else {
        email.style.borderColor = "red"
        console.log("Email invalido!!")
    }
    
    if( messageValidate( message.value )) {
        message.style.borderColor = "yellowgreen";
        console.log( message.value )
        console.log("Password Valido!")
    } else {
        message.style.borderColor = "red"
        console.log("Password no Valido!!")
    }
}

sendButton.addEventListener('click', validacion);




// $(document).ready(function(){
//     $("#botonEnviar").click(function(e){

//         e.preventDefault();

//         if($("#inputEmail").val().trim().length==0 ){
//             document.getElementById("inputEmail").setAttribute("placeholder", "Ingrese Email Valido");
//             $("#inputEmail").css("border", "1px solid #ff3838");
//         }
//         if($("#inputText").val().trim().length==0){
//             document.getElementById("inputText").setAttribute("placeholder", "Ingrese un Mensaje");
//             $("#inputText").css("border", "1px solid #ff3838");
//         }

//         $("#inputEmail").focus(function(){
//             document.getElementById("inputEmail").setAttribute("placeholder", "");
//             $("#inputEmail").css("border", "1px solid #ced4da");
//         });

//         $("#inputText").focus(function(){
//             $("#inputText").css("border", "1px solid #ced4da");
//             document.getElementById("inputText").setAttribute("placeholder", "");
//         });
//     });
// });