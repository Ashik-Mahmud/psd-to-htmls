$(document).ready(function(){

    // Flexslider
$('.flexslider').flexslider({
animation: "fade",
directionNav: false,
});
// Fancybox
$('.work-box').fancybox();


// STICKY MENU 
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>20){
       $("#fixed").addClass('fixed-navbar')
    }else{
       $("#fixed").removeClass('fixed-navbar')
    }
})







})