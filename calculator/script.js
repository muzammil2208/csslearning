var answer_field=document.getElementsByClassName("answer")[0];
var equation_field=document.getElementsByClassName("equation")[0];
var main_container=document.getElementsByClassName("main-container")[0];
var number_keys=document.getElementsByClassName("number-keys");
var input_container=document.getElementsByClassName("input-container")[0];
var key_container=document.getElementsByClassName("keys-container")[0];
var toggle_button=document.getElementsByClassName("toggle-button")[0];
var dark_mode=document.getElementById("night-mode");
var light_mode=document.getElementById("light-mode");
var number_buttons=document.getElementsByClassName("number-keys");
var operation_keys=document.getElementsByClassName("special-operation");
var operator_keys=document.getElementsByClassName("operator-keys");

var equation="";
var answer=0;
var prev=0;
function calculation(value)
{
    

    equation=equation+value;
     answer_field.innerHTML=equation;
    

    
   
    
    
}
function calculate()
{
    answer=eval(equation);
    equation_field.innerHTML=equation;
    answer_field.innerHTML=answer;
    prev=equation;
    equation=answer;   
     

}
function reset()
{
    answer_field.innerHTML=0;
    equation_field.innerHTML="";
    equation="";
    answer=0;
}

function history()
{
    equation_field.innerHTML="";
    equation=prev;
    answer_field.innerHTML=equation;
    
}
function nightmode()
{
    main_container.classList.add('night-mode');
    input_container.classList.add("night-mode");
    toggle_button.classList.add("night-mode2");
    dark_mode.classList.add("night-mode2");
    dark_mode.style.opacity="1";
    light_mode.style.opacity="0.3"
    key_container.classList.add("night-mode2");
    for(var a=0;a<number_keys.length;a++)
    {
        number_keys[a].classList.add("night-mode");
    }
    for(var a=0;a<operation_keys.length;a++)
    {
        operation_keys[a].classList.add("night-mode3");
    }
    for(var a=0;a<operator_keys.length;a++)
    {
        operator_keys[a].classList.add("night-mode3");
    }
    

   
}
function lightmode()
{
    main_container.classList.remove("night-mode");
    input_container.classList.remove("night-mode");
    toggle_button.classList.remove("night-mode2");
    dark_mode.classList.remove("night-mode2");
    dark_mode.style.opacity="0.3";
    light_mode.style.opacity="1"
    key_container.classList.remove("night-mode2");
    for(var a=0;a<number_keys.length;a++)
    {
        number_keys[a].classList.remove("night-mode");
    }
    for(var a=0;a<operation_keys.length;a++)
    {
        operation_keys[a].classList.remove("night-mode3");
    }
    for(var a=0;a<operator_keys.length;a++)
    {
        operator_keys[a].classList.remove("night-mode3");
    }
    

}

function signchange()
{
    if(equation>=0)
    {
        equation="-"+equation;
        answer_field.innerHTML=equation;

    }
    else
    {
        equation=Math.abs(equation);
        answer_field.innerHTML=equation;
    }
        
    
    
}