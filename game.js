class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", (data)=>{
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
           gameState: state,
           
        })
    
    }
    async start(){
        if(gameState === 0){
            player = new Player();
          var playerCountRef = await database.ref("playerCount").once("value");
          if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
              
          }
            form = new Form;
            form.display();

        }
          player1 = createSprite(100,200);
          player1.addImage(policeImg)
          player2 = createSprite(300,200);
          player2.addImage(thiefImg);
           players = [player1,player2];
           player2.scale = 0.8;
           player1.scale = 0.4;


    }
    play(){
        
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){

            background("#4B4B4B");   
            image(trackImg, 0, -displayHeight * 4, displayWidth , displayHeight * 5);
            var index = 0;
            var x = 0;
            var y = 0;
            for(var plr in allPlayers){
               index = index + 1;
                x = allPlayers[plr].xPosition + 200;
                y  = displayHeight - allPlayers[plr].distance;
                console.log(allPlayers[plr].xPosition);
                players[index - 1].x = x ;
                players[index - 1].y = y;

                if(index === player.index){
                    players[index - 1].shapeColor = "red";
                    stroke(10);
                    fill("red");
                    ellipse(x,y , 100, 100);
                    camera.position.x = displayWidth / 2;
                    camera.position.y = players[index - 1].y;
                   
                }
               

             //  console.log(player.distance);
                
             //  textSize(15);
               //  text( "name  : " + allPlayers[plr].name, displayWidth / 2, displayHeight / 2 );
           //text("distance  : " + allPlayers[plr].distance, displayWidth / 2 , displayHeight / 4);
                
                
                
            }
        } 
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.yDistance += 50;
            player.update();
        }
        if(keyIsDown(DOWN_ARROW) && player.index !== null){
            player.yDistance -= 50;
            player.update();
        }
        if(player.xDistance < 630 || player.xDistance > 140){
                if(keyIsDown(LEFT_ARROW) && player.index !== null){
                    player.xDistance -= 5;
                    player.update();
                    console.log(player.xDistance)
                    
                    }
                    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
                        player.xDistance += 5;
                        player.update();
                        console.log(player.xDistance)
                        
                    }
        }
      /*  if(player.distance > 3800 ){
            gameState = 2;
           
           
        }*/ 
        
        


        drawSprites(); 
    }
    end(){
        text("hello", 100, 100);
    }
}