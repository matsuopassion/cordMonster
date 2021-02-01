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

function underMenuSet(master){
  let magnification = menuBuckGroundSet(master);
  battleButtonSet(master,magnification);
  BoxButtonSet(master,magnification);
  ScanButtonSet(master,magnification);
};

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

function battleSelectButtonSet(master,flag){
  let bfModeSelectGroup = DisplayElement().addChildTo(master);
  let friendBattleFlag = flag;
  let buttonBattleCPU = Sprite('buttonBattleCPU');
  //画面に合わせてサイズ変更
  let magnificationCPU =(SCREEN_WIDTH / buttonBattleCPU.width);
  buttonBattleCPU.width *= magnificationCPU;
  buttonBattleCPU.height *= magnificationCPU;
  buttonBattleCPU.setInteractive(true);
  buttonBattleCPU.setPosition(master.gridX.center(),master.gridY.span(4)).addChildTo(bfModeSelectGroup),buttonBattleCPU.onpointstart=function(e){
    SoundManager.play("buttonPush");
    if(localStorage.getItem("selectMonster") != undefined){
      master.exit('battleCpuPage');
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
    friendBattleFlag = true;
    bfModeSelectGroup.children.clear();
    master.children.last.remove();
    master.children.last.remove();
    master.children.last.remove();
    master.children.last.remove();
    battleSelectButtonSet(master,friendBattleFlag);
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


  underMenuSet(master);

  if(friendBattleFlag == true){
    backGround.setInteractive(true);
    buttonBattleCPU.setInteractive(false);
    buttonBattleFriend.setInteractive(false);
    qrGetButton.setInteractive(true);
    qrSetButton.setInteractive(true);
    qrGetButton.alpha = 1;
    qrSetButton.alpha = 1;
    backGround.alpha = 0.6;
  }else{
    backGround.setInteractive(false);
    buttonBattleCPU.setInteractive(true);
    buttonBattleFriend.setInteractive(true);
    qrGetButton.setInteractive(false);
    qrSetButton.setInteractive(false);
    qrGetButton.alpha = 0;
    qrSetButton.alpha = 0;
    backGround.alpha = 0;
  }

  backGround.onpointstart=function(e){
    friendBattleFlag = false;
    bfModeSelectGroup.children.clear();
    master.children.last.remove();
    master.children.last.remove();
    master.children.last.remove();
    master.children.last.remove();
    battleSelectButtonSet(master,friendBattleFlag);
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
    mainChara.width = 300;
    mainChara.height = 300;
    mainChara.scaleX = -1;
    mainChara.setPosition(master.gridX.center(),master.gridY.center(-4)).addChildTo(master);
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

function boxcharaSet(master,group,jsonMonster,posX,posY){
    console.log(jsonMonster.monsterID);
    let boxChara = Sprite(jsonMonster.monsterID);
    boxChara.width = 140;
    boxChara.height = 140;
    boxChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(group);
    boxChara.setInteractive(true);
    boxChara.onpointstart = function(e) {
      master.exit('characterChack',{boxCharaResults:jsonMonster});
    }
    let selectCharaGridX = Grid({
      width: 140,
      columns: 3,
      offset: master.gridX.center(posX),
    });
    let selectCharaGridY = Grid({
      width: 140,
      columns: 3,
      offset: master.gridY.center(posY),
    });
    if(localStorage.getItem("selectMonster") == jsonMonster.monsterID){
      let selectLabel = Label({
        text: "バトルセット中",
        fontSize: 20,
        fill: 'white',
      }).addChildTo(group).setPosition(selectCharaGridX.span(0),selectCharaGridY.span(1));
    }
}

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
      pageNum++;
      startCount += 9;
      boxViewGroup.children.clear();
      boxPageView(master,monsterList,startCount,pageNum);
   };

}

function boxCharaDSet(master,charaNum){
  let boxCharaD = Sprite(charaNum);
  boxCharaD.width = 250;
  boxCharaD.height = 250;
  boxCharaD.setPosition(master.gridX.center(0),master.gridY.center(-4)).addChildTo(master);
}

function viewUpdateInfo(master,group,monster,pointSetArray,magnification){
  let rowNum = 1;
  let statusTextArray = ["HP:","攻撃力:","防御力:","素早さ:"];
  let statusNumArray = [monster.param.life,monster.param.power,monster.param.shield,monster.param.speed];
  let totalSetPoint = 0;
  let nameLabel = Label({
      text: monster.monsterName,
      fontSize: 30 * magnification,
      fill: 'white',
    }).addChildTo(group).setPosition(master.gridX.center(),master.gridY.center(0));

  let lvLabel = Label({
    text: "Lv." + monster.Lv,
    fontSize: 40 * magnification,
    fill: 'white',
    align: "left",
  }).addChildTo(group).setPosition(master.gridX.center(-6),master.gridY.center(1)); 

    for (let i = 0; i < 4; i++){

      let statusLabel = Label({
        text: statusTextArray[i] + statusNumArray[i],
        fontSize: 35 * magnification,
        fill: 'white',
        align: "left",
    }).addChildTo(group).setPosition(master.gridX.center(-6),master.gridY.center(2+i));
    
    let updatePointLabel = Label({
        text: "",
        fontSize: 30 * magnification,
        fill: 'red',
        align: "left",
    }).addChildTo(group).setPosition(master.gridX.center(1),master.gridY.center(2+i));

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
    }).addChildTo(group).setPosition(master.gridX.center(4),master.gridY.center(2+i));
    statusUpButton.onpointstart = function(e) {
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
    }).addChildTo(group).setPosition(master.gridX.center(6),master.gridY.center(2+i));

    statusDownButton.onpointstart = function(e) {
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
      fontSize: 20 * magnification,
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
   }).addChildTo(group).setPosition(master.gridX.center(5),master.gridY.center(6));
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
      let updateMonster = updateParam(monster,pointSetArray);
      console.log(JSON.stringify(updateMonster));
      alert('ステータスが更新されました。');
      localStorage.setItem(updateMonster.monsterID,JSON.stringify(updateMonster));
      pointSetArray = [0,0,0,0];
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
      localStorage.setItem("selectMonster",monster.monsterID);
      viewUpdateStatus(group);
      viewUpdateInfo(master,group,monster,pointSetArray,magnification);
  }

}

function viewUpdateStatus(group){
  group.children.clear();
}

function boxCharaInfoSet(master,monster){
  let magnification = SCREEN_WIDTH / 412;
  let pointSetArray = [0,0,0,0];
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

function mainInfoLabel(master,monsterData){
  let monsterNameLabel = Label({
        text: "【" + monsterData.monsterName + "】",
        fontSize: 30,
        fill: 'white',
  }).addChildTo(master).setPosition(master.gridX.center(0),master.gridY.center(-6));
  let monsterMasterData = JSON.parse(MONSTER_MAP.get(monsterData.monsterID));
  let monsterCommentLabel = Label({
        text: monsterMasterData.comment,
        fontSize: 20,
        fill: 'white',
        align: 'left',
  }).addChildTo(master).setPosition(master.gridX.center(-7),master.gridY.center(-4));
}

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

function qrCodeGenerator(master){
  let qrcodeImage;
  let qrcode = document.getElementById("qrcode");
  qrcode.textContent="";
  //let barcode = document.getElementById("barcode");
  let sendMonster = JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster")));
  delete sendMonster.monsterName;
  delete sendMonster.skill;
  let text = JSON.stringify(sendMonster);
  console.log(text);
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