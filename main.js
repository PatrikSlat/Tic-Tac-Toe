// Global variables
let playerOne;
let playerTwo;
const startBtn = document.getElementById("start-btn");

// Event listener
startBtn.addEventListener("click", () => {
    playerOne = document.getElementById("player-1").value;
    playerTwo = document.getElementById("player-2").value;
    
    if (!playerOne || !playerTwo) {
        const errorAlert = document.getElementById("error-popup");
        errorAlert.innerHTML = "<br>---->PLEASE ENTER PLAYER NAMES TO CONTINUE !";
        errorAlert.style.color = "red";
    } else {
        // Initialize game
        Gameboard.createBoard();
    }
});

// Functions 
const Gameboard = (() => {
    // Array which contains all playable fields
    const gameboard = [];

    // Creates a 2D matrix which contains its corresponding coordinates (m,n)
    const createBoard = () => {
        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                const div = document.createElement("div");
                div.classList.add(`row${i}`);
                div.id = `column${j}`;
                div.style.border = "1px solid black";
                gameboard.push(div);
                document.querySelector(".board").append(div);
            }
        }
    };

    return {
        createBoard
    };
})();
