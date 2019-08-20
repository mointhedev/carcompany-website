$(document).ready(function(){
    $(".btn").click(function(){
        $("nav ul").slideToggle(300);
    })
})

$("#navbar a").click(function(e) {
    e.preventDefault();             //disable the "jumping"

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;          //.offset() is a jQuery function
    $("html, body").animate({ scrollTop: targetPosition - 68 }, "slow");
});