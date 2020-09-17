class Player{
    constructor(){
      this.index = null;
    this.yDistance = 0;
        this.name = null;
        this.xDistance = 0;
        //this.yPosition = 0;
        
    }
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({playerCount: count})
    }
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
          name: this.name,
          distance : this.yDistance,
          xPosition : this.xDistance,
        // yPosition : this.yPosition 
      })
    }
    static getPlayerInfo(){
        var PlayerInfoRef = database.ref("players");
        PlayerInfoRef.on("value", (data)=> {
            allPlayers = data.val();
        })
    }

}
