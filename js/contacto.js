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
