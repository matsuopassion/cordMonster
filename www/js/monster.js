// This is a JavaScript file
function monster(monster){
  this.monsterID = monster.monsterID;
  this.monsterName = monster.monsterName;
  this.condition = monster.condition;
  this.Lv = monster.Lv;
  this.param = 
  { 
    life : monster.param.life,
    power : monster.param.power,
    shield : monster.param.shield, 
    speed : monster.param.speed,
    AP : monster.param.AP
  };
  this.skill =
  {
    point : monster.skill.point,
    life : monster.skill.life,
    power : monster.skill.power,
    shield : monster.skill.shield, 
    speed : monster.skill.speed,
    AP : monster.param.AP
  };
  this.ability = monster.ability;
  this.condition = monster.condition;
}
