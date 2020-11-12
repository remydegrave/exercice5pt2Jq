$(document).ready(function(){
    
    $(".color").hover
    (function () {
        let colorButton = $(this).attr("id");
        $("#text").css("color", colorButton);},
    (function () {
        $("#text").css("color", "black");
    }));
});