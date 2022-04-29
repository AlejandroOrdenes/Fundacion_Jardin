$(document).ready(function(){
    $("#botonRegistrarse").click(function(e){

        e.preventDefault();

        let email = $("#inputEmail").val().trim();

        function isEmail(email) {
            var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return EmailRegex.test(email);
          }

        if($("#inputNombre").val().trim().length==0 ){
            $("#inputNombre").css("border", "1px solid #ff3838");
            $("#inputNombre").focus(function(){
                $("#inputNombre").css("border", "1px solid #ced4da");
            });
        } else {
            $("#inputNombre").css("border", "1px solid greenyellow");
        }

        if(isEmail(email)){
            $("#inputEmail").css("border", "1px solid greenyellow");
            $("#inputEmail").focus(function(){
                $("#inputEmail").css("border", "1px solid #ced4da");
            });
        } else {
            $("#inputEmail").css("border", "1px solid #ff3838");
        }

        if($("#inputPass").val().trim().length==0 ){
            $("#inputPass").css("border", "1px solid #ff3838");
            $("#inputPass").focus(function(){
                $("#inputPass").css("border", "1px solid #ced4da");
            });
        } else {
            $("#inputPass").css("border", "1px solid greenyellow");
        }

        if($("#inputRepPass").val().trim().length==0 ){
            $("#inputRepPass").css("border", "1px solid #ff3838");
            $("#inputRepPass").focus(function(){
                $("#inputRepPass").css("border", "1px solid #ced4da");
            });
        } else {
            $("#inputRepPass").css("border", "1px solid greenyellow");
        }

    });
});