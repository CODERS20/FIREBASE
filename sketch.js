var ball;
var database;
var pos;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    var refP = database.ref('ball/position');
    refP.on("value",readPOS,showE);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePOS(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePOS(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePOS(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePOS(0,+1);
    }
    drawSprites();
}

function readPOS(data){


pos = data.val();

ball.x = pos.x;
ball.y = pos.y

}

function showE(){

    console.log("THERE IS AN ERROR");

}

function writePOS(x,y){

refP = database.ref('ball/position');
refP.set({
    x: pos.x + x,
    y: pos.y + y
})

}
