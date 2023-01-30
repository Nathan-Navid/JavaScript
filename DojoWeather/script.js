function selected(){
    alert("Loading weather report");
}

var el = document.getElementById("cookie")
function hide(){
    el.remove();
}


function c2f(temp){
    return Math.round (9/5 * temp + 32)
}
function f2c(temp){
    return Math.round (5/9 * (temp - 32))
}

function tempType(element){
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        // console.log(tempSpan.innerText, "here")
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}