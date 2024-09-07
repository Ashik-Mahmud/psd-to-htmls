    
function ScrollTop(){
    window.scrollTo(0,0)
}
$(document).ready(function(){


$(window).scroll(function(){
    var b = $(window).scrollTop();
    var a = $(".scrollTop");
    if(b>300){
        a.css({"opacity":"1"})
    }else{
        a.css({"opacity":"0"})
    }
})

$(document).mousemove(function(event){
    var x = event.pageX;
    var y = event.pageY;
    $("#box").offset({top:y,left:x})
})





    var fas1 = $("#box .plane");
    var fas2 = $("#box .paper");
    var fas3 = $("#box .mike");
    var fas4 = $("#box .hand");
    var fas5 = $("#box .space");
    var Myinterval = setInterval(frame,10000)
    var Myinterval1 = setInterval(frame1,20000)
    var Myinterval2 = setInterval(frame2,30000)
    var Myinterval3 = setInterval(frame3,40000)
    var Myinterval4 = setInterval(frame4,50000)
 
 
    function frame(){
    if(fas5.hasClass("show")){
        fas5.removeClass("show");
        fas1.addClass("show");
     }
 }
 function frame1(){
    if(fas1.hasClass("show")){
        fas1.removeClass("show");
        fas2.addClass("show");
     }
 }
 function frame2(){
    if(fas2.hasClass("show")){
        fas2.removeClass("show");
        fas3.addClass("show");
     }
 }
 function frame3(){
    if(fas3.hasClass("show")){
        fas3.removeClass("show");
        fas4.addClass("show");
     }
 }
 function frame4(){
    if(fas4.hasClass("show")){
        fas4.removeClass("show");
        fas5.addClass("show");
     }
 }

})

function changeSelect(){
    var a = document.getElementById("select").value;
    if(a==1){
        location.href="index.html"
    }
    if(a==3){
        location.href="gallery.html"
    }
}