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

var RISE_WIDTH = [[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]];
var RISE_INDEX = ["G","F","E","D","C","B","A"];
RISE_INDEX.prototype.indexOf();
function setAppRise(monsterData){
  let monsterApp = JSON.parse(MONSTER_MAP.get(monsterData.monsterID)).appropriate;

};
setMonsterMap();
setBasicMap();
