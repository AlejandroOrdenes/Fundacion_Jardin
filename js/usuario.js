import { isEmail, nameValidate, addressValidate, passwordValidate, pass2Validate  } from "./validaciones.js"

function get(element) {
    let get = document.getElementById(element)
    return get;
}


const validacion = (e) => {

    e.preventDefault();

    if (nameValidate( get("inputNombre").value )) {
        get("inputNombre").style.borderColor = "yellowgreen";
        get("errorNombre").style.display = "none"
    } else {
        get("errorNombre").style.display = "flex"
        get("inputNombre").style.borderColor = "red"
    }

    if (addressValidate( get("inputAddress").value )) {
        get("errorDireccion").style.display = "none"
        get("inputAddress").style.borderColor = "yellowgreen";
    } else {
        get("errorDireccion").style.display = "flex"
        get("inputAddress").style.borderColor = "red"
    }

    if( isEmail( get("inputEmail").value )) {
        get("errorEmail").style.display = "none"
        get("inputEmail").style.borderColor = "yellowgreen";
    } else {
        get("errorEmail").style.display = "flex"
        get("inputEmail").style.borderColor = "red"
    }

    if( passwordValidate( get("inputPass").value )) {
        get("errorPass").style.display = "none"
        get("inputPass").style.borderColor = "yellowgreen";
    } else {
        get("infoPass").style.display = "none"
        get("errorPass").style.display = "flex"
        get("inputPass").style.borderColor = "red"
    }

    if( passwordValidate( get("inputPass2").value) && pass2Validate( get("inputPass").value, get("inputPass2").value )) {
        get("errorPass2").style.display = "none"
        get("inputPass2").style.borderColor = "yellowgreen";
    } else {
        get("errorPass2").style.display = "flex"
        get("inputPass2").style.borderColor = "red"
    }

    if( isEmail( get("floatingInput").value )) {
        get("floatingInput").style.borderColor = "yellowgreen";
    } else {
        get("floatingInput").style.borderColor = "red"
    }

    if( passwordValidate( get("floatingPassword").value )) {
        get("floatingPassword").style.borderColor = "yellowgreen";
    } else {
        get("floatingPassword").style.borderColor = "red"
    }
}


get("loginButton").addEventListener( 'click', validacion );
get("botonRegistrarse").addEventListener('click', validacion);

const ids = ["inputNombre", "inputAddress", "inputEmail", "inputPass", "inputPass2", "floatingInput", "floatingPassword" ]

function focus(id, funcValid) {
    get(id).addEventListener("focusout", funcValid)
}

ids.forEach(element => {
   focus(element, validacion) 
});

// get("inputNombre").addEventListener("focusout", validacion)
// get("inputAddress").addEventListener("focusout", validacion)
// get("inputEmail").addEventListener("focusout", validacion)
// get("inputPass").addEventListener("focusout", validacion)
// get("inputPass2").addEventListener("focusout", validacion)
// get("floatingInput").addEventListener("focusout", validacion)
// get("floatingInput").addEventListener("focusout", validacion)