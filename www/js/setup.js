var MONSTER_MAP = new Map();
var ABILITY_MAP = new Map();
var BASIC_MAP = new Map();
var APP_RISE = new Map();
var BASIC_LIST = [];
var GACHA_LIST = [];
var RISE_WIDTH = [[1, 2], [1, 3], [2, 3], [2, 4], [3, 4], [3, 5], [4, 5]];
var RISE_INDEX = ["G", "F", "E", "D", "C", "B", "A"];

console.log("---------start--------");
/**
 * 関数概要：起動時のメソッドまとめ
 */
function startUpFunctions(){
  setMonsterMap();
  setAbilityMap();
  setBasicMap();
  setGachaList();
}
/**
 * 関数概要：全モンスターのマップを作製します。
 */
function setMonsterMap() {
  for (let monster of MONSTER_MASTER.monsterData) {
    MONSTER_MAP.set(monster.monsterID, monster);
  }
}
/**
 * 関数概要：アビリティのマップを作成します
 */
function setAbilityMap() {
  for (let ability of ABILITY_MASTER.abilityData) {
    ABILITY_MAP.set(ability.abilityID, ability);
    console.log(ability.abilityID);
  }
}
/**
 * 関数概要：Basicがtrueであるモンスターのマップを作製します
 */
function setBasicMap() {
  for (let monster of MONSTER_MASTER.monsterData) {
    if (monster.basic === true) {
      BASIC_LIST.push(monster);
      BASIC_MAP.set(monster.monsterID, JSON.stringify(monster));
      MONSTER_MAP.set(monster.monsterID,monster);
    }
  }
} 

/**
 * 関数概要：ガチャで使用するarrayリストを作成します
 */
function setGachaList() {
  let aList = [];
  let bList = [];
  let cList = [];

  for (let monster of BASIC_LIST) {
    if (monster.rarity == "A") {
      aList.push(monster);
    } else if (monster.rarity == "B") {
      bList.push(monster);
    } else if (monster.rarity == "C") {
      cList.push(monster);
    }
  }
  GACHA_LIST.push(aList);
  GACHA_LIST.push(bList);
  GACHA_LIST.push(cList);
};

/**
 * 関数概要：バトルで使うモンスタ一リストの作成
 * @monsterRank 対象のrarity
 * @return モンスターのリスト
 */
function setBattleMonsterList(monsterRank){
  let monsterList = [];
  for (let monster of MONSTER_MAP.values()) {
    if (monster.rarity == monsterRank) {
      monsterList.push(monster.monsterID);
    }
  }
  return monsterList;
}
