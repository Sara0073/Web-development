function temperature(){
    var cels=document.getElementById("celsius").value;
    let result=document.getElementById("fahrenheit");
    var f=((cels)*(9/5))+32;
    result.value=f;
}
function weight(){
    var kg=document.getElementById("kilo").value;
    let result=document.getElementById("pounds");
    var p=kg*2.2;
    result.value=p;
}
function distance(){
    var kmeter=document.getElementById("km").value;
    let result=document.getElementById("miles");
    var m=kmeter*0.62137;
    result.value=m;
}
