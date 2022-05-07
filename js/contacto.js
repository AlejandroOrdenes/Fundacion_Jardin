import { isEmail, messageValidate, get, getFocus, valid } from "./validaciones.js"

let ids = ["inputEmailCont", "inputText"]

const validacion = (e) => {

    e.preventDefault();

    if(valid(isEmail( get("inputEmailCont").value ), "inputEmailCont", "errorEmailCont" )){
        get("emailHelpCont").style.display = "none"
    }

    if(valid(messageValidate( get("inputText").value ), "inputText", "errorMensajeCont" )){
        get("mensajeCont").style.display = "none"
    }

}

get("botonEnviar").addEventListener('click', validacion);
getFocus(ids, validacion)
