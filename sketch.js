var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    musics=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "skyblue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "yellow";
     
    block3=createSprite(510,580,200,30);
    block3.shapeColor="lightgreen";

    block4=createSprite(725,580,200,30);
    block4.shapeColor="pink";

    ball = createSprite(random(20,750),500, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=-5;
    ball.velocityY=7;

}  
function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    if(touching(ball,block1) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        //music to play
        musics.play();
    }

    if(touching(ball,block2) && ball.bounceOff(block2)){
        ball.shapeColor = "yellow";
        ball.velocityX=0;
        ball.velocityY=0;
        //write code to stop music
        musics.stop();
    }

    if(touching(ball,block3) && ball.bounceOff(block3)){
        ball.shapeColor="lightgreen";
        musics.play();
    }
    
    if(touching(ball,block4) && ball.bounceOff(block4)){
        ball.shapeColor="pink";
    }

    drawSprites();
}
