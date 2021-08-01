class Form{
    constructor(){
    this.input = createInput("name");
    this.button = createButton("play");
    this.greeting = createElement("h2");
    }
    hide(){
    this.button.hide();
    this.input.hide();
    this.greeting.hide();
    }

    display(){

    var title = createElement("h2");
    title.html("Dodge Ball");
    title.postion(190, 240);

    this.input.postion(120, 120);
    this.button.position(120, 140);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount =+ 1;
    gameState = 1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Hello " + player.name);
    this.greeting.position(displayWidth/2-70, displayHeight/4);
    console.log("hello");
    })
    }

}