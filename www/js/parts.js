const FONT_FAMILY = "'KaiTi','Yu Mincho','Monaco','HG行書体'";
phina.globalize();
/**
 *@関数概要：戦闘画面のメッセージウィンドウを返す関数
 *@return
 *group：メッセージウィンドウを構成するパーツが格納されたまとまりを返す
*/
function setBattleMessage(){
  let group = DisplayElement();
  let messageBox = RectangleShape();
  messageBox.width = 400;
  messageBox.height = 200;
  messageBox.fill = "black";
  messageBox.stroke = "white";
  messageBox.strokeWidth = 10;
  messageBox.cornerRadius = 25;
  messageBox.addChildTo(group).setPosition(master.gridX.center(),master.gridY.center(3));
  let messageLabel = Label();
  messageLabel.text = "";
  messageLabel.fontSize = 18;
  messageLabel.fill = "white";
  messageLabel.addChildTo(group).setPosition(master.gridX.center(),master.gridY.center(3));
  return group;
}

/**
 * @関数概要：前画面に戻るボタン生成用の関数
 * @param
 * master：戻るボタンを生成する画面自身
*/
function backButtonSet(master){
  let buttonScan = Sprite('buttonBack');
  //画面に合わせてサイズ変更
  buttonScan.width = 70;
  buttonScan.height = 70;
  buttonScan.setInteractive(true);
  buttonScan.setPosition(master.gridX.span(2),master.gridY.span(1)).addChildTo(master),
  //ボタンが押された時の処理
  //現在の画面名を前画面に返す
  buttonScan.onpointstart=function(e){
    SoundManager.play("buttonPush");
    master.exit({
      beforePage:master.label,
    });
  };
}

/**
 * @関数概要：前画面に戻るボタン生成用の関数
 * @param
 * master：戻るボタンを生成する画面自身
*/
function escapeButtonSet(master){
  let buttonScan = Sprite('escapeButton');
  //画面に合わせてサイズ変更
  buttonScan.width = 150;
  buttonScan.height = 90;
  buttonScan.setInteractive(true);
  buttonScan.setPosition(master.gridX.center(-4),master.gridY.center(6)).addChildTo(master),
  //ボタンが押された時の処理
  //現在の画面名を前画面に返す
  buttonScan.onpointstart=function(e){
    SoundManager.play("buttonPush");
    master.exit();
  };
}

/**
 * @関数概要：バトル時の自分のモンスターの画像を表示する関数
 * @param
 * master：表示する画面自身
 * charaNum：表示するモンスターのmonsterID
 * posX：モンスター画像のX軸位置(中心が0)
 * posY：モンスター画像のY軸位置(中心が0)
*/
function charaSet(master,charaNum, posX,posY){
    let mainChara = Sprite(charaNum);
    mainChara.width = 200;
    mainChara.height = 200;
    mainChara.scaleX = -1;
    mainChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(master);
    mainChara.setInteractive(true);
}

/**
 * @関数概要：スキャン時の自分のモンスターの画像を表示する関数
 * @param
 * master：表示する画面自身
 * charaNum：表示するモンスターのmonsterID
 * posX：モンスター画像のX軸位置(中心が0)
 * posY：モンスター画像のY軸位置(中心が0)
*/
function scanCharaSet(master,charaNum, posX,posY){
    let mainChara = Sprite(charaNum);
    mainChara.width = 400;
    mainChara.height = 400;
    mainChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(master);
    mainChara.setInteractive(true);
}

/**
 * @関数概要：スキャンリザルト画面にメッセージウィンドウを表示する関数
 * @param
 * master：表示する画面自身
 * text：表示するメッセージ
*/
function setScanResultMessage(master,text){
  let messageBox = RectangleShape();
  messageBox.width = 300;
  messageBox.height = 200;
  messageBox.fill = "black";
  messageBox.stroke = "white";
  messageBox.strokeWidth = 10;
  messageBox.cornerRadius = 25;
  messageBox.addChildTo(master).setPosition(master.gridX.center(),master.gridY.center(2));
  let messageLabel = Label();
  messageLabel.text = text;
  messageLabel.fontSize = 20;
  messageLabel.fill = "white";
  messageLabel.addChildTo(master).setPosition(master.gridX.center(),master.gridY.center(2));
}

/**
 * @関数概要：画面下部のメニューバーの背景部分の画像を表示する関数
 * @param
 * master：表示する画面自身
*/
function menuBuckGroundSet(master){
  let menuBar = Sprite('menuBar');
  //画面に合わせてサイズ変更
  let magnification =(SCREEN_WIDTH / menuBar.width);
  menuBar.width *= magnification;
  menuBar.height *= magnification;
  menuBar.setPosition(master.gridX.center(),master.gridY.span(15)).addChildTo(master);
  return magnification;
}

/**
 * @関数概要：画面下部のメニューバーと戻るボタンを表示する関数
 * @param
 * master：表示する画面自身
*/
function menuSet(master){
  backButtonSet(master);
  let magnification = menuBuckGroundSet(master);
  battleButtonSet(master,magnification);
  BoxButtonSet(master,magnification);
  ScanButtonSet(master,magnification);
}

/**
 * @関数概要：画面下部のメニューバーのみを表示する関数
 * @param
 * master：表示する画面自身
*/
function underMenuSet(master){
  let magnification = menuBuckGroundSet(master);
  battleButtonSet(master,magnification);
  BoxButtonSet(master,magnification);
  ScanButtonSet(master,magnification);
};

/**
 * @関数概要：画面下部のメニューバーのバトル遷移ボタンを表示する関数
 * @param
 * master：表示する画面自身
 * magnification：画像のサイズ比率
*/
function battleButtonSet(master,magnification){
  let buttonBattle = Sprite('buttonBattle');
  //画面に合わせてサイズ変更
  buttonBattle.width *= magnification;
  buttonBattle.height *= magnification;
  buttonBattle.setInteractive(true);
  buttonBattle.setPosition(master.gridX.center(-5),master.gridY.span(15)).addChildTo(master),buttonBattle.onpointstart=function(e){
    SoundManager.play("buttonPush");
    master.exit('battlePage');
  };
}

/**
 * @関数概要：バトルセレクト画面でのバトルモード選択ボタン表示用関数
 * @param
 * master：表示する画面自身
 * flag：現在のモードがCPUかフレンドかをの値
*/
function battleSelectButtonSet(master,flag){
  console.log("今のタイプ：" + flag);
  let bfModeSelectGroup = DisplayElement().addChildTo(master);
  let bcModeSelectGroup = DisplayElement().addChildTo(master);
  //"Unsettled":未確定,"CPU":CPUバトル時,"Friend":フレンドバトル時
  let BattleTypeFlag = flag;


  let buttonBattleCPU = Sprite('buttonBattleCPU');
  //画面に合わせてサイズ変更
  let magnificationCPU =(SCREEN_WIDTH / buttonBattleCPU.width);
  buttonBattleCPU.width *= magnificationCPU;
  buttonBattleCPU.height *= magnificationCPU;
  buttonBattleCPU.setInteractive(true);
  buttonBattleCPU.setPosition(master.gridX.center(),master.gridY.span(4)).addChildTo(bfModeSelectGroup),buttonBattleCPU.onpointstart=function(e){
    SoundManager.play("buttonPush");
    if(localStorage.getItem("selectMonster") != undefined){
      SoundManager.play("buttonPush");
      BattleTypeFlag = "CPU";
      bfModeSelectGroup.children.clear();
      bcModeSelectGroup.children.clear();
      master.children.last.remove();
      master.children.last.remove();
      master.children.last.remove();
      master.children.last.remove();
      battleSelectButtonSet(master,BattleTypeFlag);
    }else{
      alert(`バトルモンスターが\nセットされていません`);
    }
  };

  let buttonBattleFriend = Sprite('buttonBattleFriend');
    //画面に合わせてサイズ変更
  let magnificationFriend =(SCREEN_WIDTH / buttonBattleFriend.width);
  buttonBattleFriend.width *= magnificationFriend;
  buttonBattleFriend.height *= magnificationFriend;
  buttonBattleFriend.setInteractive(true);
  buttonBattleFriend.setPosition(master.gridX.center(),master.gridY.span(11)).addChildTo(bfModeSelectGroup),buttonBattleFriend.onpointstart=function(e){
    SoundManager.play("buttonPush");
    BattleTypeFlag = "Friend";
    bfModeSelectGroup.children.clear();
    bcModeSelectGroup.children.clear();
    master.children.last.remove();
    master.children.last.remove();
    master.children.last.remove();
    master.children.last.remove();
    battleSelectButtonSet(master,BattleTypeFlag);
  };

  let backGround = RectangleShape({
      width:SCREEN_WIDTH,
      height:SCREEN_HEIGHT,
      fill:"black",
      stroke:"black",
      strokeWidth:10,
      cornerRadius:0
  }).addChildTo(bfModeSelectGroup).setPosition(master.gridX.center(),master.gridY.center());

  let qrGetButton = Button({
        text: "読み取る！",
        width: 300,
        height: 200, 
        fontSize: 50,
        fontColor: 'white',
        fill: 'red',
        //align: "left",
  }).addChildTo(bfModeSelectGroup).setPosition(master.gridX.center(0),master.gridY.center(-3));
  qrGetButton.onpointstart=function(e){
  console.log("押されましたね");
  SoundManager.play("buttonPush");
  //明日こっから
      scanBattleMonster(function(monsterData) {
        master.exit("battleFriendPage",{
          resultMonster: monsterData,
        });
    });
  };

  let qrSetButton = Button({
        text: "表示する！",
        width: 300,
        height: 200, 
        fontSize: 50,
        fontColor: 'white',
        fill: 'blue',
        //align: "left",
  }).addChildTo(bfModeSelectGroup).setPosition(master.gridX.center(0),master.gridY.center(3));
  qrSetButton.onpointstart=function(e){
    console.log("押されましたね");
    SoundManager.play("buttonPush");
    if(localStorage.getItem("selectMonster") != undefined){
      master.exit('qrSetPage');
    }else{
      alert(`バトルモンスターが\nセットされていません`);
    }
  };

  let buttonBattleCPUS = Sprite('battleCPUSelectButtonS');
  buttonBattleCPUS.width = 400;
  buttonBattleCPUS.height = 120;
  buttonBattleCPUS.setPosition(master.gridX.center(),master.gridY.span(3)).addChildTo(bcModeSelectGroup),
  buttonBattleCPUS.onpointstart = function(e){
    console.log("押しちゃったね");
    master.exit('battleCpuPage',{
      enemyRarity : "S",
    });
  };

  let buttonBattleCPUA = Sprite('battleCPUSelectButtonA');
  buttonBattleCPUA.width = 400;
  buttonBattleCPUA.height = 120;
  buttonBattleCPUA.setPosition(master.gridX.center(),master.gridY.span(6)).addChildTo(bcModeSelectGroup),
  buttonBattleCPUA.onpointstart = function(e){
    master.exit('battleCpuPage',{
      enemyRarity : "A",
    });
  };

  let buttonBattleCPUB = Sprite('battleCPUSelectButtonB');
  buttonBattleCPUB.width = 400;
  buttonBattleCPUB.height = 120;
  buttonBattleCPUB.setPosition(master.gridX.center(),master.gridY.span(9)).addChildTo(bcModeSelectGroup),
  buttonBattleCPUB.onpointstart = function(e){
    master.exit('battleCpuPage',{
      enemyRarity : "B",
    });
  };

  let buttonBattleCPUC = Sprite('battleCPUSelectButtonC');
  buttonBattleCPUC.width = 400;
  buttonBattleCPUC.height = 120;
  buttonBattleCPUC.setPosition(master.gridX.center(),master.gridY.span(12)).addChildTo(bcModeSelectGroup),
  buttonBattleCPUC.onpointstart = function(e){
    master.exit('battleCpuPage',{
      enemyRarity : "C",
    });
  };

  underMenuSet(master);

  // if(BattleTypeFlag != "Unsettled"){
  //   backGround.setInteractive(true);
  //   backGround.alpha = 0.6;
  // }
  if(BattleTypeFlag == "Friend"){
    buttonBattleFriend.setInteractive(false);
    buttonBattleCPU.setInteractive(false);
    buttonBattleCPUS.alpha = 0;
    buttonBattleCPUA.alpha = 0;
    buttonBattleCPUB.alpha = 0;
    buttonBattleCPUC.alpha = 0;
    buttonBattleCPUS.setInteractive(false);
    buttonBattleCPUA.setInteractive(false);
    buttonBattleCPUB.setInteractive(false);
    buttonBattleCPUC.setInteractive(false);
    qrGetButton.setInteractive(true);
    qrSetButton.setInteractive(true);
    qrGetButton.alpha = 1;
    qrSetButton.alpha = 1;
  }else if(BattleTypeFlag == "CPU"){
    console.log("ここきたよ");
    buttonBattleCPU.setInteractive(false);
    buttonBattleFriend.setInteractive(false);
    buttonBattleCPUS.alpha = 1;
    buttonBattleCPUA.alpha = 1;
    buttonBattleCPUB.alpha = 1;
    buttonBattleCPUC.alpha = 1;
    buttonBattleCPUS.setInteractive(true);
    buttonBattleCPUA.setInteractive(true);
    buttonBattleCPUB.setInteractive(true);
    buttonBattleCPUC.setInteractive(true);
    qrGetButton.setInteractive(false);
    qrSetButton.setInteractive(false);
    qrGetButton.alpha = 0;
    qrSetButton.alpha = 0;
    console.log("Sボタン触れる？" + buttonBattleCPUS.interactive);
  }else{
    backGround.setInteractive(false);
    buttonBattleCPU.setInteractive(true);
    buttonBattleFriend.setInteractive(true);
    qrGetButton.setInteractive(false);
    qrSetButton.setInteractive(false);
    buttonBattleCPUS.alpha = 0;
    buttonBattleCPUA.alpha = 0;
    buttonBattleCPUB.alpha = 0;
    buttonBattleCPUC.alpha = 0;
    buttonBattleCPUS.setInteractive(false);
    buttonBattleCPUA.setInteractive(false);
    buttonBattleCPUB.setInteractive(false);
    buttonBattleCPUC.setInteractive(false);
    qrGetButton.alpha = 0;
    qrSetButton.alpha = 0;
    backGround.alpha = 0;
  }

  backGround.onpointstart=function(e){
    BattleTypeFlag = "Unsettled";
    bfModeSelectGroup.children.clear();
    bcModeSelectGroup.children.clear();
    master.children.last.remove();
    master.children.last.remove();
    master.children.last.remove();
    master.children.last.remove();
    battleSelectButtonSet(master,BattleTypeFlag);
  };
}

/**
 * @関数概要：画面下部のメニューバーのボックス遷移ボタンを表示する関数
 * @param
 * master：表示する画面自身
 * magnification：画像のサイズ比率
*/
function BoxButtonSet(master,magnification){
  let buttonBox = Sprite('buttonBox');
  //画面に合わせてサイズ変更
  buttonBox.width *= magnification;
  buttonBox.height *= magnification;
  buttonBox.setInteractive(true);
  buttonBox.setPosition(master.gridX.center(),master.gridY.span(15)).addChildTo(master),buttonBox.onpointstart=function(e){
    SoundManager.play("buttonPush");
    master.exit('boxPage',{
      beforePage:master.label,
    });
  };
}

/**
 * @関数概要：画面下部のメニューバーの召喚遷移ボタンを表示する関数
 * @param
 * master：表示する画面自身
 * magnification：画像のサイズ比率
*/
function ScanButtonSet(master,magnification){
  let buttonScan = Sprite('buttonScan');
  //画面に合わせてサイズ変更
  buttonScan.width *= magnification;
  buttonScan.height *= magnification;
  buttonScan.setInteractive(true);
  buttonScan.setPosition(master.gridX.center(5),master.gridY.span(15)).addChildTo(master),buttonScan.onpointstart=function(e){
    SoundManager.play("buttonPush");
    master.exit('scanPage');
  };
}

/**
 * @関数概要：召喚画面で召喚ボタンを表示する関数
 * @param
 * master：表示する画面自身
*/
function ScanStartButton(master){
  let buttonScanStart = Sprite('scanStartButton');
  //画面に合わせてサイズ変更
  buttonScanStart.width = 300;
  buttonScanStart.height = 300;
  buttonScanStart.setInteractive(true);
  buttonScanStart.setPosition(master.gridX.center(),master.gridY.center()).addChildTo(master),buttonScanStart.onpointstart=function(e){
    SoundManager.play("scanStartBGM");
    this.monsterData;
    scanBarcode(function(monsterData) {
        master.exit("scanResultPage",{
          resultMonster: monsterData,
        });
    });
  };
}

/**
 * @関数概要：バトル画面でのモンスターのHPゲージを表示する関数
 * @param
 * master：表示する画面自身
 * monster：ゲージにHPを表示するモンスターの情報
 * x：X軸の表示位置
 * y：y軸の表示位置
*/
function gaugeSet(master,monster,x,y){
  let charaGauge =Gauge({
    // x: 100, y: 300,        // x,y座標
    width: 150,            // 横サイズ
    height: 30,            // 縦サイズ
    cornerRadius: 10,      // 角丸み
    maxValue: monster.param.life,         // ゲージ最大値
    value: monster.param.life,         // ゲージ初期値
    // maxValue: 100,         // ゲージ最大値
    // value: 100,         // ゲージ初期値
    fill: 'red',         // 後ろの色
    gaugeColor: '#00f535', // ゲージ色
    stroke: 'silver',      // 枠色
    strokeWidth: 5,        // 枠太さ
  }).addChildTo(master).setPosition(master.gridX.center(x),master.gridY.center(y));
   let HPGGridX = Grid({
      width: charaGauge.width,
      //状態異常の数↓
      columns: 5,
      offset: master.gridX.center(x),
   });
   let HPGGridY = Grid({
      width: charaGauge.height,
      columns: 3,
      offset: master.gridY.center(y),
   });
  let HPGNameLabel = Label({
    text: "HP",
    fontSize: 20,
    fill: 'white',
  }).addChildTo(master).setPosition(HPGGridX.span(-2),HPGGridY.span(0));
  return charaGauge;
}

/**
 * @関数概要：バトル画面でのモンスターのHPゲージを表示する関数
 * @param
 * master：表示する画面自身
 * monster：ゲージにHPを表示するモンスターの情報
 * x：X軸の表示位置
 * y：y軸の表示位置
*/
function APGaugeSet(master,monster,x,y){
  let charaGauge =Gauge({
        // x: 100, y: 300,        // x,y座標
        width: 150,            // 横サイズ
        height: 30,            // 縦サイズ
        cornerRadius: 10,      // 角丸み
        maxValue: monster.param.AP,         // ゲージ最大値
        value: monster.param.AP,         // ゲージ初期値
        // maxValue: 100,         // ゲージ最大値
        // value: 100,         // ゲージ初期値
        fill: 'black',         // 後ろの色
        gaugeColor: '#9007a6', // ゲージ色
        stroke: 'gray',      // 枠色
        strokeWidth: 5,        // 枠太さ
   }).addChildTo(master).setPosition(master.gridX.center(x),master.gridY.center(y));
   let APGGridX = Grid({
      width: charaGauge.width,
      //状態異常の数↓
      columns: 5,
      offset: master.gridX.center(x),
   });
   let APGGridY = Grid({
      width: charaGauge.height,
      columns: 3,
      offset: master.gridY.center(y),
   });
  let APGNameLabel = Label({
    text: "AP",
    fontSize: 20,
    fill: 'white',
  }).addChildTo(master).setPosition(APGGridX.span(-2),APGGridY.span(0));
  return charaGauge;
}

function conditionIconSet(master,group,condition,posX,posY){
  console.log(master + ":" + group + ":" + condition);
  if(condition == "normal"){
    group.children.clear();
    return group;
  }else{
    console.log("こっちはいったよ");
    group.children.clear();
    let conditionGroup = group;
    let cIconGridX = Grid({
      width: 150,
      //状態異常の数↓
      columns: 5,
      offset: master.gridX.center(posX),
    });
    let cIconGridY = Grid({
      width: 40,
      columns: 3,
      offset: master.gridY.center(posY),
    });
    let conditionIcon = Sprite(condition);
    conditionIcon.width = 40;
    conditionIcon.height = 40;
    conditionIcon.setPosition(cIconGridX.span(-2),cIconGridY.span(-1));
    //conditionIcon.setPosition(master.gridX.center(0),master.gridY.center());
    conditionIcon.addChildTo(conditionGroup);
    conditionGroup.addChildTo(master);
    return conditionGroup
  }
  
}

/**
 * @関数概要：バトルリザルト画面でモンスターの画像を表示する関数
 * @param
 * master：表示する画面自身
 * charaNum：表示するモンスターのID
*/
function charaResultSet(master,charaNum){
    let mainChara = Sprite(charaNum);
    mainChara.width = 400;
    mainChara.height = 400;
    mainChara.scaleX = -1;
    mainChara.setPosition(master.gridX.center(),master.gridY.center(-2)).addChildTo(master);
    mainChara.setInteractive(true);
}

/**
 * @関数概要：召喚リザルト画面でモンスターの画像を表示する関数
 * @param
 * master：表示する画面自身
 * monster：表示するモンスターの情報
*/
function getCharaResultSet(master,monster){
  let getMonsterImage = Sprite(monster.monsterID);
  mainChara.width = 500;
  mainChara.height = 500;
  mainChara.setPosition(master.gridX.center(),master.gridY.center(-4)).addChildTo(master);
  let getMonsterName = Label();
  getMonsterName.text = monster.monsterName;
  getMonsterName.fontSize = 30;
  getMonsterName.fill = "white";
  mainChara.setPosition(master.gridX.center(),master.gridY.center(1)).addChildTo(master);
}

/**
 * @関数概要：バトル画面で自分のモンスターの画像を表示する関数
 * @param
 * master：表示する画面自身
 * charaNum：表示するモンスターのID
 * posX：x軸の表示位置
 * posY：y軸の表示位置
*/
function charaEnemySet(master,charaNum, posX,posY){
    let mainEnemyChara = Sprite(charaNum);
    mainEnemyChara.width = 200;
    mainEnemyChara.height = 200;
    mainEnemyChara.scaleX = 1;
    mainEnemyChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(master);
    mainEnemyChara.setInteractive(true);
}

/**
 * @関数概要：召喚リザルト画面でモンスターの画像を表示する関数
 * @param
 * master：表示する画面自身
 * monster：表示するモンスターの情報
*/
function BattleStartButton(master){
  var mBattleButton = baseButton('バトル開始！',200,70,'white','red');
  mBattleButton.setPosition(master.gridX.center(),master.gridY.center()).addChildTo(master),mBattleButton.onpush=function(e){
    SoundManager.play("buttonPush");
    master.exit('battleCpuPage');
  }
}

/**
 * @関数概要：ボックス画面でモンスター画像を表示する関数
 * @param
 * master：表示する画面自身
 * group：パーツをまとめるグループ
 * jsonMonster：表示するモンスターの情報
 * posX：x軸の表示位置
 * posY：y軸の表示位置
*/
function boxcharaSet(master,group,jsonMonster,posX,posY){
    console.log(jsonMonster.monsterID);
    let boxCharaBg = Sprite("boxSelectBg");
    boxCharaBg.width = 100;
    boxCharaBg.height = 100;
    boxCharaBg.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(group);
    let boxChara = Sprite(jsonMonster.monsterID);
    boxChara.width = 140;
    boxChara.height = 140;
    boxChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(group);
    boxChara.setInteractive(true);
    boxChara.onpointstart = function(e) {
      SoundManager.setVolume(2.0);
      SoundManager.play('boxSelectButton');
      SoundManager.setVolume(0.8);
      master.exit('characterChack',{boxCharaResults:jsonMonster});
    }
    let selectCharaGridX = Grid({
      width: 140,
      columns: 5,
      offset: master.gridX.center(posX),
    });
    let selectCharaGridY = Grid({
      width: 140,
      columns: 5,
      offset: master.gridY.center(posY),
    });
    if(localStorage.getItem("selectMonster") == jsonMonster.monsterID){
      let selectIcon = Sprite('boxSelectIcon');
      selectIcon.width = 40;
      selectIcon.height = 40;
      selectIcon.addChildTo(group).setPosition(selectCharaGridX.span(1),selectCharaGridY.span(-1));
    }
}

/**
 * @関数概要：ボックス画面の画面全体を管理する関数
 * @param
 * master：表示する画面自身
 * monsterList：表示するモンスターの情報のリスト
 * startNum：リストの何番目から表示するかを決める値
 * pageNum：表示するページの番号
*/
function boxPageView(master,monsterList,startNum,pageNum){
  let x = -5;
  let y = -4;
  let boxViewGroup = DisplayElement().addChildTo(master);
  let startCount = startNum;
  let addCount = 0;
  let monsterListLen = Object.keys(monsterList).length;
  if( monsterListLen % 9 != 0 ){
    addCount = 1;
  }
  console.log(Object.keys(monsterList).length);
  let pageMax = Math.floor(monsterListLen / 9) + addCount;
  console.log("ページ最大数：" + pageMax);
  let roopCount = 9;
  if( 9 > monsterListLen - startCount ){
    roopCount = monsterListLen - startCount;
  }
  for(let i = 0; i < roopCount; i++){
      boxcharaSet(master,boxViewGroup,monsterList[startCount + i],x, y);
      if(x == 5){
        y += 4;
        x = -5;
      }else{
        x += 5;
      }
   }

   let pageDownButton = Button({
      text: "<",
      width: 50,
      height: 50, 
      fontSize: 50,
      fontColor: 'white',
      fill: 'white',
      align: "left",
   }).addChildTo(boxViewGroup).setPosition(master.gridX.center(3),master.gridY.center(-7));
   
   if( pageNum > 1 ){
     pageDownButton.setInteractive(true);
     fontColor: 'white',
     pageDownButton.fill = 'green';
   }else{
     pageDownButton.setInteractive(false);
     fontColor: 'white',
     pageDownButton.fill = 'gray';
   }
   pageDownButton.onpointstart = function(e) {
      SoundManager.setVolume(2.0);
      SoundManager.play('boxPageButton');
      SoundManager.setVolume(0.8);
      pageNum--;
      startCount -= 9;
      boxViewGroup.children.clear();
      boxPageView(master,monsterList,startCount,pageNum);
   };

   let pageUpButton = Button({
      text: ">",
      width: 50,
      height: 50, 
      fontSize: 50,
      fontColor: 'white',
      fill: 'white',
      align: "left",
   }).addChildTo(boxViewGroup).setPosition(master.gridX.center(6),master.gridY.center(-7));
   
   if( pageNum != pageMax ){
     pageUpButton.setInteractive(true);
     fontColor: 'white',
     pageUpButton.fill = 'green';
   }else{
     pageUpButton.setInteractive(false);
     fontColor: 'white',
     pageUpButton.fill = 'gray';
   }
   pageUpButton.onpointstart = function(e) {
      SoundManager.setVolume(2.0);
      SoundManager.play('boxPageButton');
      SoundManager.setVolume(0.8);
      pageNum++;
      startCount += 9;
      boxViewGroup.children.clear();
      boxPageView(master,monsterList,startCount,pageNum);
   };

}

/**
 * @関数概要：ボックス詳細画面でモンスター画像を表示する関数
 * @param
 * master：表示する画面自身
 * charaNum：表示するモンスターのID
*/
function boxCharaDSet(master,charaNum){
  let boxCharaD = Sprite(charaNum);
  boxCharaD.width = 250;
  boxCharaD.height = 250;
  boxCharaD.setPosition(master.gridX.center(0),master.gridY.center(-4)).addChildTo(master);
}

/**
 * @関数概要：ボックス詳細画面でモンスター情報を表示する関数
 * @param
 * master：表示する画面自身
 * group：パーツをまとめるグループ
 * monster：詳細情報を表示するモンスターの情報
 * pointSetArray：スキルポイントを割り振った数をステータス項目ごとにまとめた配列
 * magnification：パーツを表示する際の比率
*/
function viewUpdateInfo(master,group,monster,pointSetArray,magnification){
  let rowNum = 1;
  let statusTextArray = ["HP:","攻撃力:","防御力:","素早さ:","AP:"];
  let statusNumArray = [monster.param.life,monster.param.power,monster.param.shield,monster.param.speed,monster.param.AP];
  let totalSetPoint = 0;
  let nameLabel = Label({
      text: monster.monsterName,
      fontSize: 30 * magnification,
      fill: 'white',
    }).addChildTo(group).setPosition(master.gridX.center(-1),master.gridY.center(0));

  let lvLabel = Label({
    text: "Lv." + monster.Lv,
    fontSize: 30 * magnification,
    fill: 'white',
    align: "left",
  }).addChildTo(group).setPosition(master.gridX.center(4),master.gridY.center(0)); 

    for (let i = 0; i < 5; i++){

      let statusLabel = Label({
        text: statusTextArray[i] + statusNumArray[i],
        fontSize: 30 * magnification,
        fill: 'white',
        align: "left",
    }).addChildTo(group).setPosition(master.gridX.center(-6),master.gridY.center(1+i));
    
    let updatePointLabel = Label({
        text: "",
        fontSize: 30 * magnification,
        fill: 'red',
        align: "left",
    }).addChildTo(group).setPosition(master.gridX.center(0),master.gridY.center(1+i));

    if(pointSetArray[i] > 0){
      updatePointLabel.text = "+" + pointSetArray[i];
    }else{
      updatePointLabel.text = "";
    }

    let statusUpButton = Button({
        text: "+",
        width: 50 * magnification,
        height: 40 * magnification, 
        fontSize: 50 * magnification,
        fontColor: 'white',
        fill: 'white',
        align: "left",
    }).addChildTo(group).setPosition(master.gridX.center(3),master.gridY.center(1+i));
    statusUpButton.onpointstart = function(e) {
      SoundManager.setVolume(2.0);
      SoundManager.play('skillSelectButton');
      SoundManager.setVolume(0.8);
      monster.skill.point--;
      pointSetArray[i]++;
      viewUpdateStatus(group);
      viewUpdateInfo(master,group,monster,pointSetArray,magnification);
    };

    if(monster.skill.point > 0){
      statusUpButton.setInteractive(true);
      fontColor: 'black',
      statusUpButton.fill = 'yellow';
    }else{
      statusUpButton.setInteractive(false);
      fontColor: 'white',
      statusUpButton.fill = 'gray';
    }
    let statusDownButton = Button({
        text: "-",
        width: 50 * magnification,
        height: 40 * magnification, 
        fontSize: 50 * magnification,
        fontColor: 'white',
        fill: 'white',
        align: "left",
    }).addChildTo(group).setPosition(master.gridX.center(5),master.gridY.center(1+i));

    statusDownButton.onpointstart = function(e) {
      SoundManager.setVolume(2.0);
      SoundManager.play('skillSelectButton');
      SoundManager.setVolume(0.8);
      monster.skill.point++;
      pointSetArray[i]--;
      viewUpdateStatus(group);
      viewUpdateInfo(master,group,monster,pointSetArray,magnification);
    };

    if(pointSetArray[i] > 0){
      statusDownButton.setInteractive(true);
      fontColor: 'black',
      statusDownButton.fill = 'yellow';
    }else{
      statusDownButton.setInteractive(false);
      fontColor: 'white',
      statusDownButton.fill = 'gray';
    }

    rowNum+=1;
  }
  let statusSkillPointLabel = Label({
      text: "スキルポイント:" + monster.skill.point,
      fontSize: 25 * magnification,
      fill: 'yellow',
      align: "left",
   }).addChildTo(group).setPosition(master.gridX.center(-6),master.gridY.center(6));

  let statusSkillUpdateButton = Button({
      text: "決定!",
      width: 110 * magnification,
      height: 50 * magnification, 
      fontColor: 'white',
      fontSize: 40 * magnification,
      fill: 'white',
      align: "left",
   }).addChildTo(group).setPosition(master.gridX.center(4),master.gridY.center(6));
  for(let pointSet of pointSetArray){
    totalSetPoint += pointSet;
  }
  if(totalSetPoint > 0){
    statusSkillUpdateButton.setInteractive(true);
    statusSkillUpdateButton.fill = 'green';
  }else{
    statusSkillUpdateButton.setInteractive(false);
    statusSkillUpdateButton.fill = 'gray';
  }

  statusSkillUpdateButton.onpointstart = function(e) {
    SoundManager.setVolume(2.0);
    SoundManager.play('skillUpdateButton');
    SoundManager.setVolume(0.8);
    alert('ステータスアップ！！');
    let updateMonster = updateParam(monster,pointSetArray);
    console.log(JSON.stringify(updateMonster));
    alert('ステータスが更新されました。');
    localStorage.setItem(updateMonster.monsterID,JSON.stringify(updateMonster));
    pointSetArray = [0,0,0,0,0];
    viewUpdateStatus(group);
    viewUpdateInfo(master,group,updateMonster,pointSetArray,magnification);
  }

  let selectMonsterButton = Button({
      text: "",
      width: 200 * magnification,
      height: 60 * magnification, 
      fontColor: 'white',
      fontSize: 40 * magnification,
      fill: 'white',
      align: "left",
   }).addChildTo(group).setPosition(master.gridX.center(3),master.gridY.center(-7));

  console.log(localStorage.getItem("selectMonster"));
  if( localStorage.getItem("selectMonster") == null || localStorage.getItem("selectMonster") != monster.monsterID){
    selectMonsterButton.setInteractive(true);
    selectMonsterButton.fill = "blue";
    selectMonsterButton.text = "連れていく"
  }else{
    selectMonsterButton.setInteractive(false);
    selectMonsterButton.fill = "gray";
    selectMonsterButton.text = "セット済み";
  }

  selectMonsterButton.onpointstart = function(e) {
      alert(monster.monsterName + `\nをバトルモンスターにセットしました！`);
      console.log(JSON.stringify(monster));
      localStorage.setItem("selectMonster",monster.monsterID);
      viewUpdateStatus(group);
      viewUpdateInfo(master,group,monster,pointSetArray,magnification);
  }

}

/**
 * @関数概要：指定されたグループ内の要素をすべて消去する関数
 * @param
 * group：要素を削除するグループ名
*/
function viewUpdateStatus(group){
  group.children.clear();
}

/**
 * @関数概要：ボックス詳細画面の全体を管理する関数
 * @param
 * master：表示する画面自身
 * monster：表示するモンスターの情報
*/
function boxCharaInfoSet(master,monster){
  let magnification = SCREEN_WIDTH / 412;
  let pointSetArray = [0,0,0,0,0];
  let messageBox = RectangleShape();
  messageBox.width = 400 * magnification;
  messageBox.height = 400 * magnification;
  messageBox.fill = "black";
  messageBox.stroke = "white";
  messageBox.strokeWidth = 10;
  messageBox.cornerRadius = 25;
  messageBox.addChildTo(master).setPosition(master.gridX.center(),master.gridY.center(3));
  let viewStatusGroup = DisplayElement().addChildTo(master);
  viewUpdateInfo(master,viewStatusGroup,monster,pointSetArray,magnification);
}

/**
 * @関数概要：ホーム画面でモンスター情報を表示する関数
 * @param
 * master：表示する画面自身
 * monsterData：表示するモンスターの情報
*/
function mainInfoLabel(master,monsterData){
  let monsterNameLabel = Label({
        text: "【" + monsterData.monsterName + "】",
        fontSize: 30,
        fill: 'white',
  }).addChildTo(master).setPosition(master.gridX.center(0),master.gridY.center(-6));
  let monsterMasterData = MONSTER_MAP.get(monsterData.monsterID);
  let monsterCommentLabel = Label({
        text: monsterMasterData.comment,
        fontSize: 20,
        fill: 'white',
        align: 'left',
  }).addChildTo(master).setPosition(master.gridX.center(-7),master.gridY.center(-4));
}

function mainCharaInfoSet(master,monster){
  let pointSetArray = [0,0,0,0,0];
  let viewStatusGroup = DisplayElement().addChildTo(master);
  monster.life
}

/**
 * @関数概要：ホーム画面でモンスター情報を表示するウィンドウを作る関数
 * @param
 * master：表示する画面自身
 * monsterData：表示するモンスターの情報
*/
function mainPageMonsterInfo(master,monsterData){
  //let magnification = SCREEN_WIDTH / 412;
  //let infoGroup = DisplayElement().addChildTo(master);
  let messageBox = RectangleShape();
  messageBox.width = 400;
  messageBox.height = 300;
  messageBox.fill = "black";
  messageBox.stroke = "white";
  messageBox.strokeWidth = 10;
  messageBox.cornerRadius = 25;
  messageBox.alpha = 0.5;
  messageBox.addChildTo(master).setPosition(master.gridX.center(),master.gridY.center(-4));
  mainInfoLabel(master,monsterData);
}

/**
 * @関数概要：フレンドバトル時に自分のモンスターのQRコードを生成する関数
 * @param
 * master：表示する画面自身
*/
function qrCodeGenerator(master){
  let qrcodeImage;
  let qrcode = document.getElementById("qrcode");
  qrcode.textContent="";
  //let barcode = document.getElementById("barcode");
  let sendMonster = monsterDataCompress(JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster"))));
  let text = JSON.stringify(sendMonster);
  console.log(text);
  console.log("データサイズ" + text.legnth);
  let qrcode_object = new QRCode(
                qrcode,
                {
                    text: text,
                    width: 1000,
                    height: 1000,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
  var flow = Flow(function(resolve) {
      html2canvas(document.querySelector("#qrcode")).then(canvas => {
        qrcodeImage = canvas.toDataURL("image/jpg");
      })
      let timer = setInterval(function(){
        if(qrcodeImage != undefined ){
          clearInterval(timer);
          resolve();
        }
      },300);
    });
    flow.then(function() {
      var loader = phina.asset.AssetLoader();
      loader.load({
        // 画像
        image: {
          monsterQR : qrcodeImage,
        },
      });
      let monsterQRAsset = phina.asset.AssetManager.get("image","monsterQR");
      loader.on('load', function() {
        renderEndFlag = true; 
      });
    });
}

/**
 * @関数概要：QRコードにする際にモンスターの情報を加工する関数
 * @param
 * monsterData：表示するモンスターの情報
*/
function monsterDataCompress(monsterData){
  let compressMonster = {
    mID : monsterData.monsterID,
    Lv: monsterData.Lv,
    param:[monsterData.param.life,monsterData.param.power,monsterData.param.shield,monsterData.param.speed,monsterData.param.AP],
    ability:monsterData.ability,
  }
  return compressMonster;
}




//こっから下はマジで無理だったところ、むかつく、一生恨んでやる

//ゴミ溜め(ポップアップメッセージ編)
// function popUp(master,message,getWidth,getHeight){
//     alert(master.children[0].interactive);
//   let popUpGroup = DisplayElement().addChildTo(master);
//   let popUpBg = RectangleShape({
//     width : SCREEN_WIDTH,
//     height : SCREEN_HEIGHT,
//     fill : "black",
//   }).addChildTo(popUpGroup).setPosition(master.gridX.center(0),master.gridY.center(0));
//   popUpBg.alpha = 0.5;
//   let popUpWindow = RectangleShape({
//     width : getWidth,
//     height : getHeight,
//     fill : "black",  
//     stroke : "white",
//     strokeWidth : 10,
//     cornerRadius : 25,
//   }).addChildTo(popUpGroup).setPosition(master.gridX.center(0),master.gridY.center(0));

//   let popUpMessage = Label({
//     text: message,
//     fontSize: 25,
//     fill: 'white',
//   }).addChildTo(popUpGroup).setPosition(master.gridX.center(0),master.gridY.center(0));

//   popUpWindow.setInteractive(true);
//   popUpWindow.onpointstart = function(e){
//     console.log("ポップアップ消すやで");
//     popUpGroup.children.clear();
//     //master.interactive = true;
//   };
// }


//ゴミ溜め(アビリティ選択編)
//モンスターオブジェクトも渡す、帰り値をアビリティIDにするように
function selectAbilityBar(master,monster,group){
  console.log("次にここ");
  group.children.clear();
  let positionX = -4;
  let positionY = 2;
  let returnID = "";
  //今は普通のfor文だが、本来はabilityArrayの分回す
  for(let i = 0;i < monster.ability.length;i++){
    let abilityData = ABILITY_MAP.get(monster.ability[i]);
    abilityTypeArray = ["ダメージ","状態異常攻撃","状態異常","回復","自回復攻撃","回復攻撃"];
    let selectButton = Sprite("abilitySelectButton");
    selectButton.width = 180;
    selectButton.height = 90;
    selectButton.setInteractive(true);
    selectButton.setPosition(master.gridX.center(positionX),master.gridY.center(positionY)).addChildTo(group);
    selectButton.onpointstart = function(e){
      SoundManager.setVolume(4.0);
      SoundManager.play("abilitySelect");
      SoundManager.setVolume(0.8);
      
      selectAbilityID = abilityData.abilityID;
      group.children.clear();
    };
    let selectAbilityGridX = Grid({
      width: selectButton.width,
      columns: 7,
      offset: master.gridX.center(positionX),
    });
    let selectAbilityGridY = Grid({
      width: selectButton.height,
      columns: 7,
      offset: master.gridY.center(positionY),
    });
    let abilityNameLabel = Label({
      text: abilityData.abilityName,
      fontSize: 20,
      fill: 'white',
      align: "left",
    }).addChildTo(group).setPosition(selectAbilityGridX.span(-3),selectAbilityGridY.span(-1));
    let abilityTypeLabel = Label({
      text: abilityTypeArray[abilityData.abilityType],
      fontSize: 15,
      fill: 'white',
      align: "left",
    }).addChildTo(group).setPosition(selectAbilityGridX.span(-3),selectAbilityGridY.span(2));
    let abilityAPLabel = Label({
      text: abilityData.AP,
      fontSize: 30,
      fill: 'white',
      align: "left",
    }).addChildTo(group).setPosition(selectAbilityGridX.span(2),selectAbilityGridY.span(2));
    positionX += 8;
    if(positionX > 4){
      positionX = -4;
      positionY += 2;
    }
  }
}

//↓帰ったらここから、画面にアビリティID返すだけ
function abilitySelectButton(master,ability,positionX,positionY,group){
  console.log("そのつぎここ");
  
}

