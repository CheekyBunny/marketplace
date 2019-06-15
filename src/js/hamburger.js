// Look for .hamburger 
var hamburger = document.querySelector(".hamburger"); 
var menu = document.querySelector(".header-menu");
// On click 
hamburger.addEventListener("click", function() { 
// Toggle class "is-active" 
hamburger.classList.toggle("is-active");
menu.classList.toggle("sm-invisible"); 
// Do something else, like open/close menu 
}); 