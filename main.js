// Global variables
const startBtn = document.getElementById("start-btn");


// Event listeners
startBtn.addEventListener("click", () => {
    const playerOne = document.getElementById("player-1").value;
    const playerTwo = document.getElementById("player-2").value;

    if(!playerOne || !playerTwo){
        const errorAlert = document.getElementById("error-popup");
        errorAlert.innerHTML = "PLEASE ENTER PLAYER NAMES TO CONTINUE";
    }else(){
        createLayout();
        //game();
    }
})

// Functions 
