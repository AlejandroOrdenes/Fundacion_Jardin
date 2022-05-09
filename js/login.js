import { isEmail, passwordValidate, get, valid, getFocus} from "./validaciones.js"

let ids = ["floatingInput", "floatingPassword"]

const validacion = (e) => {

    e.preventDefault()

    valid(isEmail( get("floatingInput").value ), "floatingInput", "errorEmailLog" )
    valid(passwordValidate( get("floatingPassword").value ), "floatingPassword", "errorPassLog" )
}

get("loginButton").addEventListener('click', validacion);
getFocus(ids, validacion)
