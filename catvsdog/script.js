//without this as parameter in fuctions-in HTML//
// var animalImg = document.querySelector("#fav-animal");

//     console.log(animalImg);

// function pickCat(){
//     animalImg.src = "cat.jpeg"
// }
// function pickDog(){
//     animalImg.src = "dog.jpeg"
// }

//this in fuctions in HTML
var animalImg = document.querySelector("#fav-animal");

    console.log(animalImg);

function pickCat(element){
    // console.log(element);
    element.style.backgroundColor = "gold"
    animalImg.src = "cat.jpeg"
}
function pickDog(element){
    console.log(element.classList);
    element.classList.add("btn");
    animalImg.src = "dog.jpeg"
}

// function setActive(element) {
//     element.style.backgroundColor = "#222222";
//     element.style.color = "#ffffff";
// }
function setActive(element) {
    element.classList.add("dark-mode");
}

function setActive(element) {
    if(element.classList.contains("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}
