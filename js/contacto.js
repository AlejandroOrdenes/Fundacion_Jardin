$(document).ready(function(){
    $("#botonEnviar").click(function(e){

        e.preventDefault();

        if($("#inputEmail").val().trim().length==0 ){
            $("inputEmail").attr("placeholder", "Ingrese Email Valido!!!")
            $("#inputEmail").css("border", "3px solid #ff3838");
        }
        if($("#inputText").val().trim().length==0){
            $("#inputText").css("border", "3px solid #ff3838");
        }

        $("#inputEmail").focus(function(){
            $("#inputEmail").css("border", "1px solid #ced4da");
        });

        $("#inputText").focus(function(){
            $("#inputText").css("border", "1px solid #ced4da");
        });
    });
});