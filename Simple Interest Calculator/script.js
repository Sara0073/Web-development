function compute(){
    var p = document.getElementById("principal").value;
    
    var r=document.getElementById("rate").value;
    var t=document.getElementById("years").value;
    var i=(p*r*t)/100;
    var amount=parseInt(p)+parseFloat(i);
    var finalResult=document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(t);
    if(isNaN(p)||p<=0){
        alert("Please enter a positive Number");
        document.getElementById("principal").focus();
    }
    else{
        
        finalResult.innerHTML=`<p>If you deposit ${p},<br> at an interest rate of ${r}%. <br> You will recieve an amount of ${amount},<br> in the year ${year}<br></p>`;
    }
}
function updateRate(){
    let rateVal=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal;
}
function reset(){
    document.getElementById("principal").value=" ";
    
    document.getElementById("rate").value=" ";
    document.getElementById("years").value=" ";

}
        
