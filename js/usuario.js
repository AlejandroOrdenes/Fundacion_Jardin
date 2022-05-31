<<<<<<< HEAD
import { isEmail, nameValidate, addressValidate, passwordValidate, pass2Validate, get, valid } from "./validaciones.js"
=======
import { isEmail, nameValidate, addressValidate, passwordValidate, pass2Validate, get, valid} from "./validaciones.js"
>>>>>>> 3d26a2d0f1ab6f59393af9f7a209d96523ee2e57

let pass2 = pass2Validate( passwordValidate(get("inputPass").value), passwordValidate(get("inputPass2").value )) 

const validacion = (e) => {

    e.preventDefault();

    valid(nameValidate( get("inputNombre").value ), "inputNombre", "errorNombre" )
    valid(addressValidate( get("inputAddress").value ), "inputAddress", "errorDireccion" )
    valid(isEmail( get("inputEmail").value ), "inputEmail", "errorEmail" )

    valid(passwordValidate( get("inputPass").value ), "inputPass", "errorPass" )

    valid(pass2, "inputPass2", "errorPass2" )

}

get("inputNombre").addEventListener("blur", function( event ) {
    valid(nameValidate( get("inputNombre").value ), "inputNombre", "errorNombre" )
  }, true);

get("inputAddress").addEventListener("blur", function( event ) {
    valid(addressValidate( get("inputAddress").value ), "inputAddress", "errorDireccion" )
}, true);

get("inputEmail").addEventListener("blur", function( event ) {
    valid(isEmail( get("inputEmail").value ), "inputEmail", "errorEmail" )
}, true);

get("inputPass").addEventListener("blur", function( event ) {
    valid(passwordValidate( get("inputPass").value ), "inputPass", "errorPass" )
    
}, true);

get("inputPass2").addEventListener("blur", function( event ) {
    pass2 = pass2Validate( passwordValidate(get("inputPass").value), passwordValidate(get("inputPass2").value )) 
    valid(pass2, "inputPass2", "errorPass2" )
}, true);

get("botonRegistrarse").addEventListener('click', validacion);

