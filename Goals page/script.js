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

//date code
var timebadge=document.getElementsByTagName("span")[0];
let today = new Date()
var date1 = new Date("07/31/2021");
const date2 = new Date();
console.log(date2);
console.log(date1);
const diffTime=date2.getTime()-date1.getTime();
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");
timebadge.innerHTML=diffDays+" days" ;




//webdevelopment part code
var webdev_checkboxes=document.getElementsByClassName("webdev");
var webdevcount=0;
console.log(webdev_checkboxes.length);
var web_progress=document.getElementById("webdev-progress");
web_progress.style.width=localStorage.getItem("webwidth")+"%";



for(var j=0;j<webdev_checkboxes.length;j++)
{
    if(localStorage.getItem("cb"+j)=="checked")
    {
        webdev_checkboxes[j].checked=true;
    }
    else
    {
        webdev_checkboxes[j].checked=false;
    }
}

function countincre()
{
    webdevcount=0;
    for(var i=0;i<webdev_checkboxes.length;i++)
    {
        if(webdev_checkboxes[i].checked==true)
        {
            webdevcount++;
            var checked="cb"+i;
            localStorage.setItem(checked,"checked");
        }
        else
        {
            var unchecked="cb"+i;
            localStorage.setItem(unchecked,"unchecked");
        }

    }
    var progress_widht=webdevcount/webdev_checkboxes.length*100;
    localStorage.setItem("webwidth",progress_widht);
    web_progress.style.width=localStorage.getItem("webwidth")+"%";
    

}


//quran memorization part
var qucheckboxes=document.getElementsByClassName("qu-check");
var qucheckcount=0;
var quranprogress=document.getElementById("quran-progress");
quranprogress.style.width=localStorage.getItem("quran-progress-width")+"%";

//code for storing the states of the checkboxes


function quincre()
{

    qucheckcount=0;
    for(var k=0;k<qucheckboxes.length;k++)
    {
        
        if(qucheckboxes[k].checked==true)
        {
            var checked="qc"+[k];
            qucheckcount++;
            localStorage.setItem(checked,"checked");
        }
        else
        {
            var unchecked="qc"+[k];
            localStorage.setItem(unchecked,"unchecked");
        }
    }
    var queprogresswidht=qucheckcount/qucheckboxes.length*100;
    console.log(queprogresswidht);
    localStorage.setItem("quran-progress-width",queprogresswidht);
    quranprogress.style.width=localStorage.getItem("quran-progress-width")+"%";

}

for(var m=0;m<qucheckboxes.length;m++)
{
    if(localStorage.getItem("qc"+m)=="checked")
    {
        qucheckboxes[m].checked=true;
    }
    else
    {
        qucheckboxes[m].checked=false;
    }
}


