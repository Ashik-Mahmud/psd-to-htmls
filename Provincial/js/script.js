var btn1 = document.getElementsByClassName("btn1")[0];
var btn2 = document.getElementsByClassName("btn2")[0];
var btn3 = document.getElementsByClassName("btn3")[0];
var btn4 = document.getElementsByClassName("btn4")[0];
var slider = document.getElementsByClassName("sliderItem");

btn2.addEventListener("click",function(){
 if(slider[0].classList.contains("opacity")){
   slider[0].classList.remove("opacity");
   slider[1].classList.add("opacity");
 }

})

btn3.addEventListener("click",function(){
 if(slider[1].classList.contains("opacity")){
   slider[1].classList.remove("opacity");
   slider[2].classList.add("opacity");
 }

})
btn4.addEventListener("click",function(){
 if(slider[2].classList.contains("opacity")){
   slider[2].classList.remove("opacity");
   slider[3].classList.add("opacity");
 }


})
btn1.addEventListener("click",function(){
 if(slider[3].classList.contains("opacity")){
   slider[3].classList.remove("opacity");
   slider[0].classList.add("opacity");
 }

})