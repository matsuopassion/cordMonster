// This is a JavaScript file
const FONT_FAMILY = "'KaiTi','Yu Mincho','Monaco','HG行書体'";
phina.globalize();


function battleLabel(master,width,height){
  let messageBox = RectangleShape();
  messageBox.width = width;
  messageBox.height = height;
  messageBox.fill = "black";
  messageBox.stroke = "white";
  messageBox.strokeWidth = 10;
  messageBox.cornerRadius = 25;
}


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

function charaSet(master,charaNum, posX,posY){
    let mainChara = Sprite(charaNum);
    mainChara.width = 200;
    mainChara.height = 200;
    mainChara.scaleX = -1;
    mainChara.setPosition(master.gridX.center(posX),master.gridY.center(posY)).addChildTo(master);
    mainChara.setInteractive(true);
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

function BackButtonSet(master){
  let buttonScan = Sprite('buttonBack');
  //画面に合わせてサイズ変更
  buttonScan.width = 100;
  buttonScan.height = 100;
  buttonScan.setInteractive(true);
  buttonScan.setPosition(master.gridX.span(2),master.gridY.span(1)).addChildTo(master),buttonScan.onpointstart=function(e){
    SoundManager.play("buttonPush");
    master.exit();
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
    scanBarcode();
  };
}




function charaResultSet(master,charaNum){
    let mainChara = Sprite(charaNum);
    mainChara.width = 400;
    mainChara.height = 400;
    mainChara.scaleX = -1;
    mainChara.setPosition(master.gridX.center(),master.gridY.center(-5)).addChildTo(master);
    mainChara.setInteractive(true);
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


function backButton(master){
  var backButton = returnButton(master);
  backButton.setPosition(master.gridX.span(2), master.gridY.span(1)).addChildTo(master),
  backButton.onpush= function(e){
    SoundManager.play("buttonPush");
    master.exit();
  };
}