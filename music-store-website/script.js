var togglebtn=document.getElementsByClassName("toggle-button")[0];
var navbar=document.getElementsByClassName("navbar-expand")[0];
togglebtn.addEventListener('click',()=>{
    navbar.classList.toggle("navbar-expand");
})