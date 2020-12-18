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
    var bgSprite = Sprite('startBg').addChildTo(this);
    //画面に合わせてサイズ変更
    bgSprite.width *= (SCREEN_WIDTH / bgSprite.width);
    bgSprite.height *= (SCREEN_HEIGHT / bgSprite.height );
    bgSprite.height -= 72;
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

    
    boxcharaSet(master, 'c000', -5, -5);
    boxcharaSet(master,'c001',-1,-5)
      // var boxCgSprite = Sprite('c000',150,150).addChildTo(this);
      // boxCgSprite.setPosition(master.gridX.center(-5), master.gridY.center(-5));
      // character.setInteractive(true);
      // character.onpointstart = function(e) {
      // master.exit("characterChack");
      // }
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
  init: function(charaNum) {

    //自分をオブジェクトとして変数に代入
    master = this;

    // 親クラス初期化
    this.superInit(charaNum);

         //box 画像
    var boxBgSprite = Sprite('characterBg').addChildTo(this);
      //画面に合わせてサイズ変更
    boxBgSprite.width *= (SCREEN_WIDTH / boxBgSprite.width);
    boxBgSprite.height *= (SCREEN_HEIGHT / boxBgSprite.height);
    //画像を配置
    boxBgSprite.setPosition(master.gridX.center(), master.gridY.center());

       Label({
      text: ' life 1000 \n power 100 \n shield 50 \n speed 100' ,
      fontSize: 50,
      fill: 'white',
      align: "left",
    }).addChildTo(this).setPosition(this.gridX.center(-5), this.gridY.center(2));

    master=this;

    // 背景色
    //this.backgroundColor = 'red';


    //BGMセット部分（先に全画面のBGMを停止）
    SoundManager.stopMusic();
    SoundManager.playMusic("mainBGM",1,true);

     //box 画像
    var boxCgSprite = Sprite(charaNum.value1,400,400).addChildTo(this);
    boxCgSprite.setPosition(master.gridX.center(0), master.gridY.center(-5));
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

    //ScanStartButton(master);

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
    

    menuSet(master);
    battleCPUButtonSet(master);
    battleFriendButtonSet(master);
    
    SoundManager.stopMusic();
    SoundManager.playMusic("battleSelectBGM",1,true);

    menuSet(master);
  
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

    BackButtonSet(master);

    this.message;
    this.group = setBattleMessage(master);
    this.group.addChildTo(master);
    this.group.children[1].text = "バトルスタート！";
    charaSet(master, 'c000', -5, -5);
    charaEnemySet(master, 'c002', 5, -5);
    this.myMonster = new monster('コーモンくん',50,5,5,5);
    this.enemy = new monster('ゴブリン',50,5,5,5);
    gauge1 = Gauge({
      x: 100, y: 300,        // x,y座標
      width: 150,            // 横サイズ
      height: 30,            // 縦サイズ
      cornerRadius: 10,      // 角丸み
      maxValue: this.myMonster.life,         // ゲージ最大値
      value: this.myMonster.life,         // ゲージ初期値
      fill: 'white',         // 後ろの色
      gaugeColor: 'skyblue', // ゲージ色
      stroke: 'silver',      // 枠色
      strokeWidth: 5,        // 枠太さ
    }).addChildTo(this);

    gauge2 = Gauge({
      x: 320, y: 300,        // x,y座標
      width: 150,            // 横サイズ
      height: 30,            // 縦サイズ
      cornerRadius: 10,      // 角丸み
      maxValue: this.enemy.life,         // ゲージ最大値
      value: this.enemy.life,         // ゲージ初期値
      fill: 'white',         // 後ろの色
      gaugeColor: 'skyblue', // ゲージ色
      stroke: 'silver',      // 枠色
      strokeWidth: 5,        // 枠太さ
    }).addChildTo(this);

    this.battleLog;
    this.phase = "s";
  },

  // 更新(次回ここから！)
  update: function(app) {
    if (app.pointer.getPointingStart()) {
      if(this.myMonster.life <= 0 || this.enemy.life <= 0 ){
        console.log("死んだ");
        this.phase = "s";
        this.message = setBattleLabel(this.phase,this.myMonster,this.enemy,master);
      }else{
        this.message = setBattleLabel(this.phase,this.myMonster,this.enemy,master);
        if(this.myMonster.speed > this.enemy.speed && this.phase == "s"){
          this.phase = "m";
        }else if(this.myMonster.speed <= this.enemy.speed && this.phase == "s"){
          this.phase = "e";
        }else{
          switch (this.phase) {
            case 'e':
              this.phase = "m"
              break;
            case 'm':
              this.phase = "e"
              break;
            default:
              console.log(`eでもmでもない`);
          }
        }
      }
      this.group.children[1].text = this.message;
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
    
    charaResultSet(master, 'c000');
    // var scanBgSprite = Sprite('scanBg').addChildTo(this);
    // scanBgSprite.width *= (SCREEN_WIDTH / scanBgSprite.width);
    // scanBgSprite.height *= (SCREEN_HEIGHT / scanBgSprite.height);
    // scanBgSprite.setPosition(master.gridX.center(), master.gridY.center());
    
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