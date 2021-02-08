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
  // localStorage.setItem(qrText,'exist');

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
  localStorage.setItem(monsterData.monsterID,JSON.stringify(monsterData));
  return monsterData;
}
/**
 * monsterData : 対象のモンスター
 * lvと進化の判定、スキルの判定
 * 
 * monster : masterから取得したモンスターのデータ
*/
function levelUpMonster(monsterData){
    //進化先がすでにいるか、存在するかチェックしてセット
    monsterData = haveEvoCheck(monsterData);
    
    //対象モンスターのマスタ
    const monster = MONSTER_MAP.get(monsterData.monsterID);
    
    //対象モンスターのアビリティレベル判定用の値
    const monsterAbility = monster.ability;
    const abilityLv = monster.abilityLv;

    //lvUP
    monsterData.Lv += 1;
    monsterData.skill.point += 1;
    
    //進化判定
    if(monster.evoLv == monsterData.Lv){ 
      monsterData = getEvoMonster(monsterData);
    }

    //アビリティのセット
    monsterData.ability = judgeAbilityGet(monsterData);
    alert(monsterData.monsterName + "がレベルアップしました");
    return monsterData;
}

function haveEvoCheck(monsterData){
  let judugeMonsterData = monsterData;
    try {
    const monster = MONSTER_MAP.get(monsterData.monsterID);
      if(monster.evoLine != `Undefined`){
        //↓localStorage内から進化ラインのモンスターをチェック、いるなら再起呼び出し
        if(localStorage.getItem(MONSTER_MAP.get(monster.monsterID).evoLine) != null){
         judugeMonsterData = 
            haveEvoCheck(JSON.parse(localStorage.getItem(MONSTER_MAP.get(monster.monsterID).evoLine)));
        }
      }
    return judugeMonsterData;
    } catch (e) {
      console.log("モンスターの情報が正しく取れませんでした：evoCheck");
    }
}

function judgeAbilityGet(monsterData){
    //対象モンスターのマスタ
    const monster = MONSTER_MAP.get(monsterData.monsterID);
    
    //対象モンスターのアビリティレベル判定用の値
    const monsterAbility = monster.ability;
    const abilityLv = monster.abilityLv;

    for(let i in abilityLv){
      //レベルに該当する場合は特技を追加
      if(abilityLv[i] == monsterData.Lv){
        monsterData.ability.push(monsterAbility[i]);
        if(monsterData.Lv != 1){
          alert("新しい特技を覚えたよ");
        }
      }
    }

    return monsterData.ability;
}

function judgeAbilityEvoMonster(monsterData){
    //対象モンスターのマスタ
    const monster = MONSTER_MAP.get(monsterData.monsterID);
    
    //対象モンスターのアビリティレベル判定用の値
    const monsterAbility = monster.ability;
    const abilityLv = monster.abilityLv;
    let abilityList = new Array();
    for(let i in abilityLv){
      //レベルに該当する場合は特技を追加
      if(abilityLv[i] <= monsterData.Lv){
        abilityList.push(monsterAbility[i]);
      }
    monsterData.ability = abilityList;
    }
    return monsterData.ability;
}

/** 
 * monsterID : 対象モンスターのID
 * localstrageに新しいモンスターを追加する
*/
function getNewMonster(monsterID){
  let scM = MONSTER_MAP.get(monsterID);
  const monsterData = {
     monsterID : scM.monsterID ,
     monsterName : scM.monsterFamily ,
     Lv : 1 ,
     param : { 
        life : scM.defaultParam.life ,
        power : scM.defaultParam.power ,
        shield : scM.defaultParam.shield , 
        speed : scM.defaultParam.speed ,
        AP : scM.defaultParam.AP},
     skill : {
        point : 0,
        life : 0 ,
        power : 0 ,
        shield : 0 , 
        speed : 0 , 
        AP : 0 , 
        },
    ability : new Array()
  };
  monsterData.ability = judgeAbilityGet(monsterData);
  return monsterData;
}

/**
 * 召喚によって出るモンスターを決定
 */
function resultClassification(){
  let rarityList = [0.05,0.25,1];
  let lotNum = Math.random();
  let rarityIndex;
  for(rarityIndex = 0; lotNum > rarityList[rarityIndex]; rarityIndex++ ){
  }
  let monsterIndex = getRandomIntInclusive(0,GACHA_LIST[rarityIndex].length-1); //0~INDEX-1まde
  let monster = GACHA_LIST[rarityIndex][monsterIndex];
  //return monster.monsterID;
  return monster.monsterID;
}


function getEvoMonster(monsterData){
  //monsterDataのマスタ取得
  const monster = MONSTER_MAP.get(monsterData.monsterID);
  //進化後のマスタ取得
  const evoMonster = MONSTER_MAP.get(monster.evoLine);
  //進化先のパラメータ取得
  const eDefaultParam = evoMonster.defaultParam ;
  
  //skilふり直し
  const skill = monsterData.skill;
  const skillPoint = 
   skill.point +
   skill.life + 
   skill.power +
   skill.shield +
   skill.speed +
   skill.AP;

  let evoMonsterData = {
    monsterID : evoMonster.monsterID ,
    monsterName : evoMonster.monsterFamily ,
    Lv : monsterData.Lv ,
    param : {
      life : eDefaultParam.life  , 
      power : eDefaultParam.power ,
      shield : eDefaultParam.shield , 
      speed : eDefaultParam.speed , 
      AP : eDefaultParam.AP,
    } , 
    skill : {
      point : skillPoint ,
      life : 0 ,
      power : 0 ,
      shield : 0 , 
      speed : 0 ,
      AP : 0},
    condition : monsterData.condition,
  };
  evoMonsterData.ability = judgeAbilityEvoMonster(evoMonsterData);
  if(localStorage.getItem("selectMonster") == monsterData.monsterID){
    localStorage.setItem("selectMonster",evoMonsterData.monsterID);
  }
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
    totalParam += decisionParam(monsterApp);
  }
  return totalParam ;
}

function updateParam(monsterData,addPointArray){
  const appropriates = getAppropriate(monsterData);
  let totalPoint = 0;
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
  params.AP += skillAllocation(appropriates.AP,addPointArray[4]);
  skills.AP += addPointArray[4];
  skills.point -= totalPoint;
  monsterData.param = params;
  monsterData.skill = skills;
  
  return monsterData;
}

function getAppropriate(monsterData){
  let monsterApp = 
    MONSTER_MAP.get(monsterData.monsterID).appropriate;
  return monsterApp;
}


function scanBattleMonster(battleCallback) {
cordova.plugins.barcodeScanner.scan(
  function (result) {//ここから
    if (result.cancelled == 0){
      if(isValidJson(result.text)){
        battleCallback(JSON.parse(codeCreate(result.text)));
      }else{
        alert("モンスターが来てくれませんでした＾＾");
        return;
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
    showFlipCameraButton : false, // iOS and Android
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

function isValidJson(qrcode){
  if(device.platform == "Android"){
    qrcode.slice(1);
  }
  try {
   let cObject = JSON.parse(qrcode);
   if(isFinite(cObject)){
     return false;
   }
  } catch(e) {
    console.log(e.name);
    return false;
  }
  return true;
}

function ScreenSizeDecide(){
  if(device.platform == "Android"){
    return {
      width : window.innerWidth,
      height : window.innerHeight,
    };
  }else{
    return{
      width : screen.availWidth,
      height : screen.availHeight,
    };
  }
}

function codeCreate(qrcode){
    if(device.platform == "Android"){
    qrcode.slice(1);
  }
  return qrcode;
}

function getRandomInt(max) {
  // ランダムな配列
  return Math.floor(Math.random() * Math.floor(max));
}
