var toggle=document.getElementsByClassName("toggle-button")[0];
var toggle_container=document.getElementsByClassName("toggle-button-container")[0];
var body=document.body

toggle.addEventListener("click",function(){toggle_func("hello")});

function toggle_func(element){
    toggle.classList.toggle("to-left");
    toggle_container.classList.toggle("dark-mode")
    body.classList.toggle("dark-mode-body");
    console.log(element);
}
