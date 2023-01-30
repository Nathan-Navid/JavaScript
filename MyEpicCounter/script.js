var count =1;
var countelement = document.querySelector("#count")

function add1(){
    count++;
    countelement.innerText = "the count is " + count;
    console.log(count);
}
function subtract1(){
    count--;
    countelement.innerText = "the count is " + count;
    console.log(count);
}