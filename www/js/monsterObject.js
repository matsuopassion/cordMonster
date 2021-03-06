var MONSTER_MASTER = {
    monsterData : [
        {
            monsterID : `Aborideer` ,
            monsterFamily : `アボリディア` ,
            comment: `トナカイの戦士。\nトラップや集団戦など、頭を使った戦闘が得意。\n`,
            rarity : `C` ,
            appropriate :
             { life : `E` ,power : `E` ,shield : `G`,speed : `F` , AP : `G` },
            ability :
             [`normalAttack`,`biting`,`continuousThrust`],
            abilityLv : [ 1 ,10],
            defaultParam :
             { life : 70 ,power : 70 ,shield : 35 ,speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Adulgon` ,
            monsterFamily : `アダルゴン` ,
            comment: `少し大人になったベイビゴンの進化系。\nまだ炎は吐けないみたい。`,
            rarity : `B` ,
            appropriate :
             { life : `E` ,power : `C` ,shield : `D`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`biting`,`crunch`],
            abilityLv : [ 1 ,1, 10],
            defaultParam :
             { life : 80 ,power : 65 ,shield : 90 , speed : 100 ,AP : 10 },
            evoLine : `Undefined`,
            evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Babygon` ,
            monsterFamily : `ベイビゴン` ,
            comment: `ドラゴンの赤ちゃん。\n無限の可能性を秘めている・・？\n気がする。\n`,
            rarity : `C` ,
            appropriate :
             { life : `F` ,power : `E` ,shield : `E`,speed : `F` , AP : `G` } ,
            ability :
             [`normalAttack`,`biting`],
            abilityLv : [ 1 , 8],
            defaultParam :
             { life : 65 ,power : 60 ,shield : 30 , speed : 70 ,AP : 10 },
            evoLine : `Adulgon`,
    	      evoLv : `15`,
            basic : true
        },{
            monsterID : `Bechoime` ,
            monsterFamily : `ベチョイム` ,
            comment: `ぷるぷるした生き物。\n温厚だが油断をしていると毒液を吐き出\nすぞ！`,
            rarity : `C` ,
            appropriate :
             { life : `F` ,power : `G` ,shield : `G`,speed : `F` , AP : `G` } ,
            ability :
             [`normalAttack`,`poisonAttack`,`dissolution`],
            abilityLv : [1 ,8 ,12],
            defaultParam :
             { life : 55 ,power : 30 ,shield : 35 , speed : 45 ,AP : 10 },
            evoLine : `Bechoimeking` ,
    	      evoLv : `20`,
            basic : true
        },{
            monsterID : `Bechoimeking` ,
            monsterFamily : `ベチョキング` ,
            comment: `ぷるぷる界の王様。\n修行の果てに気品と強さを手に入れた。\n`,
            rarity : `B` ,
            appropriate :
             { life : `D` ,power : `D` ,shield : `D`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`poisonAttack`,`dissolution`,`terraBreak`],
            abilityLv : [1 ,1 ,1,10],
            defaultParam :
             { life : 65 ,power : 45 ,shield : 50 , speed : 70 ,AP : 10 },
            evoLine : `Undefined` ,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Beetletank` ,
            monsterFamily : `カブトイド` ,
            comment: `有名な昆虫をモデルに作られた自律型戦闘\n兵器。\n装甲には自信アリ。\n`,
            rarity : `B` ,
            appropriate :
             { life : `E` ,power : `D` ,shield : `C`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`bodySlam`,`plasmaShot`,`chargingShot`],
            abilityLv : [1,1,5,10],
            defaultParam :
             { life : 80 ,power : 65 ,shield : 65 , speed : 20 ,AP : 10 },
            evoLine : `Undefined` ,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Blingo` ,
            monsterFamily : `ブリンゴ` ,
            comment: `邪悪で狡猾な種族。\n高い知能を持ち、武器や防具を装備する\nことが出来る。\n`,
            rarity : `C` ,
            appropriate :
             { life : `D` ,power : `D` ,shield : `F`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`heavyAttack`,`biting`],
            abilityLv : [1, 1, 5],
            defaultParam :
             { life :65 ,power : 40 ,shield : 40 , speed : 40 ,AP : 10 },
            evoLine : `Killerblingo`,
    	      evoLv : `10`,
            basic : true
        },{
            monsterID : `Blingolord` ,
            monsterFamily : `ブリンゴロード` ,
            comment: `ブリンゴ族のリーダー。\n冷酷で残忍であり、返り討ちにされた人\n間は数知れない。\n`,
            rarity : `A` ,
            appropriate :
             { life : `C` ,power : `B` ,shield : `D`,speed : `C` , AP : `G` } ,
            ability :
             [`normalAttack`,`heavyAttack`,`spinningSlash`,`hardSpinningSlash`],
            abilityLv : [ 1 ,1 ,1 ,15],
            defaultParam :
             { life : 90 ,power : 70 ,shield : 70 , speed : 70 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Captainskull` ,
            monsterFamily : `キャプテン・スカル` ,
            comment: `宇宙海賊団スカル一味の船長！数多の小\n宇宙を股に掛ける残酷なカリスマ。\n`,
            rarity : `A`,
            appropriate :
             { life : `C` ,power : `B` ,shield : `D`,speed : `C` , AP : `G` },
            ability :
             [`normalAttack`,`tomahawk`,`bornBreak`,`chaosDisaster`],
            abilityLv : [1,1,7,20],
            defaultParam :
             { life : 70 ,power : 90 ,shield : 100 , speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Chaser` ,
            monsterFamily : `チェイサー` ,
            comment: `宇宙の凶悪犯罪を追う正義の追跡者。\nまだまだ組織じゃ新人だ！`,
            rarity : `C`,
            appropriate :
             { life : `F` ,power : `E` ,shield : `F`,speed : `D` , AP : `G` },
            ability :
             [`normalAttack`,`flash`,`plasmaShot`,`psychokinesis`],
            abilityLv : [ 1 ,1 ,7 ,15],
            defaultParam :
             { life : 50 ,power : 50 ,shield : 30 , speed : 60 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Chrysalis` ,
            monsterFamily : `トゲサリス` ,
            comment: `ツノムシの進化した姿。\n眠っているがしっかり戦えるぞ！`,
            rarity : `B` ,
            appropriate :
             { life : `E` ,power : `D` ,shield : `E`,speed : `F` , AP : `G` } ,
            ability :
             [`normalAttack`,`continuousThrust`,`heavyAttack`,`dissolution`],
            abilityLv : [1 ,1 ,1, 15],
            defaultParam :
             { life : 70 ,power : 65 ,shield : 65 , speed : 30 ,AP : 10 },
            evoLine : `Lindwurm` ,
    	      evoLv : 20,
            basic : false
        },{
            monsterID : `Cthulhu` ,
            monsterFamily : `クトゥルー` ,
            comment: `旧支配者。\nクトゥルーが再び姿を現したとき、この\n世が滅ぶという予言がある。\n`,
            rarity : `S` ,
            appropriate :
             { life : `B` ,power : `B` ,shield : `B`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`infinity`,`madness`],
            abilityLv : [ 1 ,2 ,5],
            defaultParam :
             { life : 150 ,power : 90,shield : 100 , speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Cohmon` ,
            monsterFamily : `コーモンくん` ,
            comment: `このゲームのマスコットキャラクター。\n中学生の時に新聞配達のバイトをしていた。\n足が速い。\n蟹と手羽先を食べるのが上手い。`,
            rarity : `C` ,
            appropriate :
             { life : `A` ,power : `A` ,shield : `D`,speed : `D` , AP : `A` } ,
            ability :
             [`infinity`,`madness`,`walkingDeath`,`thunderKick`],
            abilityLv : [1 ,1 ,1 ,1 ],
            defaultParam :
             { life : 500 ,power : 300,shield : 120 , speed : 120 ,AP : 1000 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Envy` ,
            monsterFamily : `エンヴィ` ,
            comment: `null`,
            rarity : `S` ,
            appropriate :
             { life : `C` ,power : `F` ,shield : `F`,speed : `F` , AP : `F` } ,
            ability :
             [`normalAttack`,`biting`,`crunch`],
            abilityLv : [1,3,5],
            defaultParam :
             { life : 100 ,power : 40 ,shield : 40 , speed : 50 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Fishman` ,
            monsterFamily : `ウオウ` ,
            comment: `陸地に打ち上げられた水生生物が、陸上\nでも生きられるように適応した。\n`,
            rarity : `C` ,
            appropriate :
             { life : `C` ,power : `G` ,shield : `F`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`biting`,`bodySlam`,`dissolution`],
            abilityLv : [ 1 ,1, 5, 8],
            defaultParam :
             { life : 80 ,power : 45 ,shield : 45 , speed : 50 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Flarered` ,
            monsterFamily : `フレアレッド` ,
            comment: `正義に燃えるアツいヒーロー！現世に蔓\n延る悪を討て！`,
            rarity : `C` ,
            appropriate :
             { life : `F` ,power : `D` ,shield : `E`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`continuousPunch`,`ryujinInfernoPalm`],
            abilityLv : [ 1 ,1 ,5],
            defaultParam :
             { life : 80 ,power : 50 ,shield : 35 , speed : 60 ,AP : 10 },
            evoLine : `Vermilion`,
            evoLv : `25`,
            basic : true
        },{
            monsterID : `Fukahirade` ,
            monsterFamily : `フカヒレイド` ,
            comment: `獲物を切り裂く水中の剣士。\nヒレも牙も全てが凶器！`,
            rarity : `B` ,
            appropriate :
             { life : `E` ,power : `C` ,shield : `D`,speed : `B` , AP : `G` } ,
            ability :
             [`normalAttack`,`heavyAttack`,`biting`],
            abilityLv : [1 ,8 ,15],
            defaultParam :
             { life : 75 ,power : 70 ,shield : 40 , speed : 90 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Genie` ,
            monsterFamily : `ランプのまじん` ,
            comment: `願いをかなえるランプの魔人のはず…だ\nが？なぜだかダラダラしている。\n`,
            rarity : `C` ,
            appropriate :
             { life : `E` ,power : `E` ,shield : `E`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`heal`,`magic`],
            abilityLv : [1,2,5],
            defaultParam :
             { life : 50 ,power : 50 ,shield : 30 , speed : 60 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Giant` ,
            monsterFamily : `ジャイアント` ,
            comment: `とある世界の巨人族、実は優しい心の持\nち主`,
            rarity : `C` ,
            appropriate :
             { life : `B` ,power : `F` ,shield : `D`,speed : `G` , AP : `G` } ,
            ability :
             [`normalAttack`,`bodySlam`,`buchikamashi`,`screwdriver`],
            abilityLv : [1,1,8,15],
            defaultParam :
             { life : 110 ,power : 40 ,shield : 30 , speed : 60 ,AP : 10 },
            evoLine : `Undefined`,
            evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Glutton` ,
            monsterFamily : `グラトン` ,
            comment: `null`,
            rarity : `S` ,
            appropriate :
             { life : `E` ,power : `E` ,shield : `F`,speed : `G` , AP : `G` } ,
            ability :
             [`normalAttack`,`biting`,`bodySlam`],
            abilityLv : [1,3,5],
            defaultParam :
             { life : 125 ,power : 50 ,shield : 35 , speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Greed` ,
            monsterFamily : `グリード` ,
            comment: `null`,
            rarity : `S`,
            appropriate :
             { life : `E` ,power : `F` ,shield : `F`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`thunderKick`,`continuousPunch`],
            abilityLv : [1,3,5],
            defaultParam :
             { life : 125 ,power : 60 ,shield : 35 , speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Golem` ,
            monsterFamily : `ゴーレム` ,
            comment: `古代の魔法で作られた巨大な人形。\n力持ちで頼りになるぞ！`,
            rarity : `B` ,
            appropriate :
             { life : `C` ,power : `C` ,shield : `C`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`heavyAttack`,`bodySlam`,`lariat`],
            abilityLv : [1 ,1,7 ,15],
            defaultParam :
             { life : 130 ,power : 70 ,shield : 70 , speed : 30 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Hellberus` ,
            monsterFamily : `ヘルべロス` ,
            comment: `血に飢えた地獄の番犬のモンスター。三\n匹は不仲らしい。`,
            rarity : `C` ,
            appropriate :
             { life : `F` ,power : `G` ,shield : `G`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`biting`,`crunch`,`demonClaw`],
            abilityLv : [ 1,1 ,9 ,24],
            defaultParam :
             { life : 70 ,power : 70 ,shield : 25 , speed : 60 ,AP : 10 },
            evoLine : `Undefined`,
            evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Hotdog` ,
            monsterFamily : `ホットドッグ` ,
            comment: `小学生に人気なアイツ。\n彼を主人公にしたアニメもある。\n`,
            rarity : `C` ,
            appropriate :
             { life : `F` ,power : `G` ,shield : `G`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`heavyAttack`,`biting`],
            abilityLv : [ 1 ,1, 8],
            defaultParam :
             { life : 60 ,power : 70 ,shield : 25 , speed : 60 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Ibuki` ,
            monsterFamily : `イブキ` ,
            comment: `ニンジュツと呼ばれる風の魔法を扱う事\nに長けた東洋の戦士。\n`,
            rarity : `C` ,
            appropriate :
             { life : `G` ,power : `C` ,shield : `G`,speed : `C` , AP : `G` } ,
            ability :
             [`normalAttack`,`kunai`,`poisonAttack`,`poisonKunai`],
            abilityLv : [ 1,1,10 ,15],
            defaultParam :
             { life : 60 ,power : 60 ,shield : 45 , speed : 50 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Ithaqua` ,
            monsterFamily : `イトハカ` ,
            comment: `旧支配者。\n「風」に乗る能力によって、宇宙を移動\nする。\n`,
            rarity : `S` ,
            appropriate :
             { life : `B` ,power : `B` ,shield : `B`,speed : `B` , AP : `G` } ,
            ability :
             [`normalAttack`,`infinity`,`walkingDeath`],
            abilityLv : [ 1 ,2 ,5],
            defaultParam :
             { life : 200 ,power : 100 ,shield : 70 , speed : 100 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Jiriri` ,
            monsterFamily : `ジリーリン` ,
            comment: `目覚まし時計に魂が宿ったモンスター。\n誰よりも早寝早起きを愛している。`,
            rarity : `C` ,
            appropriate :
             { life : `E` ,power : `F` ,shield : `F`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`bodySlam`,`regeneLight`,`poisonNeedle`],
            abilityLv : [ 1 ,1,8,14],
            defaultParam :
             { life : 80 ,power : 40 ,shield : 40 , speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
            evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Killerblingo` ,
            monsterFamily : `キラーブリンゴ` ,
            comment: `ブリンゴの中でも特に能力が高く強い個\n体。\n手下のブリンゴ達の統率を取って戦う。`,
            rarity : `B` ,
            appropriate :
             { life : `D` ,power : `D` ,shield : `D`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`heavyAttack`,`spinningSlash`],
            abilityLv : [1 ,1 ,7],
            defaultParam :
             { life : 90 ,power : 50 ,shield : 50 , speed : 50 ,AP : 10 },
            evoLine : `Blingolord`,
    	      evoLv : `15`,
            basic : false
        },{
            monsterID : `Kinichiro` ,
            monsterFamily : `キンイチロウ` ,
            comment: `生まれたときからの力持ち。\n山の中で彼のパワーに敵う動物はもういない！`,
            rarity : `B` ,
            appropriate :
             { life : `D` ,power : `C` ,shield : `C`,speed : `E` , AP : `G` },
            ability :
             [`normalAttack`,`heavyAttack`,`buchikamashi`,`masakari`],
            abilityLv : [ 1 ,1,15 ,25],
            defaultParam :
             { life : 150 ,power : 60 ,shield : 40 , speed : 10 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Lindwurm` ,
            monsterFamily : `リンドブルム` ,
            comment: `永い眠りから目覚めたツノムシの最終形\n態！もう誰も止められない！`,
            rarity : `A` ,
            appropriate :
             { life : `C` ,power : `B` ,shield : `B`,speed : `C` , AP : `G` } ,
            ability :
             [`normalAttack`,`continuousThrust`,`heavyAttack`,`terraBreak`],
            abilityLv : [1 ,1 ,1, 20],
            defaultParam :
             { life : 180 ,power : 90 ,shield : 70 , speed : 70 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Lust` ,
            monsterFamily : `ラスト` ,
            comment: `null`,
            rarity : `S`,
            appropriate :
             { life : `F` ,power : `E` ,shield : `F`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`heal`,`poisonAttack`],
            abilityLv : [1,3,5],
            defaultParam :
             { life : 65 ,power : 70 ,shield : 45 , speed : 60 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Lyris` ,
            monsterFamily : `リリ` ,
            comment: `魔界のアイドルっ！リリちゃんだよー！\n五月蠅い人間は魅了しちゃうよっ♡`,
            rarity : `A` ,
            appropriate :
             { life : `D` ,power : `C` ,shield : `E`,speed : `C` , AP : `G` } ,
            ability :
             [`normalAttack`,`suckBlood`,`lilithCharm`],
            abilityLv : [ 1 ,1,12],
            defaultParam :
             { life : 90 ,power : 60 ,shield : 50 , speed : 70 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Maskednature` ,
            monsterFamily : `マスクド・ネイチャー` ,
            comment: `今若者の間で話題沸騰中の、森を愛する\nプロレスラー。\n`,
            rarity : `B` ,
            appropriate :
             { life : `D` ,power : `D` ,shield : `C`,speed : `C` , AP : `G` } ,
            ability :
             [`normalAttack`,`continuousPunch`,`lariat`,`screwdriver`],
            abilityLv : [ 1 ,1,8 ,15],
            defaultParam :
             { life : 100 ,power : 70 ,shield : 40 , speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Momosuke` ,
            monsterFamily : `モモスケ` ,
            comment: `東洋の昔話の世界から召喚された伝説の\n剣士。\n味方の動物は付いてこなかった。\n`,
            rarity : `B` ,
            appropriate :
             { life : `D` ,power : `D` ,shield : `D`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`crossSlash`,`samidareSlash`,`ashigari`],
            abilityLv : [ 1 ,1,6 ,12],
            defaultParam :
             { life : 100 ,power : 90 ,shield : 60 , speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Mummy` ,
            monsterFamily : `ロッキー・マミー` ,
            comment: `格闘技に未練を残した男がミイラになっ\nた後に蘇った！`,
            rarity : `C`,
            appropriate :
             { life : `G` ,power : `D` ,shield : `E`,speed : `G` , AP : `G` } ,
            ability :
             [`normalAttack`,`heavyAttack`,`continuousPunch`,`ryujinInfernoPalm`],
            abilityLv : [ 1, 1, 5 , 8],
            defaultParam :
             { life : 60 ,power : 60 ,shield : 40 , speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Ndanga` ,
            monsterFamily : `ンダンガ` ,
            comment: `ンダンガがいた村では、手斧の扱いにお\nいて彼の右に出るものはおらず、次の族\n長候補だった。\n`,
            rarity : `B` ,
            appropriate :
             { life : `D` ,power : `C` ,shield : `C`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,'tomahawk','megahawk',`hardSpinningSlash`],
            abilityLv : [1 ,1 ,15],
            defaultParam :
             { life : 75 ,power : 65 ,shield : 60 , speed : 60 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Pilebine` ,
            monsterFamily : `パイルバイン` ,
            comment: `長い年月、地中に埋まっていた古代兵器。\n主人を守るために再び動き出す。\n`,
            rarity : `A` ,
            appropriate :
             { life : `C` ,power : `B` ,shield : `B`,speed : `C` , AP : `G` } ,
            ability :
             [`normalAttack`,`bornBreak`,`pileBunker`,`chargingShot`],
            abilityLv : [1 ,1 ,7,14],
            defaultParam :
             { life : 160 ,power : 130 ,shield : 50 , speed : 45 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Planer` ,
            monsterFamily : `プラネ` ,
            comment: `銀河系の向こう側まで私の歌声を届けた\nい！\n巷では天使の歌声とも称される超人気ア\nイドル。`,
            rarity : `A` ,
            appropriate :
             { life : `C` ,power : `B` ,shield : `B`,speed : `B` , AP : `G` } ,
            ability :
             [`normalAttack`,`cosmicBeat`,`milkyWay`],
            abilityLv : [1 ,1,10],
            defaultParam :
             { life : 110 ,power : 95 ,shield : 60 , speed : 85 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Pixia` ,
            monsterFamily : `ピクシア` ,
            comment: `可愛い妖精さん。\n知性と魔力が高くいたずらが好き。\n`,
            rarity : `C` ,
            appropriate :
             { life : `F` ,power : `G` ,shield : `G`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`flash`,`heal`,`plasmaShot`],
            abilityLv : [1 ,1 ,6 ,15],
            defaultParam :
             { life : 60 ,power : 60 ,shield : 30 , speed : 60 ,AP : 10 },
            evoLine : `Queenpixia` ,
    	      evoLv : `18`,
            basic : true
        },{
            monsterID : `Pride` ,
            monsterFamily : `プライド` ,
            comment: `null`,
            rarity : `S`,
            appropriate :
             { life : `D` ,power : `D` ,shield : `D`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`plasmaShot`,`pyrokinesis`],
            abilityLv : [1,3,5],
            defaultParam :
             { life : 85 ,power : 65 ,shield : 50 , speed : 60 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID: `Protobine`,
            monsterFamily: `プロトバイン`,
            comment: `古代兵器の設計図を基に作られた現代の\n戦闘兵器。まだ未完成ながら高い殲滅力を誇る。\n`,
            rarity: `B`,
            appropriate: { life: `D`, power: `C`, shield: `C`, speed: `D`, AP : `D`},
            ability: [`normalAttack`, `pileBunker`, `plasmaShot`],
            abilityLv: [1, 12, 20],
            defaultParam: { life: 150, power: 90, shield: 40, speed: 45 , AP : 10},
            evoLine: `Undefined`,
            evoLv: `Undefined`,
            basic: true
        }, {
            monsterID: `Queenpixia`,
            monsterFamily: `クイーンピクシア`,
            comment: `おらはゲームプログラマのひでき、みんな\nいっぱい遊んでくで`,
            rarity: `B`,
            appropriate: { life: `C`, power: `D`, shield: `D`, speed: `C`, AP : `B`},
            ability: [`normalAttack`,`flash`, `heal`, `flashArrow`],
            abilityLv: [1, 1, 1,15],
            defaultParam: { life: 130, power: 50, shield: 40, speed: 65 },
            evoLine: `Undefined`,
            evoLv: `Undefined`,
            basic: false
        },{
            monsterID : `Rasyomon` ,
            monsterFamily : `ラショウモン` ,
            comment: `アンデッドとなった魔物の中でも最上位\nの種族`,
            rarity : `A` ,
            appropriate :
             { life : `D` ,power : `B` ,shield : `C`,speed : `C` , AP : `G` } ,
            ability :
             [`normalAttack`,`afterimageSlash`,`nightmare`,`bigWheel`],
            abilityLv : [1,1,7,15],
            defaultParam :
             { life : 100 ,power : 130 ,shield : 80 , speed : 70 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Ryuya` ,
            monsterFamily : `ロンヤ` ,
            comment: `場違いなヤツを召喚してしまった！コイ\n`
                    +`ツはモンスターではない！！`,
            rarity : `C` ,
            appropriate :
             { life : `G` ,power : `G` ,shield : `G`,speed : `G` , AP : `G` } ,
            ability :
             [`normalAttack`,`biting`],
            abilityLv : [1 ,5],
            defaultParam :
             { life : 60 ,power : 50 ,shield : 35 , speed : 50 ,AP : 10 },
            evoLine : `Ryuyasoldier` ,
    	      evoLv : `8`,
            basic : true
        },{
            monsterID : `Ryuyasoldier` ,
            monsterFamily : `ロンヤソルジャー` ,
            comment: `弱き人間はモンスターに抵抗するために\n剣を握ってみた。\n`,
            rarity : `C` ,
            appropriate :
             { life : `F` ,power : `F` ,shield : `G`,speed : `F` , AP : `G` } ,
            ability :
             [`normalAttack`,`crossSlash`,`spinningSlash`],
            abilityLv : [1 ,1 ,6],
            defaultParam :
             { life : 70 ,power : 60 ,shield : 40 , speed : 60 ,AP : 10 },
            evoLine : `Ryuyaraptor` ,
    	      evoLv : `10`,
            basic : false
        },{
            monsterID : `Ryuyaraptor` ,
            monsterFamily : `ロンヤラプター` ,
            comment: `気付いたのだ。\n人間は力ではなく知恵と科学で高みを目\n指すべきだと。\n`,
            rarity : `B` ,
            appropriate :
             { life : `C` ,power : `C` ,shield : `D`,speed : `F` , AP : `G` } ,
            ability :
             [`normalAttack`,`plasmaShot`,`flameBullet`],
            abilityLv : [1 ,1 ,18],
            defaultParam :
             { life : 100 ,power : 70 ,shield : 50 , speed : 60 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Salamaro` ,
            monsterFamily : `サラマロ` ,
            comment: `高い身体能力を持つトカゲ族の剣豪。そ\nの剣技は人間をも凌駕する。`,
            rarity : `C` ,
            appropriate :
             { life : `E` ,power : `D` ,shield : `E`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`crossSlash`,`samidareSlash`,`dragonTailFlap`],
            abilityLv : [ 1 , 1 ,9,16],
            defaultParam :
             { life : 80 ,power : 55 ,shield : 40 , speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
            evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Sapphivern` ,
            monsterFamily : `サファイバーン` ,
            comment: `伝説の蒼い翼竜。\nその口から放たれる火炎は広野を一瞬で\n焼き尽くす。\n`,
            rarity : `A` ,
            appropriate :
             { life : `C` ,power : `C` ,shield : `C`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`biting`,`crunch`,`flame`],
            abilityLv : [1 ,1 ,7 ,15],
            defaultParam :
             { life : 130 ,power : 100 ,shield : 60 , speed : 60 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Senra` ,
            monsterFamily : `センラ` ,
            comment: `センラは昔、仏道に背いて悪事を働いた\n破戒僧が残留思念体となった姿である。\n`,
            rarity : `B` ,
            appropriate :
             { life : `D` ,power : `D` ,shield : `D`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`meditation`,`psychokinesis`],
            abilityLv : [1 ,1 ,7],
            defaultParam :
             { life : 55 ,power : 60 ,shield : 45 , speed : 55 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Sloth` ,
            monsterFamily : `スロース` ,
            comment: `null`,
            rarity : `S`,
            appropriate :
             { life : `C` ,power : `C` ,shield : `D`,speed : `F` , AP : `G` } ,
            ability :
             [`normalAttack`, `flame`, `tentaclesRush`],
            abilityLv : [1,3,5],
            defaultParam :
             { life : 80 ,power : 120 ,shield : 80 , speed : 70 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Taurusborg` ,
            monsterFamily : `タウロスボーグ` ,
            comment: `秘密の研究によって生み出された計り知\nれないパワーと知性を持つ牛のサイボー\nグ。\n`,
            rarity : `A` ,
            appropriate :
             { life : `C` ,power : `B` ,shield : `C`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`lariat`,`bornBreak`,`continuousPunch`],
            abilityLv : [1 ,1 ,8,15],
            defaultParam :
             { life : 120 ,power : 110 ,shield : 50 , speed : 50 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Ungyo` ,
            monsterFamily : `ウンギョウ` ,
            comment: `半身のみが霊体となってしまった修行僧。`,
            rarity : `B` ,
            appropriate :
             { life : `D` ,power : `D` ,shield : `D`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`poisonAttack`,`afterimageSlash`],
            abilityLv : [ 1 ,1,10],
            defaultParam :
             { life : 80 ,power : 70 ,shield : 45 , speed : 50 ,AP : 10 },
            evoLine : `Undefined`,
            evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Unsui` ,
            monsterFamily : `アンスイ` ,
            comment: `超霊媒体質であるアンスイは、その身に\n取り憑いた殺戮者の邪霊に抗う為に修行\nに身を置く。\n`,
            rarity : `B` ,
            appropriate :
             { life : `D` ,power : `D` ,shield : `D`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`meditation`,`beUnderNoIllusions`],
            abilityLv : [ 1 ,1 ,9],
            defaultParam :
             { life : 100 ,power : 100 ,shield : 60 , speed : 50 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Vermilion` ,
            monsterFamily : `ヴァーミリオン` ,
            comment: `深紅のスーツを身にまとった正義のスー\nパーヒーローヴァーミリオン！`,
            rarity : `B` ,
            appropriate :
             { life : `C` ,power : `C` ,shield : `D`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`ryujinInfernoPalm`,'burningKick'],
            abilityLv : [ 1 ,1 ,20],
            defaultParam :
             { life : 120 ,power : 70 ,shield : 55 , speed : 70 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `ViperKong` ,
            monsterFamily : `ヴァイパーコング` ,
            comment: `有毒ガスが漏れだす危険な山脈で育ち、\n適応能力を手に入れたゴリラのモンスタ\nー。`,
            rarity : `C` ,
            appropriate :
             { life : `E` ,power : `D` ,shield : `F`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`poisonAttack`,`crunch`],
            abilityLv : [ 1 ,1 ,8],
            defaultParam :
             { life : 55 ,power : 50 ,shield : 45 , speed : 50 ,AP : 10 },
            evoLine : `Undefined`,
            evoLv : `Undefined`,
            basic : true
        },{
            monsterID : `Worm` ,
            monsterFamily : `ツノムシ` ,
            comment: `大きなツノがチャームポイントのムシ。\n触ると超危険！`,
            rarity : `C` ,
            appropriate :
             { life : `F` ,power : `F` ,shield : `F`,speed : `F` , AP : `G` } ,
            ability :
             [`normalAttack`,`continuousThrust`,`heavyAttack`],
            abilityLv : [1 ,1,6 ],
            defaultParam :
             { life : 60 ,power : 60 ,shield : 50 , speed : 30 ,AP : 10 },
            evoLine : `Chrysalis`,
    	      evoLv : 10,
            basic : true
        },{
            monsterID : `Wrath` ,
            monsterFamily : `ラース` ,
            comment: `null`,
            rarity : `S`,
            appropriate :
             { life : `E` ,power : `C` ,shield : `C`,speed : `E` , AP : `G` } ,
            ability :
             [`normalAttack`,`crownSplit`,`bornBreak`],
            abilityLv : [1,3,5],
            defaultParam :
             { life : 85 ,power : 70 ,shield : 55 , speed : 40 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : false
        },{
            monsterID : `Yanchicken` ,
            monsterFamily : `メンチキ` ,
            comment: `ニワトリ界のバッドガイ！暴れることが大\n好き。`,
            rarity : `C` ,
            appropriate :
             { life : `G` ,power : `F` ,shield : `E`,speed : `D` , AP : `G` } ,
            ability :
             [`normalAttack`,`heavyAttack`,`crownSplit`,`bornBreak`],
            abilityLv : [1, 1, 6,10],
            defaultParam :
             { life : 45 ,power : 60 ,shield : 40 , speed : 50 ,AP : 10 },
            evoLine : `Undefined`,
    	      evoLv : `Undefined`,
            basic : true
        }
   ]
};