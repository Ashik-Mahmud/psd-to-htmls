// Sticky Menu 
window.addEventListener("scroll", function (e) {
    let header = document.querySelector("#header");
    if (this.scrollY > 80) header.classList.add("active");
    else header.classList.remove("active");
})

// Show Scroll Up  
window.addEventListener("scroll", function (e) {
    let scrollup = document.querySelector(".scrollup");
    if (this.scrollY > 500) scrollup.classList.add("active");
    else scrollup.classList.remove("active");
})

// Scroll To Top 
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// Show Menu 
document.querySelector(".humberger").addEventListener("click",function(e){
    document.querySelector(".primary-menu").classList.toggle("active");
})

var anchors = document.querySelectorAll(".primary-menu a");
anchors.forEach(item =>{
    item.addEventListener("click",function(e){
        e.target.parentElement.parentElement.parentElement.classList.remove("active");
    })
})



// Theme Change Button 
const setThemeBtn = document.querySelector(".theme-toggle");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

// Previously Selected Theme 
const selectedTheme = localStorage.getItem("theme");
const selectedIcon = localStorage.getItem("icon");


function enabledDarkTheme(){
    document.body.classList.add("dark-theme");
    setThemeBtn.querySelector("i").classList.add("bx-toggle-right");
    localStorage.setItem("dark-theme","enabled");

}

function disabledDarkTheme(){
    document.body.classList.remove("dark-theme");
    setThemeBtn.querySelector("i").classList.remove("bx-toggle-right");
    localStorage.setItem("dark-theme",null);
}

if(localStorage.getItem("dark-theme") === "enabled"){
    enabledDarkTheme();
}

setThemeBtn.addEventListener("click",() =>{
   let selectedTheme = localStorage.getItem("dark-theme");
   if(selectedTheme !== "enabled"){
       enabledDarkTheme();
   }else{
       disabledDarkTheme()
   }
})


// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// const getCurrentIcon = () => setThemeBtn.querySelector("i").classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';


// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   setThemeBtn.querySelector("i").classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
// }


// // Activate / deactivate the theme manually with the button
// setThemeBtn.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     setThemeBtn.querySelector("i").classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('theme', getCurrentTheme())
//     localStorage.setItem('icon', getCurrentIcon())
// })

