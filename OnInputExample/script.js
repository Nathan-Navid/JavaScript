var nameSpam = document.querySelector("#name")
var ordertype = "pizza"



function setname(element){
    console.log(element.value);
    nameSpam.innerText = element.value;
}

function pickFood(element){
    console.log("The Food is " + element.value)
    ordertype = element.valueå
}
function order(){
    alert("order a " + ordertype)
}

function chooseLunch(element) {
    alert("You picked " + element.value);
}

var nameTag = document.querySelector("#name-tag");
function setName1(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}
console.log("Navid is the best" + '${2*2}')
