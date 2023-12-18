let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".winner-head");


let turnO=true;
let count=0;

let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]

const resetGame=()=>{
    turnO=true;
    count=0;
    enabelBoxes();
    msgContainer.classList.add('hide');
}


boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{
        if(turnO){
          box.innerText="0";
          turnO=false;  
        }
        else{
           box.innerText="X";
           turnO=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();

        if(count===9 &&  !(isWinner)){
            gameDraw();
        }
    });
}
);

const gameDraw=()=>
{
    msg.innerText=`Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabelBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>
{
    msg.innerText=`Congratulations,winer is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();

}

const checkWinner=()=>
{
   for(let pattern of winPattern){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!=""  &&  pos3Val!=""){
        if(pos1Val===pos2Val &&pos2Val===pos3Val){
            showWinner(pos1Val);
            return true;
        }
    }
   }
}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

