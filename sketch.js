var player1;
var background;
var

function preload(){
bg=loadimg("129145.jpg");
skeleton=loadimg("game_charecter-removebg-preview.png");
hulk=loadimg("hulk-remover-preview.png");
mummy=loadimg("mummy-remover-preview.png");
vampier=loadimg("vampier7-remover-preview.png");
}

function setup(){
createCanvas(windoWith,windowHieght);

players=createSprite();
players.addAnimation("players",game_charecter-removebg-prview.png);
players.scale=1;

playerh=createSprite();
playerh.addAnimation("playerh",hulk-remover-prveiw.png);
playerh.scale=1;

playerm=createSprite();
playerm.addAniation("playerm",mummy-remover-preview.png)
playerm.scale=1;

playerv=createSprite();
playerv=addAnimation("players",vampier7-remover-preview.png);
playerv.scale=1;
}