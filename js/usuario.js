import { isEmail, nameValidate, addressValidate, passwordValidate, pass2Validate  } from "./validaciones.js"

const username = document.getElementById('inputNombre');
const email = document.getElementById('inputEmail');
const address = document.getElementById('inputAddress')
const password = document.getElementById('inputPass');
const password2 = document.getElementById('inputPass2');
const registerBoton = document.getElementById('botonRegistrarse')

const validacion = (e) => {
    e.preventDefault();
    if (nameValidate( username.value )) {
        username.style.borderColor = "yellowgreen";
        console.log("Nombre Valido!!")
    } else {
        username.style.borderColor = "red"
        console.log("Nombre no valido!!")
    }

    if (addressValidate( address.value )) {
        address.style.borderColor = "yellowgreen";
        console.log("Direccion Valida!!")
    } else {
        address.style.borderColor = "red"
        console.log("Direccion no valido!!")
    }

    if( isEmail( email.value )) {
        email.style.borderColor = "yellowgreen";
        console.log("EMail Correcto!!")
    } else {
        email.style.borderColor = "red"
        console.log("Email invalido!!")
    }

    if( passwordValidate( password.value )) {
        password.style.borderColor = "yellowgreen";
        console.log( password.value )
        console.log("Password Valido!")
    } else {
        password.style.borderColor = "red"
        console.log("Password no Valido!!")
    }

    if( passwordValidate( password.value) && pass2Validate( password.value, password2.value )) {
        password2.style.borderColor = "yellowgreen";
        console.log("Passwords Correctos!!")
    } else {
        password2.style.borderColor = "red"
        console.log("Passwords NO coinciden!!")
    }
}

registerBoton.addEventListener('click', validacion);

// $(document).ready(function(){
//     $("#botonRegistrarse").click(function(e){

//         e.preventDefault();

//         let email = $("#inputEmail").val().trim();

//         function isEmail(email) {
//             var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//             return EmailRegex.test(email);
//           }

//         if($("#inputNombre").val().trim().length==0 ){
//             $("#inputNombre").css("border", "1px solid #ff3838");
//             $("#inputNombre").focus(function(){
//                 $("#inputNombre").css("border", "1px solid #ced4da");
//             });
//         } else {
//             $("#inputNombre").css("border", "1px solid greenyellow");
//         }

//         if(isEmail(email)){
//             $("#inputEmail").css("border", "1px solid greenyellow");
//             $("#inputEmail").focus(function(){
//                 $("#inputEmail").css("border", "1px solid #ced4da");
//             });
//         } else {
//             $("#inputEmail").css("border", "1px solid #ff3838");
//         }

//         if($("#inputPass").val().trim().length==0 ){
//             $("#inputPass").css("border", "1px solid #ff3838");
//             $("#inputPass").focus(function(){
//                 $("#inputPass").css("border", "1px solid #ced4da");
//             });
//         } else {
//             $("#inputPass").css("border", "1px solid greenyellow");
//         }

//         if($("#inputRepPass").val().trim().length==0 ){
//             $("#inputRepPass").css("border", "1px solid #ff3838");
//             $("#inputRepPass").focus(function(){
//                 $("#inputRepPass").css("border", "1px solid #ced4da");
//             });
//         } else {
//             $("#inputRepPass").css("border", "1px solid greenyellow");
//         }

//     });
// });