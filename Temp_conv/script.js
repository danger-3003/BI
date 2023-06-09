var celcius=document.getElementById("celcius");
var farenhite=document.getElementById("farenhite");
var kelvin=document.getElementById("kelvin");
var button=document.getElementById("btn");
button.addEventListener('click',()=>
{
    celcius.value = "";
    farenhite.value = "";
    kelvin.value= "";
}
)
celcius.addEventListener('input',()=>
{
    farenhite.value = (celcius.value*9/5) + 32;
    kelvin.value = celcius.value+273.15;
}
)