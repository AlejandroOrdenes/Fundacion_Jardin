import { isEmail, passwordValidate, get, valid} from "./validaciones.js"

let count = 0
const validacion = (e) => {

    e.preventDefault()

    if(valid(isEmail( get("floatingInput").value ), "floatingInput", "errorEmailLog" )){
        count +=1
    }
    if(valid(passwordValidate( get("floatingPassword").value ), "floatingPassword", "errorPassLog" )){
        count += 1
    }
   
}

get("floatingInput").addEventListener("blur", function( event ) {
    valid(isEmail( get("floatingInput").value ), "floatingInput", "errorEmailLog" )
}, true);

get("floatingPassword").addEventListener("blur", function( event ) {
    valid(passwordValidate( get("floatingPassword").value ), "floatingPassword", "errorPassLog" )
    
}, true);

get("loginButton").addEventListener('click', validacion);
