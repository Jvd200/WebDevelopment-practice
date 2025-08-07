

var randomNum1=Math.floor(Math.random()*6+1);
var randomImg="images/dice"+randomNum1+".png";
document.querySelectorAll("img")[1].setAttribute('src',randomImg);

var randomNum2=Math.floor(Math.random()*6+1);
var randomImge="images/dice"+randomNum2+".png";
document.querySelectorAll("img")[0].setAttribute('src',randomImge)