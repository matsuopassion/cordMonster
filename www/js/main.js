setMonsterMap();
setBasicMap();
setGachaList();
// This is a JavaScript file
// グローバルに展開
phina.globalize();
var ASSETS = {
  // 画像
  image: {
    //Monsters
    'Aborideer':'image/monsters/Aborideer.png',
    'Babygon':'image/monsters/Babygon.png',
    'Bechoime':'image/monsters/Bechoime.png',
    'Bechoimeking':'image/monsters/Bechoimeking.png',
    'Beetletank':'image/monsters/Beetletank.png',
    'Blingo':'image/monsters/Blingo.png',
    'Blingolord':'image/monsters/Blingolord.png',
    'Captainskull':'image/monsters/Captainskull.png',
    'Chaser':'image/monsters/Chaser.png',
    'Chrysalis':'image/monsters/Chrysalis.png',
    'Cohmon':'image/monsters/Cohmon.png',
    'Cthulhu':'image/monsters/Cthulhu.png',
    'Fishman':'image/monsters/Fishman.png',
    'Fukahirade':'image/monsters/Fukahirade.png',
    'Genie':'image/monsters/Genie.png',
    'Golem':'image/monsters/Golem.png',
    'Hotdog':'image/monsters/Hotdog.png',
    'Ibuki':'image/monsters/Ibuki.png',
    'Ithaqua':'image/monsters/Ithaqua.png',
    'Killerblingo':'image/monsters/Killerblingo.png',
    'Kinichiro':'image/monsters/Kinichiro.png',
    'Lindwurm':'image/monsters/Lindwurm.png',
    'Lyris':'image/monsters/Lyris.png',
    'Maskednature':'image/monsters/Maskednature.png',
    'Momosuke':'image/monsters/Momosuke.png',
    'Pilebine':'image/monsters/Pilebine.png',
    'Pixia':'image/monsters/Pixia.png',
    'Rasyomon':'image/monsters/Rasyomon.png',
    'Ryuya':'image/monsters/Ryuya.png',
    'Ryuyasoldier':'image/monsters/Ryuyasoldier.png',
    'Ryuyaraptor':'image/monsters/Ryuyaraptor.png',
    'Sapphivern':'image/monsters/Sapphivern.png',
    'Senra':'image/monsters/Senra.png',
    'Taurusborg':'image/monsters/Taurusborg.png',
    'Unsui':'image/monsters/Unsui.png',
    'Worm':'image/monsters/Worm.png',
    'Yanchicken':'image/monsters/Yanchicken.png',
    //enemys
    'Envy':'image/monsters/enemyMonster/Envy.png',
    'Glutton':'image/monsters/enemyMonster/Glutton.png',
    'Greed':'image/monsters/enemyMonster/Greed.png',
    'Ithaqua':'image/monsters/enemyMonster/Ithaqua.png',
    'Lust':'image/monsters/enemyMonster/Lust.png',
    'Pride':'image/monsters/enemyMonster/Pride.png',
    'Sloth':'image/monsters/enemyMonster/Sloth.png',
    'Wrath':'image/monsters/enemyMonster/Wrath.png',
    //systems
    'startBg': 'image/startBg.png',
    'startBg2': 'image/startBg2.png',
    'scanBg': 'image/scanBg.jpg',
    'mainBg': 'image/mainBg.jpg',
    'battleCPUBg': 'image/battleCPUBg.png',
    'battleFriendBg': 'image/battleFriendBg.png',
    'buttonBattle': 'image/buttonBattle.png',
    'buttonScan': 'image/buttonScan.png',
    'buttonBox': 'image/buttonBox.png',
    'buttonBack': 'image/buttonBack.png',
    'menuBar': 'image/menuBar.png',
    'scanStartButton': 'image/scanStartButton.png',
    'buttonBattleCPU': 'image/buttonBattleCPU.png',
    'buttonBattleFriend': 'image/buttonBattleFriend.png',
    'boxBg':'image/boxBg.png',
    'monsterQR':'',
  },
  //音楽
  sound:{
    'startBGM': 'sound/startBGM.mp3',
    'battleBGM': 'sound/battleBGM.mp3',
    'buttonPush': 'sound/buttonPush.mp3',
    'mainBGM': 'sound/mainBGM.mp3',
    'scanBGM': 'sound/scanBGM.mp3',
    'resultBGM': 'sound/resultBGM.mp3',
    'battleSelectBGM': 'sound/battleSelectBGM.mp3',
    'scanStartBGM': 'sound/scanStartBGM.mp3',
  }
};

// 定数
var SCREEN_WIDTH  =window.parent.screen.width; // 画面横サイズ
var SCREEN_HEIGHT = window.parent.screen.height; // 画面縦サイズ

/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    // Scene01 から開始
    startLabel: 'startPage',
    width: window.innerWidth,  // 画面幅
    height: window.innerHeight,// 画面高さ
    assets: ASSETS,
    // シーンのリストを引数で渡す
    scenes: [
      {
        className: 'startPage',
        label: 'startPage',
        nextLabel: 'mainPage',
      },

      {
        className: 'mainPage',
        label: 'mainPage',
        nextLabel: 'startPage',
      },

      {
        className: 'battlePage',
        label: 'battlePage',
        nextLabel: 'mainPage',

      },

      {
        className: 'scanPage',
        label: 'scanPage',
        nextLabel: 'mainPage',
      },

      {
        className: 'boxPage',
        label: 'boxPage',
        nextLabel: 'mainPage',
      },

      {
        className: 'battleCpuPage',
        label: 'battleCpuPage',
        nextLabel: 'battleResultPage',
      },

      {
        className: 'battleFriendPage',
        label: 'battleFriendPage',
        nextLabel: 'battleResultPage',
      },

      {
        className: 'battleResultPage',
        label: 'battleResultPage',
        nextLabel: 'mainPage',
      },

      {
        className: 'scanResultPage',
        label: 'scanResultPage',
        nextLabel:'scanPage',
      },

      {
        className: 'characterChack',
        label: 'characterChack',
        nextLabel: 'boxPage',
      },

      {
        className: 'qrSetPage',
        label: 'qrSetPage',
        nextLabel: 'battlePage',
      },
    ]
  });
  // 実行
  app.run();
});
