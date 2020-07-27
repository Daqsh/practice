var movingthing;
var controlingthing;
function setup(){
    createCanvas(600,600);
    movingthing= createSprite(40,40,70,40);

    controlingthing= createSprite(60,60,70,40);
}

function draw(){
    background(225,225,225);
    movingthing.velocityX=-2;
    movingthing.velocityY=-2;

    if(keyDown("up_arrow")){
        controlingthing.velocityX=0;
        controlingthing.velocityY=-2;
    }
        if(keyDown("down_arrow")){
            controlingthing.velocityX=0;
            controlingthing.velocityY=2;
        }
            if(keyDown("left_arrow")){
                controlingthing.velocityX=-2;
                controlingthing.velocityY=0;
            }
       
    if(keyDown("right_arrow")){
        controlingthing.velocityX=2;
        controlingthing.velocityY=0;    
    }
        }