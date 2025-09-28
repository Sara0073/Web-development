function addRecommendation(){
    var message=document.getElementById("messageInput");
    if(message.value !=null && message.value.trim() !=""){
        console.log("New Recommendation added");
        var newrecommend=document.createElement("div");
        newrecommend.setAttribute("class","recommend");
        newrecommend.innerHTML="<span>"+message.value+"</span>";
        document.getElementById("recommendations").appendChild(newrecommend);
        message.value="";
        showPopup(true);
    }
    else{
        alert("Please enter a value before submitting");
        showPopup(false);
    }

}


function showPopup(bool) {
  if (bool) {
    document.getElementById("popup").style.visibility = "visible";
  } else {
    document.getElementById("popup").style.visibility = "hidden";
  }
}
