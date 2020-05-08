const body = document.getElementById("body");
const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const cssText = document.getElementById("cssText")
const randomButton = document.getElementById("btn");

var direction = "to right"

function updateGradient(){
    body.style.background = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
    cssText.textContent = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
}

var listy = ["to right", "to left"]

function randomDirection(){
    return `${Math.floor(Math.random() * 360)}deg`

}

function randomHexColor(){
    // return a randomly generated hex color
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
       hexColor += Math.floor(Math.random() * 16).toString(16)
    }
    return hexColor
}

function setRandomEverything(){
    color1.value = randomHexColor();
    color2.value = randomHexColor();
    direction = randomDirection();
    updateGradient();
}



color1.value = randomHexColor();
color2.value = randomHexColor();

color1.addEventListener("input", (updateGradient))
color2.addEventListener("input", (updateGradient))
randomButton.addEventListener("click", (setRandomEverything))


updateGradient()