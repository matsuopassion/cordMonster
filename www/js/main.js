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
    'Adulgon':'image/monsters/Adulgon.png',
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
    'Flarered':'image/monsters/Flarered.png',
    'Fukahirade':'image/monsters/Fukahirade.png',
    'Flarered':'image/monsters/Flarered.png',
    'Genie':'image/monsters/Genie.png',
    'Giant':'image/monsters/Giant.png',
    'Golem':'image/monsters/Golem.png',
    'Hotdog':'image/monsters/Hotdog.png',
    'Hellberus':'image/monsters/Hellberus.png',
    'Ibuki':'image/monsters/Ibuki.png',
    'Ithaqua':'image/monsters/Ithaqua.png',
    'Jiriri':'image/monsters/Jiriri.png',
    'Killerblingo':'image/monsters/Killerblingo.png',
    'Kinichiro':'image/monsters/Kinichiro.png',
    'Lindwurm':'image/monsters/Lindwurm.png',
    'Lyris':'image/monsters/Lyris.png',
    'Ndanga':'image/monsters/Ndanga.png',
    'Maskednature':'image/monsters/Maskednature.png',
    'Momosuke':'image/monsters/Momosuke.png',
    'Mummy':'image/monsters/Mummy.png',
    'Pilebine':'image/monsters/Pilebine.png',
    'Pixia':'image/monsters/Pixia.png',
    'Planer':'image/monsters/Planer.png',
    'Protobine':'image/monsters/Protobine.png',
    'Queenpixia':'image/monsters/Queenpixia.png',
    'Rasyomon':'image/monsters/Rasyomon.png',
    'Ryuya':'image/monsters/Ryuya.png',
    'Ryuyasoldier':'image/monsters/Ryuyasoldier.png',
    'Ryuyaraptor':'image/monsters/Ryuyaraptor.png',
    'Salamaro':'image/monsters/Salamaro.png',
    'Sapphivern':'image/monsters/Sapphivern.png',
    'Senra':'image/monsters/Senra.png',
    'Taurusborg':'image/monsters/Taurusborg.png',
    'Unsui':'image/monsters/Unsui.png',
    'Ungyo':'image/monsters/Ungyo.png',
    'Lyris':'image/monsters/Lyris.png',
    'Vermilion':'image/monsters/Vermilion.png',
    'ViperKong':'image/monsters/ViperKong.png',
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
    'scanBg': 'image/scanBg2.jpg',
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
    'battleResultLoseBg':'image/battleResultLoseBg.jpg',
    'battleResultWinBg':'image/battleResultWinBg.jpg',
    'monsterQR':'',
    
  },
  //音楽
  sound:{
    'startBGM': 'sound/startBGM.mp3',
    'battleBGM': 'sound/battleBGM.mp3',
    'buttonPush': 'sound/buttonPush.mp3',
    'boxPageButton':'sound/boxPageButton.mp3',
    'skillUpdateButton':'sound/skillUpdateButton.mp3',
    'skillSelectButton':'sound/skillSelectButton.mp3',
    'boxSelectButton':'sound/boxSelectButton.mp3',
    'mainBGM': 'sound/mainBGM.mp3',
    'scanBGM': 'sound/scanBGM.mp3',
    'resultBGM': 'sound/resultBGM.mp3',
    'battleSelectBGM': 'sound/battleSelectBGM.mp3',
    'scanStartBGM': 'sound/scanStartBGM.mp3',
    'cosmicBeat_1': 'sound/effect/cosmicBeat_1.mp3',
    'milkyWay_1': 'sound/effect/milkyWay_1.mp3',
    'bird_1': 'sound/effect/se_bird_1.mp3',
    'bomb_1': 'sound/effect/se_bomb_1.mp3',
    'bomb_2': 'sound/effect/se_bomb_2.mp3',
    'dageki_1': 'sound/effect/se_dageki_1.mp3',
    'dageki_2': 'sound/effect/se_dageki_2.mp3',
    'dageki_3': 'sound/effect/se_dageki_3.mp3',
    'dageki_4': 'sound/effect/se_dageki_4.mp3',
    'dageki_5': 'sound/effect/se_dageki_5.mp3',
    'dageki_6': 'sound/effect/se_dageki_6.mp3',
    'dageki_7': 'sound/effect/se_dageki_7.mp3',
    'dragon_1': 'sound/effect/se_dragon_1.mp3',
    'fire_1': 'sound/effect/se_fire_1.mp3',
    'fire_2': 'sound/effect/se_fire_2.mp3',
    'flypan_1': 'sound/effect/se_flypan_1.mp3',
    'gunfire_1': 'sound/effect/se_gunfire_1.mp3',
    'gunfire_2': 'sound/effect/se_gunfire_2.mp3',
    'gunfire_3': 'sound/effect/se_gunfire_3.mp3',
    'gunfire_4': 'sound/effect/se_gunfire_4.mp3',
    'gunfire_5': 'sound/effect/se_gunfire_5.mp3',
    'iai_1': 'sound/effect/se_iai_1.mp3',
    'magic_1': 'sound/effect/se_magic_1.mp3',
    'magic_2': 'sound/effect/se_magic_2.mp3',
    'magic_3': 'sound/effect/se_magic_3.mp3',
    'magic_4': 'sound/effect/se_magic_4.mp3',
    'magic_5': 'sound/effect/se_magic_5.mp3',
    'magic_6': 'sound/effect/se_magic_6.mp3',
    'magic_7': 'sound/effect/se_magic_7.mp3',
    'rengeki_1': 'sound/effect/se_rengeki_1.mp3',
    'shuriken_1': 'sound/effect/se_shuriken_1.mp3',
    'slime_1': 'sound/effect/se_slime_1.mp3',
    'slime_2': 'sound/effect/se_slime_2.mp3',
    'special_1': 'sound/effect/se_special_1.mp3',
    'swing_1': 'sound/effect/se_swing_1.mp3',
    'swing_2': 'sound/effect/se_swing_2.mp3',
    'swing_3': 'sound/effect/se_swing_3.mp3',
    'swing_4': 'sound/effect/se_swing_4.mp3',
    'swing_5': 'sound/effect/se_swing_5.mp3',
    'swing_6': 'sound/effect/se_swing_6.mp3',
    'swing_7': 'sound/effect/se_swing_7.mp3',
    'zangeki_1': 'sound/effect/se_zangeki_1.mp3',
  }
  //効果音
};

var SCREEN_TYPE_WIDTH = screen.availWidth;
var SCREEN_TYPE_HEIGHT = screen.availHeight;

/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成

  console.log(device.platform);
  SCREEN_WIDTH = SCREEN_TYPE_WIDTH;
  SCREEN_HEIGHT = SCREEN_TYPE_HEIGHT;
  var app = GameApp({
    // Scene01 から開始
    startLabel: 'startPage',
    width: SCREEN_TYPE_WIDTH,  // 画面幅
    height: SCREEN_TYPE_HEIGHT,// 画面高さ
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
      }
    ]
  });
  // 実行
  app.run();
});
