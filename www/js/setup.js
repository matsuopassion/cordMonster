var MONSTER_MAP = new Map();
var BASIC_MAP = new Map();
var APP_RISE = new Map();
var BASIC_LIST = [];
var GACHA_LIST = [];
var RISE_WIDTH = [[1,2],[2,3],[3,4],[4,5],[6,7],[7,8],[8,9]];
var RISE_INDEX = ["G","F","E","D","C","B","A"];


console.log("---------start--------");
function setMonsterMap(){
  for (let monster of MONSTER_MASTER.monsterData) {
    MONSTER_MAP.set(monster.monsterID,JSON.stringify(monster));
    }
}

function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

 
// 5秒後にメッセージを表示
//console.log('5秒経過しました！');

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
}
//RISE_INDEX.indexOf();

