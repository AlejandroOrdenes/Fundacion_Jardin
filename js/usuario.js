import { isEmail, nameValidate, addressValidate, passwordValidate, pass2Validate, get, valid, getFocus } from "./validaciones.js"

let ids = ["inputNombre", "inputAddress", "inputEmail", "inputPass", "inputPass2" ]

const validacion = (e) => {

    e.preventDefault();

    let pass2 = pass2Validate( passwordValidate(get("inputPass").value), passwordValidate(get("inputPass2").value )) 
    
    valid(nameValidate( get("inputNombre").value ), "inputNombre", "errorNombre" )
    valid(addressValidate( get("inputAddress").value ), "inputAddress", "errorDireccion" )
    valid(isEmail( get("inputEmail").value ), "inputEmail", "errorEmail" )

    valid(passwordValidate( get("inputPass").value ), "inputPass", "errorPass" )

    valid(pass2, "inputPass2", "errorPass2" )

}

get("botonRegistrarse").addEventListener('click', validacion);
getFocus(ids, validacion);

