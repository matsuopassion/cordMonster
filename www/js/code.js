function scanBarcode() {
cordova.plugins.barcodeScanner.scan(
  function (result) {
    return getSearchData(result.text,result.cancelled);
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
//召喚用のスキャン
function getSearchData(qrText,cancelled) {
  if(cancelled == 1){
    return console.log("なんもスキャンされとらんやないかい");
  } else if(localStorage.getItem(qrText) != null){
   return alert("既にスキャンされています");
  }
  localStorage.setItem(qrText,'exist'); //スキャン済みのQRコード登録
  let monsterID = resultClassification(qrText); //QRコードからモンスターを決定
  let monsterJsonString = localStorage.getItem(monsterID); // ローカルストレージ内にあるJSON取得
  let monsterData;
  if(monsterJsonString == null){
    monsterData = getNewMonster(monsterID);
    alert(monsterData.monsterName + "をゲットしました");
  } else {
    monsterData = levelUpMonster(JSON.parse(monsterJsonString));
  }

  //表示
  localStorage.setItem(monsterID,JSON.stringify(monsterData));
  return monsterData;
}

function levelUpMonster(monsterData){
    monsterData.Lv = monsterData.Lv + 1;
    alert(monsterData.monsterName + "がレベルアップしました");
    const monster = JSON.parse(MONSTER_MAP.get(monsterData.monsterID));
    const monsterAbility = monster.ability;
    const abilityLv = monster.abilityLv;
    
    if(monster.evoLv == monsterData.Lv){ 
      monsterData = getEvoMonster(monsterData);
    }
    for(let i in abilityLv){
      if(abilityLv[i] == monsterData.Lv){ //レベルに該当する場合は特技を追加
        monsterData.ability.push(monsterAbility[i]);
        alert("新しい特技を取得したよ");
      }
    }
    return monsterData;
}

function getNewMonster(monsterID){
  alert(MONSTER_MAP.get(monsterID));
  let scM = JSON.parse(MONSTER_MAP.get(monsterID));
  const monsterData = {
     monsterID : scM.monsterID ,
     monsterName : scM.monsterFamily ,
     Lv : 1 ,
     param : { life : scM.defaultParam.life ,
               power : scM.defaultParam.power ,
               shield : scM.defaultParam.shield , 
               speed : scM.defaultParam.speed },
    ability : ["abt1"],
    condition : ["con1"]
  };
  return monsterData;
}

//モンスターの決定
function resultClassification(text){
  let textLength = text.length;
  let monsterPcs = BASIC_LIST.length;
  let monsterIndex = monsterPcs - 1 - (textLength % monsterPcs);
  let monster = BASIC_LIST[monsterIndex];
  return monster.monsterID;
}

function getEvoMonster(monsterData){
   //進化前のマスタ取得
  const monster = JSON.parse(MONSTER_MAP.get(monsterData.monsterID));
   //進化後のマスタ取得
  const evoMonster = JSON.parse(MONSTER_MAP.get(monster.evoLine));
   //進化先のパラメータ取得
  const eDefaultParam = evoMonster.defaultParam ;
   //進化前のデフォルトパラメータ取得
  const defaultParam = JSON.parse(MONSTER_MAP.get(monsterData.monsterID)).defaultParam;
  let evoMonsterData = {
    monsterID : evoMonster.monsterID ,
    monsterName : evoMonster.monsterFamily ,
    Lv : monsterData.Lv ,
    param : {
      life : monsterData.param.life + eDefaultParam.life - defaultParam.life , 
      power : monsterData.param.power + eDefaultParam.power - defaultParam.power ,
      shield : monsterData.param.shield + eDefaultParam.shield - defaultParam.shield , 
      speed : monsterData.param.speed + eDefaultParam.speed - defaultParam.speed , 
    } ,
    ability : monsterData.ability ,
    condition : monsterData.condition
  }
  alert(monsterData.monsterName + " は "+ evoMonsterData.monsterName + " に進化した");
  return evoMonsterData;
}