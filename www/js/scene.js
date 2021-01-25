// This is a JavaScript file
// グローバルに展開
phina.globalize();
var SPEED = 15;
var gauge1;
var gauge2;
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
    this.monsterArray = ["Bechoime",
                        "Pixia",
                        "Blingo",
                        "Golem",
                        "Worm",
                        "Chrysalis",
                        "Fukahirade",
                        "Genie",
                        "Lindwurm",
                        "Sapphivern",
                        "Taurusborg",
                        "Pilebine",
                        "Maskednature",
                        "Hotdog",
                        "Aborideer",
                        "Fishman",
                        "Lyris",
                        "Chaser",
                        "Blingolord",
                        "Killerblingo",
                        "Ibuki",
                        "Kinichiro",
                        "Unsui",
                        "Cthulhu",
                        "Ithaqua"];
    for(monsterID of this.monsterArray){
      console.log("モンスターをセット（テスト用）：" + monsterID);
      console.log(JSON.stringify(getNewMonster(monsterID)));
      localStorage.setItem(monsterID,JSON.stringify(getNewMonster(monsterID)));
    }

  },
  // タッチで次のシーンへ
  onpointstart: function() {
    this.exit();  
  },
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

    //背景画像
    var bgSprite = Sprite('mainBg').addChildTo(this);
    //画面に合わせてサイズ変更
    bgSprite.width *= (SCREEN_WIDTH / bgSprite.width);
    bgSprite.height *= (SCREEN_HEIGHT / bgSprite.height );
    //画像を配置
    bgSprite.setPosition(master.gridX.center(), master.gridY.center());

    // ラベル
    Label({
      text: 'mainPage',
      fontSize: 20,
      fill: 'white',
    }).addChildTo(this).setPosition(this.gridX.center(0), this.gridY.center(0));

    //BGMセット部分（先に全画面のBGMを停止）
    SoundManager.stopMusic();
    SoundManager.playMusic("mainBGM",1,true);

    //共通ボタンのセット
    //setBaseButton(master);
    menuSet(master);

    charaSet(master,"Cohmon",0,1);
    
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

    // 親クラス初期化
    this.superInit(option);

    // 背景色
    this.backgroundColor = 'red';

    //BGMセット部分（先に全画面のBGMを停止）
    SoundManager.stopMusic();
    SoundManager.playMusic("mainBGM",1,true);

     //box 画像
    var boxBgSprite = Sprite('boxBg').addChildTo(this);
      //画面に合わせてサイズ変更
    boxBgSprite.width *= (SCREEN_WIDTH / boxBgSprite.width);
    boxBgSprite.height *= (SCREEN_HEIGHT / boxBgSprite.height);
    //画像を配置
    boxBgSprite.setPosition(master.gridX.center(), master.gridY.center());
    master=this;

    let object = {};        //オブジェクト配列生成
    let myMonsterNum = 0;
    let myMonsterArray = {};
    //↓localStorageの中のモンスターだけを抽出
    for(let i = 0;i < localStorage.length;i++){
      keyID = localStorage.key(i);
      try {
        getItemIndex = new monster(JSON.parse(localStorage.getItem(keyID)));
        console.log("getItemIndex:" + getItemIndex.monsterID);
        if(getItemIndex.monsterID != undefined){
          myMonsterArray[myMonsterNum] = getItemIndex;
          myMonsterNum++;
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
    SoundManager.stopMusic();
    SoundManager.playMusic("mainBGM",1,true);
     //box 画像
    boxCharaDSet(master,param.boxCharaResults.monsterID);
    boxCharaInfoSet(master,param.boxCharaResults);
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
    
    // battleCPUButtonSet(master);
    // battleFriendButtonSet(master);
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
    this.backgroundColor = 'black';

    // SoundManager.stopMusic();
    // SoundManager.playMusic("battleSelectBGM",1,true);
    
    // battleCPUButtonSet(master);
    // battleFriendButtonSet(master);
    //battleSelectButtonSet(master,false);
    var flow = Flow(function(resolve) {
      if(qrCodeGenerator(master)){
          resolve();
      }
    });
    flow.then(function() {
      console.log("マサラタウン");
      let qrcodeMonster = phina.asset.AssetManager.get("image", "monsterQR");
      console.log(qrcodeMonster);
      let qrcodeSprite = Sprite("monsterQR");
      console.log("マラサタウン");
      
      console.log("qrcodeSprite:" + qrcodeSprite);
      qrcodeSprite.width = 200;
      qrcodeSprite.height = 200;
      qrcodeSprite.setPosition(master.gridX.center(0),master.gridY.center(0)).addChildTo(master);
      BackButtonSet(master);
    });
    
  },
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

    BackButtonSet(master);

    this.ability = ["abt1","abt4","abt9"];
    this.count = 0;
    this.message;
    this.group = setBattleMessage(master);
    this.group.addChildTo(master);
    this.group.children[1].text = "バトルスタート！";
    

    //ここにID指定でバトルテスト可能
    console.log(localStorage.getItem("Blingo"));
    this.myMonster  = new monster(JSON.parse(localStorage.getItem("Sapphivern")));
    this.enemy = new monster(JSON.parse(localStorage.getItem("Blingo")));
    charaSet(master, this.myMonster.monsterID, -5, -5);
    charaEnemySet(master, this.enemy.monsterID, 5, -5);

    // this.myMonster = new monster(1,'コーモンくん',["con1"],10,50,6,5,5,this.ability);
    // this.enemy = new monster(2,'ゴブリン',["con1"],10,50,6,5,5,this.ability);

    gauge1 = gaugeSet(master,this.myMonster,-4,-2);
    gauge2 = gaugeSet(master,this.enemy,4,-2);

    this.battleLog;
    this.phase = "s";
  },
  update: function(app) {
    if (app.pointer.getPointingStart()) {
      console.log("今のphase : "+this.phase);
      if(this.myMonster.param.life <= 0 || this.enemy.param.life <= 0 ){
        console.log("死んだ");
        this.phase = "s";
        this.message = Battle(this.phase,this.myMonster,this.enemy,master);
      }else{
        if(this.myMonster.param.speed > this.enemy.param.speed && this.phase == "s"){
          this.phase = "m";
          console.log("今のphase : "+this.phase);
          this.message = Battle(this.phase,this.myMonster,this.enemy,master);
        }else if(this.myMonster.param.speed <= this.enemy.param.speed && this.phase == "s"){
          this.phase = "e";
          console.log("今のphase : "+this.phase);
          this.message = Battle(this.phase,this.myMonster,this.enemy,master);
        }else{
          switch (this.phase) {
            case 'e':
              this.phase = "m"
              this.message = Battle(this.phase,this.myMonster,this.enemy,master);
              break;
            case 'm':
              this.phase = "e"
              this.message = Battle(this.phase,this.myMonster,this.enemy,master);
              break;
            default:
              console.log(`eでもmでもない`);
          }
        }
      }
      this.group.children[1].text = this.message;
      gauge1.value = this.myMonster.param.life;
      gauge2.value = this.enemy.param.life;
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
  init: function(option) {
    // 親クラス初期化
    this.superInit(option);
    // 背景色
    this.backgroundColor = 'black';
    
    this.resultLabel = Label({
      text: 'battleResultPage',
      fontSize: 20,
      fill: 'white',
    }).addChildTo(this).setPosition(this.gridX.center(0), this.gridY.center(0));
    console.log(this.resultLabel.text);
    master = this;

    SoundManager.stopMusic();
    SoundManager.playMusic("resultBGM");


    menuSet(master);
    
    charaResultSet(master, 'Cohmon');
    
  },
  update: function(app) {
    if(app.frame % SPEED === 0){
      if(master.resultLabel.text === "a"){
        master.resultLabel.text = "b";
      }else{
        master.resultLabel.text  ="a";
      }
    }
  }
});

//コミットテスト