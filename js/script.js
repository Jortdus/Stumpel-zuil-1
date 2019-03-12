jQuery = $;

$( document ).ready(function() {
    console.log( "ready!" );
    $("p").fadeIn( 2000 );
});

$(".navigatie-zoek").click(function(){
    $(".navigatie-zoeken").show();
    $(".navigatie-zoek").hide();
    $(".navigatie-close").show();
});

$(".navigatie-close").click(function(){
    $(".navigatie-close").hide();
    $(".navigatie-zoek").show();
    $(".navigatie-zoeken").hide();
});