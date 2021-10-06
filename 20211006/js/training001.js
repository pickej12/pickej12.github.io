$(function(){

$(".eunji").on("click",function(){
    $("h1").hide();
});

$("#potato").on("click",function(){
    $("h1").show();
});

$(".나는버튼").on("click",function(){
    $("figure").toggleClass("on")
});




});