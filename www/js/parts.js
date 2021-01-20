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

function boxcharaSet(master,jsonMonster,posX,posY){
    let boxChara = Sprite(jsonMonster.monsterID);
    boxChara.width = 150;
    boxChara.height = 150;
    boxChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(master);
    boxChara.setInteractive(true);
    boxChara.onpointstart = function(e) {
      master.exit('characterChack',{boxCharaResults:jsonMonster});
    }
}

function boxCharaDSet(master,charaNum){
  let boxCharaD = Sprite(charaNum);
  boxCharaD.width = 250;
  boxCharaD.height = 250;
  boxCharaD.setPosition(master.gridX.center(0),master.gridY.center(-4)).addChildTo(master);
}

function viewUpdateInfo(master,group,monster,testSkillPoint,pointSetArray){
  let rowNum = 1;
  let statusTextArray = ["life:","power:","shield:","speed:"];
  //↓ダサいからあとで変える
  let statusNumArray = [monster.param.life,monster.param.power,monster.param.shield,monster.param.speed];
  let totalSetPoint = 0;
  let nameLabel = Label({
      text: monster.monsterName,
      fontSize: 30,
      fill: 'white',
    }).addChildTo(group).setPosition(master.gridX.center(),master.gridY.center(0));

    for (let i = 0; i < 4; i++){

      let statusLabel = Label({
        text: statusTextArray[i] + statusNumArray[i],
        fontSize: 40,
        fill: 'white',
        align: "left",
    }).addChildTo(group).setPosition(master.gridX.center(-6),master.gridY.center(1+i));
    
    let updatePointLabel = Label({
        text: "",
        fontSize: 30,
        fill: 'red',
        align: "left",
    }).addChildTo(group).setPosition(master.gridX.center(1),master.gridY.center(1+i));

    if(pointSetArray[i] > 0){
      updatePointLabel.text = "+" + pointSetArray[i];
    }else{
      updatePointLabel.text = "";
    }

    let statusUpButton = Button({
        text: "+",
        width: 50,
        height: 50, 
        fontSize: 50,
        fontColor: 'white',
        fill: 'white',
        align: "left",
    }).addChildTo(group).setPosition(master.gridX.center(4),master.gridY.center(1+i));
    statusUpButton.onpointstart = function(e) {
      testSkillPoint--;
      pointSetArray[i]++;
      viewUpdateStatus(group);
      viewUpdateInfo(master,group,monster,testSkillPoint,pointSetArray);
    };

    if(testSkillPoint > 0){
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
        width: 50,
        height: 50, 
        fontSize: 50,
        fontColor: 'white',
        fill: 'white',
        align: "left",
    }).addChildTo(group).setPosition(master.gridX.center(6),master.gridY.center(1+i));

    statusDownButton.onpointstart = function(e) {
      testSkillPoint++;
      pointSetArray[i]--;
      viewUpdateStatus(group);
      viewUpdateInfo(master,group,monster,testSkillPoint,pointSetArray);
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
      text: "skillPoint:" + testSkillPoint,
      fontSize: 40,
      fill: 'yellow',
      align: "left",
   }).addChildTo(group).setPosition(master.gridX.center(-6),master.gridY.center(5));

  let statusSkillUpdateButton = Button({
      text: "決定！",
      width: 130,
      height: 60, 
      fontColor: 'white',
      fontSize: 40,
      fill: 'white',
      align: "left",
   }).addChildTo(group).setPosition(master.gridX.center(0),master.gridY.center(6));
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
      alert('ステータスアップ！！');
      updateParam(pointSetArray);
      alert('ステータスが更新されました。');
  };
}

function viewUpdateStatus(group){
  group.children.clear();
}

function boxCharaInfoSet(master,monster){
  //↓テスト用のスキルポイント
  let testSkillPoint = 5;
  let pointSetArray = [0,0,0,0];
  let messageBox = RectangleShape();
  messageBox.width = 400;
  messageBox.height = 400;
  messageBox.fill = "black";
  messageBox.stroke = "white";
  messageBox.strokeWidth = 10;
  messageBox.cornerRadius = 25;
  messageBox.addChildTo(master).setPosition(master.gridX.center(),master.gridY.center(3));
  let viewStatusGroup = DisplayElement().addChildTo(master);
  viewUpdateInfo(master,viewStatusGroup,monster,testSkillPoint,pointSetArray);
}