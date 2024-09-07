$(document).ready(function(){
    var showNav = $(".hide");
    var hideNav = $(".NewHide");
    var showLogo = $(".imgScroll");
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>200){
           
            showNav.css({"opacity":"1"})
            showLogo.css({"opacity":"1"})

        }
        else{
            showNav.css({"opacity":"0"})
            showLogo.css({"opacity":"0"})

        }
    })

})
//CODE FOR SCROLL UP

function scrollUp(){
    window.scrollTo(0,0);
}

//CODE FOR FIRST PROGRESSBAR ANIMATED
    
var a = $(".animated-1").text();
var b = setInterval(ani,20)

function ani(){
    $(".animated-1").css({"width":++a+"%"})
    if(a>=75){
        clearInterval(b);
    }
}
//CODE FOR SECOND PROGRESSBAR ANIMATED
    
var a1 = $(".animated-2").text();
var b1 = setInterval(ani1,20)

function ani1(){
    $(".animated-2").css({"width":++a1+"%"})
    if(a1>=90){
        clearInterval(b1);
    }
}
//CODE FOR THIRD PROGRESSBAR ANIMATED
    
var a3 = $(".animated-3").text();
var b3 = setInterval(ani3,20)

function ani3(){
    $(".animated-3").css({"width":++a3+"%"})
    if(a3>=65){
        clearInterval(b3);
    }
}


// INCREE MENT FIRST ITEM

var increement1 = $(".counter-1").text();
var myInterval1 = setInterval(function(){
    $(".counter-1").html(++increement1)
    if(increement1==548){
        clearInterval(myInterval1)
    }
},5)
// INCREE MENT SECOND ITEM

var increement2 = $(".counter-2").text();
var myInterval2 = setInterval(function(){
    $(".counter-2").html(++increement2)
    if(increement2==1448){
        clearInterval(myInterval2)
    }
},1)
// INCREE MENT THIRD ITEM

var increement3 = $(".counter-3").text();
var myInterval3 = setInterval(function(){
    $(".counter-3").html(++increement3)
    if(increement3==612){
        clearInterval(myInterval3)
    }
},5)
// INCREE MENT FOURTH ITEM

var increement4 = $(".counter-4").text();
var myInterval4 = setInterval(function(){
    $(".counter-4").html(++increement4)
    if(increement4==715){
        clearInterval(myInterval4)
    }
},5)

var clickMe = $(".clickMe");
var hideWork = $(".playback");
clickMe.click(function(){
   hideWork.toggleClass("include");
})

$(".carousel").carousel({
    interval: 10000,
})

$("[data-toggle='tooltip']").tooltip();


wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
     
    }
  );
  wow.init();
 