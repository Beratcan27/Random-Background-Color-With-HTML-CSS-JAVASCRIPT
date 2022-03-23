var body = document.querySelector("body");
var paragraph=document.querySelector("p");
var colorVariables=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var button =document.getElementById("btn");
var backgroundColorName=[];



button.addEventListener("click",function(){
  var total="#";
  var temp;
  for(var i = 0 ; i<6 ; i++){
    var randomNumber = colorVariables[Math.floor(Math.random()*colorVariables.length)];
    backgroundColorName.push(randomNumber);
     temp = backgroundColorName[i];
    total = total + temp;
  }
    body.style.backgroundColor=total;
    paragraph.innerHTML="Color name : " + total;
    paragraph.style.color=total;

    backgroundColorName=[];
})

