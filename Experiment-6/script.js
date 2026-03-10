$(document).ready(function(){

$(".toggle").click(function(){

$(this).next(".details").slideToggle();

$(this).parent().css("background","lightblue");

let title=$(this).siblings("h3").text();

alert(title);

});

});