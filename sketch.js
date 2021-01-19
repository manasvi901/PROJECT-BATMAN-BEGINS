const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop;
var maxDrops=100;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    umbrella.obj = new Umbrella(300,200,200,400);
}

function draw(){
   drop.js.Drop.update();
   drop.js.Drop.draw(); 
   umbrella.js.Umbrella.draw(); 
}   

function push(){
 for(var i=0; i<maxDrops; i++){
    drops.push(new createDrop(ramdom(0,40),ramdom(0,40)));
 }  
}