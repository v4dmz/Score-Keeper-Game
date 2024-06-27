var counter1 = 0;
var counter2 = 0;

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var resetBtn = document.getElementById("reset");
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var winner = document.getElementById("winner-container");



function incriment1() {
    counter1++;
    updateDisplay1();
    checkWinner();
}

function incriment2() {
    counter2++;
    updateDisplay2();
    checkWinner();
}

function updateDisplay1() {
    score1.innerText = counter1;
}

function updateDisplay2() {
    score2.innerText = counter2;
}



function checkWinner() {
    if (counter1 === 10) {
        var h2 = document.createElement("div");
        h2.textContent = "Player 1 won";
        winner.appendChild(h2);
        btn1.setAttribute("disabled" , "true")
        btn2.setAttribute("disabled" , "true")
    } else if (counter2 === 10) {
        var h2 = document.createElement("div");
        h2.textContent = "Player 2 won";
        winner.appendChild(h2);
        btn1.setAttribute("disabled" , "true")
        btn2.setAttribute("disabled" , "true")

    }

}
function reset() {
    counter1 = 0; 
    counter2 = 0; 
    updateDisplay1(); 
    updateDisplay2();
    winner.innerHTML = ""; 
    btn1.removeAttribute("disabled" , "true")
        btn2.removeAttribute("disabled" , "true")
}