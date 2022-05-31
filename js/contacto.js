
import { isEmail, messageValidate, get, valid } from "./validaciones.js"

const validacion = (e) => {

    e.preventDefault();
    let count = 0

    console.log(valid(isEmail( get("inputEmailCont").value ), "inputEmailCont", "errorEmailCont" ))

    if(valid(isEmail( get("inputEmailCont").value ), "inputEmailCont", "errorEmailCont" ) == false){
        get("emailHelpCont").style.display = "none"
    } else {
        count += 1
    }

    if(valid(messageValidate( get("inputText").value ), "inputText", "errorMensajeCont" ) == false){
        get("mensajeCont").style.display = "none"
    } else {
        count += 1
    }

    if(count == 2){
        window.alert("Mensaje Enviado!")
    }

}

get("inputEmailCont").addEventListener("blur", function( event ) {
    if(valid(isEmail( get("inputEmailCont").value ), "inputEmailCont", "errorEmailCont" ) == false){
        get("emailHelpCont").style.display = "none"
    }
}, true);

get("inputText").addEventListener("blur", function( event ) {
    if(valid(messageValidate( get("inputText").value ), "inputText", "errorMensajeCont" ) == false){
        get("mensajeCont").style.display = "none"
    }
}, true);

get("botonEnviar").addEventListener('click', validacion)

