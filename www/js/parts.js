// This is a JavaScript file
const FONT_FAMILY = "'KaiTi','Yu Mincho','Monaco','HG行書体'";
phina.globalize();

/*
関数概要：戦闘画面のメッセージを返す関数
引数：phase 誰による行動かを判別するための文字列
      myMonster 自キャラのクラス
      enemy 敵キャラのクラス
      master Sceneの情報
*/
function setBattleMessage(){
  let group = DisplayElement();
  let messageBox = RectangleShape();
  messageBox.width = 400;
  messageBox.height = 300;
  messageBox.fill = "black";
  messageBox.stroke = "white";
  messageBox.strokeWidth = 10;
  messageBox.cornerRadius = 25;
  messageBox.addChildTo(group).setPosition(master.gridX.center(),master.gridY.center(2));
  let messageLabel = Label();
  messageLabel.text = "";
  messageLabel.fontSize = 20;
  messageLabel.fill = "white";
  messageLabel.addChildTo(group).setPosition(master.gridX.center(),master.gridY.center(2));
  return group;
}



//戻るボタン
phina.define("returnButton",{

  superClass: 'Button',
  init(){
    this.superInit({
        width: 50,         // 横サイズ
        height: 50,        // 縦サイズ
        text: "戻る",     // 表示文字
        fontSize: 20,       // 文字サイズ
        fontColor: 'white', // 文字色
        cornerRadius: 10,   // 角丸み
        fill: 'skyblue',    // ボタン色
        stroke: 'blue',     // 枠色
        strokeWidth: 5,     // 枠太さ
    });
  },
});

phina.define("registButton",{

  superClass: 'Button',
  init(){
    this.superInit({
        width: 80,         // 横サイズ
        height: 70,        // 縦サイズ
        text: "登録",     // 表示文字
        fontSize: 32,       // 文字サイズ
        fontColor: 'white', // 文字色
        cornerRadius: 10,   // 角丸み
        fill: 'green',    // ボタン色
        stroke: 'black',     // 枠色
        strokeWidth: 5,     // 枠太さ
        
    });
  }
});

phina.define("baseButton",{

  superClass: 'Button',
  init(text,width,height,fontColor,fill){
    this.superInit({
        width: width,         // 横サイズ
        height: height,        // 縦サイズ
        text: text,     // 表示文字
        fontSize: 32,       // 文字サイズ
        fontColor: fontColor, // 文字色
        cornerRadius: 10,   // 角丸み
        fill: fill,    // ボタン色
        stroke: 'black',     // 枠色
        strokeWidth: 5,     // 枠太さ
        
    });
  }
});

function BackButtonSet(master){
  let buttonScan = Sprite('buttonBack');
  //画面に合わせてサイズ変更
  buttonScan.width = 70;
  buttonScan.height = 70;
  buttonScan.setInteractive(true);
  buttonScan.setPosition(master.gridX.span(2),master.gridY.span(1)).addChildTo(master),buttonScan.onpointstart=function(e){
    SoundManager.play("buttonPush");
    master.exit();
  };
}

function charaSet(master,charaNum, posX,posY){
    let mainChara = Sprite(charaNum);
    mainChara.width = 200;
    mainChara.height = 200;
    mainChara.scaleX = -1;
    mainChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(master);
    mainChara.setInteractive(true);
}

function scanCharaSet(master,charaNum, posX,posY){
    let mainChara = Sprite(charaNum);
    mainChara.width = 400;
    mainChara.height = 400;
    mainChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(master);
    mainChara.setInteractive(true);
}

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

function menuBuckGroundSet(master){
  let menuBar = Sprite('menuBar');
  //画面に合わせてサイズ変更
  let magnification =(SCREEN_WIDTH / menuBar.width);
  menuBar.width *= magnification;
  menuBar.height *= magnification;
  menuBar.setPosition(master.gridX.center(),master.gridY.span(15)).addChildTo(master);
  return magnification;
}

//メニューバーのセット用
function menuSet(master){
  BackButtonSet(master);
  let magnification = menuBuckGroundSet(master);
  battleButtonSet(master,magnification);
  BoxButtonSet(master,magnification);
  ScanButtonSet(master,magnification);
}
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

function battleCPUButtonSet(master){
  let buttonBattleCPU = Sprite('buttonBattleCPU');
  //画面に合わせてサイズ変更
  let magnification =(SCREEN_WIDTH / buttonBattleCPU.width);
  buttonBattleCPU.width *= magnification;
  buttonBattleCPU.height *= magnification;
  buttonBattleCPU.setInteractive(true);
  buttonBattleCPU.setPosition(master.gridX.center(),master.gridY.span(4)).addChildTo(master),buttonBattleCPU.onpointstart=function(e){
    SoundManager.play("buttonPush");
    master.exit('battleCpuPage');
  };
}

function battleFriendButtonSet(master){
  let buttonBattleFriend = Sprite('buttonBattleFriend');
  //画面に合わせてサイズ変更
  let magnification =(SCREEN_WIDTH / buttonBattleFriend.width);
  buttonBattleFriend.width *= magnification;
  buttonBattleFriend.height *= magnification;
  buttonBattleFriend.setInteractive(true);
  buttonBattleFriend.setPosition(master.gridX.center(),master.gridY.span(11)).addChildTo(master),buttonBattleFriend.onpointstart=function(e){
    SoundManager.play("buttonPush");
    //master.exit('battleCpuPage');
  };
}

function BoxButtonSet(master,magnification){
  let buttonBox = Sprite('buttonBox');
  //画面に合わせてサイズ変更
  buttonBox.width *= magnification;
  buttonBox.height *= magnification;
  buttonBox.setInteractive(true);
  buttonBox.setPosition(master.gridX.center(),master.gridY.span(15)).addChildTo(master),buttonBox.onpointstart=function(e){
    SoundManager.play("buttonPush");
    master.exit('boxPage');
  };
}

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

//scanPage用ボタン
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
        gaugeColor: 'skyblue', // ゲージ色
        stroke: 'silver',      // 枠色
        strokeWidth: 5,        // 枠太さ
      }).addChildTo(master).setPosition(master.gridX.center(x),master.gridY.center(y));
  return charaGauge;
}


function charaResultSet(master,charaNum){
    let mainChara = Sprite(charaNum);
    mainChara.width = 400;
    mainChara.height = 400;
    mainChara.scaleX = -1;
    mainChara.setPosition(master.gridX.center(),master.gridY.center(-5)).addChildTo(master);
    mainChara.setInteractive(true);
}

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

function charaEnemySet(master,charaNum, posX,posY){
    let mainChara = Sprite(charaNum);
    mainChara.width = 200;
    mainChara.height = 200;
    mainChara.scaleX = 1;
    mainChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(master);
    mainChara.setInteractive(true);
}

function BattleStartButton(master){
  var mBattleButton = baseButton('バトル開始！',200,70,'white','red');
  mBattleButton.setPosition(master.gridX.center(),master.gridY.center()).addChildTo(master),mBattleButton.onpush=function(e){
    SoundManager.play("buttonPush");
    master.exit('battleCpuPage');
  }
}

function boxButton(master){
  var mBattleButton = baseButton('Boxを確認',200,70,'white','purple');
  mBattleButton.setPosition(master.gridX.center(0),master.gridY.center(0)).addChildTo(master),mBattleButton.onpush=function(e){
    SoundManager.play("buttonPush");
    master.exit("boxChack");
  }
}

function boxcharaSet(master,charaNum, posX,posY){
    let boxChara = Sprite(charaNum);
    boxChara.width = 150;
    boxChara.height = 150;
    boxChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(master);
    boxChara.setInteractive(true);
    boxChara.onpointstart = function(e) {
    master.exit('characterChack',{value1:charaNum});
    }
}