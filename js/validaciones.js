
function isEmail(email) {
    let emailTest = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailTest.test(email);
  }
  
function nameValidate(name) {
  let nameTest = /^[a-zA-Z\s]+$/i;
  if( !name.trim().length == 0 && name.trim().length <= 35 && nameTest.test(name) ){
    return true
  } 
  return false
}

function addressValidate(address) {
  let addressTest = /^[a-zA-Z0-9-\s]+$/i;
  if ( address.trim().length <= 50 && !address.trim().length == 0 && addressTest.test(address) ) {
    return true
  }
  return false
}

function passwordValidate(pass) {
  let passTest = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  return passTest.test(pass);
} 

function pass2Validate(pass, pass2) {
  if( pass2 == true && pass == true && pass2 === pass) {
    return true
  } 
  return false
} 

function messageValidate( message ) {
  let messageTest = /^[a-zA-Z0-9-\s]+$/i;
  if( !message.trim().length == 0 && message.trim().length <= 100 && messageTest.test( message ) ) {
    return true
  }
  return false
}

function get(element) {
  let get = document.getElementById(element)
  return get;
}

function valid(valBool, idElement, idError) {
  if(valBool) {
      get(idError).style.display = "none"
      get(idElement).style.borderColor = "yellowgreen";
      return true
  } else {
      get(idError).style.display = "flex"
      get(idElement).style.borderColor = "red"
      return false
  }

}

function focus(id, funcValid) {
  get(id).addEventListener("focusout", funcValid)  
}

function getFocus(ids, validacion) {
  let count = 0
  ids.forEach(element => {
      count += 1
      if(count == ids.length) {
          focus(element, validacion)
      }
          
  });
}

export { isEmail, nameValidate, addressValidate, passwordValidate, pass2Validate, messageValidate, get, valid, getFocus };