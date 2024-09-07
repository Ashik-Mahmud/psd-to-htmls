$(document).ready(function(){
    var btn = $(".btn");
    var btn1 = $(".btn1");
    var btn2 = $(".btn2");
    var tab1 = $(".tab1")
    var tab2 = $(".tab2")
    var tab3 = $(".tab3")
    var btnSecond =$(".btnSecond")
    var btnThird = $(".btnThird");
    var btn12 =$(".btn12")

    btn1.click(function(){
        if(tab1.hasClass("opacity")){
            btn.removeClass("active")
            btn1.addClass("active")
            tab1.removeClass("opacity");
            tab2.addClass("opacity");
        }
    })
    btnSecond.click(function(){
        if(tab2.hasClass("opacity")){
            btnSecond.addClass("active")
            btn1.removeClass("active")
            tab2.removeClass("opacity");
            tab1.addClass("opacity");
        }
    })
    btn2.click(function(){
        if(tab2.hasClass("opacity")){
            btn1.removeClass("active")
            btn2.addClass("active")
            btn2.addClass("active")
            tab2.removeClass("opacity");
            tab3.addClass("opacity");
        }
    })
    btn12.click(function(){
        if(tab3.hasClass("opacity")){
            tab3.removeClass("opacity");
            tab2.addClass("opacity");
            btn2.removeClass("active")
            btn12.addClass("active")
        }
    })
    btn.click(function(){
        if(tab3.hasClass("opacity")){
            btn2.removeClass("active")
            btn.addClass("active")
            tab3.removeClass("opacity");
            tab1.addClass("opacity");
        }
    })
    btnThird.click(function(){
        if(tab1.hasClass("opacity")){
            tab1.removeClass("opacity");
            tab3.addClass("opacity");
            btnSecond.removeClass("active")
            btnThird.addClass("active")
        }
    })
})