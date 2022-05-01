
function isEmail(email) {
    let emailTest = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailTest.test(email);
  }
  
function nameValidate(name) {
  let nameTest = /^[a-zA-Z]+$/i;
  if( !name.trim().length == 0 && name.trim().length <= 35 && nameTest.test(name) ){
    return true
  }
}

function addressValidate(address) {
  let addressTest = /^[a-zA-Z0-9-]+$/i;
  if ( address.trim().length <= 50 && !address.trim().length == 0 && addressTest.test(address) ) {
    return true
  }
}

function passwordValidate(pass) {
  let passTest = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  return passTest.test(pass);
} 

function pass2Validate(pass, pass2) {
  if( pass2 === pass) {
    return true
  } 
} 

function messageValidate( message ) {
  let messageTest = /^[a-zA-Z0-9-]+$/i;
  if( !message.trim().length == 0 && message.trim().length <= 100 && messageTest.test( message ) ) {
    return true
  }
}

export { isEmail, nameValidate, addressValidate, passwordValidate, pass2Validate, messageValidate };