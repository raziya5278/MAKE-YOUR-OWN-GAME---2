var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;
var wall14;
var wall15;
var wall16;
var wall17;
var wall18;
var wall19;
var wall20;
var wall21;
var wall22;
var wall23;
var pacman, player;
var redGhost, redPlayer;
var blueGhost, bluePlayer;
var orangeGhost, orangePlayer;
var pinkGhost, pinkPlayer;

function preload(){
pacman = loadImage("pacman-removebg-preview.png");
redGhost = loadImage("pacman_red_ghost-removebg-preview.png");
blueGhost = loadImage("pacman_blue_ghost-removebg-preview.png");
orangeGhost = loadImage("pacman_orange_ghost-removebg-preview.png");
pinkGhost = loadImage("pacman_pink_ghost-removebg-preview.png");
}

function setup(){
createCanvas(1315,1000);
player = createSprite(650,400);
player.addImage(pacman);
player.scale = 0.33;
player.debug = false;
redPlayer = createSprite(850,240);
redPlayer.addImage(redGhost);
redPlayer.scale = 0.5;
bluePlayer = createSprite(450,560);
bluePlayer.addImage(blueGhost);
bluePlayer.scale = 0.5;
orangePlayer = createSprite(290,380);
orangePlayer.addImage(orangeGhost);
orangePlayer.scale = 0.5;
pinkPlayer = createSprite(730,700);
pinkPlayer.addImage(pinkGhost);
pinkPlayer.scale = 0.5;
wall1 = createSprite(12,440,25,810);
wall2 = createSprite(30,10,2550,50);
wall3 = createSprite(110,820,2550,50);
wall4 = createSprite(1300,400,30,800);
wall5 = createSprite(640,100,65,150);
wall6 = createSprite(640,590,60,150);
wall7 = createSprite(160,150,130,60);
wall8 = createSprite(390,150,170,60);
wall9 = createSprite(890,150,170,60);
wall10 = createSprite(1110,150,130,60);
wall11 = createSprite(160,320,130,60);
wall12 = createSprite(440,320,250,60);
wall13 = createSprite(840,320,250,60);
wall14 = createSprite(1145,320,130,60);
wall15 = createSprite(650,490,270,60);
wall16 = createSprite(75,490,105,60);
wall17 = createSprite(1250,490,105,60);
wall18 = createSprite(210,420,30,170);
wall19 = createSprite(1095,420,30,170);
wall20 = createSprite(300,640,350,60);
wall21 = createSprite(1015,640,350,60);
wall22 = createSprite(370,530,30,170);
wall23 = createSprite(970,530,30,170);
}

function draw(){
background("black");
movements();
collides();
drawSprites();
}

function movements(){
    if(keyWentDown("right"))
    {
        player.velocityX = 4
        player.velocityY = 0
    }
    if(keyWentDown("left"))
    {
        player.velocityX = -4
        player.velocityY = 0
    }
    if(keyWentDown("up"))
    {
        player.velocityX = 0
        player.velocityY = -4
    }
    if(keyWentDown("down"))
    {
        player.velocityX = 0
        player.velocityY = 4
    }
}
function collides(){
    player.collide(wall1)
    player.collide(wall2)
    player.collide(wall3)
    player.collide(wall4)
    player.collide(wall5)
    player.collide(wall6)
    player.collide(wall7)
    player.collide(wall8)
    player.collide(wall9)
    player.collide(wall10)
    player.collide(wall11)
    player.collide(wall12)
    player.collide(wall13)
    player.collide(wall14)
    player.collide(wall15)
    player.collide(wall16)
    player.collide(wall17)
    player.collide(wall18)
    player.collide(wall19)
    player.collide(wall20)
    player.collide(wall21)
    player.collide(wall22)
    player.collide(wall23)
}
function playerflip(){
    if(player.x > 1315){
        player.x = 0
    }
    if(player.x < 0){
        player.x = 1310
    }
}