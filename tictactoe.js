let cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    console.log(cell);
    cell.addEventListener("click", () => {
        putZeroOrCross(cell);
        checkWinner();
    });
});

let u1 = "X";
let u2 = "O";
let count = 0;

function putZeroOrCross(cell) {
    if (count % 2 === 0) {
        if (cell.innerText === u1 || cell.innerText === u2) {
            alert("This cell is already occupied. Please choose another one.");
            return;
        }
        cell.innerText = u1;
        cell.style.color = "cyan";


    } else {
        if (cell.innerText === u1 || cell.innerText === u2) {
            alert("This cell is already occupied. Please choose another one.");
            return;
        }
        cell.innerText = u2;
        cell.style.color = "magenta";
    }
    count++;
    console.log("Value of count:", count-1, "Cell text:", cell.innerText);
}

function checkWinner() {
    let cells = document.querySelectorAll(".cell");
    let message = document.getElementById("message");
    let values = [];
    cells.forEach((cell) => {
        values.push(cell.innerText);
    });
    if(values[0] === values[1] && values[1] === values[2] && values[0] !== "") {
        message.innerText = `${values[0]} win!`;
        resetGame();
    } else if(values[3] === values[4] && values[4] === values[5] && values[3] !== "") {
        message.innerText = `${values[3]} win!`;
        resetGame();
    } else if(values[6] === values[7] && values[7] === values[8] && values[6] !== "") {
        message.innerText = `${values[6]} win!`;
        resetGame();
    } else if(values[0] === values[3] && values[3] === values[6] && values[0] !== "") {
        message.innerText = `${values[0]} win!`;
        resetGame();
    } else if(values[1] === values[4] && values[4] === values[7] && values[1] !== "") {
        message.innerText = `${values[1]} win!`;
        resetGame();
    } else if(values[2] === values[5] && values[5] === values[8] && values[2] !== "") {
        message.innerText = `${values[2]} win!`;
        resetGame();
    } else if(values[0] === values[4] && values[4] === values[8] && values[0] !== "") {
        message.innerText = `${values[0]} win!`;
        resetGame();
    } else if(values[2] === values[4] && values[4] === values[6] && values[2] !== "") {
        message.innerText = `${values[2]} win!`;
        resetGame();
    } else if(count === 9) {
        message.innerText = "It's a draw!";
        resetGame();
    }
}

function resetGame() {
    let cells = document.querySelectorAll(".cell"); 
    let message = document.getElementById("message");
    setInterval(() => {
        message.innerText = "";
    }, 3000);
    cells.forEach((cell) => {
        cell.innerText = "";
    });
    count = 0;
}
