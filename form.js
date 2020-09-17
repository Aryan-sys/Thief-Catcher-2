class Form{
    constructor(){
                this.title = createElement('h3');
                this.input = createInput("Name");
                this.button = createButton("play");
                this.reset = createButton("end");
                this.greeting = createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }

        display(){
                this.title.html("Thief Catcher");
                this.input.position(displayWidth/2 - 20, displayHeight/2 - 40);
                this.button.position(displayWidth/2 - 20, displayHeight/2 - 100);
                this.title.position(displayWidth/2 - 80, 0)
                this.reset.position(displayWidth - 100,20)
                this.button.mousePressed(()=>{
                    this.input.hide();
                    this.button.hide();
                    player.name = this.input.value();
                    playerCount+=1;
                    player.index = playerCount;
                    player.update(name);
                    player.updateCount(playerCount)

                    this.greeting.html("hello    " + player.name);
                    this.greeting.position(displayWidth/2 - 70,displayHeight/4);
                })
                this.reset.mousePressed( ()=>{
                    player.updateCount(0);
                    game.update(0); 
             
                   
                })
        }
}