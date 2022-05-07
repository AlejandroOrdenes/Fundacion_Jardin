import { isEmail, passwordValidate, get, valid, getFocus} from "./validaciones.js"

let ids = ["floatingInput", "floatingPassword"]

const validacion = (e) => {

    e.preventDefault()

    if(valid(isEmail( get("floatingInput").value ), "floatingInput", "errorEmailLog" )){
        get("emailHelp").style.display = "none"
    }
    if(valid(passwordValidate( get("floatingPassword").value ), "floatingPassword", "errorPassLog" )){
        get("passHelp").style.display = "none"
    }

}

get("loginButton").addEventListener('click', validacion);
getFocus(ids, validacion)
