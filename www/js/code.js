// This is a JavaScript file

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
    alert("新しいポケモンをゲットしました");
  } else {
    monsterData = levelUpMonster(JSON.parse(monsterJsonString),monsterID);
  }
  //表示
  localStorage.setItem(monsterID,JSON.stringify(monsterData));
  return monsterData;
}

function levelUpMonster(monsterData,monsterID){
    monsterData.Lv = monsterData.Lv + 1;
    const monster = JSON.parse(MONSTER_MAP.get(monsterID[monsterData.evoLine]));
    const monsterAbility = monster.ability;
    const abilityLv = monster.abilityLv;
    const evoLine = monster.evoLine;

    for(let evoLine of evoLine){
      if( evoLine == monsterData.Lv ){ //レベルに進化のインデックスをずらす
        monsterData.form += 1;
      }
    }

    for(let i in abilityLv){
      console.log(abilityLv[i]);
      if( abilityLv[i] == monsterData.Lv ){ //レベルに該当する場合は特技を追加
        monsterData.ability.push(monsterAbility[i]);
      }
    }
    return monsterData;
}

function getNewMonster(monsterID){
  let scM = JSON.parse(MONSTER_MAP.get(monsterID));
  const monster = {
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
  return monster;
}

//モンスターの決定
function resultClassification(text){
  let textLength = text.length;
  let monsterPcs = MONSTER_MASTER.monsterData.length;
  let monsterIndex = monsterPcs - 1 - (textLength % monsterPcs);
  let monster = MONSTER_MASTER.monsterData[monsterIndex];
  return monster.monsterID; //※配列投げてるよ
}