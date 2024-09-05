let boxes= document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameButton = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnX =true;

const winPattern= [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if(turnX){
            box.innerText ="X";
            turnX=false;
        }
        else{
            box.innerText = "O";
            turnX=true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

    if( pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 == pos2 && pos2 ==pos3 ){
            console.log("Winner = " , pos1);
            showWinner(pos1);
        }
    }
}
}
 const showWinner = (winner) => {
     msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
 }
  const disableBoxes = () => {
    for (box of boxes){
        box.disabled = true ;
    }
  } 
const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
}

  const resetGame = () => {
        enableBoxes();
      let turnX = true;
        msgContainer.classList.add("hide");

  }

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);