let boxes = document.querySelectorAll(".box"); 
let reset = document.querySelector("#reset");
let msgCtnr = document.querySelector(".msg");
let msg = document.querySelector("#message");
let turnO = true;
let count = 0; //To Track Draw
const winPattern = [[0,1,3],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
const X_COLOR = "#FF0000"; // Color for X
const O_COLOR = "#1e90ff"; // Color for O

const resetGame = () => {
    turnO = true;
    count = 0;
    for (let box of boxes) { //enable boxes
        box.disabled = false;
        box.innerText = "";
    }    
    msgContainer.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};

const showWinner = (pos) => {
    msg.innerText = `Congratulations, ${pos} is the Winner!`;
    msgCtnr.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for ( let i of winPattern){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;
        if (pos1 !="" && pos2 !="" && pos3 !=""){
            if (pos1==pos2 && pos2==pos3){
                showWinner(pos1);
    }}}
};

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if (turnO){ //O
            box.innerText = "O";
            box.style.color = O_COLOR;
            turnO = false;
        } else{ //X
            box.innerText = "X";
            box.style.color = X_COLOR;
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            msg.innerText = `Game was a Draw.`;
            msgContainer.classList.remove("hide");
            disableBoxes();
        }
})});

reset.addEventListener("click", resetGame);