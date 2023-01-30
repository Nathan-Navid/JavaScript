function clicked(element) {
    // alert ('You Clicked me!')    
    console.log(element.innerText);
    element.innerText = "I am changed"; 
}
function onTooff(element){
    console.log(element.innerText);
    element.innerText = "OFF";
}

function hoveron(element) {
   if(element.innerText == "RED"){
    element.innerText = "Blue"
   }else{
    element.innerText = "RED"
   }
    
}
// function hoveroff(element) {
//     element.innerText = "Blue"
    
// }

function increment(element){
    var el = document.querySelector(`#${element}`)
    el.innerText++
}
function decrement(element){
    var el = document.querySelector(`#${element}`)
    el.innerText--
}