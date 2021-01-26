function scanBarcode(callback) {
cordova.plugins.barcodeScanner.scan(
  function (result) {
    //sreturn getSearchData(result.text,result.cancelled);
    if (result.cancelled == 0){
      if(localStorage.getItem(result.text) != null){
        return alert("既にスキャンされています");
      } else {
        callback(getSearchData(result.text));
      }
    } else {
      alert("召喚をキャンセルしました。");
      return;
    }
  },
  function (error) {
    alert("Scanning failed: " + error);
  },
  {
    preferFrontCamera : false, // iOS and Android
    showFlipCameraButton : true, // iOS and Android
    showTorchButton : true, // iOS and Android
    torchOn: false, // Android, launch with the torch switched on (if available)
    saveHistory: true, // Android, save scan history (default false)
    prompt : "コードを読み込んでね！", // Android
    resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
    // formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
    orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
    disableAnimations : true, // iOS
    disableSuccessBeep: false // iOS and Android
  }
);
}
/**
 * 召喚用スキャンデータ読み込み
 * qrText : 読み込んだＱＲコードの文字列
 */
function getSearchData(qrText) {
  //スキャン済みのQRコード登録
  localStorage.setItem(qrText,'exist');

  //QRコードからモンスターを決定
  let monsterID = resultClassification(qrText);
  
  // ローカルストレージ内にあるJSON取得
  let monsterJsonString = localStorage.getItem(monsterID);
  let monsterData;
  
  //localstrage内にデータがなければ、モンスター新規取得
  if(monsterJsonString == null){
    monsterData = getNewMonster(monsterID);
    alert(monsterData.monsterName + "をゲットしました");
  } else {
  //levelUPの処理
    monsterData = levelUpMonster(JSON.parse(monsterJsonString));
  }

  //localstrageに保存
  localStorage.setItem(monsterID,JSON.stringify(monsterData));

  return monsterData;
}
/**
 * monsterData : 対象のモンスター
 * lvと進化の判定、スキルの判定
*/
function levelUpMonster(monsterData){
  //lvUP
    monsterData.Lv += 1;
    monsterData.skill.point += 1;
    alert(monsterData.monsterName + "がレベルアップしました");
    //対象モンスターのマスタ
    const monster = JSON.parse(MONSTER_MAP.get(monsterData.monsterID));
    
    //対象モンスターのアビリティレベル判定用の値
    const monsterAbility = monster.ability;
    const abilityLv = monster.abilityLv;
    
    if(monster.evoLv == monsterData.Lv){ 
      monsterData = getEvoMonster(monsterData);
    }

    for(let i in abilityLv){
      //レベルに該当する場合は特技を追加
      if(abilityLv[i] == monsterData.Lv){
        monsterData.ability.push(monsterAbility[i]);
        alert("新しい特技を取得したよ");
      }
    }
    return monsterData;
}

/** 
 * monsterID : 対象モンスターのID
 * localstrageに新しいモンスターを追加する
*/
function getNewMonster(monsterID){
  let scM = JSON.parse(MONSTER_MAP.get(monsterID));
  const monsterData = {
     monsterID : scM.monsterID ,
     monsterName : scM.monsterFamily ,
     Lv : 1 ,
     param : { 
        life : scM.defaultParam.life ,
        power : scM.defaultParam.power ,
        shield : scM.defaultParam.shield , 
        speed : scM.defaultParam.speed },
     skill : {
        point : 0,
        life : 0 ,
        power : 0 ,
        shield : 0 , 
        speed : 0 },
    ability : ["abt1"],
    condition : ["normal"]  
  };
  return monsterData;
}

/**
 * 召喚によって出るモンスターを決定
 */
function resultClassification(){
  let rarityList = [0.1,0.4,1];
  const lotNum;
  let rarityIndex;
  for(let i in rarityList){
    if(lotNum > rarityList[rarityIndex]){
      rarityIndex = i;
    }
  }
  let monsterIndex = getRandomIntInclusive(0,GACHA_LIST[rarityIndex].length); //0~INDEXまde
  let monster = GACHA_LIST[rarityIndex][monsterIndex];
  console.log(rarityIndex);
  return monster.monsterID;
}


function getEvoMonster(monsterData){
  //進化前のマスタ取得
  const monster = JSON.parse(MONSTER_MAP.get(monsterData.monsterID));

  //進化後のマスタ取得
  const evoMonster = JSON.parse(MONSTER_MAP.get(monster.evoLine));

  //進化先のパラメータ取得
  const eDefaultParam = evoMonster.defaultParam ;
  
  //skilふり直し
  const skill = monsterData.skill;
  const skillPoint = 
   skill.point +
   skill.life + 
   skill.power +
   skill.shield +
   skill.speed ;

  let evoMonsterData = {
    monsterID : evoMonster.monsterID ,
    monsterName : evoMonster.monsterFamily ,
    Lv : monsterData.Lv ,
    param : {
      life : eDefaultParam.life  , 
      power : eDefaultParam.power ,
      shield : eDefaultParam.shield , 
      speed : eDefaultParam.speed , 
    } ,
    skill : {
      point : skillPoint ,
      life : 0 ,
      power : 0 ,
      shield : 0 , 
      speed : 0 },
    ability : monsterData.ability ,
    condition : monsterData.condition
  }
  alert(monsterData.monsterName + " は "+ evoMonsterData.monsterName + " に進化した");
  return evoMonsterData;
}

function decisionParam(monsterApp){
  let paramWidth = RISE_WIDTH[RISE_INDEX.indexOf(monsterApp)];
  let param = getRandomIntInclusive(paramWidth[0],paramWidth[1]); //引数1~引数2までの中から乱数で値を決定
  return param;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // both min and max are inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function skillAllocation(monsterApp,addPoint){
  let totalParam = 0 ;
  let count = 0;
  for(let i = addPoint; i > 0; i--){
    count++;
    console.log(count);
    totalParam += decisionParam(monsterApp);
    console.log("totalParam:" + totalParam);
  }
  return totalParam ;
}

function updateParam(monsterData,addPointArray){
  const appropriates = getAppropriate(monsterData);
  let totalPoint = 0;
  console.log(addPointArray);
  for(let point of addPointArray){
    totalPoint =+ point;
  } 
  let skills = monsterData.skill;
  let params = monsterData.param;
  params.life += skillAllocation(appropriates.life,addPointArray[0]);
  skills.life += addPointArray[0];
  params.power += skillAllocation(appropriates.power,addPointArray[1]);
  skills.power += addPointArray[1];
  params.shield += skillAllocation(appropriates.shield,addPointArray[2]);
  skills.shield += addPointArray[2];
  params.speed += skillAllocation(appropriates.speed,addPointArray[3]);
  skills.speed += addPointArray[3];
  skills.point -= totalPoint;
  monsterData.param = params;
  monsterData.skill = skills;
  
  return monsterData;//あやしい
}

function getAppropriate(monsterData){
  let monsterApp = 
    JSON.parse(MONSTER_MAP.get(monsterData.monsterID)).appropriate;
  return monsterApp;
}