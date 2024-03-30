var n=document.querySelectorAll(".drum").length;
for(let i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    
    var key=this.innerHTML;
    var p="sounds/tom-"+i+".mp3";
    var audio=new Audio(p);
    audio.play();
   btnanimation(key);
});}

document.addEventListener("keydown",function(event){
    sound(event.key);
btnanimation(event.key);
});
    
    function sound(key){
switch(key)
{
    case "w":{
        var audio=new Audio("sounds/tom-0.mp3");
        audio.play();
        break;
}
case "a":{
    var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
break;
}
case "s":{
    var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
    break;
}
case "d":{
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
}
case "j":{
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
}
case "k":{
    var audio=new Audio("sounds/tom-5.mp3");
    audio.play();
    break;
}
case "l":{
    var audio=new Audio("sounds/tom-6.mp3");
    audio.play();
    break;
}
default:
    break;
}
}
function btnanimation(currentKey){

 var activateKey= document.querySelector("."+ currentKey);
 activateKey.classList.add("pressed");
 setTimeout(function(){
    activateKey.classList.remove("pressed");},100);
}