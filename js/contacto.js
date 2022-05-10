import { isEmail, messageValidate, get, getFocus, valid } from "./validaciones.js"

let ids = ["inputEmailCont", "inputText"]

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

}

get("botonEnviar").addEventListener('click', validacion)
getFocus(ids, validacion)
