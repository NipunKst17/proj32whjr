const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg;
var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1534,718);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
    fill("white")
    textSize(25);
    text("Time: " + hour + " hours", 140, 50);

}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var datetime = responseJson.datetime;
    hour = datetime.slice(11,13);

    if(hour >= 04 && hour <= 05){
       bg = "sunrise1.png"
    }

    if(hour >= 06 && hour <= 07){
       bg = "sunrise2.png"
    }

    if(hour >= 08 && hour <= 09){
       bg = "sunrise3.png"
    }

    if(hour >= 10 && hour <= 11){
        bg = "sunrise4.png"  
    }

    if(hour >= 12 && hour <= 13){
        bg = "sunrise5.png"
    }

    if(hour >= 14 && hour <= 15){
        bg = "sunrise6.png"
    }

    if(hour === 16 ){
       bg = "sunset7.png"
    }

    if(hour >= 17 && hour <= 18){
        bg = "sunset8.png"
    }

    if(hour >= 18 && hour <= 19){
        bg = "sunset10.png"
    }

    if(hour >= 20 && hour <= 22){
       bg = "sunset11.png"
    }

    if((hour > 22) || (hour < 4)){
       bg = "sunset12.png"
    }
 
    backgroundImg = loadImage(bg);

}
