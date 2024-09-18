var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
var diceimage="dice"+randomNumber1+".png";
var image1 ="images/"+diceimage;
var image_1=document.querySelectorAll("img")[0];
image_1.setAttribute("src",image1);


var randomNumber2=Math.floor(Math.random()*6)+1;
var diceimage1 ="dice"+randomNumber2+".png";
var image2 ="images/"+diceimage1;
var images_2 =document.querySelectorAll("img")[1];
images_2.setAttribute("src",image2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="player1 Wins";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="player2 wins";
}else{
  document.querySelector("h1").innerHTML="Draw";
}
