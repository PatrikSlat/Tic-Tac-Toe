// Global variables
const startBtn = document.getElementById("start-btn");
let players;

// Event listener
startBtn.addEventListener("click", () => {    
    players = Player.grabPlayerNames();
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
    const playerList = [];
    const start = () => {
        Gameboard.createBoard();
        playerList.push(playerFactory(players.playerOne, "X"));
        playerList.push(playerFactory(players.playerTwo, "O"));
        Gameboard.playingFieldActive(playerList);
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
    const winnerSpan = document.querySelector("#winner-span");

    // Creates a 2D matrix which contains its corresponding coordinates (m,n) = (1,1);
    const createBoard = () => {
        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                const div = document.createElement("div");
                div.classList.add("row")
                div.classList.add(i);
                div.id = `column${j}`;
                div.style.border = "1px solid black";
                gameboard.push(div);
                document.querySelector(".board").append(div);
            }
        }
    };
    
    //Adding clikc event listener to every div/"playing field" inside our board
    const playingFieldActive = (playerArray) => {
        let currentPlayer = 0;
        gameboard.forEach((e) => {
            e.addEventListener("click", () => {
                //checkForWin(); ?
                if(currentPlayer === 0){
                    e.innerHTML = playerArray[currentPlayer].marker;
                    currentPlayer += 1;
                    checkForWin();
                }else{
                    e.innerHTML = playerArray[currentPlayer].marker;
                    currentPlayer -= 1;
                    checkForWin();
                }
            })
        })
    };

    function checkForWin(){
        const playingFieldArray = document.querySelectorAll(".row");
        if(playingFieldArray[0].innerHTML === "X" && playingFieldArray[1].innerHTML === "X" && playingFieldArray[2].innerHTML === "X"){
            winnerSpan.innerHTML = "The WINNER is: Player 1"
        }else if(playingFieldArray[3].innerHTML === "X" && playingFieldArray[4].innerHTML === "X" && playingFieldArray[5].innerHTML === "X"){
            winnerSpan.innerHTML = "The WINNER is: Player 1"
        }else if(playingFieldArray[6].innerHTML === "X" && playingFieldArray[7].innerHTML === "X" && playingFieldArray[8].innerHTML === "X"){
            winnerSpan.innerHTML = "The WINNER is: Player 1"
        }else if(playingFieldArray[2].innerHTML === "X" && playingFieldArray[4].innerHTML === "X" && playingFieldArray[6].innerHTML === "X"){
            winnerSpan.innerHTML = "The WINNER is: Player 1"
        }else if(playingFieldArray[0].innerHTML === "O" && playingFieldArray[1].innerHTML === "O" && playingFieldArray[2].innerHTML === "O"){
            winnerSpan.innerHTML = "The WINNER is: Player 2"
        }else if(playingFieldArray[3].innerHTML === "O" && playingFieldArray[4].innerHTML === "O" && playingFieldArray[5].innerHTML === "O"){
            winnerSpan.innerHTML = "The WINNER is: Player 2"
        }else if(playingFieldArray[6].innerHTML === "O" && playingFieldArray[7].innerHTML === "O" && playingFieldArray[8].innerHTML === "O"){
            winnerSpan.innerHTML = "The WINNER is: Player 2"
        }else if(playingFieldArray[2].innerHTML === "O" && playingFieldArray[4].innerHTML === "O" && playingFieldArray[6].innerHTML === "O"){
            cwinnerSpan.innerHTML = "The WINNER is: Player 2"
        }else if(playingFieldArray[0].innerHTML === "X" && playingFieldArray[4].innerHTML === "X" && playingFieldArray[8].innerHTML === "X"){
            winnerSpan.innerHTML = "The WINNER is: Player 1"
        }else if(playingFieldArray[2].innerHTML === "O" && playingFieldArray[4].innerHTML === "O" && playingFieldArray[6].innerHTML === "O"){
            winnerSpan.innerHTML = "The WINNER is: Player 2"
        }
    }

    return {
        createBoard, playingFieldActive
    };
})();

//Player Module
const Player = (() => {

    const grabPlayerNames = () => {
        let playerOne = document.getElementById("player-1").value;
        let playerTwo = document.getElementById("player-2").value;

        return {playerOne, playerTwo};
    }

    return{
        grabPlayerNames
    }
})();

const playerFactory = (name, marker) => {
    return {
        name, 
        marker
    }
}
