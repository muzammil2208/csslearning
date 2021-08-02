//code for web development section
var projects_input=document.getElementById("projects-cmp-input");

projects_input.addEventListener('change',()=>{
    localStorage.setItem("projects-cmp",projects_input.value);
})
projects_input.value=localStorage.getItem("projects-cmp");




//code for addiction leaving section
var addiction_btn=document.getElementById("addiction");
var addiction_badge=document.getElementById("addiction-count");
var addiction_days=localStorage.getItem("addiction-cnt");
var addiction_bar=document.getElementById("addiction-progress");
var reset_btn=document.getElementById("reset");
addiction_badge.innerHTML=addiction_days+"/30 days"
addiction_bar.style.width=localStorage.getItem("addiction-cnt")/30*100+"%";
addiction_btn.addEventListener('click',()=>{
    if(addiction_days>=30)
    {
        alert("wohoo you have acheived a great milestone")
    }
    else
    {
        ++addiction_days;
        localStorage.setItem("addiction-cnt",addiction_days);
        addiction_badge.innerHTML=addiction_days+"/30 days";
        var addiction_width=addiction_days/30*100;
        addiction_bar.style.width=addiction_width+"%";

    }
  
})
reset_btn.addEventListener('click',()=>{
    localStorage.setItem("addiction-cnt",0);
    addiction_days=0;
    addiction_bar.style.width="0%";
    addiction_badge.innerHTML="0/30 days"
})






