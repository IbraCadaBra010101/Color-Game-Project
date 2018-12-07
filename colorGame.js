//array of colors in string.
let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let h1 = document.querySelector("h1");
let picked = pickColor();
let colorDisplay = document.getElementById("colorDisp");
let messageDisplay = document.querySelector("#message");
let resetButton = document.getElementById("reset-btn");


resetButton.addEventListener("click", function f() {
    // generate new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    picked = pickColor();

    //change colorDisplay to match picked color.
    colorDisplay.textContent = picked;
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        // add init color to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});
colorDisplay.textContent = picked;

for (let i = 0; i < squares.length; i++) {
    // add init color to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //select color of clicked square

        let clickedColor = this.style.backgroundColor;
        console.log(clickedColor, picked);
        // compare color to pickedColor
        if (clickedColor === picked) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again";
        } else {
            resetButton.textContent = "New Game";
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
        //compare to picked color
    });

    function changeColors(color) {
        //loop squares
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = color;

        }
        // change and match given color
    }
}

function generateRandomColors(num) {
    //make an array
    let arr = [];
    // add num to random colors to arr
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor() {
    let randomize = Math.floor(Math.random() * colors.length);
    return colors[randomize];
}