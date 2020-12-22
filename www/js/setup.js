var MONSTER_MAP = new Map();
var BASIC_LIST = [];
var BASIC_MAP = new Map()
var APP_RISE = new Map();


console.log("---------start--------");
function setMonsterMap(){
  for (let monster of MONSTER_MASTER.monsterData) {
    console.log();
    MONSTER_MAP.set(monster.monsterID,JSON.stringify(monster));
    }
};

function setBasicMap(){
    for (let monster of MONSTER_MASTER.monsterData) {
      if(monster.basic === true){
        BASIC_LIST.push(monster);
        MONSTER_MAP.set(monster.monsterID,JSON.stringify(monster));
      }
    }
};

function setEvoParameter(){
    for (let monster of MONSTER_MASTER.monsterData) {
      if(monster.basic === true){
        BASIC_LIST.push(monster);
        MONSTER_MAP.set(monster.monsterID,JSON.stringify(monster));
      }
    }
};


setMonsterMap();
setBasicMap();
