// KEY PRESS;

let gameSeq = [];

let userSeq = [];

let started = false;

let level = 0;

let btns =  ["yellow", "red","purple","green"];
h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started = true;

        levelUp();

    }
});



function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    },199)

}

function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash");

    },1999)

}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
   
    let radndIdx = Math.floor(Math.random() *3);
    let randColor =btns[radndIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    


    btnFlash(randbtn);





}
function checkAns(idx) {
    if(userSeq[idx] ==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else {
        h2.innerHTML = `Game is over 1! your score was <b>${level} </b> <br> press any to start.`;
        reset();
        
    }
  
}
function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);


    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset() {
    userSeq=[];
    gameSeq=[];
    started = false;
    level =0;

}
