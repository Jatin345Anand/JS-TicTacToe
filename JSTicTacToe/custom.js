window.addEventListener("load",init);
var Buttons,H2,span,H1;
function init(){
    H2=document.querySelector("#Ans");
    span=document.querySelector("#pn");
    H1=document.querySelector("#Winp");
    Buttons = document.getElementsByTagName("button");
    for(let i=0;i<Buttons.length;i++){
        Buttons[i].addEventListener("click",Print0orX);
    }
}
var isGameDone=false;
var isZero=false;
var isplayerNumber=true;
function Print0orX(){
    var ButtonValue=this.innerHTML;
    console.log(`${ButtonValue}`);
   if(!ButtonValue && !isGameDone){  
    this.innerHTML= isZero? "X":"0"; 
     isZero=!isZero;
     isplayerNumber=!isplayerNumber;
    printPlayerNumber();
     isGameFinish();
    }
    // if(isGameDone){
    //     printPlayerNumber();
    // }
}
function printPlayerNumber(){
    if(!isplayerNumber){
        span.innerHTML="ONE";
    }
    else{
        span.innerHTML="TWO";
    }
    return span.innerHTML;
}
function isGameFinish(){
    // for(let i=0;i<this.Buttons.length;i++){
    //     console.log(Buttons[i].innerHTML);
    // }
    if(isRow(Buttons[0],Buttons[1],Buttons[2])){
        H2.innerHTML="GAME OVER";
        isGameDone=true;
        win();
    }
    if(isRow( Buttons[3],Buttons[4],Buttons[5])){
        H2.innerHTML="GAME OVER";
        isGameDone=true;
        win();
    }
    if(isRow( Buttons[6],Buttons[7],Buttons[8])){
        H2.innerHTML="GAME OVER";
        isGameDone=true;
        win();
    }
    if(isRow( Buttons[0],Buttons[3],Buttons[6])){
        H2.innerHTML="GAME OVER";
        isGameDone=true;
        win();
    }
    if(isRow(Buttons[1],Buttons[4],Buttons[7])){
        H2.innerHTML="GAME OVER";
        isGameDone=true;
        win();
    }
    if(isRow(Buttons[2],Buttons[5],Buttons[8])){
        H2.innerHTML="GAME OVER";
        isGameDone=true;
        win();
    }
    if(isRow(Buttons[0],Buttons[4],Buttons[8])){
        H2.innerHTML="GAME OVER";
        isGameDone=true;
        win();
    }
    if(isRow(Buttons[2],Buttons[4],Buttons[6])){
        H2.innerHTML="GAME OVER";
        isGameDone=true;
        win();
    }  
console.log(isRow(Buttons[0],Buttons[1],Buttons[2]));
 console.log(isRow(Buttons[3],Buttons[4],Buttons[5]));
 console.log(isRow(Buttons[6],Buttons[7],Buttons[8]));
 console.log(isRow(Buttons[0],Buttons[3],Buttons[6]));
 console.log(isRow(Buttons[1],Buttons[4],Buttons[7]));
 console.log(isRow(Buttons[2],Buttons[5],Buttons[8]));
 console.log(isRow(Buttons[0],Buttons[4],Buttons[8]));
 console.log(isRow(Buttons[2],Buttons[4],Buttons[6]));

}
function win(){
    var S= printPlayerNumber();
  console.log(`${printPlayerNumber()}`);
H1.innerHTML=S+" is Win ! Congratulation..."; 
}
function isRow(A,B,C){
    if(isNotBlank(A) && isNotBlank(B) && isNotBlank(C)){
        if(isSameValue(A,B,C)){
          
           return true;
        }
        
     return false;
    } 
}
const isNotBlank = (button)=>button.innerHTML?true:false;

const isSameValue=(one,two,three)=>(one.innerHTML == two.innerHTML && one.innerHTML == three.innerHTML);
//var ans =false;
 
// }
// function isNotBlank(A){
//     return A.innerHTML?"true":"false";
// }