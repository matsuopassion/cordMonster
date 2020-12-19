// This is a JavaScript file
function monster(id,name,condition,lv,life,power,shield,speed,ability){
  this.monsterID = id;
  this.monsterName = name;
  this.condition = condition;
  this.Lv = lv;
  this.param = 
  { 
    life : life,
    power : power,
    shield : shield, 
    speed : speed 
  };
  this.ability = ability;
}
