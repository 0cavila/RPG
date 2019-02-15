//generic stats object

let p1Name = ""; Christian 

let p1Stats = {
  hp:  115,
  mp:  85,
  atk: 100,
  def: 50,
  sp:  50,

}

let p2Name = ""; jeff boltz 

let p2Stats = {
  hp:  140,
  mp:  60,
  atk: 50,
  def: 50,
  sp:  100,



}

let battle = {

  attack: function(){},
  defend: function(){}

}


let physical ={
  razorPunch: function(){
    let baseDamage = this.stats.atk*0.75
    let bonus = 0.5*this.stats.atk*Math.random();
    return baseDamage+bonus;
  },
  charge: function(){
    let pain = Math.random();
    let bonus = 0.5*this.stats.atk*Math.random();
    if(pain<0.50){
      this.stats.hp = this.stats.hp - this.stats.atk/4;
      return this.stats.atk + bonus;
    }
    else{
      //no self damage
      return this.stats.atk + bonus;
    }

  },
  falconPunch: function(){
    let baseDamage = this.stats.atk * 0.50;
    let bonus = 1 * this.stats.atk * Math.random();
    return baseDamage + bonus;
  },
  furyStrike: function(){
    let pain = Math.random();
    let bonus = 1 * this.stats.atk * Math.random();
    if(pain < 0.25){
      this.stats.hp = this.stats.hp - this.stats.atk/4;
      return this.stats.atk + bonus;
    }
    },


}
  let magic = {
    hydropump: function(){
      if(this.stats.mp >=8){
        this.stats.mp = this.stats.mp -8;
        let tetertradice = Math.random();
        let pump= math.cell(this.stats.sp) 

      }
    },
    hyperbeam: function(){
      if(this.stats.mp >= 20){
        this.stats.mp = this.stats.mp - 20;
        let baseDamage = this.stats.mp * 1.5;
        let bonus = 0.84 * this.stats.atk * Math.random();
        return baseDamage + bonus;
      }

    },
    pyroBall: function(){
      if(this.stats.mp >= 6){
        this.stats.mp = this.stats.mp - 6;
        let baseDamage = this.stats.atk * 0.88;
        let bonus = 0.32 * this.stats.atk * Math.random();
        return baseDamage + bonus;
      }
    },
    lightningSlap: function(){
      if(this.stats.mp >= 10){
        this.stats.mp = this.stats.mp - 10;
        let baseDamage = this.stats.mp * 0.66;
        let bonus = 0.84 * this.stats.atk * Math.random();
        return baseDamage + bonus;
      }
    },
    }













let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}
