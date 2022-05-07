import { isEmail, passwordValidate, get, valid} from "./validaciones.js"

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

