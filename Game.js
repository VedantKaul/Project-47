class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
            })
        }

        update(state){
        var gameStateUpdate = database.ref("/");
        gameStateUpdate.update({
        gameState: state
        });
        }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountref = await database.ref("PlayerCount").once("value");
         if(playerCountref.exists()){
         playerCount = playerCountref.val();
         player.getCount();   
         }
        form = new Form();
        form.display();
        }
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
            //gameState = 1;

                var player1, position, player2, ball, ring;
                
                //player1
                player1 = createSprite(1, 1, 50, 50);
                player1.addImage("player1", player1_Img);

                database.ref("players/player1/x").on("value", function(data){
                position = data.val();
                player1.x = position.x;
                });

                player1.y = database.ref("players/player1/y").on("value", function(data){
                position = data.val();
                player1.y = position.y;
                });
                
                //player2
                player2 = createSprite(1, 1, 50, 50);
                player2.addImage("player2", player2_Img);

                database.ref("players/player2/x").on("value", function(data){
                position = data.val();
                player2.x = position.x;
                });

                player2.y = database.ref("players/player2/y").on("value", function(data){
                position = data.val();
                player2.y = position.y;
                });

                if (KeyDown("W")){
                player1.y = player1.y - 2;
                database.ref
                }

                if (KeyDown("S")){
                player1.y = player1.y + 2;
                }

                if (KeyDown("A")){
                player1.x = player1.x + 2;
                }

                if (KeyDown("D")){
                player1.x = player1.x - 2;
                }
                
                /*player2 = createSprite(200, 200, 50, 50);
                player2.addImage("player2", player2_Img);
                player2.x = database.ref("players/player2/x").on("value", function(data){
                player2 = data.val();
                });
                player2.y = database.ref("players/player2/y").on("value", function(data){
                player2 = data.val();
                });*/

                ball = createSprite(140, 200, 20, 20);
                ball.x = database.ref("ball/x");
                ball.y = database.ref("ball/y");

                ring = createSprite(120, 120, 20, 20);

                drawSprites();
    }
} 