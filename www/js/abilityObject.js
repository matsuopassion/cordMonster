var ABILITY_MASTER = {
  abilityData : [
      {
          abilityID : "normalAttack",
          abilityType : 0,
          ap : 10,
          abilityPower : 30,
          abilityName : "通常攻撃",
          abilityMessage : "は攻撃をしかけた！",
          abilitySound : ["dageki",6],
          damageCalcflag : true
      },{
          abilityID : "heavyAttack",
          abilityType : 0,
          ap : 10,
          abilityPower : 40,
          abilityName : "強打",
          abilityMessage : "は強打を放った！！",
          abilitySound : ["dageki",7],
          damageCalcflag : true
      },{

          abilityID : "bodySlam",
          abilityType : 0,
          ap : 10,
          abilityPower : 55,
          abilityName : "のしかかり",
          abilityMessage : "は大きく飛び上がって相手にのしかかった！！",
          abilitySound : ["dageki",7],
          damageCalcflag : true
      },{

          abilityID : "buchikamashi",
          abilityType : 0,
          ap : 10,
          abilityPower : 70,
          abilityName : "ぶちかまし",
          abilityMessage : "のぶちかまし！！",
          abilitySound : ["dageki",7],
          damageCalcflag : true
      },{

          abilityID : "ryujinInfernoPalm",
          abilityType : 0,
          ap : 10,
          abilityPower : 100,
          abilityName : "竜神烈火掌",
          abilityMessage : "の竜神烈火掌！！",
          abilitySound : ["fire",1],
          damageCalcflag : true
      },{

          abilityID : "lariat",
          abilityType : 0,
          ap : 10,
          abilityPower : 85,
          abilityName : "ラリアット",
          abilityMessage : "のラリアット！！",
          abilitySound : ["dageki",7],
          damageCalcflag : true
      },{
          abilityID : "screwdriver",
          abilityType : 0,
          ap : 10,
          abilityPower : 75,
          abilityName : "スクリュードライバー",
          abilityMessage : "のスクリュードライバー！！",
          abilitySound : ["dageki",7],
          damageCalcflag : true
      },{
          abilityID : "pileBunker",
          abilityType : 0,
          ap : 10,
          abilityPower : 80,
          abilityName : "パイルバンカー",
          abilityMessage : "はパイルバンカーで相手を激しく打ち付けた！！",
          abilitySound : ["gunfire",4],
          damageCalcflag : true
      },{
          abilityID : "terraBreak",
          abilityType : 0,
          ap : 10,
          abilityPower : 95,
          abilityName : "テラブレイク",
          abilityMessage : "のテラブレイク！！",
          abilitySound : ["bomb",1],
          damageCalcflag : true
      },{
          abilityID : "crossSlash",
          abilityType : 0,
          ap : 10,
          abilityPower : 55,
          abilityName : "十文字斬り",
          abilityMessage : "の十文字斬り！！",
          abilitySound : ["zangeki",1,2],
          damageCalcflag : true
      },{
          abilityID : "afterimageSlash",
          abilityType : 0,
          ap : 10,
          abilityPower : 65,
          abilityName : "残像斬り",
          abilityMessage : "の残像斬り！！",
          abilitySound : ["zangeki",1],
          damageCalcflag : true
      },{
          abilityID : "samidareSlash",
          abilityType : 0,
          ap : 10,
          abilityPower : 30,
          count : getRandomInt[2, 4],
          abilityName : "五月雨斬り",
          abilityMessage : `の五月雨斬り！！${count}回当たった！！`,
          abilitySound : ["zangeki",1],
          damageCalcflag : true
      },{
          abilityID : "ashigari",
          abilityType : 0,
          ap : 10,
          abilityPower : 100,
          abilityName : "芦刈り",
          abilityMessage : "の芦刈り！！",
          abilitySound : ["zangeki",1],
          damageCalcflag : true
      },{
          abilityID : "demonClaw",
          abilityType : 0,
          ap : 10,
          abilityPower : 120,
          abilityName : "鬼ノ爪",
          abilityMessage : "の鬼ノ爪！！",
          abilitySound : ["zangeki",1],
          damageCalcflag : true
      },{
          abilityID : "dragonTailFlap",
          abilityType : 0,
          ap : 10,
          abilityPower : 140,
          abilityName : "竜尾返し",
          abilityMessage : "の竜尾返し！！",
          abilitySound : ["zangeki",1],
          damageCalcflag : true
      },{
          abilityID : "spinningSlash",
          abilityType : 0,
          ap : 10,
          abilityPower : 30,
          count : getRandomInt[1, 3],
          abilityName : "回転切り",
          abilityMessage : `の回転切り！！${count}回転！！`,
          abilitySound : ["dageki",1],
          damageCalcflag : true
      },{
          abilityID : "hardSpiningSlash",
          abilityType : 0,
          ap : 10,
          abilityPower : 35,
          count : getRandomInt[2, 5],
          abilityName : "大回転切り",
          abilityMessage : `の大回転切り！！${count}回転！！`,
          abilitySound : ["dageki",2],
          damageCalcflag : true
      },{
          abilityID : "continuousThrust",
          abilityType : 0,
          ap : 10,
          abilityPower : 35,
          count : getRandomInt[3, 6],
          abilityName : "連続突き",
          abilityMessage : `の連続突き！！${count}回当たった！！`,
          abilitySound : ["rengeki",1],
          damageCalcflag : true
      },{
          abilityID : "continuousPunch",
          abilityType : 0,
          ap : 10,
          abilityPower : 25,
          count : getRandomInt[2, 5],
          abilityName : "連続パンチ",
          abilityMessage : `の連続パンチ！！${count}回当たった！！`,
          abilitySound : ["rengeki",1],
          damageCalcflag : true
      },{
          abilityID : "tentaclesRush",
          abilityType : 0,
          count : getRandomInt[10, 20],
          ap : 10,
          abilityPower : 7 * count,
          abilityName : "",
          abilityMessage : `の触手乱舞！！${count}回当たった！！`,
          abilitySound : ["rengeki",1],
          damageCalcflag : true
      },{
          abilityID : "kunai",
          abilityType : 0,
          ap : 10,
          abilityPower : 50,
          count : getRandomInt[1, 6],
          abilityName : "クナイ",
          abilityMessage : `のクナイ投げ！！${count}回当たった！！`,
          abilitySound : ["swing",1],
          damageCalcflag : true
      },{
          abilityID : "poisonKunai",
          abilityType : 1,
          ap : 10,
          abilityPower : 40,
          count : getRandomInt[1, 6],
          abilityName : "毒クナイ投げ",
          abilityMessage : `の毒クナイ投げ！！${count}回当たった！！`,
          abilitySound : ["swing",1],
          damageCalcflag : true
      },{
          abilityID : "tomahawk",
          abilityType : 0,
          ap : 10,
          abilityPower : 40,
          count : getRandomInt[1, 2],
          abilityName : "トマホーク",
          abilityMessage : "はトマホークを投げつけた！！",
          abilitySound : ["swing",4],
          damageCalcflag : true
      },{
          abilityID : "megahawk",
          abilityType : 0,
          ap : 10,
          abilityPower : 70,
          count : getRandomInt[1, 2],
          abilityName : "メガホーク",
          abilityMessage : "はメガホークを投げつけた！！",
          abilitySound : ["swing",4],
          damageCalcflag : true
      },{
          abilityID : "crownSplit",
          abilityType : 0,
          ap : 10,
          abilityPower : 85,
          abilityName : "脳天割り",
          abilityMessage : "の脳天割り！！",
          abilitySound : ["dageki",7],
          damageCalcflag : true
      },{
          abilityID : "bornBreak",
          abilityType : 0,
          ap : 10,
          abilityPower : 100,
          abilityName : "骨砕き",
          abilityMessage : "の骨砕き！！",
          abilitySound : ["dageki",7],
          damageCalcflag : true
      },{
          abilityID : "masakari",
          abilityType : 0,
          ap : 10,
          abilityPower : getChooseRandom[[0,0,550]],
          abilityName : "マサカリ",
          abilityMessage : "はマサカリを大きく振りかぶった！！！",
          abilitySound : ["swing",2],
          damageCalcflag : true
      },{
          abilityID : "plasmaShot",
          abilityType : 0,
          ap : 10,
          abilityPower : 75,
          abilityName : "プラズマショット",
          abilityMessage : "のプラズマショット！！",
          abilitySound : ["gunfire",5],
          damageCalcflag : true
      },{
          abilityID : "flameBullet",
          abilityType : 0,
          ap : 10,
          abilityPower : 75,
          abilityName : "フレイムバレット",
          abilityMessage : "のフレイムバレット！！",
          abilitySound : ["gunfire",2],
          damageCalcflag : true
      },{
          abilityID : "chargingShot",
          abilityType : 0,
          ap : 10,
          abilityPower : 95,
          abilityName : "チャージショット",
          abilityMessage : "のチャージショット！！",
          abilitySound : ["gunfire",4],
          damageCalcflag : true
      },{
          abilityID : "flashArrow",
          abilityType : 0,
          ap : 10,
          abilityPower : 55,
          abilityName : "フラッシュアロー",
          abilityMessage : "のフラッシュアロー！！",
          abilitySound : ["gunfire",5],
          damageCalcflag : true
      },{
          abilityID : "biting",
          abilityType : 0,
          ap : 10,
          abilityPower : 45,
          abilityName : "噛みつき",
          abilityMessage : "は噛みついた！！",
          abilitySound : ["zangeki",1],
          damageCalcflag : true
      },{
          abilityID : "crunch",
          abilityType : 0,
          ap : 10,
          abilityPower : 75,
          abilityName : "噛み砕き",
          abilityMessage : "は噛み砕いた！！",
          abilitySound : ["zangeki",1],
          damageCalcflag : true
      },{
          abilityID : "suckBlood",
          abilityType : 2,
          ap : 10,
          abilityPower : 65,
          abilityName : "吸血",
          abilityMessage : "の吸血！！",
          abilitySound : ["zangeki",1],
          damageCalcflag : true
      },{
          abilityID : "lilithCharm",
          abilityType : 4,
          ap : 10,
          abilityPower : 0,
          conditionType : "Poison",
          abilityName : "リリチャーム",
          abilityMessage : "のリリチャーム！",
          abilitySound : ["dageki",5],
          damageCalcflag : false
      },{
          abilityID : "poisonAttack",
          abilityType : 1,
          ap : 10,
          abilityPower : 25,
          conditionType : "Poison",
          abilityName : "毒攻撃",
          abilityMessage : "は毒攻撃をしかけた！！",
          abilitySound : ["dageki",5],
          damageCalcflag : true
      },{
          abilityID : "poisonNeedle",
          abilityType : 1,
          ap : 10,
          abilityPower : 35,
          conditionType : "Poison",
          abilityName : "毒針",
          abilityMessage : "の毒針！！",
          abilitySound : ["dageki",5],
          damageCalcflag : true
      },{
          abilityID : "dissolution",
          ap : 10,
          abilityPower : 65,
          abilityType : 1,
          conditionType : "highPoison",
          abilityName : "溶解液",
          abilityMessage : "は溶解液を放った！！",
          abilitySound : ["slime",2],
          damageCalcflag : true
      },{
          abilityID : "heal",
          abilityType : 3,
          ap : 10,
          abilityPower : 100,
          abilityName : "瞑想",
          abilityMessage : "の瞑想！",
          abilitySound : ["magic",2],
                    damageCalcflag : false
      },{
          abilityID : "heal",
          abilityType : 3,
          ap : 10,
          abilityPower : 9999999,
          abilityName : "明鏡止水",
          abilityMessage : "の明鏡止水！",
          abilitySound : ["magic",2],
          damageCalcflag : false
      },{
          abilityID : "regeneLight",
          abilityType : 3,
          ap : 10,
          abilityPower : 70,
          abilityName : "再生光",
          abilityMessage : "の再生光！！",
          abilitySound : ["magic",2],
          damageCalcflag : false
      },{
          abilityID : "heal",
          abilityType : 3,
          ap : 10,
          abilityPower : 50,
          abilityName : "ヒール",
          abilityMessage : "のヒール！",
          abilitySound : ["magic",2],
          damageCalcflag : false
      },{
          abilityID : "flash",
          abilityType : 1,
          conditionType : "poison",
          ap : 10,
          abilityPower : 40,
          abilityName : "フラッシュ",
          abilityMessage : "はフラッシュを放った！！",
          damageCalcflag : true
      },{
          abilityID : "magic",
          abilityType : 0,
          ap : 10,
          abilityPower : getRandomInt[30,110],
          abilityName : "おまじない",
          abilityMessage : "のおまじない！！",
          abilitySound : ["magic",5],
          damageCalcflag : true
      },{
          abilityID : "flame",
          abilityType : 0,
          ap : 10,
          abilityPower : 75,
          abilityName : "火炎放射",
          abilityMessage : "は火炎放射を放った！！",
          abilitySound : ["magic",1],
          damageCalcflag : true
      },{
          abilityID : "pyrokinesis",
          abilityType : 0,
          ap : 10,
          abilityPower : 65,
          abilityName : "パイロキネシス",
          abilityMessage : "はパイロキネシスを放った！！",
          abilitySound : ["magic",1],
          damageCalcflag : true
      },{
          abilityID : "psychokinesis",
          abilityType : 0,
          ap : 10,
          abilityPower : 75,
          abilityName : "サイコキネシス",
          abilityMessage : "はサイコキネシスを放った！！",
          abilitySound : ["magic",1],
          damageCalcflag : true
      },{
          abilityID : "bigWheel",
          abilityType : 0,
          ap : 10,
          abilityPower : 120,
          abilityName : "大車輪",
          abilityMessage : "の大車輪",
          abilitySound : ["rengeki",1],
          damageCalcflag : true
      },{
          abilityID : "nightmare",
          abilityType : 0,
          ap : 10,
          abilityPower : 120,
          abilityName : "ナイトメア",
          abilityMessage : "のナイトメア",
          abilitySound : ["dageki",1],
          damageCalcflag : true
      },{
          abilityID : "burningKick",
          abilityType : 0,
          ap : 10,
          abilityPower : 90,
          abilityName : "バーニングキック",
          abilityMessage : "のバーニングキック",
          abilitySound : ["fire",1],
          damageCalcflag : true
      },{
          abilityID : "thunderKick",
          abilityType : 0,
          ap : 10,
          abilityPower : 90,
          abilityName : "帯電キック",
          abilityMessage : "の帯電キック",
          abilitySound : ["fire",1],
          damageCalcflag : true
      },{
          abilityID : "cosmicBeat",
          abilityType : 0,
          ap : 10,
          abilityPower : 100,
          abilityName : "コズミックビート",
          abilityMessage : "のコズミックビート！！",
          abilitySound : ["cosmicBeat",1],
          damageCalcflag : true
      },{
          abilityID : "milkyWay",
          abilityType : 3,
          ap : 10,
          abilityPower : 80,
          abilityName : "ミルキーウェイ",
          abilityMessage : "のミルキーウェイ！！",
          abilitySound : ["milkyWay",1],
          damageCalcflag : true
      },{
          abilityID : "chaosDisaster",
          abilityType : 0,
          ap : 10,
          abilityPower : 190,
          abilityName : "カオスディザスター",
          abilityMessage : "のカオスディザスター！！",
          abilitySound : ["bomb",2],
          damageCalcflag : true
      },{

          abilityID : "glaring",
          abilityType : 0,
          ap : 10,
          abilityPower : 190,
          abilityName : "凝視",
          abilityMessage : "の凝視！！",
          abilitySound : ["magic",6],
          damageCalcflag : true
      },{
          abilityID : "infinity",
          abilityType : 0,
          ap : 10,
          abilityPower : 200,
          abilityName : "無限",
          abilityMessage : "の無限！！",
          abilitySound : ["magic",6],
          damageCalcflag : true
      },{
          abilityID : "madness",
          abilityType : 0,
          ap : 10,
          abilityPower : 300,
          abilityName : "狂気",
          abilityMessage : "の狂気！！",
          abilitySound : ["magic",6],
          damageCalcflag : true
      },{
          abilityID : "walkingDeath",
          abilityType : 0,
          ap : 10,
          abilityPower : 95,
          abilityName : "歩む死",
          abilityMessage : "の歩む死！！",
          abilitySound : ["magic",6],
      },{
          getRandomInt : function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min) + min);
        },
          getChooseRandom : function getChooseRandom(arrayData) {
          var arrayIndex = Math.floor(Math.random() * arrayData.length);
          return arrayData[arrayIndex];
        }
      }
    ]
  };
