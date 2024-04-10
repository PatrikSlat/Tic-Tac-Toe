// Global variables
const startBtn = document.getElementById("start-btn");

// Event listener
startBtn.addEventListener("click", () => {    
    const players = Player.grabPlayerNames();
    if (!players.playerOne || !players.playerTwo) {
        const errorAlert = document.getElementById("error-popup");
        errorAlert.innerHTML = "<br>---->PLEASE ENTER PLAYER NAMES TO CONTINUE !";
        errorAlert.style.color = "red";
    } else {
        // Initialize game
        Game.start();
    }
});

//Game Controler
const Game = (() => {

    const start = () => {
        Gameboard.createBoard();
        Gameboard.playingFieldActive();
        //console.log(playerOne, playerTwo)
    }

    return{
        start,
    }
})();

// Functions 
//Gameboard module
const Gameboard = (() => {
    // Array which contains all playable fields
    const gameboard = [];

    // Creates a 2D matrix which contains its corresponding coordinates (m,n) = (1,1);
    const createBoard = () => {
        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                const proba = 1;
                const div = document.createElement("div");
                div.classList.add(`row${i}`);
                div.id = `column${j}`;
                div.style.border = "1px solid black";
                gameboard.push(div);
                document.querySelector(".board").append(div);
            }
        }
    };
    
    //Adding clikc event listener to every div/"playing field" inside our board
    const playingFieldActive = () => {
        gameboard.forEach((e) => {
            e.addEventListener("click", () => {
                e.innerHTML = "X";
            })
        })
    };

    return {
        createBoard, playingFieldActive
    };
})();

//Player Module
const Player = (() => {
    let playerOne, playerTwo;

    const grabPlayerNames = () => {
        let playerOne = document.getElementById("player-1").value;
        let playerTwo = document.getElementById("player-2").value;

        return {playerOne, playerTwo};
    }

    const PlayerFactory = (name, marker) => {
        return {
            name, 
            marker
        }
    }

    return{
        grabPlayerNames, PlayerFactory
    }
})();


