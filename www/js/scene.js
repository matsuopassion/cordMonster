// This is a JavaScript file
// グローバルに展開
phina.globalize();
var SPEED = 15;
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
    var bgSprite = Sprite('startBg').addChildTo(this);
    //画面に合わせてサイズ変更
    bgSprite.width *= (SCREEN_WIDTH / bgSprite.width);
    bgSprite.height *= (SCREEN_HEIGHT / bgSprite.height );
    //画像を配置
    bgSprite.setPosition(master.gridX.center(), master.gridY.center());

    //BGMセット部分（先に全画面のBGMを停止）
    SoundManager.stopMusic();
    SoundManager.playMusic("startBGM",1,true);

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

    charaSet(master,"c000",0,1);

    // // Android端末か確認。
    // var chkAndroid = navigator.userAgent.indexOf("Android")>0;
    
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

    // ラベル
    Label({
      text: 'boxPage',
      fontSize: 20,
      fill: 'white',
    }).addChildTo(this).setPosition(this.gridX.center(0), this.gridY.center(0));

    //BGMセット部分（先に全画面のBGMを停止）
    SoundManager.stopMusic();
    SoundManager.playMusic("mainBGM",1,true);
    
    //共通ボタンのセット
    menuSet(master);
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
    
    // //召喚ボタンのセット（scanのメソッドを呼び出し）
    // const scanButton = baseButton("召喚");
    // scanButton.setPosition(this.gridX.center(0),this.gridY.center(0)).addChildTo(this),scanButton.onpush=function(e){
    //   //コード読取のメソッド
    //   scanBarcode();
    // };

    //共通ボタンのセット
    menuSet(master);

    // // Android端末か確認。
    // var chkAndroid = navigator.userAgent.indexOf("Android")>0;
    
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
    
    Label({
      text: 'battlePage',
      fontSize: 20,
      fill: 'white',
    }).addChildTo(this).setPosition(this.gridX.center(0), this.gridY.center(0));

    BattleStartButton(master);

    SoundManager.stopMusic();
    SoundManager.playMusic("battleSelectBGM",1,true);

    menuSet(master);

    // var scanBgSprite = Sprite('scanBg').addChildTo(this);
    // scanBgSprite.width *= (SCREEN_WIDTH / scanBgSprite.width);
    // scanBgSprite.height *= (SCREEN_HEIGHT / scanBgSprite.height);
    // scanBgSprite.setPosition(master.gridX.center(), master.gridY.center());
    
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
    
    Label({
      text: 'battleCpuPage',
      fontSize: 20,
      fill: 'white',
    }).addChildTo(this).setPosition(this.gridX.center(0), this.gridY.center(0));

    master = this;
    SoundManager.stopMusic();
    SoundManager.playMusic("battleBGM",1,true);

    //setBaseButton(master);
    backButton(master);

    charaSet(master, 'c000', -5, -5);
    charaEnemySet(master, 'c002', 5, -5);
    this.monsterA = new monster('コーモンくん',10,1);
    this.monsterB = new monster('ゴブリン',10,1);
    this.count = 0;
    this.side = 0;
    this.battleLog;
    //battle(monsterA,monsterB,master);
    
    // var scanBgSprite = Sprite('scanBg').addChildTo(this);
    // scanBgSprite.width *= (SCREEN_WIDTH / scanBgSprite.width);
    // scanBgSprite.height *= (SCREEN_HEIGHT / scanBgSprite.height);
    // scanBgSprite.setPosition(master.gridX.center(), master.gridY.center());
    
  },

  // 更新(次回ここから！)
  update: function(app) {
    if(app.frame % SPEED === 0){
      console.log(this.count);
      if(this.count <= 5){
        this.battleLog = battleLabel(this.side,this.monsterA,this.monsterB,master);
        if(this.side === 0){
          this.side = 1;
        }else{
          this.side = 0;
        }
        this.count++;
      }
    }
  },


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


    setBaseButton(master);
    
    charaResultSet(master, 'c000');
    // var scanBgSprite = Sprite('scanBg').addChildTo(this);
    // scanBgSprite.width *= (SCREEN_WIDTH / scanBgSprite.width);
    // scanBgSprite.height *= (SCREEN_HEIGHT / scanBgSprite.height);
    // scanBgSprite.setPosition(master.gridX.center(), master.gridY.center());
    
  },

  // 更新(次回ここから！)
  update: function(app) {
    if(app.frame % SPEED === 0){
      if(master.resultLabel.text === "a"){
        master.resultLabel.text = "b";
      }else{
        master.resultLabel.text  ="a";
      }
    }
  },

});

//コミットテスト