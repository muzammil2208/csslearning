var incre_but=document.getElementsByTagName("button")[0];
var progressbar=document.getElementsByClassName("progress-bar-success")[0];
var increment=0;
incre_but.addEventListener('click',()=>{
    increment=increment+10;
    console.log(increment);
    if(increment>100)
    {
        console.log("you have completed the given task");
    }
    else
    {
        progressbar.style.width=increment+"%";

    }
   
})