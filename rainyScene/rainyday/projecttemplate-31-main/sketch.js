const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=100;

function preload(){
    
}

function setup(){
    
}

function draw(){
    background(0);
    for(var i=0; i<maxDrops; i++){
        maxDrops.push(new createDrop(random(0,400),random (0,400) ,random(2-6)))
    }
}   