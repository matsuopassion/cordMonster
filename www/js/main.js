// This is a JavaScript file
// グローバルに展開
phina.globalize();
var ASSETS = {
  // 画像
  image: {
    'startBg': 'image/startBg.png',
    'scanBg': 'image/scanBg.jpg',
    'mainBg': 'image/mainBg.jpg',
    'battleCPUBg': 'image/battleCPUBg.png',
    'battleFriendBg': 'image/battleFriendBg.png',
    'c000': 'image/000.png',
    'c001': 'image/001.png',
    'c002': 'image/002.png',
    'buttonBattle': 'image/buttonBattle.png',
    'buttonScan': 'image/buttonScan.png',
    'buttonBox': 'image/buttonBox.png',
    'buttonBack': 'image/buttonBack.png',
    'menuBar': 'image/menuBar.png',
    'scanStartButton': 'image/scanStartButton.png',
    'buttonBattleCPU': 'image/buttonBattleCPU.png',
    'buttonBattleFriend': 'image/buttonBattleFriend.png',
    'boxBg':'image/boxBg.png',
    'characterBg' : 'image/a.png',
  },
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
        className: 'battleResultPage',
        label: 'battleResultPage',
        nextLabel: 'mainPage',
      },

      {
        className: 'scanResultPage',
        calssName: 'scanResultPage',
        nextLabel:'scanPage',
      },

      {
        className: 'characterChack',
        label: 'characterChack',
        nextLabel: 'boxPage',
      },
    ]
  });
  // 実行
  app.run();
});
