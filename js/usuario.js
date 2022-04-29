$(document).ready(function(){
    $("#botonRegistrarse").click(function(e){

        e.preventDefault();

        if($("#inputNombre").val().trim().length==0 ){
            $("#inputNombre").css("border", "1px solid #ff3838");
        }

        if($("#inputEmail").val().trim().length==0 ){
            $("#inputEmail").css("border", "1px solid #ff3838");
        }

        if($("#inputPass").val().trim().length==0 ){
            $("#inputPass").css("border", "1px solid #ff3838");
        }

        if($("#inputRepPass").val().trim().length==0 ){
            $("#inputRepPass").css("border", "1px solid #ff3838");
        }

        $("#inputNombre").focus(function(){
            $("#inputNombre").css("border", "1px solid #ced4da");
        });

        $("#inputEmail").focus(function(){
            $("#inputEmail").css("border", "1px solid #ced4da");
        });

        $("#inputPass").focus(function(){
            $("#inputPass").css("border", "1px solid #ced4da");
        });

        $("#inputRepPass").focus(function(){
            $("#inputRepPass").css("border", "1px solid #ced4da");
        });

    });
});