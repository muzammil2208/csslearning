const toggle_button=document.querySelector(".toggle-button");
const toggle_line1=document.querySelector("#line-1");
const toggle_line2=document.querySelector("#line-2");
const toggle_line3=document.querySelector("#line-3");


toggle_button.addEventListener('click',moreph);




//functions
function moreph()
{
    toggle_button.classList.toggle("toggle-button-expanded");
    toggle_line1.classList.toggle("toggle-line1");
    toggle_line2.classList.toggle("toggle-line2");
    toggle_line3.classList.toggle("toggle-line3");

}