var form,player,game,gameState=0,playerCount=0;
var position,database;
function setup(){
    database=firebase.database();
    createCanvas(600,600);
game=new Game();
game.GetState();
game.start();    
}

function draw(){
    background("white");
    
}

