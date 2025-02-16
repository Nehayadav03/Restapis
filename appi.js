  let gameSeq=[];
let userSeq=[];
let started=false;
let btns=["yellow","red","purple","green"];
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    // console.log("game started");
  if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
  }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
  btn.classList.remove("flash");
    },250);
}
3
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
  btn.classList.remove("userflash");
    },250);
}


function levelUp(){
  userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
 
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
gameSeq.push(randColor);
 console.log(gameSeq);
 gameFlash(randbtn);
} 

 

function checkAns(idx){
  // console.log("curr level: ",level);
  // let idx=level-1;
  if(userSeq[idx]===gameSeq[idx]){
    // console.log("same value");
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }
  else{
    h2.innerHTML=`Game Over!Your score was <b> ${level} </b> <br> Press any key to start`;
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";

  },150  );
    reset();
  }
}
function btnPress(){
    //  console.log(this);
 let btn=this;
  userFlash(btn);
 
  checkAns(userSeq.length-1);


  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);

}
function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}