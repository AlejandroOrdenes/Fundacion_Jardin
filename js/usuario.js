import { isEmail, nameValidate, addressValidate, passwordValidate, pass2Validate  } from "./validaciones.js"

const username = document.getElementById('inputNombre');
const email = document.getElementById('inputEmail');
const address = document.getElementById('inputAddress')
const password = document.getElementById('inputPass');
const password2 = document.getElementById('inputPass2');
const emailUser = document.getElementById('floatingInput');
const passUser = document.getElementById('floatingPassword');
const registerButton = document.getElementById('botonRegistrarse');
const loginButton = document.getElementById('loginButton')

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

const loginValidation = (e) => {

    e.preventDefault();
    
    if( isEmail( emailUser.value )) {
        emailUser.style.borderColor = "yellowgreen";
        console.log("EMail Correcto!!")
    } else {
        emailUser.style.borderColor = "red"
        console.log("Email invalido!!")
    }

    if( passwordValidate( passUser.value )) {
        passUser.style.borderColor = "yellowgreen";
        console.log( passUser.value )
        console.log("Password Valido!")
    } else {
        passUser.style.borderColor = "red"
        console.log("Password no Valido!!")
    }
}

loginButton.addEventListener( 'click', loginValidation );
registerButton.addEventListener('click', validacion);
