// This is a JavaScript file
// グローバルに展開
phina.globalize();
var SPEED = 30;
var gauge1;
var gauge2;
var renderEndFlag = false;
// 定数
var SCREEN_WIDTH  =screen.width; // 画面横サイズ
var SCREEN_HEIGHT = screen.height; // 画面縦サイズ
/*
 * シーン01
 */ 


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
      let myMonsterData = new monster(JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster"))));
      mainPageMonsterInfo(this,myMonsterData);
      let mainPageMonster = Sprite(myMonsterData.monsterID);
      mainPageMonster.width = 400;
      mainPageMonster.height = 400;
      mainPageMonster.addChildTo(this).setPosition(this.gridX.center(),this.gridY.center(2));
      
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
        getItemIndex = new monster(JSON.parse(localStorage.getItem(keyID)));
        if(getItemIndex.monsterID != undefined){
          //↓localStorage内から進化ラインのモンスターがいないかチェック、いなければボックスに追加
          if(localStorage.getItem(JSON.parse(MONSTER_MAP.get(getItemIndex.monsterID)).evoLine) == null){
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
    BackButtonSet(master);
    
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
    
    battleSelectButtonSet(master,false);
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
      BackButtonSet(master);
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
    this.turnCount = 0;
    this.group = setBattleMessage(master);
    this.group.addChildTo(master);
    this.group.children[1].text = "バトルスタート！";
    this.issue = "uncertain";

    this.myMonster = JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster")));
    this.myMonster.condition = ["nomal"];
    /**
     * monsterID : mID
     * monsterName : monsterFamily
     * Lv : Lv
     * param.life   : param[0]
     *      .power  : param[1]
     *      .shield : param[2]
     *      .speed  : param[3]
     * ability : ability
     * AP : AP
     */
    this.enemy = friendBattle.resultMonster;
    this.enemy.monsterName = JSON.parse(MONSTER_MAP.get(this.enemy.monsterID)).monsterFamily;
    this.enemy.condition = ["nomal"];
    charaSet(master, this.myMonster.monsterID, -5, -5);
    charaEnemySet(master, this.enemy.monsterID, 5, -5);

    gauge1 = gaugeSet(master,this.myMonster,-4,-2);
    gauge2 = gaugeSet(master,this.enemy,4,-2);

    this.battleLog;
    this.phase = "s";
  },
  update: function(app) {
    if (app.pointer.getPointingStart()) {
      if(this.turnCount == 0){//１ターン目限定のセットアップ処理
        this.message = Battle(this.phase,this.myMonster,this.enemy,master).messageContent;
      }

      if(this.issue != "uncertain"){
        master.exit({
          resultIssue: this.issue,
        });
      }

      if(this.myMonster.param.life <= 0 || this.enemy.param.life <= 0 ){//どちらかが死んでいれば試合終了
        this.phase = "s";
        this.battleResults = Battle(this.phase,this.myMonster,this.enemy,master);
        this.message = this.battleResults.messageContent;
        this.issue = this.battleResults.resultIssue;
        console.log("死んだ");
      }else{
        if(this.myMonster.param.speed > this.enemy.param.speed && this.phase == "s"){//素早さが速い方が先攻
          this.phase = "m";
          console.log("１ターン目：バトル開始");
          console.log("今のphase : "+this.phase);
          this.message = Battle(this.phase,this.myMonster,this.enemy,master).messageContent;
        }else if(this.myMonster.param.speed <= this.enemy.param.speed && this.phase == "s"){
          this.phase = "e";
          console.log("今のphase : "+this.phase);
          this.message = Battle(this.phase,this.myMonster,this.enemy,master).messageContent;
        }else{
          switch (this.phase) {
            case 'e':
              this.phase = "m"
              this.battleResults = Battle(this.phase,this.myMonster,this.enemy,master);
              this.message = this.battleResults.messageContent;
              if(this.battleResults.mCondition != "normal"){
                this.conditionType = this.battleResults.mCondition;
                this.phase = "coToM";
              }
              break;
            case 'm':
              this.phase = "e"
              this.battleResults = Battle(this.phase,this.myMonster,this.enemy,master);
              this.message = this.battleResults.messageContent;
              if(this.battleResults.eCondition != "normal"){
                this.conditionType = this.battleResults.eCondition;
                this.phase = "coToE";
              }
              break;
            case 'coToM':
              this.phase = "m"
              this.battleResults = conditionDamage(this.phase,this.myMonster,this.enemy,this.conditionType);
              this.message = this.battleResults.messageContent;
              break;
            case 'coToE':
              this.phase = "e"
              this.battleResults = conditionDamage(this.phase,this.myMonster,this.enemy,this.conditionType);
              this.message = this.battleResults.messageContent;
              break;
            default:
              console.log(`eでもmでもない`);
          }
        }
      }
      this.group.children[1].text = this.message;
      gauge1.value = this.myMonster.param.life;
      gauge2.value = this.enemy.param.life;
      this.turnCount++;
      console.log(this.turnCount);
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
  init: function(option) {
    // 親クラス初期化
    this.superInit(option);
    // 背景色
    this.backgroundColor = 'black';

    //背景画像
    var battleCPUBgSprite = Sprite('battleCPUBg').addChildTo(this);
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
    this.turnCount = 0;
    this.group = setBattleMessage(master);
    this.group.addChildTo(master);
    this.group.children[1].text = "バトルスタート！";
    this.issue = "uncertain";
    
    // 0からmax-1までの整数を返す
    function getRandomInt(max) {
    // ランダムな配列
      return Math.floor(Math.random() * Math.floor(max));
    }
    //ここにID指定でバトルテスト可能
    this.monsterArray = [
      'Adulgon',
      'Aborideer',
      'Babygon',
      'Bechoime',
      'Bechoimeking',
      'Beetletank',
      'Blingo',
      'Blingolord',
      'Captainskull',
      'Chaser',
      'Chrysalis',
      'Cthulhu',
      'Fishman',
      'Flarered',
      'Fukahirade',
      'Genie',
      'Giant',
      'Golem',
      'Hotdog',
      'Hellberus',
      'Ibuki',
      'Ithaqua',
      'Jiriri',
      'Killerblingo',
      'Kinichiro',
      'Lindwurm',
      'Lyris',
      'Maskednature',
      'Momosuke',
      'Mummy',
      'Pilebine',
      'Pixia',
      'Rasyomon',
      'Ryuya',
      'Ryuyasoldier',
      'Ryuyaraptor',
      'Sapphivern',
      'Senra',
      'Taurusborg',
      'Unsui',
      'Ungyo',
      'ViperKong',
      'Worm',
      'Yanchicken',
    ];
    this.myMonster = JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster")));
    this.myMonster.condition = ["nomal"]; 
    let scM = JSON.parse(MONSTER_MAP.get(this.monsterArray[getRandomInt(25)]));
    this.enemy = {
      monsterID : scM.monsterID ,
      monsterName : scM.monsterFamily ,
      Lv : 1 ,
      param : { 
          life : scM.defaultParam.life ,
          power : scM.defaultParam.power ,
          shield : scM.defaultParam.shield , 
          speed : scM.defaultParam.speed },
      ability : new Array(),
      condition : ["normal"]  
    };
    this.enemy.ability = judgeAbilityGet(this.enemy);
    console.log(this.enemy);
    charaSet(master, this.myMonster.monsterID, -5, -5);
    charaEnemySet(master, this.enemy.monsterID, 5, -5);
    this.myMonster.ability = JSON.parse(MONSTER_MAP.get(this.myMonster.monsterID)).ability;
    this.enemy.ability = JSON.parse(MONSTER_MAP.get(this.enemy.monsterID)).ability;
    // this.myMonster = new monster(1,'コーモンくん',["con1"],10,50,6,5,5,this.ability);
    // this.enemy = new monster(2,'ゴブリン',["con1"],10,50,6,5,5,this.ability);
    console.log("ここにきた");
    gauge1 = gaugeSet(master,this.myMonster,-4,-2);
    gauge2 = gaugeSet(master,this.enemy,4,-2);

    this.battleLog;
    this.phase = "s";
  },
  update: function(app) {
    if (app.pointer.getPointingStart()) {
      if(this.turnCount == 0){//１ターン目限定のセットアップ処理
        this.message = Battle(this.phase,this.myMonster,this.enemy,master).messageContent;
      }

      if(this.issue != "uncertain"){
        master.exit({
          resultIssue: this.issue,
        });
      }

      if(this.myMonster.param.life <= 0 || this.enemy.param.life <= 0 ){//どちらかが死んでいれば試合終了
        this.phase = "s";
        this.battleResults = Battle(this.phase,this.myMonster,this.enemy,master);
        this.message = this.battleResults.messageContent;
        this.issue = this.battleResults.resultIssue;
        console.log("死んだ");
      }else{
        if(this.myMonster.param.speed > this.enemy.param.speed && this.phase == "s"){//素早さが速い方が先攻
          this.phase = "m";
          console.log("１ターン目：バトル開始");
          console.log("今のphase : "+this.phase);
          this.message = Battle(this.phase,this.myMonster,this.enemy,master).messageContent;
        }else if(this.myMonster.param.speed <= this.enemy.param.speed && this.phase == "s"){
          this.phase = "e";
          console.log("今のphase : "+this.phase);
          this.message = Battle(this.phase,this.myMonster,this.enemy,master).messageContent;
        }else{
          switch (this.phase) {
            case 'e':
              this.phase = "m"
              this.battleResults = Battle(this.phase,this.myMonster,this.enemy,master);
              this.message = this.battleResults.messageContent;
              if(this.battleResults.mCondition != "normal"){
                this.conditionType = this.battleResults.mCondition;
                this.phase = "coToM";
              }
              break;
            case 'm':
              this.phase = "e"
              this.battleResults = Battle(this.phase,this.myMonster,this.enemy,master);
              this.message = this.battleResults.messageContent;
              if(this.battleResults.eCondition != "normal"){
                this.conditionType = this.battleResults.eCondition;
                this.phase = "coToE";
              }
              break;
            case 'coToM':
              this.phase = "m"
              this.battleResults = conditionDamage(this.phase,this.myMonster,this.enemy,this.conditionType);
              this.message = this.battleResults.messageContent;
              break;
            case 'coToE':
              this.phase = "e"
              this.battleResults = conditionDamage(this.phase,this.myMonster,this.enemy,this.conditionType);
              this.message = this.battleResults.messageContent;
              break;
            default:
              console.log(`eでもmでもない`);
          }
        }
      }
      this.group.children[1].text = this.message;
      gauge1.value = this.myMonster.param.life;
      gauge2.value = this.enemy.param.life;
      this.turnCount++;
      console.log(this.turnCount);
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
    this.resultMessage = "【敗北】"
    let levelUpRand = 0;
    if(result.resultIssue == "win"){
      this.resultMessage = "【勝利】";
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

    this.resultLabel = Label({
      text: this.resultMessage,
      fontSize: 50,
      fill: 'white',
    }).addChildTo(this).setPosition(this.gridX.center(0), this.gridY.center(0));

    console.log("randInt:" + levelUpRand);
    if(this.levelUpRand == 1){
      this.myMonsterData = JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster")));
      let updateMonsterData = levelUpMonster(this.myMonsterData);
      localStorage.setItem(updateMonsterData.monsterID,JSON.stringify(updateMonsterData));
      this.resultLabel = Label({
        text:  this.myMonsterData.monsterName + "のレベルが上がった！",
        fontSize: 20,
        fill: 'red',
      }).addChildTo(this).setPosition(this.gridX.center(0), this.gridY.center(2));
    }

    SoundManager.stopMusic();
    SoundManager.playMusic("resultBGM");


    menuSet(master);
    
    charaResultSet(master, JSON.parse(localStorage.getItem(localStorage.getItem("selectMonster"))).monsterID);
    
  },
  update: function(app) {
    // if(app.frame % SPEED === 0){
    //   if(master.resultLabel.text === "これ何？"){
    //     master.resultLabel.text = "巨大サーモンの逆襲";
    //   }else{
    //     master.resultLabel.text  ="これ何？";
    //   }
    // }
  }
});

//コミットテスト