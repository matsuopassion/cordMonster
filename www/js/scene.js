// This is a JavaScript file
// グローバルに展開
phina.globalize();
var SPEED = 4;
var gauge1;
var gauge2;
var renderEndFlag = false;
var selectAbilityID = "";
//技選択用の変数
// 定数
var SCREEN_WIDTH; // 画面横サイズ
var SCREEN_HEIGHT; // 画面縦サイズ
var num = 0;



//phina.js：シーン雛形
// phina.define("startPage", {
//   // 継承/
//   superClass: 'DisplayScene',
//   // 初期化
// init: function(option) {

//     //自分をオブジェクトとして変数に代入
//     master = this;

//     // 親クラス初期化
//     this.superInit(option);

//     // 背景色設定
//     this.backgroundColor = 'black';
//     //背景画像
//     var bgSprite = Sprite('startBg2').addChildTo(this);
//     //画面に合わせてサイズ変更
//     bgSprite.width *= (SCREEN_WIDTH / bgSprite.width);
//     bgSprite.height *= (SCREEN_HEIGHT / bgSprite.height );
//     //画像を配置
//     bgSprite.setPosition(master.gridX.center(), master.gridY.center());

       //BGM設定
//     //BGMセット部分（先に全画面のBGMを停止）
//     SoundManager.stopMusic();
//     SoundManager.playMusic("startBGM",1,true);

//   },
//   // タッチで次のシーンへ
//   onpointstart: function() {
//     this.exit();  
//   },
// }.update: function(app) {
//  document.addEventListener("pause", function(){
//    //アプリがバッググラウンドになったとき
// 		SoundManager.pauseMusic();
// 	}, false);
// 	document.addEventListener("resume", function(){
// 		//アプリが再実行されたとき
// 		SoundManager.resumeMusic();
// 	}, false);
// }
// );

/*
 * シーン01
 */ 
phina.define("startPage", {
  // 継承/
  superClass: 'DisplayScene',
  // 初期化
  init: function(option) {

    //自分をオブジェクトとして変数に代入
    master = this;

    // 親クラス初期化
    this.superInit(option);

    // 背景色
    this.backgroundColor = 'black';
    //背景画像
    var bgSprite = Sprite('startBg2').addChildTo(this);
    //画面に合わせてサイズ変更
    bgSprite.width *= (SCREEN_WIDTH / bgSprite.width);
    bgSprite.height *= (SCREEN_HEIGHT / bgSprite.height );
    //画像を配置
    bgSprite.setPosition(master.gridX.center(), master.gridY.center());

    //BGMセット部分（先に全画面のBGMを停止）
    SoundManager.stopMusic();
    SoundManager.playMusic("startBGM",1,true);
    //↓千葉がテストに使う用（千葉が好きに保管しといて）
    // this.monsterArray = 
    // [
    //   'Adulgon',
    //   'Aborideer',
    //   'Babygon',
    //   'Bechoime',
    //   'Bechoimeking',
    //   'Beetletank',
    //   'Blingo',
    //   'Blingolord',
    //   'Captainskull',
    //   'Chaser',
    //   'Chrysalis',
    //   'Cthulhu',
    //   'Fishman',
    //   'Flarered',
    //   'Fukahirade',
    //   'Genie',
    //   'Giant',
    //   'Golem',
    //   'Hotdog',
    //   'Hellberus',
    //   'Ibuki',
    //   'Ithaqua',
    //   'Jiriri',
    //   'Killerblingo',
    //   'Kinichiro',
    //   'Lindwurm',
    //   'Lyris',
    //   'Maskednature',
    //   'Momosuke',
    //   'Ndanga',
    //   'Planer',
    //   'Pilebine',
    //   'Pixia',
    //   'Rasyomon',
    //   'Ryuya',
    //   'Ryuyasoldier',
    //   'Ryuyaraptor',
    //   'Salamaro',
    //   'Sapphivern',
    //   'Senra',
    //   'Taurusborg',
    //   'Unsui',
    //   'Ungyo',
    //   'Vermilion',
    //   'ViperKong',
    //   'Worm',
    //   'Yanchicken',
    // ];
    // for(monsterID of this.monsterArray){
    //   console.log("モンスターをセット（テスト用）：" + monsterID);
    //   console.log(JSON.stringify(getNewMonster(monsterID)));
    //   localStorage.setItem(monsterID,JSON.stringify(getNewMonster(monsterID)));
    // }

  },
  // タッチで次のシーンへ
  onpointstart: function() {
      this.exit();  
  }
  //ぜんぜんおととめれねぇ
  // ,update: function(app) {
  //   document.addEventListener("pause", function() { 
  //   SoundManager.stopMusic();
  //   },false);
  //   document.addEventListener("resume", function() { 
  //     this.SoundManager.resumeMusic();
  //   },false);
  // }
});

/*
 * メインページ
 */
phina.define("mainPage", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(option) {

    //自分をオブジェクトとして変数に代入
    master = this;

    // 親クラス初期化
    this.superInit(option);
    // 背景色
    this.backgroundColor = 'blue';
    this.label =  "mainPage";

    //背景画像
    
    var bgSprite = Sprite('mainBg').addChildTo(this);
    //画面に合わせてサイズ変更
    bgSprite.width *= (SCREEN_WIDTH / bgSprite.width);
    bgSprite.height *= (SCREEN_HEIGHT / bgSprite.height );
    //画像を配置
    bgSprite.setPosition(master.gridX.center(), master.gridY.center());

    //BGMセット部分（先に全画面のBGMを停止）
    if(option.beforePage != 'boxPage'){
      SoundManager.stopMusic();
      SoundManager.playMusic("mainBGM",1,true);
    }

    //共通ボタンのセット
    //setBaseButton(master);

    
    try{
      let myMonsterData = JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster")));
      mainPageMonsterInfo(this,myMonsterData);
      let mainPageMonster = Sprite(myMonsterData.monsterID);
      mainPageMonster.width = 400;
      mainPageMonster.height = 400;
      mainPageMonster.addChildTo(this).setPosition(this.gridX.center(),this.gridY.center(2));

      let turnArray = ["right","left"];
      let turnDirection = turnArray[1];
      let stepMax = getRandomInt(SCREEN_WIDTH - 300);
      let stepCount = 0;
      let waitNum = 10 + getRandomInt(10);
      let waitCount = 0;
      // 更新イベント
      mainPageMonster.update = function(app) {
        if(turnDirection == "right"){
          mainPageMonster.scaleX = -1;
           if(mainPageMonster.right - 100 >= SCREEN_WIDTH || stepCount >= stepMax){
              if(waitNum < waitCount){
               if(mainPageMonster.x == SCREEN_WIDTH - 1){
                 turnDirection = "left";
               }else{
                 turnDirection = turnArray[getRandomInt(2)];
               }
               stepMax = getRandomInt(SCREEN_WIDTH - 300);
               stepCount = 0;
               waitNum = 10 + getRandomInt(10);
               waitCount = 0;
             }else{
               waitCount++;
             }
           }else{
              mainPageMonster.x += 2;
              stepCount++;
           }
        }else{
          mainPageMonster.scaleX = 1;
           if(mainPageMonster.left + 100 > 0 && stepCount < stepMax){
              mainPageMonster.x -= 2;
              stepCount++;
           }else{
             if(waitNum < waitCount){
               if(mainPageMonster.x == 1){
                 turnDirection = "right";
               }else{
                 turnDirection = turnArray[getRandomInt(2)];
               }
               stepMax = getRandomInt(SCREEN_WIDTH - 300);
               stepCount = 0;
               waitNum = 10 + getRandomInt(10);
               waitCount = 0;
             }else{
               waitCount++;
             }
           }
        }
      };
      
      
    }catch(e){
      alert(`ボックスから\nバトルモンスターをセットしよう！`);
    }
    menuSet(master);
    
  },
  
});

/*
 * BOXページ
 */
phina.define("boxPage", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(option) {

    //自分をオブジェクトとして変数に代入
    master = this;
    this.label = 'boxPage';
    console.log(option.beforePage);
    // 親クラス初期化
    this.superInit(option);

    // 背景色
    this.backgroundColor = 'red';

    //BGMセット部分（先に全画面のBGMを停止）
    if(option.beforePage != 'mainPage' && option.beforePage != 'characterChack'){
      SoundManager.stopMusic();
      SoundManager.playMusic("mainBGM",1,true);
    }
     //box 画像
    var boxBgSprite = Sprite('boxBg').addChildTo(this);
      //画面に合わせてサイズ変更
    boxBgSprite.width *= (SCREEN_WIDTH / boxBgSprite.width);
    boxBgSprite.height *= (SCREEN_HEIGHT / boxBgSprite.height);
    //画像を配置
    boxBgSprite.setPosition(master.gridX.center(), master.gridY.center());

    let object = {};        //オブジェクト配列生成
    let myMonsterNum = 0;
    let myMonsterArray = {};
    //↓localStorageの中のモンスターだけを抽出
    for(let i = 0;i < localStorage.length;i++){
      keyID = localStorage.key(i);
      try {
        getItemIndex = JSON.parse(localStorage.getItem(keyID));
        if(getItemIndex.monsterID != undefined){
          //↓localStorage内から進化ラインのモンスターがいないかチェック、いなければボックスに追加
          if(localStorage.getItem(MONSTER_MAP.get(getItemIndex.monsterID).evoLine) == null){
            myMonsterArray[myMonsterNum] = getItemIndex;
            myMonsterNum++;
          }
        }
      } catch (e) {
        continue;
      }
    }
    boxPageView(master,myMonsterArray,0,1);
    menuSet(master);
  }
});

/*
 * BOX詳細ページ
 */
phina.define("characterChack", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(param) {

    //自分をオブジェクトとして変数に代入
    master = this;
    this.label =  "characterChack";
    // 親クラス初期化
    this.superInit(param);

    //box 画像
    var boxBgSprite = Sprite('boxBg').addChildTo(this);
    //画面に合わせてサイズ変更
    boxBgSprite.width *= (SCREEN_WIDTH / boxBgSprite.width);
    boxBgSprite.height *= (SCREEN_HEIGHT / boxBgSprite.height);
    //画像を配置
    boxBgSprite.setPosition(master.gridX.center(), master.gridY.center());

    master=this;

    // 背景色
    //this.backgroundColor = 'red';


    //BGMセット部分（先に全画面のBGMを停止）
    // SoundManager.stopMusic();
    // SoundManager.playMusic("mainBGM",1,true);

     //box 画像
    boxCharaDSet(master,param.boxCharaResults.monsterID);
    console.log("ここまでき");
    boxCharaInfoSet(master,param.boxCharaResults);
    //menuSet(master);
    backButtonSet(master);
    
  }
});

/*
 * 召喚ページ
 */
phina.define("scanPage", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(option) {

    //自分をオブジェクトとして変数に代入
    master = this;

    // 親クラス初期化
    this.superInit(option);

    // 背景色
    this.backgroundColor = 'purple';

    //BGMセット部分（先に全画面のBGMを停止）
    SoundManager.stopMusic();
    SoundManager.playMusic("scanBGM",1,true);

    //背景画像
    var scanBgSprite = Sprite('scanBg').addChildTo(this);
    //画面に合わせてサイズ変更
    scanBgSprite.width *= (SCREEN_WIDTH / scanBgSprite.width);
    scanBgSprite.height *= (SCREEN_HEIGHT / scanBgSprite.height);
    //画像を配置
    scanBgSprite.setPosition(master.gridX.center(), master.gridY.center());

    ScanStartButton(master);

    //共通ボタンのセット
    menuSet(master);
    
  },
  
});

/*
 * 召喚リザルトページ
 */
phina.define("scanResultPage", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(param) {

    //自分をオブジェクトとして変数に代入
    master = this;

    // 親クラス初期化
    this.superInit(param);

    // 背景色
    this.backgroundColor = 'purple';

    //BGMセット部分（先に全画面のBGMを停止）
    SoundManager.stopMusic();
    SoundManager.playMusic("scanBGM",1,true);
    
    console.log(param.resultMonster);
    //背景画像
    var scanBgSprite = Sprite('scanBg').addChildTo(this);
    //画面に合わせてサイズ変更
    scanBgSprite.width *= (SCREEN_WIDTH / scanBgSprite.width);
    scanBgSprite.height *= (SCREEN_HEIGHT / scanBgSprite.height);
    //画像を配置
    scanBgSprite.setPosition(master.gridX.center(), master.gridY.center());

    console.log(param.resultMonster.monsterID);
    scanCharaSet(master,param.resultMonster.monsterID,0,-4);
    setScanResultMessage(master,param.resultMonster.monsterName);
    //共通ボタンのセット
    menuSet(master);

    SoundManager.play("scanResultSE");

  },

});

/*
 * バトル選択ページ
 */
phina.define("battlePage", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(option) {

    //自分をオブジェクトとして変数に代入
    master = this;

    // 親クラス初期化
    this.superInit(option);
    // 背景色
    this.backgroundColor = 'black';

    SoundManager.stopMusic();
    SoundManager.playMusic("battleSelectBGM",1,true);
    
    battleSelectButtonSet(master,"Unsettled");
  },
});

/*
 * フレンドバトルQR表示ページ
 */
phina.define("qrSetPage", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(option) {

    //自分をオブジェクトとして変数に代入
    master = this;

    // 親クラス初期化
    this.superInit(option);
    // 背景色
    this.backgroundColor = 'white';

    //背景画像
    var scanBgSprite = Sprite('scanBg').addChildTo(this);
    //画面に合わせてサイズ変更
    scanBgSprite.width *= (SCREEN_WIDTH / scanBgSprite.width);
    scanBgSprite.height *= (SCREEN_HEIGHT / scanBgSprite.height);
    //画像を配置
    scanBgSprite.setPosition(master.gridX.center(), master.gridY.center());
    
    // SoundManager.stopMusic();
    // SoundManager.playMusic("battleSelectBGM",1,true);
    
    let qrBackGround = RectangleShape();
    qrBackGround.width = 350;
    qrBackGround.height = 350;
    qrBackGround.fill = "white";
    qrBackGround.cornerRadius = 10;
    qrBackGround.addChildTo(master).setPosition(master.gridX.center(),master.gridY.center());
    var flowScene = Flow(function(resolve) {
      qrCodeGenerator(master);
      let timer = setInterval(function(){
        if(renderEndFlag == true){
          clearInterval(timer);
          resolve();
        }
      },300);
    });
    flowScene.then(function() {
      let qrcodeSprite = Sprite("monsterQR").addChildTo(master);
      console.log(qrcodeSprite);
      qrcodeSprite.width = 300;
      qrcodeSprite.height = 300;
      console.log("qrcodeSprite:" + qrcodeSprite);

      qrcodeSprite.setPosition(master.gridX.center(0),master.gridY.center(0));
      backButtonSet(master);
      renderEndFlag = false;
    });
  },
});

/*
 * フレンドバトルページ
 */
phina.define("battleFriendPage", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(friendBattle) {
    // 親クラス初期化
    this.superInit(friendBattle);
    // 背景色
    this.backgroundColor = 'black';

    //背景画像
    var battleFriendBgSprite = Sprite('battleFriendBg').addChildTo(this);
    //画面に合わせてサイズ変更
    battleFriendBgSprite.width *= (SCREEN_WIDTH / battleFriendBgSprite.width);
    battleFriendBgSprite.height *= (SCREEN_HEIGHT / battleFriendBgSprite.height);
    //画像を配置
    battleFriendBgSprite.setPosition(master.gridX.center(), master.gridY.center());
  
    master = this;
    SoundManager.stopMusic();
    SoundManager.playMusic("battleBGM",1,true);

    this.count = 0;
    this.battleResults;
    this.abilityType;
    this.message;
    this.conditionChange;
    this.turnCount = 1;
    this.group = setBattleMessage(master);
    this.group.addChildTo(master);
    this.abilitySelectGroup = DisplayElement().addChildTo(master);
    this.group.children[1].text = "バトルスタート！";
    this.issue = "uncertain";

    this.myMonster = JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster")));
    this.myMonster.condition = ["normal"];
    console.log("うちのこ" + JSON.stringify(this.myMonster));
    
    this.fMon = friendBattle.resultMonster;
    console.log(JSON.stringify(this.fMon));
    this.enemy = {
      monsterID : this.fMon.mID,
      monsterName : MONSTER_MAP.get(this.fMon.mID).monsterFamily ,
      Lv : this.fMon.Lv ,
      param : { 
          life : this.fMon.param[0] ,
          power : this.fMon.param[1] ,
          shield : this.fMon.param[2] , 
          speed : this.fMon.param[3] ,
          AP : this.fMon.param[4] },
      ability : this.fMon.ability,
      condition : ["normal"]  
    };
    console.log(JSON.stringify(this.enemy));
    charaSet(master, this.myMonster.monsterID, -5, -5);
    charaEnemySet(master, this.enemy.monsterID, 5, -5);

    gauge1 = gaugeSet(master,this.myMonster,-4,-2);
    gauge2 = gaugeSet(master,this.enemy,4,-2);

    this.battleLog;
    this.phase = "s";
    this.turnPhase = 0;
    this.group.children[0].setInteractive(true);
    this.turnEndFlag = false;
    this.rePhase = "";
    let groupchan = this.group;
    this.issue = "uncertain";
    this.group.children[0].onpointstart = function(){
      console.log("現在のフェーズ：" + master.phase);
      console.log("現在のターンフェーズ：" + master.turnPhase);
      if(master.issue != "uncertain"){
        master.exit({
          resultIssue: master.issue,
        });
      }else{
        master.children[1].children[1].text = "";
        if( master.turnCount == 1 ){
          master.children[1].children[1].text = Battle(master.phase,master.myMonster,master.enemy,master,"").messageContent;
          trunPhase = 0;
          master.turnCount++;
        }
        else{
          if(master.turnPhase == 0){  
            master.children[1].children[0].setInteractive(false);
            master.children[1].alpha = 0.5;
            master.children[1].children[1].alpha = 0;
            var battleFlow = Flow(function(resolve) {
              master.children[1].children[1].text = "";
              selectAbilityBar(master,master.myMonster,master.abilitySelectGroup);
              let timer = setInterval(function(){
                if(selectAbilityID != ""){
                  clearInterval(timer);
                  resolve();
                }
              },300);
            });
            battleFlow.then(function() {
              master.children[1].children[1].text = "アビリティ決定！";
              master.children[1].children[0].setInteractive(true);
              master.children[1].alpha = 1;
              master.children[1].children[1].alpha = 1;
              master.turnPhase = 1; 
              //先攻決定
              if(master.myMonster.param.speed >= master.enemy.param.speed){
                master.phase = "m";
              }else{
                master.phase = "e";
              }
            });
            master.children[1].children[1].text = this.message;
          }else if(master.turnPhase == 1){
            if(master.myMonster.param.life > 0 && master.enemy.param.life > 0){
              if(master.phase == "m"){
                master.children[3].width = 250;
                master.children[3].height = 250;  
                master.children[4].width = 200;
                master.children[4].height = 200;  
                console.log(selectAbilityID);
                this.battleResults = Battle(master.phase,master.myMonster,master.enemy,master,selectAbilityID);
                this.message = this.battleResults.messageContent;
                master.phase = "e";
                if(this.battleResults.mCondition != "normal"){
                  this.conditionType = this.battleResults.mCondition;
                  master.phase = "coToM";
                }
              }else if(master.phase == "e"){
                master.children[4].width = 250;
                master.children[4].height = 250;  
                master.children[3].width = 200;
                master.children[3].height = 200;
                this.battleResults = Battle(master.phase,master.myMonster,master.enemy,master,"");
                this.message = this.battleResults.messageContent;
                master.phase = "m";
                if(this.battleResults.eCondition != "normal"){
                  this.conditionType = this.battleResults.eCondition;
                  master.phase = "coToE";
                }
              }else{
                this.message = "エラー：攻撃解決時";
              }
              

              if(master.phase == "coToE" || master.phase == "coToM"){
                master.turnPhase = 2;
              }else{
                if(master.rePhase != ""){
                  console.log("ここいけ");
                  master.turnPhase = 3;
                }else{
                  master.turnPhase = 1;
                }
              }
              
              if(master.rePhase == ""){
                master.rePhase = master.phase;
              }else{
                master.rePhase = "";
              }
              master.children[1].children[1].text = this.message;
              //メッセージ表示個別ならここ
          }else{
            master.turnPhase = 3;
          }
          }else if(master.turnPhase == 2){
            if(master.myMonster.param.life > 0 && master.enemy.param.life > 0){
              if(master.phase == "coToM"){
                master.phase = "m";
                this.battleResults = conditionDamage(master.phase,master.myMonster,master.enemy,this.conditionType);
                this.message = this.battleResults.messageContent;
                master.phase = "e";
              }else if(master.phase == "coToE"){
                master.phase = "e";
                this.battleResults = conditionDamage(master.phase,master.myMonster,master.enemy,this.conditionType);
                this.message = this.battleResults.messageContent;
                master.phase = "m";
              }

              
              if(master.rePhase != ""){
                console.log("今の感じ：" + master.rePhase);
                master.turnPhase = 1;
              }else{
                master.turnPhase++;
              }
              master.children[1].children[1].text = this.message;
            }else{
              master.turnPhase = 3;
            }
          }else{
            if(master.myMonster.param.life <= 0 || master.enemy.param.life <= 0 ){//どちらかが死んでいれば試合終了
              master.phase = "s";
              this.battleResults = Battle(master.phase,master.myMonster,master.enemy,master,"");
              this.message = this.battleResults.messageContent;
              master.issue = this.battleResults.resultIssue;
            }else{
              this.message = "TURN：" + master.turnCount;
            }
            master.children[4].width = 200;
            master.children[4].height = 200;  
            master.children[3].width = 200;
            master.children[3].height = 200;
            master.children[1].children[1].text = this.message;
            master.turnCount++;
            master.rePhase = "";
            master.turnPhase = 0;
            selectAbilityID = "";
          }
        }
        gauge1.value = master.myMonster.param.life;
        gauge2.value = master.enemy.param.life;
      }
    }
  } 
});

/*
 * CPUバトルページ
 */
phina.define("battleCpuPage", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(battleParam) {
    // 親クラス初期化
    this.superInit(battleParam);
    // 背景色
    this.backgroundColor = 'black';

    let bgArray = ["battleCPUBg","battleCPUBg2"];
    //背景画像
    let bg = bgArray[Math.floor(Math.random() * (bgArray.length - 0)) + 0];
    console.log(bg);
    var battleCPUBgSprite = Sprite(bg).addChildTo(this);
    //画面に合わせてサイズ変更
    battleCPUBgSprite.width *= (SCREEN_WIDTH / battleCPUBgSprite.width);
    battleCPUBgSprite.height *= (SCREEN_HEIGHT / battleCPUBgSprite.height);
    //画像を配置
    battleCPUBgSprite.setPosition(master.gridX.center(), master.gridY.center());
  

    master = this;
    SoundManager.stopMusic();
    SoundManager.playMusic("battleBGM",1,true);

    this.count = 0;
    this.battleResults;
    this.abilityType;
    this.message;
    this.conditionChange;
    this.turnCount = 1;
    this.group = setBattleMessage(master);
    this.group.addChildTo(master);
    this.abilitySelectGroup = DisplayElement().addChildTo(master);
    console.log(this.group.interactive);
    this.messageBox = this.group.children[0];
    this.group.children[1].text = "バトルスタート！";
    this.issue = "uncertain";
    //↓画面側で技選択用グループを用意
    this.selectAbilityGroup = DisplayElement().addChildTo(master);
    this.monsterArray = setBattleMonsterList(battleParam.enemyRarity);
    this.myMonster = JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster")));
    this.myMonster.condition = ["normal"]; 
    console.log(JSON.stringify(this.myMonster));
    console.log(typeof this.monsterArray);
    console.log(battleParam.enemyRarity);
    let scM = MONSTER_MAP.get(this.monsterArray[getRandomInt(this.monsterArray.length)]);
    console.log(JSON.stringify(scM));
    this.enemy = {
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
        point :  0,
        life : 0 ,
        power : 0 ,
        shield : 0 , 
        speed : 0 ,
        AP : 0
      },
      ability : new Array(),
      condition : ["normal"]  
    };

    let enemyLvMin = 1;
    if(this.myMonster.Lv - 5 > 1){
      enemyLvMin = this.myMonster.Lv - 5;
    }
    let enemyLvMax = this.myMonster.Lv + 2;
    const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    this.enemy.Lv = randRange(enemyLvMin,enemyLvMax);

    let enemySkillPointArray = [0,0,0,0];
    let enemyType = getRandomInt(4);
    let enemySkillPoint = (this.enemy.Lv - 1);
    if(enemySkillPoint > 0 ){
      if(enemySkillPoint < 5){
        enemySkillPointArray[enemyType] = enemySkillPoint;
      }else{
        for(let i = 0;i < 4;i++){
          enemySkillPointArray[i] = Math.floor(enemySkillPoint / 4);
          
        }
        enemySkillPointArray[enemyType] += enemySkillPoint % 4;
      }
      this.enemy.skill.point = enemySkillPointArray.reduce(function(sum, element){return sum + element;}, 0); 
      this.enemy = updateParam(this.enemy,enemySkillPointArray);
    }
    this.enemy.ability = judgeAbilityEvoMonster(this.enemy);
    console.log(JSON.stringify(this.enemy));
    charaSet(master, this.myMonster.monsterID, -5, -5);
    charaEnemySet(master, this.enemy.monsterID, 5, -5);
    //this.myMonster.ability = MONSTER_MAP.get(this.myMonster.monsterID).ability;
    //this.enemy.ability = MONSTER_MAP.get(this.enemy.monsterID).ability;
    gauge1 = gaugeSet(master,this.myMonster,-4,-2);
    gauge2 = gaugeSet(master,this.enemy,4,-2);

    backButtonSet(master);

    this.myConditionGroup = DisplayElement().addChildTo(master);
    this.enemyConditionGroup = DisplayElement().addChildTo(master);
    this.battleLog;
    this.phase = "s";
    this.turnPhase = 0;
    this.group.children[0].setInteractive(true);
    this.turnEndFlag = false;
    this.rePhase = "";
    let groupchan = this.group;
    this.issue = "uncertain";
    this.group.children[0].onpointstart = function(){
      console.log("現在のフェーズ：" + master.phase);
      console.log("現在のターンフェーズ：" + master.turnPhase);
      if(master.issue != "uncertain"){
        master.exit({
          resultIssue: master.issue,
        });
      }else{
        master.children[1].children[1].text = "";
        if( master.turnCount == 1 ){
          master.children[1].children[1].text = Battle(master.phase,master.myMonster,master.enemy,master,"").messageContent;
          trunPhase = 0;
          master.turnCount++;
        }
        else{
          if(master.turnPhase == 0){  
            master.children[1].children[0].setInteractive(false);
            master.children[1].alpha = 0.5;
            master.children[1].children[1].alpha = 0;
            var battleFlow = Flow(function(resolve) {
              master.children[1].children[1].text = "";
              selectAbilityBar(master,master.myMonster,master.abilitySelectGroup);
              let timer = setInterval(function(){
                if(selectAbilityID != ""){
                  clearInterval(timer);
                  resolve();
                }
              },300);
            });
            battleFlow.then(function() {
              master.children[1].children[1].text = "アビリティ決定！";
              master.children[1].children[0].setInteractive(true);
              master.children[1].alpha = 1;
              master.children[1].children[1].alpha = 1;
              master.turnPhase = 1; 
              //先攻決定
              if(master.myMonster.param.speed >= master.enemy.param.speed){
                master.phase = "m";
              }else{
                master.phase = "e";
              }
            });
            master.children[1].children[1].text = this.message;
          }else if(master.turnPhase == 1){
            if(master.myMonster.param.life > 0 && master.enemy.param.life > 0){
              if(master.phase == "m"){
                master.children[5].width = 200;
                master.children[5].height = 200;  
                master.children[4].width = 250;
                master.children[4].height = 250;  
                console.log(selectAbilityID);
                this.battleResults = Battle(master.phase,master.myMonster,master.enemy,master,selectAbilityID);
                this.message = this.battleResults.messageContent;
                master.phase = "e";
                if(this.battleResults.mCondition != "normal"){
                  this.conditionType = this.battleResults.mCondition;
                  master.phase = "coToM";
                }
              }else if(master.phase == "e"){
                master.children[5].width = 250;
                master.children[5].height = 250;  
                master.children[4].width = 200;
                master.children[4].height = 200;
                this.battleResults = Battle(master.phase,master.myMonster,master.enemy,master,"");
                this.message = this.battleResults.messageContent;
                master.phase = "m";
                if(this.battleResults.eCondition != "normal"){
                  this.conditionType = this.battleResults.eCondition;
                  master.phase = "coToE";
                }
              }else{
                this.message = "エラー：攻撃解決時";
              }
              
              if(master.phase == "coToE" || master.phase == "coToM"){
                master.turnPhase = 2;
              }else{
                if(master.rePhase != ""){
                  console.log("ここいけ");
                  master.turnPhase = 3;
                }else{
                  master.turnPhase = 1;
                }
              }
              
              if(master.rePhase == ""){
                master.rePhase = master.phase;
              }else{
                master.rePhase = "";
              }
              master.children[1].children[1].text = this.message;
              //メッセージ表示個別ならここ
          }else{
            master.turnPhase = 3;
          }
          }else if(master.turnPhase == 2){
            if(master.myMonster.param.life > 0 && master.enemy.param.life > 0){
              if(master.phase == "coToM"){
                master.phase = "m";
                this.battleResults = conditionDamage(master.phase,master.myMonster,master.enemy,this.conditionType);
                this.message = this.battleResults.messageContent;
                master.phase = "e";
              }else if(master.phase == "coToE"){
                master.phase = "e";
                this.battleResults = conditionDamage(master.phase,master.myMonster,master.enemy,this.conditionType);
                this.message = this.battleResults.messageContent;
                master.phase = "m";
              }

              
              if(master.rePhase != ""){
                console.log("今の感じ：" + master.rePhase);
                master.turnPhase = 1;
              }else{
                master.turnPhase++;
              }
              master.children[1].children[1].text = this.message;
            }else{
              master.turnPhase = 3;
            }
          }else{
            if(master.myMonster.param.life <= 0 || master.enemy.param.life <= 0 ){//どちらかが死んでいれば試合終了
              master.phase = "s";
              this.battleResults = Battle(master.phase,master.myMonster,master.enemy,master,"");
              this.message = this.battleResults.messageContent;
              master.issue = this.battleResults.resultIssue;
            }else{
              this.message = "TURN：" + master.turnCount;
            }
            
            master.children[5].width = 200;
            master.children[5].height = 200;
            master.children[4].width = 200;
            master.children[4].height = 200;  
            master.children[1].children[1].text = this.message;
            master.turnCount++;
            master.rePhase = "";
            master.turnPhase = 0;
            selectAbilityID = "";
          }
        }
        console.log(master.myMonster.condition);
        master.myConditionGroup = conditionIconSet(master,master.myConditionGroup,master.myMonster.condition,-4,-1);
        console.log(master.enemy.condition);
        master.enemyConditionGroup = conditionIconSet(master,master.enemyConditionGroup,master.enemy.condition,4,-1);
        gauge1.value = master.myMonster.param.life;
        gauge2.value = master.enemy.param.life;
      }
    }
  }

});

/*
 * バトルリザルトページ
 */
phina.define("battleResultPage", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(result) {
    // 親クラス初期化
    this.superInit(result);
    master = this;
    // 背景色
    this.backgroundColor = 'black';
    this.bgResult = "battleResultLoseBg";
    this.resultMessage = "loseMessage"
    let levelUpRand = 0;
    if(result.resultIssue == "win"){
      this.resultMessage = "winMessage";
      this.bgResult = "battleResultWinBg";
      this.levelUpRand = getRandomIntInclusive(1,2);
    }

    //背景画像
    var battleResultBgSprite = Sprite(this.bgResult).addChildTo(this);
    //画面に合わせてサイズ変更
    battleResultBgSprite.width *= (SCREEN_WIDTH / battleResultBgSprite.width);
    battleResultBgSprite.height *= (SCREEN_HEIGHT / battleResultBgSprite.height);
    //画像を配置
    battleResultBgSprite.setPosition(master.gridX.center(), master.gridY.center());

    this.resultMessage = Sprite(this.resultMessage);
    this.resultMessage.width = 300;
    this.resultMessage.height = 200;
    this.resultMessage.addChildTo(this).setPosition(this.gridX.center(0), this.gridY.center(4));

    console.log("randInt:" + levelUpRand);
    

    SoundManager.stopMusic();
    SoundManager.playMusic("resultBGM");


    
    
    
    if(this.levelUpRand == 1){
      console.log("ここまできた");
      this.myMonsterData = JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster")));
      let updateMonsterData = levelUpMonster(this.myMonsterData);
      localStorage.setItem(updateMonsterData.monsterID,JSON.stringify(updateMonsterData));
      this.LvUpMessage = Sprite("LvUpMessage");
      this.LvUpMessage.width = 400;
      this.LvUpMessage.height = 200;
      this.LvUpMessage.addChildTo(this).setPosition(this.gridX.center(0), this.gridY.center(-6));
    }
    charaResultSet(master, JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster"))).monsterID);
    menuSet(master);
  },
  // タッチで次のシーンへ
  onpointstart: function() {
      this.exit("battlePage");  
  }
});

//コミットテスト