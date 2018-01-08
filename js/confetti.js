// JavaScript Document

TweenMax.set("img",{xPercent:"-50%",yPercent:"-50%"})

var svgNS = "http://www.w3.org/2000/svg";  

var total = 70;
var w = $("#confetti").width();
var h = $("#confetti").height();
 
for (i=0; i<total; i++){ 
var myCircle = document.createElementNS(svgNS,"circle"); 
myCircle.setAttributeNS(null,"class","dot"); 
myCircle.setAttributeNS(null,"r",5);
document.getElementById("confetti").appendChild(myCircle);  
TweenMax.set($(".dot")[i],{x:Random(w),y:0 ,scale:Random(0.5)+0.5,fill:"hsl(" + random(0,150) + ",50%,50%)"});
 animm($(".dot")[i]);
 }
 
 function animm(elm){   
 TweenMax.to(elm,Random(5)+3,{y:h,ease:Linear.easeNone,repeat:-1, delay:-5});
 TweenMax.to(elm,Random(5)+1,{x:'+=70', repeat:-1,yoyo:true,ease:Sine.easeInOut})
 TweenMax.to(elm,Random(1)+0.5,{fill:"rgba(0,0,0,0)",repeat:-1,yoyo:true,ease:Sine.easeInOut})
 };

function Random (max) {
return Math.random()*max;
}

function random(min, max) {
return min + Math.floor( Math.random() * (max - min));
}