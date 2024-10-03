let userscore = 0;
let compscore = 0;
let body=document.querySelector("body");
let us=document.querySelector("#user");
let cs=document.querySelector("#comp");
let h=document.querySelector(".hide")
const sym = document.querySelectorAll(".symbols");
let message=document.querySelector(".paratag");
const drawmatch=()=>{
    console.log("it was a draw match");
}

const showwinner=((winner,user,computer)=>{
    if (winner){
        userscore++;
        us.innerText=userscore;

h.classList.remove("hide");
        message.innerText=  `User won! user choice was ${user} computer choice was ${computer}`;
        message.style.backgroundColor="green"
    }
    else{
       compscore++;
       cs.innerText=compscore;
        console.log("user lost");
        h.classList.remove("hide");
        message.innerText=`User lost! user choice was ${user} computer choice was ${computer}`;
        message.style.backgroundColor="red"
    }
})
const gencompchoice = () => {
  const op = ["rock", "paper", "scissors"];
  const value = Math.floor(Math.random() * 3);
  return op[value];
};

const gameplay = (userch) => {
  // console.log("userchoice", userch);
  let compchoice = gencompchoice();
  // console.log("computer choice", compchoice);
  if(userch===compchoice){
   drawmatch();
  }
  else{
  let userwin = true;

if (userch === "rock") {
    if (compchoice === "paper") userwin = false;
    else userwin = true;
    
  } 
  
  else if (userch === "paper") {
    if (compchoice === "scissors") userwin = false;
    
    else userwin = true;
    
  }
  else if(userch==="scissors"){
    if (compchoice === "rock") userwin = false;
    else userwin = true;
   
  }
  showwinner(userwin,userch,compchoice);
  }
};

sym.forEach((choice) => {
  choice.addEventListener("click", () => {
    const chid = choice.getAttribute("id");
    gameplay(chid);
  });
});
