var first = document.getElementsByClassName("first")[0];
var second = document.getElementsByClassName("second")[0];

second.addEventListener("click",function(){
    first.style.border="none";
})
first.addEventListener("click",function(){
 first.setAttribute("style","border-bottom:8px solid #0099ff;")
})


//CODE FOR SLIDER 

var radio1 = document.getElementById("radio1")
var radio2 = document.getElementById("radio2")
var radio3 = document.getElementById("radio3")
var slideritem = document.getElementsByClassName("sliderItem");

radio2.addEventListener("click",function(){

    if(slideritem[0].classList.contains("opacity")){
        slideritem[0].classList.remove('opacity');
        slideritem[1].classList.add('opacity');
    }

})
radio3.addEventListener("click",function(){

    if(slideritem[1].classList.contains("opacity")){
        slideritem[1].classList.remove('opacity');
        slideritem[2].classList.add('opacity');
    }

})
radio1.addEventListener("click",function(){

    if(slideritem[2].classList.contains("opacity")){
        slideritem[2].classList.remove('opacity');
        slideritem[0].classList.add('opacity');
    }

})

// CODE FOR DROPDOWN BTN

var btn = document.getElementsByClassName("dropdownBtn")[0]
var show = document.getElementsByClassName("dropdown")[0]
btn.addEventListener("click",function(){
    show.classList.toggle("toggle");
})