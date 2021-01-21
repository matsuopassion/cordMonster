var MONSTER_MAP = new Map();
var BASIC_MAP = new Map();
var APP_RISE = new Map();
var BASIC_LIST = [];
var GACHA_LIST = [];
var RISE_WIDTH = [[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]];
var RISE_INDEX = ["G","F","E","D","C","B","A"];


console.log("---------start--------");
function setMonsterMap(){
  for (let monster of MONSTER_MASTER.monsterData) {
    MONSTER_MAP.set(monster.monsterID,JSON.stringify(monster));
    }
}

function setBasicMap(){
    for (let monster of MONSTER_MASTER.monsterData) {
      if(monster.basic === true){
        BASIC_LIST.push(monster);
        BASIC_MAP.set(monster.monsterID,JSON.stringify(monster));
      }
    }
}

function setGachaList(){
  let aList = [];
  let bList = [];  
  let cList = [];

  for (let monster of BASIC_LIST) {

    if(monster.rarity == "A"){
      aList.push(monster);
    }else if(monster.rarity == "B"){
      bList.push(monster);
    }else if(monster.rarity == "C"){
      cList.push(monster);
    }
  }
  GACHA_LIST.push(aList);
  GACHA_LIST.push(bList);
  GACHA_LIST.push(cList);
  console.log(GACHA_LIST);
}
RISE_INDEX.indexOf();

