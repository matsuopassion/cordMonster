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

    charaSet(master,"c000",0,1);
    
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

    var boxMonster = new Array();// locaStorageから取得

    let object = {};        //オブジェクト配列生成
    let key;                //key
    let mons = [];
    let int = 0;
    let jsonMonster;
    let x = -5;
    let y = -5;
    // for(let i = 0 ; i < localStorage.length ; i++) {
    // key = localStorage.key(i);
    // let exist =  localStorage.getItem(key);
    //   if(exist != "exist"){       //existではなかったら値取り出し
    //     object[key] = localStorage.getItem(key);
    //     mons[int] = key;
    //   }
    // }

    for(let i = 0; i < localStorage.length; i++){
      key = localStorage.key(i);
      let exist =  localStorage.getItem(key);
      if(exist != "exist"){       //existではなかったら値取り出し
        object[i] = localStorage.getItem(key);
        jsonMonster = new monster(JSON.parse(object[i])); //Stringからjsonに変換
        //console.log(ID,Name,Lv,life,power,shield,speed);
        boxcharaSet(master,jsonMonster, x, y);
        if(x == 5){
          y += 5;
          x = -5;
        }else{
          x += 5;
        }
            
      }
      //let monsterstatus1 = jsonMonster.monsterID;
      // for (let k = 0; k < MONSTER_MASTER.monsterData.length; k++) {
      //     let monsterstatus2 = MONSTER_MASTER.monsterData[k]["monsterID"];
      //     if(monsterstatus1 == monsterstatus2){
            // let ID = jsonMonster.monsterID;
            // let Name = jsonMonster.monsterName;
            // let Lv = jsonMonster.Lv;
            // let life = jsonMonster.param["life"];
            // let power = jsonMonster.param["power"];
            // let shield = jsonMonster.param["shield"];
            // let speed = jsonMonster.param["speed"];
            //console.log(ID);
            // boxcharaSet(master, ID, x, y);
            // x += 2;
    }

    
    // boxcharaSet(master, 'c000', -5, -5);
    // boxcharaSet(master,'c001',-1,-5)
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
    
    battleCPUButtonSet(master);
    battleFriendButtonSet(master);
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
    this.battleResults;
    this.abilityType;
    this.message;
    this.conditionChange;
    this.group = setBattleMessage(master);
    this.group.addChildTo(master);
    this.group.children[1].text = "バトルスタート！";
    
    // 0からmax-1までの整数を返す
    function getRandomInt(max) {
    // ランダムな配列
      return Math.floor(Math.random() * Math.floor(max));
    }
    //ここにID指定でバトルテスト可能
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
    this.myMonster  = new monster(JSON.parse(localStorage.getItem(this.monsterArray[getRandomInt(25)])));
    this.enemy = new monster(JSON.parse(localStorage.getItem(this.monsterArray[getRandomInt(25)])));
    charaSet(master, this.myMonster.monsterID, -5, -5);
    charaEnemySet(master, this.enemy.monsterID, 5, -5);
    this.myMonster.ability = JSON.parse(MONSTER_MAP.get(this.myMonster.monsterID)).ability;
    this.enemy.ability = JSON.parse(MONSTER_MAP.get(this.enemy.monsterID)).ability;
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
        this.message = Battle(this.phase,this.myMonster,this.enemy,master).messageContent;
      }else{
        if(this.myMonster.param.speed > this.enemy.param.speed && this.phase == "s"){
          this.phase = "m";
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