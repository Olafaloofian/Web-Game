const holes= document.querySelectorAll('.hole');
const scoreBoard= document.querySelectorAll('.score');
const zombie= document.querySelectorAll('.zombie');
let lastHole;
let timeUp = false;
let score = 0;

//function make random time for zombie to pop up from hole
function randomTime(min, max){
    return Math.round(Math.random() * (max - min)+min);
}

function randomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole =holes[index];

    if(hole === lastHole){
        return randomHole(hole);
    }
    lastHole=hole;
    return hole;

}

function peep(){
    const time= randomTime(500,1000);
    const hole= randomHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp)
            peep();
        
    }, time);
}

function startGame(){
    scoreBoard.textContent = 0;
    timeUp =false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
}


document.getElementById('zombie').onclick=function(){
    var score = parsInt(document.getElementById('score').innerHTML);
    score++;
    document.getElementById('score').innerHTML = score;
}
