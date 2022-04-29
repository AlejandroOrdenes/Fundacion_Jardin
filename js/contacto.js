$(document).ready(function(){
    $("#botonEnviar").click(function(e){

        e.preventDefault();

        if($("#inputEmail").val().trim().length==0 ){
            document.getElementById("inputEmail").setAttribute("placeholder", "Ingrese Email Valido");
            $("#inputEmail").css("border", "1px solid #ff3838");
        }
        if($("#inputText").val().trim().length==0){
            document.getElementById("inputText").setAttribute("placeholder", "Ingrese un Mensaje");
            $("#inputText").css("border", "1px solid #ff3838");
        }

        $("#inputEmail").focus(function(){
            document.getElementById("inputEmail").setAttribute("placeholder", "");
            $("#inputEmail").css("border", "1px solid #ced4da");
        });

        $("#inputText").focus(function(){
            $("#inputText").css("border", "1px solid #ced4da");
            document.getElementById("inputText").setAttribute("placeholder", "");
        });
    });
});