var canvas=new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

playerX=10;
playerY=10;

var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(player_object);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log (keypressed);
    if(e.shiftKey==true&& keypressed=='80'){
        console.log("P and shift are pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true&& keypressed=='77'){
        console.log("M and shift are pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypressed=='38'){
        up();
        console.log ("up");
    }

    if(keypressed=='40'){
        down();
        console.log ("down");
    }

    if(keypressed=='37'){
        left();
        console.log ("left");
    }

    if(keypressed=='39'){
        right();
        console.log ("right");
    }

    if(keypressed=='87'){
        new_image("wall.jpg");
        console.log ("w");
    }

    if(keypressed=='71'){
        new_image("ground.png");
        console.log ("g");
    }

    if(keypressed=='76'){
        new_image("light_green.png");
        console.log ("l");
    }

    if(keypressed=='84'){
        new_image("trunk.jpg");
        console.log ("t");
    }

    if(keypressed=='82'){
        new_image("roof.jpg");
        console.log ("r");
    }

    if(keypressed=='89'){
        new_image("yellow_wall.png");
        console.log ("y");
    }

    if(keypressed=='68'){
        new_image("dark_green.png");
        console.log ("d");
    }

    if(keypressed=='85'){
        new_image("unique.png");
        console.log ("u");
    }

    if(keypressed=='67'){
        new_image("cloud.jpg");
        console.log ("c");
    }
}

function up(){
if (playerY>=0){
    playerY=playerY-block_image_height;
    console.log("block image height = "+block_image_height);
    console.log("when up arrow key is pressed, X= "+playerX+",Y= "+playerY);
    canvas.remove(player_object);
    player_update();
}
}

function down(){
    if (playerY<=500){
        playerY=playerY+block_image_height;
        console.log("block image height = "+block_image_height);
        console.log("when down arrow key is pressed, X= "+playerX+",Y= "+playerY);
        canvas.remove(player_object);
        player_update();
    }
    }

    function left(){
        if (playerX>0){
            playerX=playerX-block_image_width;
            console.log("block image width = "+block_image_width);
            console.log("when left arrow key is pressed, X= "+playerX+",Y= "+playerY);
            canvas.remove(player_object);
            player_update();
        }
        }

        function right(){
            if (playerX<=850){
                playerX=playerX+block_image_width;
                console.log("block image width = "+block_image_width);
                console.log("when right arrow key is pressed, X= "+playerX+",Y= "+playerY);
                canvas.remove(player_object);
                player_update();
            }
            }