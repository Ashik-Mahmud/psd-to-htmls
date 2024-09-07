$(document).ready(function(){
    $('.topbar-menu').on('click',function(){
       $('.topbar-menu ul').toggleClass('collapse-menu');
       $('.social-icon').toggleClass('collapse-icon');
    })


    $('.humberger-menu').on('click',function(){
        $('.primary-menu-content ul').toggleClass("collapse-sidebar");
    })
   $('.close-btn').on('click',function(){
        $('.primary-menu-content ul').removeClass("collapse-sidebar");
    })

})